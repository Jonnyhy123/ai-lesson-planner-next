This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### 🧭 Design Guidelines

> These guidelines should be followed by all contributors and AI tools (e.g., Cursor) when modifying or expanding the app.

---

#### 🎨 Color Palette

Use this consistent brand color palette throughout the UI. Favor minimal and soft contrast combinations, inspired by [mindbloomlearning.com](https://www.mindbloomlearning.com).

| Name        | Hex       | Description                       |
|-------------|-----------|-----------------------------------|
| Deep Teal   | `#3C909A` | Primary accent, buttons, headings |
| Soft Coral  | `#FFDEDE` | Backgrounds, highlights           |
| Black       | `#111111` | Text and core content             |
| Mint Green  | `#96E2DC` | Secondary UI accents              |
| Off White   | `#FEFBFB` | Background and layout base        |

Tailwind equivalents (where applicable) should be configured in `tailwind.config.js` using custom `extend` colors.

---

#### 💡 Styling Rules

- ✅ Use **Tailwind CSS utility classes only**.
- ❌ Do not use external CSS frameworks (e.g., Bootstrap, MUI).
- 🎯 Stick to conventional, readable layouts — no experimental or "clever" UI.
- 📱 Design must be responsive (mobile-first).
- 🧠 Prioritize clarity, accessibility, and fast interaction.
- ✨ Animations should be subtle and purposeful, not flashy.
- Use Inter as the main font

---

#### 🧪 Development Philosophy

- Build with a **production mindset** — all features should be deployable without major revision.
- Components should load fast and avoid unnecessary complexity.
- All form flows and responses should be intuitive and focused on real-world teacher use.

---

> 📌 AI Assistants (e.g., Cursor): Use these guidelines to inform styling, structure, and tone of suggestions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
