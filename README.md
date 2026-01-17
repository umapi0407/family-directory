# Family Directory Website

A MERN stack application for viewing and managing family members. Public users can browse family members and filter by surname. Admin users can login to add, edit, and delete family member records.

## Tech Stack

- **Frontend**: React.js (Vite), Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT + bcrypt
- **Image Upload**: Cloudinary

## Project Structure

```
family-directory/
├── server/
│   ├── models/
│   │   ├── Admin.js
│   │   └── FamilyMember.js
│   ├── routes/
│   │   ├── admin.js
│   │   └── members.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── memberController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FamilyMemberCard.jsx
│   │   │   ├── SurnameFilter.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── MemberForm.jsx
│   │   │   ├── MemberList.jsx
│   │   │   └── ImageUploader.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Admin.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   └── index.html
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js and npm
- MongoDB instance
- Cloudinary account (optional, for image uploads)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   ```
   MONGODB_URI=mongodb://localhost:27017/family-directory
   JWT_SECRET=your_very_secure_secret_key_here
   PORT=5000
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with your configuration:
   ```
   VITE_API_URL=http://localhost:5000/api
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:3000`

## Features

### Public Website
- View all family members in a responsive grid
- Filter members by surname using interactive buttons
- View member details (full name, surname, date of birth, photo)
- No page reload required for filtering

### Admin Panel
- Secure login with username and password
- JWT-based authentication
- Add new family members
- Edit existing member information
- Delete members with confirmation
- Upload photos via Cloudinary or use image URLs
- Manage member list in table format

## API Endpoints

### Public Routes (No Authentication Required)
- `GET /api/members` - Get all family members
- `GET /api/members/search?surname=XYZ` - Get members by surname

### Admin Routes (JWT Required)
- `POST /api/auth/register` - Register a new admin
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/members` - Create a new member
- `PUT /api/members/:id` - Update a member
- `DELETE /api/members/:id` - Delete a member

## Security Features

- Passwords hashed with bcryptjs
- JWT-based authentication for admin routes
- Admin-only access to create/update/delete endpoints
- Public GET endpoints for viewing members
- CORS enabled for cross-origin requests

## Image Upload

The application supports two methods for adding member photos:

1. **URL Method**: Paste a direct image URL
2. **Cloudinary Upload**: Upload images directly to Cloudinary

To enable Cloudinary uploads:
1. Create a Cloudinary account at https://cloudinary.com
2. Get your Cloud Name and create an upload preset
3. Add these to your `.env.local` file

## Notes

- The application uses JavaScript only (no TypeScript)
- MongoDB stores all data persistently
- Passwords are hashed using bcryptjs with 10 salt rounds
- JWT tokens expire after 7 days
- Image files are limited to 5MB

## License

This project is open source and available under the MIT License.
