import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const withMdx = nextMDX({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = withMdx({
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
});

export default nextConfig;
