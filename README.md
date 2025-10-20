# Mini Store

โปรเจกต์ E-commerce Frontend สำหรับร้านค้าออนไลน์ขนาดเล็ก พัฒนาด้วย Next.js 15, React 19, TypeScript และ Tailwind CSS

## 🚀 Technologies

- **Next.js 15.5.6** - React Framework พร้อม Turbopack
- **React 19.1.0** - UI Library
- **TypeScript 5** - Type Safety
- **Tailwind CSS 4** - Utility-First CSS Framework
- **Lucide React** - Icon Library

## 📁 โครงสร้างโปรเจกต์

```
mini-store/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (main)/                   # Main Layout Group
│   │   │   ├── home/                 # หน้าหลัก
│   │   │   └── product/[id]/         # หน้ารายละเอียดสินค้า
│   │   ├── layout.tsx                # Root Layout
│   │   ├── not-found.tsx             # 404 Page
│   │   ├── page.tsx                  # Home Page
│   │   └── globals.css               # Global Styles
│   │
│   ├── components/                   # React Components
│   │   ├── feature/                  # Feature Components
│   │   │   ├── home/                 # Home Components
│   │   │   │   └── product.tsx
│   │   │   └── product/              # Product Components
│   │   │       └── product-detail.tsx
│   │   ├── layout/                   # Layout Components
│   │   │   ├── content/
│   │   │   ├── footer/
│   │   │   └── header/
│   │   └── shared/                   # Shared Components
│   │       ├── card/
│   │       │   ├── card.tsx
│   │       │   └── product-card.tsx
│   │       ├── button.tsx
│   │       ├── loading.tsx
│   │       └── rating.tsx
│   │
│   ├── constants/                    # Constants & Config
│   │   └── index.ts
│   │
│   ├── hook/                         # Custom Hooks
│   │   └── use-product-action.tsx
│   │
│   ├── types/                        # TypeScript Types
│   │   ├── index.ts
│   │   └── product.ts
│   │
│   └── utils/                        # Utility Functions
│       ├── index.ts
│       └── local-storage.ts
│
├── public/                           # Static Assets
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── next-env.d.ts
```

## 🛠️ Features

- ✅ หน้าแสดงรายการสินค้า (Product Listing)
- ✅ หน้ารายละเอียดสินค้า (Product Detail)
- ✅ ระบบ Rating สินค้า
- ✅ Responsive Design
- ✅ Custom Hooks สำหรับจัดการ Product Actions
- ✅ Local Storage Integration
- ✅ TypeScript Type Safety
- ✅ Reusable Components

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/chonlada12/mini-store.git

# เข้าไปในโฟลเดอร์โปรเจกต์
cd mini-store-front

# ติดตั้ง dependencies
npm install
# หรือ
yarn install
# หรือ
pnpm install
```

## 🚀 Development

```bash
# รัน development server
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev

# เปิดเบราว์เซอร์ไปที่
http://localhost:3000
```

## 🔨 Build & Production

```bash
# Build โปรเจกต์
npm run build
# หรือ
yarn build
# หรือ
pnpm build

# รัน production server
npm run start
# หรือ
yarn start
# หรือ
pnpm start
```

## 📝 Scripts

| Script | คำอธิบาย |
|--------|----------|
| `npm run dev` | รัน development server ด้วย Turbopack |
| `npm run build` | Build โปรเจกต์สำหรับ production |
| `npm run start` | รัน production server |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |

## 🎨 Component Structure

### Shared Components
- **Button** - ปุ่มที่ใช้ซ้ำได้ทั่วทั้งแอป
- **Card** - Card container สำหรับแสดงเนื้อหา
- **Product Card** - Card สำหรับแสดงสินค้า
- **Loading** - Loading state component
- **Rating** - แสดง rating ของสินค้า

### Feature Components
- **Home/Product** - Component สำหรับหน้าหลัก
- **Product/Product Detail** - Component รายละเอียดสินค้า

### Layout Components
- **Header** - Header ของเว็บไซต์
- **Footer** - Footer ของเว็บไซต์
- **Content** - Content wrapper

## 🔧 Custom Hooks

### `use-product-action.tsx`
Custom hook สำหรับจัดการ actions ที่เกี่ยวข้องกับสินค้า เช่น เพิ่มลงตะกร้า, เพิ่มลงรายการโปรด

## 💾 Utils

- **local-storage.ts** - Helper functions สำหรับจัดการ Local Storage

## 🎯 Type Definitions

ไฟล์ type definitions อยู่ใน `src/types/`:
- `index.ts` - Global types
- `product.ts` - Product related types

## 🌐 Routing

โปรเจกต์ใช้ Next.js App Router:
- `/home` - หน้าหลัก
- `/product/[id]` - หน้ารายละเอียดสินค้า

## 📱 Responsive Design

โปรเจกต์รองรับการแสดงผลบนหลากหลายอุปกรณ์:
- 📱 Mobile
- 📱 Tablet
- 💻 Desktop