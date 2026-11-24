// ข้อมูลจำลองทั้งหมดของ dashboard — แก้ไฟล์นี้แล้ว push เพื่อดู CI/CD deploy ใหม่ได้ทันที

export const kpis = [
  { title: "ยอดขายรวม", value: 1284500, format: "currency", change: 12.4 },
  { title: "คำสั่งซื้อ", value: 3842, format: "number", change: 8.1 },
  { title: "ลูกค้าใหม่", value: 612, format: "number", change: -3.2 },
  { title: "อัตราการซื้อ", value: 3.48, format: "percent", change: 0.6 },
] as const

export const monthlyRevenue = [
  { month: "ธ.ค.", revenue: 82000, orders: 251 },
  { month: "ม.ค.", revenue: 74500, orders: 228 },
  { month: "ก.พ.", revenue: 79800, orders: 240 },
  { month: "มี.ค.", revenue: 91200, orders: 276 },
  { month: "เม.ย.", revenue: 88600, orders: 262 },
  { month: "พ.ค.", revenue: 97300, orders: 294 },
  { month: "มิ.ย.", revenue: 103900, orders: 311 },
  { month: "ก.ค.", revenue: 99400, orders: 302 },
  { month: "ส.ค.", revenue: 112700, orders: 338 },
  { month: "ก.ย.", revenue: 118300, orders: 351 },
  { month: "ต.ค.", revenue: 121600, orders: 367 },
  { month: "พ.ย.", revenue: 135200, orders: 402 },
]

export const salesByCategory = [
  { category: "เสื้อผ้า", sales: 412000 },
  { category: "รองเท้า", sales: 286500 },
  { category: "กระเป๋า", sales: 231000 },
  { category: "เครื่องประดับ", sales: 189400 },
  { category: "อื่น ๆ", sales: 165600 },
]

export type OrderStatus = "ชำระแล้ว" | "รอชำระ" | "จัดส่งแล้ว" | "ยกเลิก"

export const recentOrders: {
  id: string
  customer: string
  email: string
  amount: number
  status: OrderStatus
  date: string
}[] = [
  { id: "ORD-10482", customer: "สมชาย ใจดี", email: "somchai@example.com", amount: 2490, status: "ชำระแล้ว", date: "24 พ.ย." },
  { id: "ORD-10481", customer: "วราภรณ์ ศรีสุข", email: "waraporn@example.com", amount: 1290, status: "จัดส่งแล้ว", date: "24 พ.ย." },
  { id: "ORD-10480", customer: "ณัฐพล แก้วมณี", email: "nattapon@example.com", amount: 5870, status: "รอชำระ", date: "23 พ.ย." },
  { id: "ORD-10479", customer: "พิมพ์ชนก ทองดี", email: "pimchanok@example.com", amount: 890, status: "ชำระแล้ว", date: "23 พ.ย." },
  { id: "ORD-10478", customer: "กิตติพงษ์ บุญมา", email: "kittipong@example.com", amount: 3150, status: "ยกเลิก", date: "22 พ.ย." },
  { id: "ORD-10477", customer: "อรุณี วงศ์ใหญ่", email: "arunee@example.com", amount: 1720, status: "จัดส่งแล้ว", date: "22 พ.ย." },
]

export const formatTHB = (n: number) =>
  new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n)
