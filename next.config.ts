import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub project pages are hosted under /<repo-name>, not root.
  // Prefix app routes and static assets so deployed pages can load JS/CSS correctly.
  basePath: isGithubPages ? "/property-management-web" : "",
  assetPrefix: isGithubPages ? "/property-management-web/" : undefined,
  // Emit /route/index.html so URLs like /stitch-pages/slug resolve on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
