import type { NextConfig } from "next"

// GitHub Pages เสิร์ฟเว็บที่ https://<user>.github.io/<repo>
// ใน GitHub Actions เราจะส่ง NEXT_PUBLIC_BASE_PATH=/project-cicd เข้ามา
// ตอนรันบนเครื่อง (npm run dev) ค่านี้ว่าง เว็บจึงอยู่ที่ "/"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig: NextConfig = {
  output: "export", // build เป็น static HTML ในโฟลเดอร์ out/
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
