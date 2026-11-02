# Capsule Builder

Plan a capsule wardrobe in your browser. Pick a style or a color palette, add your clothes as simple drawings, and get outfit ideas you can save, tweak and turn into lookbook pages.

No account, no ads, no tracking. Everything you add stays in your own browser.

![Outfit ideas on desktop](docs/outfit-ideas.png)

## What it does

- **Styles and palettes.** 23 styles (minimalist, preppy, dark academia, outdoor, city boy and more), each with a short explanation, a palette and a starter set of pieces. There are also mood palettes and an optional color-season quiz.
- **Your pieces, drawn.** Over 120 garment types, from tees and pleated skirts to kurtas, clogs and berets. Choose colors from your palette, add patterns (stripes, plaid, florals and more), textures, fit, and an optional photo or shop link.
- **Outfit ideas.** Filter by season or weather and by occasion, or build ideas around one piece. Ideas follow sensible rules: one accent color, one pattern, a coat when it's cold, no socks with sandals. Outfits are laid out flat at true scale, so a cropped top looks cropped next to a long coat. Each outfit lists how its pieces are worn (half-tucked, cuffed, worn open), shirts can be layered open over a tee, and ideas never repeat an outfit you've saved. For more daring outfits, turn on **Bold mixing** in Settings to allow two accent colors or two patterns.
- **Short labels.** Each outfit gets a few plain notes, like "Accent: rust", "Shape: relaxed all over" or "Pattern mix: stripes + floral". Tap one to see what it means, or turn them off in Settings.
- **Photos, favorites and sorting.** Add your own photos to any outfit and tap one to see it large. Star your favorites, and sort saved outfits by newest, oldest, name or favorites.
- **Lookbook.** Turn your palette, pieces and saved outfits into tidy pages and save them as images.
- **Backups.** Save everything as a file and load it on another device.

<p>
  <img src="docs/styles.png" alt="Style tab" width="49%">
  <img src="docs/saved-outfits.png" alt="Saved outfits" width="49%">
</p>

## Privacy

Capsule Builder is a single static page. Your palette, pieces, outfits and photos are saved in your browser's local storage on your device and are never uploaded anywhere. Clearing your browser data removes them, so use **Settings → Save a backup file** now and then.

The page loads two fonts from Google Fonts. Nothing else is requested from other servers. (When you save a lookbook page as an image, the page asks Google Fonts for the letters it needs so the image keeps its fonts.)

## Add it to your home screen

Capsule Builder works like an app once it's on your home screen, and it keeps working without a connection.

- **iPhone or iPad (Safari):** tap the Share button, then **Add to Home Screen**.
- **Android (Chrome):** tap the ⋮ menu, then **Add to Home screen** or **Install app**.
- **Desktop (Chrome or Edge):** click the install icon at the right of the address bar.

On iPhone and iPad, the home-screen app keeps its own storage, separate from Safari. To bring over what you made in Safari, use **Settings → Save a backup file** in Safari, then **Load a backup** in the home-screen app.

## Files

| File | What it's for |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest` | App name, colors and icons for the home screen |
| `sw.js` | Offline support |
| `icons/` | Home-screen icons (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`) |
| `favicon.svg` | Browser tab icon |
| `social-preview.png` | The picture shown when the link is shared |
| `docs/` | Screenshots for this README |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are (optional) |

## Put it online with GitHub Pages

1. Create a new public repository on GitHub, for example `capsule-builder`.
2. Upload everything in the table above, plus `README.md` and `LICENSE`, keeping the `icons` and `docs` folders. (On the repository page: **Add file → Upload files**.)
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two, the site is live.

If you host it at a different address, change the two lines in `index.html` that contain `og:url` and `og:image` to the new address, so link previews keep working.

## Run it locally

Open `index.html` in any modern browser. There's no build step and nothing to install.

## Browser support

Recent versions of Chrome, Edge, Firefox and Safari, on desktop and phones.

## Credits

- Fonts: [Newsreader](https://fonts.google.com/specimen/Newsreader) and [Figtree](https://fonts.google.com/specimen/Figtree), both under the SIL Open Font License, served by Google Fonts.
- Garment illustrations are original and drawn in code.

## License

MIT. See [LICENSE](LICENSE).
