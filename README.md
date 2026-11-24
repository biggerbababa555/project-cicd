# project-cicd

Dashboard (ข้อมูล mockup) สร้างด้วย **Next.js 15 + shadcn/ui** ธีมขาว-ดำ (neutral) พร้อม **CI/CD ด้วย GitHub Actions**
push โค้ดเข้า `main` เมื่อไหร่ → build ใหม่ → deploy ขึ้น **GitHub Pages** อัตโนมัติ

🔗 https://biggerbababa555.github.io/project-cicd/

## รันบนเครื่อง

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # สร้าง static site ในโฟลเดอร์ out/
```

## CI/CD ทำงานยังไง

| ไฟล์ | ทำงานเมื่อ | ทำอะไร |
|---|---|---|
| `.github/workflows/deploy.yml` | push เข้า `main` (หรือกด Run เองในแท็บ Actions) | `npm ci` → lint → typecheck → build → deploy ขึ้น GitHub Pages |
| `.github/workflows/ci.yml` | เปิด Pull Request เข้า `main` | lint → typecheck → build (ไม่ deploy) |

มุมขวาบนของเว็บจะแสดง **commit SHA + เวลา build** — หลัง push แล้วรีเฟรชหน้าเว็บ ถ้าเลข commit เปลี่ยน แปลว่า deploy ใหม่สำเร็จ

## โครงสร้าง

```
src/
  app/                  layout, page, globals.css (ธีม shadcn neutral)
  components/ui/        shadcn components (button, card, badge, table, tabs, chart, separator)
  components/dashboard/ ส่วนต่าง ๆ ของ dashboard
  lib/mock-data.ts      ข้อมูลจำลองทั้งหมด
next.config.ts          output: "export" + basePath สำหรับ GitHub Pages
```

เพิ่ม component shadcn ตัวอื่น: `npx shadcn@latest add dialog`
