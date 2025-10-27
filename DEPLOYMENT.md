# GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Deployment Process**:
   - The website automatically builds and deploys when you push to the `main` branch
   - The deployment process is handled by the workflow in `.github/workflows/deploy.yml`

3. **Access Your Website**:
   - Once deployed, your website will be available at: `https://alex-karpov-878.github.io/Alex-Karpov-878.github.io/`

## Manual Deployment

If you need to deploy manually:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The built files will be in the `dist` directory

## Troubleshooting

- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow file is in the correct location: `.github/workflows/deploy.yml`
- Verify that the repository has the necessary permissions for GitHub Actions
