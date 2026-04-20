# DharmaArdhaVedika Static Site

This folder contains a GitHub Pages-ready static site based on the "Knowledge Dashboard" direction.

**GitHub Repository:** https://github.com/raghu-2515/dharma-ardha-vedika-site

**Live Site (GitHub Pages):** https://raghu-2515.github.io/dharma-ardha-vedika-site

## Files

- `index.html`: Page structure
- `styles.css`: Visual design and responsive layout
- `app.js`: Editable content data plus rendering logic

## Quick edits

- Update hero text directly in `index.html`
- Update focus cards, resource links, pursuits, and socials in `app.js`
- Adjust colors and typography tokens near the top of `styles.css`

## Committing and pushing future changes

After editing any files locally, run the following commands from inside the `dharma-ardha-vedika-site` folder:

```bash
# 1. Navigate to the project folder
cd "/Users/raghuramgangaraju/Documents/Python_Raghu/Misc_Projects/Codex Projects/dharma-ardha-vedika-site"

# 2. Stage all changed files
git add app.js index.html styles.css

# 3. Commit with a descriptive message
git commit -m "Your description of what changed"

# 4. Push to GitHub
git push origin main
```

To stage every changed or new file at once (instead of listing them individually):

```bash
git add .
git commit -m "Your description of what changed"
git push origin main
```

To check what has changed before staging:

```bash
git status        # see which files changed
git diff          # see line-by-line differences
```

## Publish on GitHub Pages

1. In the repository, open **Settings** -> **Pages**.
2. Set the source to **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`.
4. Save — the site will be live at the URL shown above within a minute or two.

## Optional next improvements

- Replace the current hero image URL in `styles.css` with your own image.
- Add a `Literature` resource lane and a dedicated notes page.
- Swap placeholder social URLs for your actual profiles.
