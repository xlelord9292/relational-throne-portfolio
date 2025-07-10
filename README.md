
# 🚀 Relational Throne Portfolio

A futuristic, open-source developer portfolio built with Next.js, Tailwind CSS, and Radix UI. Designed for creators who want a beautiful, animated, and easily customizable site.

---

![Demo Screenshot](public/placeholder.jpg)

## 🌐 Live Demo
[relational-throne.me](https://relational-throne.me)

---

## ✨ Features
- **Animated, modern UI** with gradients, particles, and smooth transitions
- **Easy config:** Edit your info, skills, projects, and avatar in `config/portfolio-config.ts`
- **Custom avatar support:** Use any image, Discord avatar, or logo
- **Project logos:** Just add images to `/public/work` and reference them in your config
- **Responsive & mobile-friendly**
- **Custom loading screen**
- **Source code button:** Can be disabled per project
- **Support for your socials & donation links**
- **Open source and ready for your brand!**

---

## �️ Quick Start

1. **Clone the repo:**
   ```sh
   git clone https://github.com/xlelord9292/relational-throne-portfolio.git
   cd relational-throne-portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   pnpm install
   ```
3. **Run the dev server:**
   ```sh
   npm run dev
   ```
4. **Edit your info:**
   - Open `config/portfolio-config.ts` and update your name, bio, skills, projects, and avatar.
   - To use a custom avatar, set `personal.avatar.url` to any image URL or `/work/yourlogo.png`.
   - To hide the avatar, set `personal.avatar.enabled` to `false`.
   - To disable the code/source button for a project, set its `github` property to `false` or remove it.
   - Add project logos to `/public/work` and reference them in your config.

---

## �️ Customization
- All main content is controlled from `config/portfolio-config.ts`.
- Add or remove skills, projects, and experience as you like.
- Change theme colors in `tailwind.config.ts`.
- Add your own images/logos to `/public/work`.
- Update the loading screen in `components/ui/loading-screen.tsx`.

---

## 💡 Tech Stack
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## ☕ Support & Community
- **Ko-fi:** [xlelords](https://ko-fi.com/xlelords)
- **Discord:** [discord.orbis-hosting.xyz](https://discord.orbis-hosting.xyz)
- **Demo:** [relational-throne.me](https://relational-throne.me)

---

## 📦 Deployment
Deploy easily to [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

## 📄 License
MIT

---

Made with ❤️ by Relational Throne and the open source community.
