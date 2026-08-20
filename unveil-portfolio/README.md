# Portfolio starter

A lightweight, GitHub-ready portfolio starter based on the structural ideas in the supplied UNVEIL HTML: fixed pill navigation, image-led project grid, Research/Studio sections, and a full-screen Contact overlay.

## Customize

Edit `index.html` first:
- Replace `YOUR NAME`, city, email and social links.
- Replace the project titles/years.
- Add project pages or URLs in `assets/app.js`.
- Replace the placeholder `.media-*` backgrounds with your own `<img>` or `<video>` elements.

## Run locally

Because this is static HTML/CSS/JS, you can open `index.html` directly, or run any simple static server.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

Push the contents of this folder to a repository and enable GitHub Pages from the repository's Pages settings. The site is intentionally framework-free so it can deploy as a static site without a build step.

## Replace placeholders with images

Create an `images/` folder and change a media block in `index.html` from:

```html
<div class="media placeholder media-a"><span>01</span></div>
```

to:

```html
<div class="media">
  <img src="images/project-01.jpg" alt="Project one" loading="lazy" />
</div>
```

Then add this to `assets/styles.css`:

```css
.media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
```

## Note

The reference HTML is a rendered SvelteKit page and contains site-specific brand/content/assets. This starter deliberately uses your own placeholders rather than redistributing the original site's branding or imagery.
