![Portfolio Template Banner](https://via.placeholder.com/1200x400/3B82F6/FFFFFF?text=Modern+Portfolio+Template)

# 🚀 Relational Throne Portfolio Template

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, fully customizable portfolio template built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for developers, designers, and freelancers who want a professional online presence.**

[🌟 Live Demo](https://relational-throne-portfolio.vercel.app) • [📖 Documentation](#documentation) • [🎨 Customize](#customization) • [🚀 Deploy](#deployment)

</div>

---

## ✨ Features

### 🎨 **Fully Customizable**
- **YAML Configuration**: Edit `public/config.yml` to customize everything
- **Enable/Disable Sections**: Toggle any section on or off
- **Social Media Control**: Individual toggles for each platform
- **Theme Customization**: Built-in dark/light mode with custom colors


- **4 Skill Animation Styles**: Choose from `stagger`, `wave`, `bounce`, or `fade`
- **Framer Motion**: Smooth, professional animations throughout
- **Scroll Triggers**: Animations activate when sections come into view
- **Interactive Hovers**: Engaging micro-interactions
### 📱 **Modern Design**
- **Fully Responsive**: Looks perfect on all devices
- **Node.js 18+**: Compatible with latest Node.js versions
## 🚀 Quick Start

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/xlelord9292/relational-throne-portfolio.git
cd relational-throne-portfolio
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
# or
\`\`\`

Edit `public/config.yml` with your information:

# Personal Information
  name: "Your Name"
  email: "your.email@example.com"
# Enable/disable social media
social:
    enabled: true
    url: "https://github.com/yourusername"

about:
  skills:
    animation_style: "wave"  # Options: stagger, wave, bounce, fade
\`\`\`

Replace placeholder images in the `public/images/` directory:
- `avatar.png` - Your profile picture
### 5. Run Development Server
npm run dev
\`\`\`
## 📁 Project Structure
\`\`\`
relational-throne-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── page.tsx          # Home page
│   └── projects/         # All projects page
├── components/           # React components
│   ├── sections/        # Page sections
│   ├── layout/          # Header, footer
│   └── ui/              # UI components
├── lib/                 # Utilities
├── public/              # Static assets
│   ├── config.yml       # Main configuration
│   └── images/          # Your images
└── README.md
\`\`\`

## 🎛️ Configuration Options

### Section Controls
\`\`\`yaml
# Enable/disable entire sections
hero:
  enabled: true
about:
  enabled: true
projects:
  enabled: true
services:
  enabled: true
experience:
  enabled: true
testimonials:
  enabled: false  # Hide testimonials section
contact:
  enabled: true
\`\`\`

### Social Media
\`\`\`yaml
social:
  github:
    enabled: true
    url: "https://github.com/yourusername"
  linkedin:
    enabled: true
    url: "https://linkedin.com/in/yourusername"
  discord:
    enabled: true
    username: "yourdiscord"
  twitter:
    enabled: false  # Disable Twitter
  youtube:
    enabled: true
    url: "https://youtube.com/@yourchannel"
\`\`\`

### Skill Animations
\`\`\`yaml
about:
  skills:
    animation_style: "wave"  # Choose your style
    items:
      - "React & Next.js"
      - "TypeScript"
      - "Node.js"
\`\`\`

**Animation Styles:**
- `stagger`: Sequential fade-in with scaling
- `wave`: Expanding circles with spring physics
- `bounce`: Bouncy entrance from above
- `fade`: Simple fade-in effect

## 📦 Custom CDN System

### Endpoints
- **Upload file:** `POST /api/cdn/upload` (admin only)
- **List files:** `GET /api/cdn/list` (admin only)
- **Delete file:** `POST /api/cdn/delete` (admin only)
- **Access files:** `/cdn/[filename]` (public)

### Admin Area
- Set a strong password in `public/config.yml` under `cdn_password`.
- All admin endpoints require the password in the `x-cdn-password` header.
- You can upload images/files, get permanent links, and delete files securely.
- Example password: use a long random string (e.g., from a password manager).

### Security
- Only users with the password can upload/delete/list files.
- Uploaded files are served from `/cdn/` and never expire unless deleted.
- Always use HTTPS and a strong password for production.

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` or use CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* Add your custom colors */
}
\`\`\`

### Adding New Sections
1. Create component in `components/sections/`
2. Add to `app/page.tsx`
3. Add configuration to `public/config.yml`
4. Update TypeScript types in `lib/config.ts`

## 📱 Pages

- **Home** (`/`) - Main portfolio page with all sections
- **All Projects** (`/projects`) - Dedicated page showing all projects
- **Dynamic routing** - Easy to add blog, case studies, etc.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 🛠️ Development

### Available Scripts
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
\`\`\`

### Requirements
- Node.js 18+ 
- npm, yarn, or pnpm

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via the portfolio contact form
- Join our Discord community

---

**Made with ❤️ by [Relational Throne](https://github.com/xlelord9292)**

⭐ Star this repo if you found it helpful!
