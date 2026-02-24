# Nurtured Medicine Advisory Service (Prototype)

This repository contains a simple static website prototype:

- `index.html` – Home page
- `about.html` – About Us page
- `styles.css` – Shared styling
- `server.js` – Minimal local web server
- `package.json` – `npm start` command

## Quick start (local)

1. Open a terminal in this folder.
2. Run:

```bash
npm start
```

3. Open: `http://localhost:3000`

---

## Recommended workflow: Push to GitHub, then clone into a clear folder

If `CodexTest` is hard to find, this is a good approach.

### 1) Create a GitHub repository
Create a new empty repo in GitHub, for example:

- `nurtured-medicine-website`

### 2) Connect this project to GitHub and push
Run these commands **from this project folder**:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin work
```

If `origin` already exists:

```bash
git remote set-url origin <YOUR_GITHUB_REPO_URL>
git push -u origin work
```

### 3) Clone it into a new, intuitive folder
From wherever you keep your projects:

```bash
git clone <YOUR_GITHUB_REPO_URL> nurtured-medicine-website
cd nurtured-medicine-website
git checkout work
npm start
```

Then open: `http://localhost:3000`

---

## If npm shows ENOENT for package.json

This means npm cannot find `package.json` in your current folder.

Check where you are:

```bash
# macOS/Linux
pwd
ls -la

# Windows PowerShell
Get-Location
dir
```

You should see: `package.json`, `index.html`, `about.html`, `styles.css`, `server.js`.

---

## VS Code workflow

1. File → Open Folder.
2. Select the folder containing `package.json`.
3. Open terminal in VS Code.
4. Run `npm start`.
5. Visit `http://localhost:3000`.

