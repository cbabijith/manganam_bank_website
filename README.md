# Manganam Bank Website

A modern, static banking website built with Next.js 16, TypeScript, and Tailwind CSS following a 5-layer architecture pattern.

## 🏗️ Architecture

This project follows a strict 5-layer architecture:

1. **Presentation Layer** (`src/layers/presentation/`)
   - UI components and sections
   - Page layouts
   - User interface elements

2. **Application Layer** (`src/layers/application/`)
   - Business use cases
   - Application services
   - Orchestration logic

3. **Domain Layer** (`src/layers/domain/`)
   - Business entities
   - Domain models
   - Business rules

4. **Infrastructure Layer** (`src/layers/infrastructure/`)
   - SEO utilities
   - External service implementations
   - Cross-cutting concerns

5. **Data Layer** (`src/layers/data/`)
   - Data repositories
   - Data access logic
   - Data transformations

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static Site Generation** (SSG) for optimal performance
- **SEO Optimized** with proper meta tags, Open Graph, and Twitter cards
- **Responsive Design** for all devices
- **5-Layer Architecture** for maintainable code

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📤 Export Static Site

```bash
npm run export
```

This will generate a static site in the `out` directory.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── layers/                # 5-layer architecture
│   ├── presentation/      # UI components
│   ├── application/       # Application services
│   ├── domain/           # Domain entities
│   ├── infrastructure/   # Infrastructure (SEO, etc.)
│   └── data/             # Data repositories
└── ...
```

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social media
- Twitter Card support
- Canonical URLs
- Robots.txt configuration
- Structured data (JSON-LD) support
- Mobile-friendly meta tags

## 🎨 Pages

- **Home** (`/`) - Landing page with hero, features, and about sections
- **Services** (`/services`) - Detailed information about banking services
- **About** (`/about`) - Company history, mission, and values
- **Contact** (`/contact`) - Contact form and information

## 🌐 Deployment

This site is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 Environment Variables

No environment variables are required for this static website.

## 🧪 Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

For questions or support, please contact the development team.
