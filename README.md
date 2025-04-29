# Yoga Classes Website

A modern and fully-featured website for yoga classes, built with Tailwind CSS, HTML, and JavaScript.

## Features

- **Responsive Design:** Fully responsive layout using Tailwind CSS, ensuring optimal viewing experience on all devices.
- **Clean and Modern UI:** A visually appealing and user-friendly interface.
- **Class Schedule:** Displays a detailed schedule of yoga classes, including timings, instructors, and descriptions.
- **Instructor Profiles:** Introduces the yoga instructors with their expertise and experience.
- **Pricing Plans:** Presents various membership and class package options.
- **Contact Form:** Allows users to easily contact the studio for inquiries.
- **Smooth Scrolling Navigation:** Enhances user experience with smooth transitions between sections.
- **Image Gallery:** Showcases the studio environment and yoga poses.
- **Testimonials:** Displays positive feedback from satisfied students.
- **Blog (Optional):** A section for sharing yoga-related articles and tips (can be added later).

## Getting Started

1.  Clone the repository: `git clone <repository_url>`
2.  Open `index.html` in your browser.

## Deployment to GitHub Pages

These instructions will guide you through deploying this project to GitHub Pages.

1.  **Create a GitHub repository:** If you haven't already, create a new repository on GitHub for your project.
2.  **Push your code:** Push your local repository to the newly created GitHub repository.

   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main # or master, depending on your setup
   git remote add origin <repository_url>
   git push -u origin main
   ```

3.  **Enable GitHub Pages:**
    *   Go to your repository's settings on GitHub.
    *   Navigate to the "Pages" section (usually under "Code and automation").
    *   In the "Source" section, select the `main` branch (or your primary branch) and `/ (root)` as the folder.
    *   Click "Save".
4.  **Access your deployed site:** GitHub Pages will provide a URL where your site is deployed (usually `https://<username>.github.io/<repository-name>`). It may take a few minutes for the site to deploy.

   **Important Note:** After enabling GitHub Pages, it might take a few minutes for your site to become live. You can check the deployment status in the "Actions" tab of your repository.  Look for a workflow named "pages build and deployment".

   **Alternative Deployment with gh-pages branch (if needed):**

   If you prefer to deploy from a separate `gh-pages` branch (useful for projects with build steps):

   1.  **Install `gh-pages`:** `npm install gh-pages --save-dev` (You'll need Node.js and npm installed)
   2.  **Add a deploy script to `package.json`:**

       ```json
       "scripts": {
           "deploy": "gh-pages -d ."
       }
       ```

   3.  **Run the deploy script:** `npm run deploy`

   This will create a `gh-pages` branch with your built files and deploy it to GitHub Pages.  You'll also need to configure GitHub Pages to use the `gh-pages` branch in the "Source" section of the Pages settings.

   **Troubleshooting:** If your GitHub Pages site doesn't update after pushing changes, try clearing your browser's cache or hard refreshing the page.  Sometimes the browser caches an older version of the site.

## Development

This project uses:

-   HTML5
-   Tailwind CSS (via CDN)
-   Vanilla JavaScript

## Customization

To customize the Tailwind styles, you can:

1.  Use the CDN version (currently implemented)
2.  Install Tailwind via npm and create a custom build.  This is recommended for more advanced customization.  See the Tailwind CSS documentation for details.

## File Structure