import mongoose from 'mongoose';

const libraryResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['articles', 'books', 'documents', 'infographics', 'cases', 'guides']
  },
  category: {
    type: String,
    required: true,
    enum: ['constitution', 'fundamental-rights', 'case-law', 'amendments', 'government', 'legal-guides']
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  pages: {
    type: Number
  },
  downloadCount: {
    type: String,
    default: '0'
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  language: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  tags: [{
    type: String,
    trim: true
  }],
  thumbnail: {
    type: String,
    required: true
  },
  isBookmarked: {
    type: Boolean,
    default: false
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  fileUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'Library' // Explicitly set collection name to "Library"
});

// Create indexes for better search performance
libraryResourceSchema.index({ title: 'text', description: 'text', tags: 'text' });
libraryResourceSchema.index({ category: 1, type: 1 });
libraryResourceSchema.index({ featured: 1 });

const LibraryResource = mongoose.model('LibraryResource', libraryResourceSchema, 'Library');

export default LibraryResource;
