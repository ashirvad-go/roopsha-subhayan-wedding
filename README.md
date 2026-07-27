# Roopsha & Subhayan — Wedding Invitation

A responsive royal Bengali wedding invitation website built with plain HTML, CSS and JavaScript.

## Included

- Animated opening screen
- Background music control
- Wedding countdown
- Bride and groom family details
- Wedding and reception information
- Google Maps and WhatsApp buttons
- Responsive photo gallery
- Native share button
- Mobile, tablet and desktop layouts
- GitHub Pages deployment workflow

## Add photographs and music

Create an `assets` folder and add:

- `cover.jpg` — couple cover photograph
- `gallery-1.jpg` through `gallery-4.jpg`
- `wedding-music.mp3` — licensed background music

Then replace the placeholder blocks in `index.html` with image tags:

```html
<img src="assets/cover.jpg" alt="Roopsha and Subhayan">
```

## Preview locally

Open `index.html` directly, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included workflow will publish the site automatically.

## Custom domain

After publishing, add your domain under **Settings → Pages → Custom domain**.
