# Advocate Md. Shahadat Hossain - Professional Legal Website

A premium, responsive website built with Next.js 15 and TypeScript for Advocate Md. Shahadat Hossain, showcasing legal services and professional expertise in Bangladesh.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Components**: Smooth scrolling and hover effects
- **Professional Sections**:
  - Hero section with call-to-action buttons
  - About section with professional background
  - Services showcase with 10+ legal practice areas
  - Experience timeline
  - Contact form with office information
  - Professional footer

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **UI Components**: Headless UI

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Services.tsx
└── lib/
    └── utils.ts
```

## 🎨 Design Features

- **Color Scheme**: Professional dark slate with amber accents
- **Typography**: Modern, readable fonts with proper hierarchy
- **Animations**: Smooth page transitions and hover effects
- **Layout**: Clean grid system with proper spacing
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Updating Content
- Edit component files in `src/components/` to update content
- Modify `src/app/layout.tsx` for metadata changes
- Update contact information in `Contact.tsx` and `Footer.tsx`

### Styling
- Primary colors can be changed in Tailwind config
- Custom styles in `src/app/globals.css`
- Component-specific styles in individual component files

## 🚀 Deployment

### Deploy on Netlify
1. Push to GitHub repository
2. Connect to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`
4. Environment variables (optional):
   - `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly booking URL
   - `NEXT_PUBLIC_DISCORD_WEBHOOK_URL`: Discord webhook for notifications

### Build for Production
```bash
npm run build
```

### Local Development
```bash
npm run dev
```

## 📞 Contact Information

For website-related inquiries or customization requests, please contact the developer.

## 📝 License

This project is created specifically for Advocate Md. Shahadat Hossain. All rights reserved.

---

*Built with ❤️ using Next.js and TypeScript*
