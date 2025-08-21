import LibraryResource from '../models/libraryModel.js';

// Get all resources with filtering, search, and pagination
export const getResources = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      type,
      search,
      difficulty,
      language,
      featured,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (type && type !== 'all') {
      filter.type = type;
    }
    
    if (difficulty) {
      filter.difficulty = difficulty;
    }
    
    if (language) {
      filter.language = { $regex: language, $options: 'i' };
    }
    
    if (featured !== undefined) {
      filter.featured = featured === 'true';
    }

    // Build search query
    if (search) {
      filter.$text = { $search: search };
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate skip value for pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query with pagination
    const resources = await LibraryResource.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    // Get total count for pagination
    const total = await LibraryResource.countDocuments(filter);

    // Calculate pagination info
    const totalPages = Math.ceil(total / parseInt(limit));
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    res.json({
      success: true,
      data: resources,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        total,
        hasNextPage,
        hasPrevPage,
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resources',
      error: error.message
    });
  }
};

// Get featured resources
export const getFeaturedResources = async (req, res) => {
  try {
    const { limit = 6 } = req.query;
    
    const featuredResources = await LibraryResource.find({ featured: true })
      .sort({ rating: -1, downloadCount: -1 })
      .limit(parseInt(limit))
      .lean();

    res.json({
      success: true,
      data: featuredResources
    });
  } catch (error) {
    console.error('Error fetching featured resources:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured resources',
      error: error.message
    });
  }
};

// Get resource by ID
export const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const resource = await LibraryResource.findById(id).lean();
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    res.json({
      success: true,
      data: resource
    });
  } catch (error) {
    console.error('Error fetching resource:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resource',
      error: error.message
    });
  }
};

// Get library statistics
export const getLibraryStats = async (req, res) => {
  try {
    const [
      totalResources,
      totalDownloads,
      avgRating,
      categoryStats,
      typeStats
    ] = await Promise.all([
      LibraryResource.countDocuments(),
      LibraryResource.aggregate([
        {
          $group: {
            _id: null,
            totalDownloads: {
              $sum: {
                $cond: {
                  if: { $isNumber: "$downloadCount" },
                  then: "$downloadCount",
                  else: {
                    $toInt: {
                      $replaceAll: {
                        input: { $ifNull: ["$downloadCount", "0"] },
                        find: "K",
                        replacement: "000"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]),
      LibraryResource.aggregate([
        {
          $group: {
            _id: null,
            avgRating: { $avg: "$rating" }
          }
        }
      ]),
      LibraryResource.aggregate([
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 }
          }
        }
      ]),
      LibraryResource.aggregate([
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 }
          }
        }
      ])
    ]);

    const stats = {
      totalResources,
      totalDownloads: totalDownloads[0]?.totalDownloads || 0,
      avgRating: Math.round((avgRating[0]?.avgRating || 0) * 10) / 10,
      categoryStats: categoryStats.reduce((acc, cat) => {
        acc[cat._id] = cat.count;
        return acc;
      }, {}),
      typeStats: typeStats.reduce((acc, type) => {
        acc[type._id] = type.count;
        return acc;
      }, {})
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching library stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch library statistics',
      error: error.message
    });
  }
};

// Search resources
export const searchResources = async (req, res) => {
  try {
    const { q, limit = 10 } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const searchResults = await LibraryResource.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .limit(parseInt(limit))
    .lean();

    res.json({
      success: true,
      data: searchResults
    });
  } catch (error) {
    console.error('Error searching resources:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search resources',
      error: error.message
    });
  }
};
