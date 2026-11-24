import { BarChart3, LayoutDashboard, Package, Settings, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const nav = [
  { label: "ภาพรวม", icon: LayoutDashboard, active: true },
  { label: "คำสั่งซื้อ", icon: ShoppingCart },
  { label: "สินค้า", icon: Package },
  { label: "ลูกค้า", icon: Users },
  { label: "รายงาน", icon: BarChart3 },
]

export function Sidebar() {
  return (
    <aside className="bg-sidebar text-sidebar-foreground hidden w-60 shrink-0 flex-col border-r md:flex">
      <div className="flex h-14 items-center gap-2 px-5">
        <div className="bg-primary text-primary-foreground grid size-7 place-items-center rounded-md text-sm font-bold">
          P
        </div>
        <span className="font-semibold">Project CI/CD</span>
      </div>
      <Separator />
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {nav.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className="justify-start"
            aria-current={item.active ? "page" : undefined}
          >
            <item.icon />
            {item.label}
          </Button>
        ))}
      </nav>
      <Separator />
      <div className="p-3">
        <Button variant="ghost" className="w-full justify-start">
          <Settings />
          ตั้งค่า
        </Button>
      </div>
    </aside>
  )
}
