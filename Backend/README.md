# Constitution App Backend

## Overview
Backend API for the Constitution App with user management, chatbot integration, and library resources.

## Features
- User authentication and management
- Chatbot API integration
- Library resources management with MongoDB
- RESTful API endpoints

## Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with your MongoDB URI:
   ```env
   MONGO_URI=mongodb+srv://vedant:vedant@cluster0.id8jl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   ```

3. Seed the database with sample library data:
   ```bash
   npm run seed
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Library API (`/api/library`)

#### Get All Resources
```
GET /api/library/resources
```
Query parameters:
- `page` (default: 1) - Page number for pagination
- `limit` (default: 20) - Number of resources per page
- `category` - Filter by category (constitution, fundamental-rights, case-law, etc.)
- `type` - Filter by type (articles, books, documents, etc.)
- `search` - Search in title, description, and tags
- `difficulty` - Filter by difficulty level
- `language` - Filter by language
- `featured` - Filter featured resources (true/false)
- `sortBy` - Sort field (default: createdAt)
- `sortOrder` - Sort order (asc/desc, default: desc)

#### Get Featured Resources
```
GET /api/library/featured?limit=6
```

#### Get Resource by ID
```
GET /api/library/resources/:id
```

#### Get Library Statistics
```
GET /api/library/stats
```

#### Search Resources
```
GET /api/library/search?q=search_term&limit=10
```

### User API (`/api/users`)
- User registration and authentication endpoints

### Chatbot API (`/api/chatbot`)
- Chatbot integration endpoints

## Database Models

### LibraryResource
- `title` - Resource title
- `description` - Resource description
- `type` - Resource type (articles, books, documents, infographics, cases, guides)
- `category` - Resource category (constitution, fundamental-rights, case-law, amendments, government, legal-guides)
- `author` - Resource author
- `publishedDate` - Publication date
- `pages` - Number of pages (optional)
- `downloadCount` - Download count
- `rating` - User rating (0-5)
- `language` - Available languages
- `difficulty` - Difficulty level (Beginner, Intermediate, Advanced)
- `tags` - Array of tags
- `thumbnail` - Thumbnail image URL
- `isBookmarked` - Bookmark status
- `isPremium` - Premium content flag
- `featured` - Featured resource flag
- `fileUrl` - File download URL (optional)

## Development

### Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

### Environment Variables
- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)

## Database Indexes
- Text search index on title, description, and tags
- Compound index on category and type
- Index on featured flag for better performance