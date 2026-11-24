import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatTHB, kpis } from "@/lib/mock-data"

function formatValue(value: number, format: string) {
  if (format === "currency") return formatTHB(value)
  if (format === "percent") return `${value.toFixed(2)}%`
  return value.toLocaleString("th-TH")
}

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const up = kpi.change >= 0
        return (
          <Card key={kpi.title} className="gap-4">
            <CardHeader>
              <CardDescription>{kpi.title}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{formatValue(kpi.value, kpi.format)}</CardTitle>
              <CardAction>
                <Badge variant={up ? "outline" : "secondary"}>
                  {up ? <TrendingUp /> : <TrendingDown />}
                  {up ? "+" : ""}
                  {kpi.change}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="text-muted-foreground text-sm">
              {up ? "เพิ่มขึ้น" : "ลดลง"}จากเดือนก่อน
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
