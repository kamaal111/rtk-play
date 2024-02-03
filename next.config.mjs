/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import stylexPlugin from "@stylexjs/nextjs-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withStyleX = stylexPlugin({
  aliases: {
    "@/*": [path.join(__dirname, "*")],
  },
  rootDir: __dirname,
});

const nextConfig = {
  reactStrictMode: false,
};

export default withStyleX(nextConfig);
