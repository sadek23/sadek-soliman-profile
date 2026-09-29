# 🚀 Deployment Guide: GitHub & Cloudflare Pages

This guide explains how to deploy your portfolio website to **GitHub** and **Cloudflare Pages**.

---

## Method 1: Connecting Cloudflare Pages directly to GitHub (Recommended - Easiest & Automatic)

When you connect Cloudflare Pages to your GitHub repository, Cloudflare will automatically build and deploy your portfolio whenever you push new changes to GitHub!

### Step 1: Push your code to GitHub

Run the following commands in your terminal to initialize Git and push your repository to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Sadek Soliman Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sadek-soliman-profile.git
git push -u origin main
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

---

### Step 2: Set Up Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** in the left sidebar menu.
3. Click on **Create Application** → Select the **Pages** tab.
4. Click **Connect to Git**.
5. Select your **GitHub** account and choose your repository: `sadek-soliman-profile`.
6. Configure the **Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
7. Click **Save and Deploy**.

🎉 **That's it!** Cloudflare will build your static export and provide you with a live URL (e.g. `sadek-soliman-profile.pages.dev`) along with free SSL & global CDN edge hosting.

---

## Method 2: Manual Direct Upload via Wrangler CLI

If you prefer uploading directly from your terminal without connecting Git to Cloudflare:

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
2. Log in to Cloudflare:
   ```bash
   npx wrangler login
   ```
3. Build your static site:
   ```bash
   npm run build
   ```
4. Deploy the `out` directory:
   ```bash
   npx wrangler pages deploy out --project-name=sadek-soliman-profile
   ```

---

## Next.js Configuration Summary

The `next.config.mjs` file has been configured for static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
