# System Patterns: PairSpace

## Architecture Overview

### File Structure Patterns
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page (main focus)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # shadcn/ui components
│       └── button.tsx     # Example component
└── lib/
    └── utils.ts           # Utility functions
```

### Component Architecture
- **shadcn/ui Pattern**: Pre-built, customizable components
- **Composition over Inheritance**: Using Radix UI's Slot pattern
- **Variant-based Design**: Class Variance Authority for type-safe styling
- **Import Aliases**: Clean imports with @/ prefix

### Styling Patterns

#### Component Variants
```typescript
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { /* style variants */ },
      size: { /* size variants */ }
    },
    defaultVariants: { /* defaults */ }
  }
)
```

#### Utility Function Usage
```typescript
import { cn } from "@/lib/utils"
// cn() combines classes with tailwind-merge
```

### Code Quality Patterns
- **Biome Integration**: `npm run fix` for automatic formatting
- **TypeScript Strict**: Full type safety enforcement
- **Component Props**: Extending native HTML element props

## Landing Page Strategy

### Structure Approach
1. **Hero Section**: Clear value proposition for couples
2. **Benefits Section**: Dual perspective (tenants vs landlords)
3. **How It Works**: Simple process explanation
4. **Call to Action**: Contact/consultation request

### Design Patterns
- **Mobile-First**: Responsive design from small screens up
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized for Cloudflare Edge deployment

### Content Strategy
- **Benefit-Focused**: Lead with value propositions
- **Social Proof**: Trust indicators and testimonials
- **Clear CTAs**: Obvious next steps for users

## Development Workflow
1. Component development in isolation
2. Integration with page structure
3. Responsive design verification
4. Accessibility testing
5. Performance optimization for Edge deployment
