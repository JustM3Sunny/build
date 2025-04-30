# Yoga Website - Revamped!

A modern, fully-featured, and highly responsive website for yoga classes. This version includes significant UI/UX improvements, more sections, and additional pages for an enhanced user experience.

## Features

- **Fully Responsive Design:** Optimized for all devices using Tailwind CSS, ensuring a seamless experience on desktops, tablets, and mobile phones.
- **Enhanced UI/UX:** A redesigned and more intuitive user interface with improved navigation and visual appeal.
- **Comprehensive Class Schedule:** A detailed schedule of yoga classes with timings, instructors, descriptions, and booking options.
- **Detailed Instructor Profiles:** In-depth profiles of yoga instructors, highlighting their expertise, experience, certifications, and teaching styles.
- **Flexible Pricing Plans:** A clear presentation of various membership options, class packages, and drop-in rates, with secure online payment integration (future enhancement).
- **Easy-to-Use Contact Form:** A user-friendly contact form for inquiries, feedback, and support.
- **Smooth Scrolling Navigation:** Seamless transitions between sections for a fluid browsing experience.
- **Engaging Image and Video Gallery:** A visually rich gallery showcasing the studio environment, yoga poses, and student testimonials.
- **Student Testimonials:** Authentic testimonials from satisfied students, building trust and credibility.
- **Informative Blog:** A dedicated blog section with articles, tips, and resources related to yoga, wellness, and healthy living.
- **About Us Page:** A dedicated page to tell the story of the yoga studio, its mission, and its values.
- **Events Calendar:** A calendar displaying upcoming workshops, retreats, and special events.

## Getting Started

1.  Clone the repository: `git clone <repository_url>`
2.  Open `index.html` in your browser.

## Deployment to GitHub Pages

These instructions will guide you through deploying this project to GitHub Pages.

1.  **Create a GitHub repository:** If you haven't already, create a new repository on GitHub for your project, named `yoga_website`.
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
4.  **Access your deployed site:** GitHub Pages will provide a URL where your site is deployed (usually `https://<username>.github.io/yoga_website`). It may take a few minutes for the site to deploy.

   **Important Note:** After enabling GitHub Pages, it might take a few minutes for your site to become live. You can check the deployment status in the "Actions" tab of your repository.  Look for a workflow named "pages build and deployment".

   **Alternative Deployment with gh-pages branch (if needed):**

   If you prefer to deploy from a separate `gh-pages` branch (useful for projects with build steps, which this project doesn't currently have):

   1.  **Install `gh-pages`:** `npm install gh-pages --save-dev` (You'll need Node.js and npm installed)
   2.  **Add a deploy script to `package.json`:**

       ```json
       "scripts": {
           "deploy": "gh-pages -d ."
       }
       ```

   3.  **Run the deploy script:** `npm run deploy`

   This will create a `gh-pages` branch with your built files and deploy it to GitHub Pages.  You'll also need to configure GitHub Pages to use the `gh-pages` branch in the "Source" section of the Pages settings.

   **Note:** For this project, deploying from the `main` branch is the simplest and recommended approach, as there are no build steps required. The `gh-pages` method is included for completeness and in case you decide to add build steps in the future.

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

The project now includes the following structure to accommodate the new sections and pages: