export { default } from 'next-auth/middleware';

// https://next-auth.js.org/configuration/nextjs#middleware
export const config = { 
    matcher: [
      "/trips",
      "/reservations",
      "/properties",
      "/favorites"
    ]
};