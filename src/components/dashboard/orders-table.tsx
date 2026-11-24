import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatTHB, recentOrders, type OrderStatus } from "@/lib/mock-data"

const statusVariant: Record<OrderStatus, "default" | "secondary" | "outline"> = {
  ชำระแล้ว: "default",
  จัดส่งแล้ว: "secondary",
  รอชำระ: "outline",
  ยกเลิก: "outline",
}

export function OrdersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>คำสั่งซื้อล่าสุด</CardTitle>
        <CardDescription>{recentOrders.length} รายการล่าสุดจากหน้าร้านออนไลน์</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>เลขที่</TableHead>
              <TableHead>ลูกค้า</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead>วันที่</TableHead>
              <TableHead className="text-right">ยอดเงิน</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.id}</TableCell>
                <TableCell>
                  <div className="font-medium">{o.customer}</div>
                  <div className="text-muted-foreground text-xs">{o.email}</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={statusVariant[o.status]}
                    className={o.status === "ยกเลิก" ? "text-muted-foreground line-through" : undefined}
                  >
                    {o.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{o.date}</TableCell>
                <TableCell className="text-right tabular-nums">{formatTHB(o.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
