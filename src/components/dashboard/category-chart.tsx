"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { formatTHB, salesByCategory } from "@/lib/mock-data"

const chartConfig = {
  sales: { label: "ยอดขาย", color: "var(--chart-1)" },
} satisfies ChartConfig

export function CategoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ยอดขายตามหมวดหมู่</CardTitle>
        <CardDescription>12 เดือนล่าสุด</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[260px] w-full">
          <BarChart data={salesByCategory} layout="vertical" margin={{ left: 0, right: 12 }}>
            <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} width={90} />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel valueFormatter={(v) => formatTHB(Number(v))} />}
            />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
