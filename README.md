# Luxor Virtual Arcade - Landing Page

Animated landing page for Luxor Virtual Arcade with lead capture form and game showcase.

## Features

- 🎰 **Animated Hero Section** - Floating coins, gradient color transitions
- 📝 **Lead Capture Form** - Full validation (name, phone, email, DOB, state)
- ✅ **Success Screen** - "We'll text you in 10 minutes" workflow
- 🎮 **Games Showcase** - Royal Reels, Dragon Slots, Fish Tables, Diamond Lotto
- 📱 **Mobile Responsive** - Optimized for all devices
- 🎨 **Brand Colors** - Gold (#D4AF37, #FFD700), Hot Pink (#FF1493), Black, Purple gradients

## Tech Stack

- **Next.js 16.1.6** (App Router, TypeScript)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jarvbot1/luxor-virtual-arcade.git
cd luxor-virtual-arcade

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub (already done!)
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import `Jarvbot1/luxor-virtual-arcade`
5. Click "Deploy" (no configuration needed)
6. Your site will be live in ~2 minutes!

### Environment Variables

For form submission integration:

```env
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=your_zapier_webhook_url
```

## Form Integration

The form currently logs to console. To integrate with Google Sheets:

1. Create a Zapier account
2. Set up a webhook trigger
3. Connect to Google Sheets
4. Add webhook URL to form submission in `app/page.tsx` line 33

## Brand Assets

All brand images are included in `/public/`:
- `luxor-hero.jpg` - Main promotional graphic
- `luxor-logo-main.jpg` - Logo
- `slot-machine-*.jpg` - Game machine photos
- `royal-reels-promo.jpg` - Game promotional images
- `diamond-lotto-promo.jpg` - Lotto promotional image

## Customization

### Update Colors

Edit Tailwind config or inline styles:
- Gold: `#D4AF37` → `#FFD700`
- Pink: `#FF1493`
- Purple gradients: `from-purple-900 to-black`

### Update Copy

Edit `app/page.tsx`:
- Hero headlines (line 73-85)
- Benefits list (line 96-105)
- Games showcase (line 263-267)
- Social proof (line 298-309)

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main landing page component
├── public/               # Static assets (images)
├── package.json          # Dependencies
└── README.md            # This file
```

## License

Private - Nixar Solutions © 2026

## Support

For questions or issues, contact Nixar Solutions.
