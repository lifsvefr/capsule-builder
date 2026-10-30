# Capsule Builder

Plan a capsule wardrobe in your browser. Pick a style or a color palette, add your clothes as simple drawings, and get outfit ideas you can save, tweak and turn into lookbook pages.

No account, no ads, no tracking. Everything you add stays in your own browser.

![Outfit ideas on desktop](docs/outfit-ideas.png)

## What it does

- **Styles and palettes.** 23 styles (minimalist, preppy, dark academia, outdoor, city boy and more), each with a short explanation, a palette and a starter set of pieces. There are also mood palettes and an optional color-season quiz.
- **Your pieces, drawn.** Over 120 garment types, from tees and pleated skirts to kurtas, clogs and berets. Choose colors from your palette, add patterns (stripes, plaid, florals and more), textures, fit, and an optional photo or shop link.
- **Outfit ideas.** Filter by season or weather and by occasion, or build ideas around one piece. Ideas follow sensible rules: one accent color, one pattern, a coat when it's cold, no socks with sandals. Outfits are laid out flat at true scale, so a cropped top looks cropped next to a long coat.
- **Short labels.** Each outfit gets a few plain notes, like "Accent: rust" or "Shape: neat top, full bottom". Tap one to see what it means, or turn them off in Settings.
- **Lookbook.** Turn your palette, pieces and saved outfits into tidy pages and save them as images.
- **Backups.** Save everything as a file and load it on another device.

<p>
  <img src="docs/styles.png" alt="Style tab" width="49%">
  <img src="docs/saved-outfits.png" alt="Saved outfits" width="49%">
</p>

## Privacy

Capsule Builder is a single static page. Your palette, pieces, outfits and photos are saved in your browser's local storage on your device and are never uploaded anywhere. Clearing your browser data removes them, so use **Settings → Save a backup file** now and then.

The page loads two fonts from Google Fonts. Nothing else is requested from other servers. (When you save a lookbook page as an image, the page asks Google Fonts for the letters it needs so the image keeps its fonts.)

## Put it online with GitHub Pages

1. Create a new public repository on GitHub, for example `capsule-builder`.
2. Upload everything in this folder: `index.html`, `favicon.svg`, `social-preview.png`, `.nojekyll`, `README.md`, `LICENSE` and the `docs` folder. (On the repository page: **Add file → Upload files**, then drag the files in. The `.nojekyll` file is hidden on some computers; it's optional, so don't worry if it doesn't upload.)
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two, the site is live at `https://YOUR-USERNAME.github.io/capsule-builder/`.

**For nice link previews on Discord and elsewhere:** open `index.html`, find the line `<meta property="og:image" content="social-preview.png">`, and replace `social-preview.png` with the full address, for example `https://YOUR-USERNAME.github.io/capsule-builder/social-preview.png`. Most chat apps only show the preview image when the address is complete.

## Run it locally

Open `index.html` in any modern browser. There's no build step and nothing to install.

## Browser support

Recent versions of Chrome, Edge, Firefox and Safari, on desktop and phones.

## Credits

- Fonts: [Newsreader](https://fonts.google.com/specimen/Newsreader) and [Figtree](https://fonts.google.com/specimen/Figtree), both under the SIL Open Font License, served by Google Fonts.
- Garment illustrations are original and drawn in code.

## License

MIT. See [LICENSE](LICENSE).
