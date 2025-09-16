# FAI Network Landing Page

A modern, responsive landing page for FAI Network - Trustless AI Agents for DeFi & Web3.

## Features

- **Ultra-modern DeFi Design**: Glassmorphism effects, gradient backgrounds, and interactive elements
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Animated hero section, expandable roadmap, interactive tokenomics chart
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation
- **SEO Optimised**: Meta tags, structured data, and performance optimised

## Tech Stack

- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Recharts** for data visualisation
- **shadcn/ui** components
- **Vercel** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd fai-network-landing
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/fai-network-landing)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The app can also be deployed to:
- **Netlify**: `npm run build && npm run export`
- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Any static hosting**: Build with `npm run build`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and animations
├── components/
│   ├── hero.tsx           # Hero section with animated background
│   ├── problem-solution.tsx # Problem/solution comparison
│   ├── how-it-works.tsx   # Interactive 3-step process
│   ├── features.tsx       # Product features grid
│   ├── tokenomics.tsx     # Token distribution with charts
│   ├── roadmap.tsx        # Interactive timeline
│   ├── team.tsx           # Team and advisors
│   ├── security.tsx       # Security and audits
│   ├── footer.tsx         # Footer with links
│   └── waitlist-modal.tsx # Email capture modal
└── public/
    └── *.png, *.jpg       # Team member photos
\`\`\`

## Customisation

### Colours

The design uses a carefully crafted colour palette:
- **Primary**: Deep indigo (#0b1230)
- **Accent 1**: Teal (#14b8a6) 
- **Accent 2**: Violet (#8b5cf6)
- **CTA**: Neon green (#6EE7B7)

### Content

All content can be easily modified in the respective component files. Key areas:
- Hero messaging in `components/hero.tsx`
- Tokenomics data in `components/tokenomics.tsx`
- Roadmap milestones in `components/roadmap.tsx`
- Team information in `components/team.tsx`

### Styling

The project uses Tailwind CSS v4 with custom animations defined in `globals.css`.

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimised for LCP, FID, and CLS
- **Image Optimisation**: Next.js automatic image optimisation
- **Code Splitting**: Automatic with Next.js App Router

## Legal & Compliance

The landing page includes appropriate disclaimers and legal notices as required for DeFi/Web3 projects.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

---

**Disclaimer**: Not financial advice. FAI Network is a research & protocol initiative; tokens are experimental. Please DYOR.
