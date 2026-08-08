# BVRK Software Solutions

Next.js static website developed using v0.

The website is a frontend-only application with no backend or server-side API calls. It is configured as a static Next.js export and can be deployed directly to GoDaddy cPanel hosting.

## Prerequisites

Install:

* Node.js (LTS recommended)
* npm
* GoDaddy hosting with cPanel

Check installation:

```bash
node -v
npm -v
```

## Run in Development

Clone/download the project and open a terminal in the project directory.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build for Production

The website is configured for static export using:

```js
output: 'export'
```

Create the production static build:

```bash
npm run build
```

After a successful build, Next.js creates:

```text
out/
```

The `out/` directory contains the complete static website that will be deployed to GoDaddy.

## Test the Production Build Locally

Because this is a static website, `npm start` is not required for deployment.

To test the generated `out/` directory locally, you can use a simple static HTTP server.

For example:

```bash
npx serve out
```

Then open the URL shown in the terminal.

## Deploy to GoDaddy cPanel

### 1. Build the website locally

From the project directory, run:

```bash
npm install
npm run build
```

Confirm that the following directory has been created:

```text
out/
```

### 2. Prepare the files for upload

You only need to upload the contents of:

```text
out/
```

Do NOT upload the entire Next.js source project.

You do not need to upload:

```text
node_modules/
.git/
.next/
app/
components/
```

The `out/` directory already contains the files required by the web server.

### 3. Log in to GoDaddy cPanel

Open your GoDaddy hosting account and access:

```text
cPanel → File Manager
```

Open the website's document root.

For the primary domain, this is normally:

```text
public_html/
```

If your domain is configured as an addon domain or subdomain, check its assigned document root in cPanel.

### 4. Upload the contents of `out/`

Upload everything **inside** the `out/` directory into the website's document root.

For example:

```text
public_html/
├── index.html
├── _next/
├── images/
├── favicon.png
├── about/
├── services/
└── contact/
```

Do not upload the `out` folder itself as:

```text
public_html/out/
```

The `index.html` file should be directly inside the website's document root:

```text
public_html/index.html
```

### 5. Verify the website

Open your domain in a browser:

```text
https://yourdomain.com
```

The Next.js static website should now load directly from GoDaddy.

## Updating the Website

Whenever you make changes to the website:

1. Make the changes locally.
2. Run:

```bash
npm run build
```

3. A new `out/` directory will be generated.
4. Upload the updated contents of `out/` to the GoDaddy website document root.
5. Replace the existing files when prompted.

## Images and Favicon

Files placed inside:

```text
public/
```

are included in the static export.

For example:

```text
public/images/bvrk-logo.png
public/images/favicon.png
```

will be available after the build as:

```text
out/images/bvrk-logo.png
out/images/favicon.png
```

These files are therefore automatically included when you upload the contents of `out/`.

## Important: GoDaddy cPanel

Because this website is a static export:

* You do NOT need **Setup Node.js App**.
* You do NOT need Node.js running on the GoDaddy server.
* You do NOT need to run `npm install` on the server.
* You do NOT need to run `npm run build` on the server.
* You do NOT need to run `npm start` on the server.

The Next.js build is performed locally, and GoDaddy simply serves the generated static files.

## Useful Commands

```bash
npm install       # Install dependencies
npm run dev       # Development server
npm run build     # Generate static production build
npx serve out     # Test static build locally
npm run lint      # Run lint
```

## Deployment Summary

```text
Local Computer
     │
     │ npm run build
     ▼
   out/
     │
     │ Upload contents
     ▼
GoDaddy cPanel
     │
     ▼
public_html/
     │
     ├── index.html
     ├── _next/
     ├── images/
     └── ...
     │
     ▼
https://yourdomain.com
```
