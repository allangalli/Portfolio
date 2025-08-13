# Allan Galli Francis - Portfolio Website

A modern, responsive portfolio website showcasing Allan's work as an AI Product Manager and Senior Business Analyst. Built with Next.js and the Once UI design system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1
- **Design System**: Once UI System
- **Styling**: SCSS with CSS Modules
- **Content**: MDX for blog posts and project pages
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Static export ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── about/             # About page
│   ├── blog/              # Blog posts and routing
│   ├── gallery/           # Photo gallery
│   ├── work/              # Projects showcase
│   └── api/               # API routes (OG images, RSS)
├── components/            # Reusable UI components
│   ├── about/            # About page specific components
│   ├── blog/             # Blog related components
│   ├── gallery/          # Gallery components
│   └── work/             # Project components
├── resources/            # Configuration and content
└── utils/                # Utility functions
```

## 🎨 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Theme toggle with system preference detection
- **MDX Support**: Write content in Markdown with React components
- **Gallery**: Masonry grid photo gallery
- **Blog**: Dynamic blog with MDX posts
- **Projects**: Showcases professional work and achievements
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **RSS Feed**: Automatic RSS generation for blog posts

## 📝 Content Management

### Adding Blog Posts
Create new `.mdx` files in `src/app/blog/posts/`:

```mdx
---
title: "Your Post Title"
publishedAt: "2024-01-01"
summary: "Brief description"
---

Your content here...
```

### Adding Projects
Create new `.mdx` files in `src/app/work/projects/`:

```mdx
---
title: "Project Name"
publishedAt: "2024-01-01"
summary: "Project description"
image: "/images/projects/project-name/cover.jpg"
---

Project details...
```

### Updating Profile Information
Edit `src/resources/content.js` to update:
- Personal information
- Work experience
- Skills and education
- Social links
- Homepage content

## 🖼️ Images

Place images in the `public/images/` directory:
- `avatar.jpg` - Profile picture
- `projects/` - Project screenshots and assets
- `gallery/` - Gallery photos
- `og/` - Open Graph images

## 🔧 Configuration

### Theme Customization
Edit `src/resources/once-ui.config.js` for:
- Color schemes
- Typography settings
- Layout preferences
- Component styling

### Site Settings
Update `src/resources/content.js` for:
- Personal information
- Navigation structure
- Feature toggles
- Content sections

## 📱 Responsive Breakpoints

Defined in `src/components/breakpoints.scss`:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Static Export
```bash
npm run build
npm run export
```

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will automatically deploy on push to main

### Other Platforms
The project supports static export for deployment on:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 🔒 Environment Variables

No environment variables required for basic functionality. Optional:
- Authentication tokens for protected routes
- Analytics tracking IDs
- Newsletter service API keys

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues:
1. Open an issue
2. Submit a pull request
3. Contact Allan directly

## 📄 License

This project is for personal use. Please respect the content and code.

## 📧 Contact

**Allan Galli Francis**
- Email: allangalli15@gmail.com
- LinkedIn: [allangallifrancis](https://linkedin.com/in/allangallifrancis)
- GitHub: [allangalli](https://github.com/allangalli)

---

Built with ❤️ using Next.js and Once UI System