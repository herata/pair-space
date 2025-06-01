# Tech Context: PairSpace

## Technology Stack

### Framework & Runtime
- **Next.js 15**: Latest version with App Router
- **React 19**: Latest React with new features
- **TypeScript 5**: Full type safety throughout application
- **Cloudflare Workers**: Edge deployment via OpenNext

### UI & Styling
- **shadcn/ui**: Component library with "new-york" style variant
- **Tailwind CSS 4**: Utility-first CSS framework (latest major version)
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Biome**: Fast formatter and linter replacing ESLint/Prettier
- **Turbopack**: Next.js dev server for fast development
- **Wrangler**: Cloudflare Workers CLI for deployment

### Architecture Decisions

#### Component Strategy
- Using shadcn/ui "new-york" variant for clean, modern aesthetic
- Leveraging Radix UI primitives for accessibility
- Class Variance Authority for type-safe component variants

#### Deployment Strategy
- OpenNext for Cloudflare Workers compatibility
- Edge deployment for global performance
- Serverless architecture for cost efficiency

#### Styling Approach
- Tailwind CSS 4 for modern utility classes
- CSS variables for theming support
- Responsive-first design principles

## Development Environment
- **Package Manager**: npm (based on package-lock presence)
- **Node.js**: Version 20+ recommended
- **Development Server**: Next.js with Turbopack for fast iteration

## Key Dependencies
- `@opennextjs/cloudflare`: Cloudflare Workers adapter
- `class-variance-authority`: Type-safe variant management
- `tailwind-merge`: Conditional class merging
- `@radix-ui/react-slot`: Component composition utility

## Configuration Files
- `components.json`: shadcn/ui configuration
- `wrangler.jsonc`: Cloudflare Workers configuration
- `open-next.config.ts`: OpenNext build configuration
- `biome.json`: Code formatting and linting rules
