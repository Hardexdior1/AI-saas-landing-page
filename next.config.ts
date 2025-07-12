import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "media.alohamaids.com",
      "www.shutterstock.com",
      "images.pexels.com",
      "img.freepik.com",
      "cdn.punchng.com",
      "encrypted-tbn0.gstatic.com",
      "lh3.googleusercontent.com",
      "i.redd.it",
      "images.seeklogo.com",
      "media.istockphoto.com"
    ],
  },
   rotate: {
        340: '340deg',
      },
};

export default nextConfig;
