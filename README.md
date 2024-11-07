
# Meeting Room Booking Application

![License](https://img.shields.io/badge/license-MIT-green)

## Description
This is a booking Web application for meeting rooms built using **Next.js**, **appWrite** for database, authentication and file storage, and **Tailwind CSS** for styling, 

## Features

- **Available rooms.**
- **User authentication.**
- **Book a room.**
- **SEO:** includes metadata and Search Engine Optimization features.

## [Live Demo](https://booking-meeting-room-nine.vercel.app)

![img2](https://github.com/user-attachments/assets/c29284e1-4119-400e-a3b3-af7377f1d8ff)


## What you need to run this code
<ul>
  <li>Node (18.16.1)</li>
  <li>NPM (9.7.4) or Yarn (1.22.4)</li>
  <li>AppWrite account</li>
  <li>Twilio account</li>
</ul>

## How to run this code

1. Clone this repository
2. Install dependencies:
   ```
   npm run dev
   # or
   yarn dev
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root of the project and add the following environment variables:
```
NEXT_APPWRITE_KEY=Your-appwrite-key
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=Your-public-appwrite-project
NEXT_PUBLIC_APPWRITE_DATABASE=Your-public-appwrite-database
NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=Your-appwrite-collection-rooms
NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=Your-appwrite-collection-bookings
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_AVATARS=Your-appwrite-storage-bucket-avatars
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=Your-appwrite-storage-bucket-rooms
NEXT_PUBLIC_URL=http://localhost:3000
```
4. Run the development server:
  ```
   npm run dev
   # or
   yarn dev
   ```
Open http://localhost:3000 to view the application.

## Technologies Used
- **Next.js**: a React framework for building fast web applications.
- **Tailwind CSS**: an utility-first CSS framework for styling.
- **AppWrite**: backend-as-a-service for file storage and authentification.
  
## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## License
This project is open-sourced under the MIT license.
## Contact
For any queries or suggestions, feel free to reach me out at ghzaielrania@gmail.com

