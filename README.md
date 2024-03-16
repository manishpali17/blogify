# Blogging Website with Appwrite Backend

This is a blogging website project built using React for the frontend and Appwrite as the backend service. It allows users to sign up, log in, view posts, create new posts, edit their own posts, and delete their own posts.

## Table of Contents
- [Blogging Website with Appwrite Backend](#blogging-website-with-appwrite-backend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
        - [Appwrite Account Required](#appwrite-account-required)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This project serves as a platform for users to create and manage blog posts. Upon landing on the website, users are prompted to either log in or sign up. Once logged in, they are directed to the home page where they can view all posts. Users can create new posts with a title, content using the TinyMCE editor, a featured image, and set the status (active/inactive). Each post's URL is generated based on the title by converting spaces to dashes for SEO optimization.

Users have the privilege to edit or delete only the posts they have created. The project implements basic CRUD operations and user authentication using Appwrite's backend services.

## Features

- User authentication (sign up, log in, log out)
- Create, read, update, delete (CRUD) functionalities for blog posts
- Real-time content styling using TinyMCE editor
- Automatic generation of SEO-friendly post URLs (slugs)
- Differentiate between active and inactive posts
- File handling for uploading featured images

## Technologies Used

- Frontend: React
  - Redux for state management
  - React Router for navigation
  - TinyMCE for real-time content styling
- Backend: Appwrite
  - Appwrite API for user authentication and database operations
  - File management through Appwrite's file services

## Installation
##### Appwrite Account Required

1. Clone the repository: `git clone https://github.com/manishpali17/blogify`
2. Install dependencies: `npm install`
3. Make Collection in appwrite with`title, content, status, userId, featuredImage, slug` Attributes.


## Usage

1. Add values to .env.sample
2. Change .env.sample to .env
3. Start the development server: `npm run dev`
4. Access the website on `http://localhost:5167`


## Contributing

Contributions are welcome! Fork the repository, make your changes, and create a pull request.

## License

This project is licensed under the [MIT License](link-to-license).
