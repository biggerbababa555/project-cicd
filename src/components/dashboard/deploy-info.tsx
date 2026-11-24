import { GitCommitHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"

// ค่าเหล่านี้ถูกฝังตอน build โดย GitHub Actions
// ทุกครั้งที่ push แล้ว deploy ใหม่ commit/เวลาจะเปลี่ยน ใช้เช็คว่าเว็บเป็นเวอร์ชันล่าสุดหรือยัง
const sha = process.env.NEXT_PUBLIC_COMMIT_SHA?.slice(0, 7) || "local"
const builtAt = process.env.NEXT_PUBLIC_BUILD_TIME

export function DeployInfo() {
  const time = builtAt
    ? new Date(builtAt).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Bangkok" })
    : "dev"

  return (
    <Badge variant="outline" className="h-7 gap-1.5 px-2.5 font-normal" title="เวอร์ชันที่ deploy อยู่">
      <GitCommitHorizontal />
      <span className="font-mono">{sha}</span>
      <span className="text-muted-foreground hidden sm:inline">· {time}</span>
    </Badge>
  )
}
