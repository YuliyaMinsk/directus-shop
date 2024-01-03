# Directus Shop

## Overview

Directus Shop is a simple application designed to showcase the integration of modern web technologies including Next.js 14 with TypeScript, Tailwind CSS, and TanStack Query. It serves as a testing ground for these tools in a practical e-commerce context.

## Technologies

- **Next.js 14**: A powerful React framework for server-side rendering.
- **TypeScript**: Enhanced JavaScript with type safety.
- **Tailwind CSS**: A utility-first CSS framework.
- **TanStack Query**: A set of tools for efficient data synchronization.

## Setup

1. Clone the repository:
   `git clone https://github.com/YuliyaMinsk/directus-shop.git`

2. Install dependencies:
   `npm install`

3. Install Docker on your machine

4. Run `docker-compose.yml` with specified configurations including Directus image, ports, volumes, and environment settings. This configuration includes setting up an admin email and password, database client, and other necessary environment variables using the command
   `docker compose up`

5. Access Directus at `http://localhost:8055` or `http://127.0.0.1:8055`

6. Run the frontend part of app:
   `npm run dev`
