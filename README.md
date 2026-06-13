# Trigona Bee Honey Website (Kelulut Honey)

A premium, responsive single-page landing website designed to sell pure, organic Trigona (Kelulut) stingless bee honey harvested from a local family orchard in Malaysia.

**Live Demo URL:** [https://marinimansor.github.io/trigona-honey-website/](https://marinimansor.github.io/trigona-honey-website/)
**Official Custom Domain:** `trigonabeehoney.malaysia.com`

---

## Features

- 🐝 **Stingless Bee Branding:** Visual assets and styling customized to Trigona bee behaviors (featuring propolis honey pots instead of traditional honeycomb).
- 🧬 **Scientific Health Benefits:** Highlights the health advantages of Kelulut honey (e.g., 4-10x antioxidants, propolis antibacterial properties, low glycemic index, prebiotic support).
- 📱 **WhatsApp Order Integration:** Buy buttons redirect to WhatsApp pre-filled with the message: `"hello, i want to purchase honey"` directly opening a chat with Marini (`+601111603164`).
- 🔳 **QR Code Contact Widget:** Displays a clean, cropped QR code extracted from the WhatsApp contact card so mobile users can scan and connect instantly.
- 📋 **Copy-to-Clipboard Phone:** Click-to-copy phone number button with dynamic, animated visual feedback ("Copied!").
- 🔍 **Image Lightbox Viewer:** Fully accessible modal allowing users to zoom in and view high-resolution photographs of the honey jars, bottles, and hive harvesting.
- 🚀 **Performance & SEO:** Powered by semantic HTML5, clean CSS3, lightweight JS, and inline SVGs for fast, dependency-free load times. Includes meta tags optimized for search engine crawlability.

---

## Project Structure

```text
trigona-honey-website/
├── index.html       # Landing page structure and SEO metadata
├── style.css        # Premium dark-gold theme styling, animations, and layouts
├── script.js        # Copy functions, modal lightbox, and scroll animations
├── .gitignore       # System file exclusions
├── README.md        # Project documentation
└── assets/
    ├── bee_harvest.png     # Macro photo of Trigona bees harvesting honey
    ├── honey_jars.jpg      # User product image showing glass honey jars
    ├── honey_bottles.png   # User product image showing 500g plastic bottles
    └── qr_code.png         # Cropped WhatsApp contact card QR code widget
```

---

## Local Development

To run and view the website locally on your computer:

1. Open a terminal window and navigate to the project directory:
   ```bash
   cd /Users/marinimansor/.gemini/antigravity/scratch/trigona-honey-website
   ```
2. Start Python's built-in lightweight HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your web browser and go to:
   ```text
   http://localhost:8000
   ```

---

## Hosting and Custom Domain Configuration

The website is currently configured for hosting on **GitHub Pages**. To link your custom domain `trigonabeehoney.malaysia.com` to the site:

1. **In GitHub Settings:**
   - Navigate to the repository settings: [GitHub Pages Settings](https://github.com/marinimansor/trigona-honey-website/settings/pages)
   - Under the "Custom Domain" section, type `trigonabeehoney.malaysia.com` and click **Save**.
2. **In your DNS Provider (for `malaysia.com`):**
   - Create a CNAME record:
     - **Host/Name:** `trigonabeehoney`
     - **Value/Target:** `marinimansor.github.io`
