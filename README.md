# Installation

**Step 1:** Fork and clone this repo.

**Step 2:** Install npm packages:

```bash
npm ci
```

**Step 3:** Run webpack:

```bash
npm run build
```

**Step 4:** Start Electron:

```bash
npm run start
```

# Project Goals

-   Test and explore Electron
-   See how quickly an Electron app can be created
-   Test converting a React app into an Electron app
-   Learn and document basic pitfalls

# Results

-   The project was converted in less than 30 minutes
-   Electron can take a while to download and install when running on a 3g internet connection
-   Assets return `404` unless requested with relative paths, currently unsure how to resolve this issue without manually updating all link, script, and fetch URLs manually
