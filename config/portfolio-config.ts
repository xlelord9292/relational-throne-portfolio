export const portfolioConfig = {

  personal: {
    name: "Relational Throne",
    title: "Full Stack Developer & Open Source Creator",
    bio: "Passionate developer creating innovative solutions and contributing to open source. Specializing in modern web technologies, backend systems, and automation tools.",
    email: "relational@sdevs.org",
    location: "West Virginia, United States",
    avatar: {
      enabled: true, 
      url: "https://i.postimg.cc/ZndQxHWc/6456-juice-wrld-5.jpg", 
      alt: "Relational Throne Avatar" 
    },
  },


  social: {
    github: "https://github.com/xlelord9292",
    discord: "https://discord.orbis-hosting.xyz",
    linkedin: "https://linkedin.com/in/relationalthrone",
    twitter: "https://x.com/relationalhost",
  },


  skills: [
    { name: "JavaScript", level: 75, color: "#FFD600", category: "Language" },
    { name: "React", level: 50, color: "#00D8FF", category: "Framework" },
    { name: "HTML/CSS", level: 50, color: "#FF5722", category: "Frontend" },
    { name: "Go", level: 15, color: "#00ADD8", category: "Language" },
    { name: "Lua", level: 25, color: "#2C2D72", category: "Language" },
    { name: "Vite", level: 5, color: "#646CFF", category: "Tool" },
    { name: "Node.js", level: 60, color: "#3C873A", category: "Runtime" },
    { name: "Git", level: 70, color: "#F14E32", category: "Tool" },
  ],


  projects: [
    {
      id: 1,
      title: "Orbis Hosting",
      description:
        "A comprehensive VPS hosting provider platform currently under development. Features automated provisioning, resource management, and customer portal.",
      image: "https://i.postimg.cc/7h6cJDkp/orbis-old-logo.webp?height=300&width=500",
      tags: ["Go", "JavaScript", "Proxmox", "Linux"],
      github: false, // Set to false or undefined to disable code button
      live: "https://orbis-hosting.xyz",
      featured: true,
      status: "In Development",
    },
    {
      id: 2,
      title: "Cyber Hypnotic",
      description:
        "Advanced Discord bot with multiple features including moderation, automation, entertainment, and utility commands. Built for scalability and performance.",
      image: "https://i.postimg.cc/ncN5r6wP/cyber.webp?height=300&width=500",
      tags: ["JavaScript", "Discord.js", "Node.js", "MongoDB"],
      github: "https://github.com/xlelord9292/cyber-hypnotic",
      live: "https://discord.com/invite/cyberhypnotic",
      featured: true,
      status: "Active",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and advanced animations. Features real-time Discord integration and optimized performance.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      github: "https://github.com/xlelord9292/relational-throne-portfolio",
      live: "https://relationalthrone.dev",
      featured: false,
      status: "Complete",
    },
  ],

  // Experience
  experience: [
    {
      company: "Open Source Contributor",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      description:
        "Contributing to various open source projects and maintaining personal repositories. Focus on web development and automation tools.",
    },
    {
      company: "Freelance Developer",
      position: "Web Developer",
      duration: "2022 - Present",
      description:
        "Building custom web applications and Discord bots for clients. Specializing in modern JavaScript frameworks and backend development.",
    },
  ],
}
