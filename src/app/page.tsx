import { CategoryChart } from "@/components/dashboard/category-chart"
import { DeployInfo } from "@/components/dashboard/deploy-info"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { OrdersTable } from "@/components/dashboard/orders-table"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { Sidebar } from "@/components/dashboard/sidebar"
import { ThemeToggle } from "@/components/dashboard/theme-toggle"

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="bg-background/95 sticky top-0 z-10 flex h-14 items-center gap-3 border-b px-4 backdrop-blur md:px-6">
          <h1 className="truncate text-base font-semibold">ภาพรวมร้านค้า</h1>
          <div className="ml-auto flex items-center gap-2">
            <DeployInfo />
            <ThemeToggle />
          </div>
        </header>
        <main className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
          <KpiCards />
          <div className="grid gap-4 md:gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RevenueChart />
            </div>
            <div className="lg:col-span-2">
              <CategoryChart />
            </div>
          </div>
          <OrdersTable />
        </main>
      </div>
    </div>
  )
}
