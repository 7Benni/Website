## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to GitHub Pages

This site is configured to deploy to **GitHub Pages** automatically via GitHub Actions.

### One-time Setup (GitHub)

1. Go to your repository on GitHub: **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will handle the rest

### How It Works

- Every push to the `master` branch triggers the workflow
- The workflow builds the Next.js site as a **static export** (`output: 'export'`)
- The `NEXT_PUBLIC_BASE_PATH=/Website` environment variable sets the correct base path for project pages
- The built files in `./out` are uploaded as a GitHub Pages artifact and deployed

### Local Preview of Production Build

```bash
npm run build
npx serve@latest out
```

### Manual Deployment

You can also trigger a deployment manually from the **Actions** tab in your GitHub repository — select the "Deploy to GitHub Pages" workflow and click **Run workflow**.

## Project Structure

```
├── app/
│   ├── contact/         # Contact page with email & social links
│   ├── gallery/         # Gallery page with masonry layout
│   ├── gear/           # Equipment/gear page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with navbar and footer
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Sticky navigation
├── data/
│   ├── gallery.ts      # Mock gallery images
│   └── gear.ts         # Gear/equipment list
├── types/
│   └── index.ts        # TypeScript interfaces
├── .github/workflows/
│   └── deploy.yml      # GitHub Pages deployment workflow
└── public/             # Static assets
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Geist Font** - Modern, clean typography

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - The deployment workflow will automatically trigger

3. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

The workflow automatically builds and deploys whenever you push to the `main` branch.

### Custom Domain (Optional)

If you have a custom domain:
1. Add a `CNAME` file to the `public/` folder with your domain name:
   ```
   example.com
   ```
2. Configure DNS settings with your domain provider to point to GitHub Pages

## Customization

### Update Gallery Images

Edit [data/gallery.ts](data/gallery.ts) to curate the hand-picked gallery images shown on the site.

### Update Gear List

Edit [data/gear.ts](data/gear.ts) to customize your equipment list with cameras, lenses, drones, and accessories.

### Modify Theme

Update colors and styles in:
- [app/globals.css](app/globals.css) - Global CSS variables
- [tailwind.config.ts](tailwind.config.ts) - Tailwind configuration

### Social Links

Update social media links in [data/contact.ts](data/contact.ts).

### Contact Information

Update contact details in [data/contact.ts](data/contact.ts) and [app/contact/page.tsx](app/contact/page.tsx).

## License

MIT
