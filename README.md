# Alex Karpov - Freelancer Website

A modern, professional freelancer website built with Vue.js and Tailwind CSS for Alex Karpov, a Senior Software Engineer specializing in Ruby on Rails and React solutions.

## Features

- **Modern Design**: Clean, professional interface with responsive design
- **Vue.js Frontend**: Built with Vue 3 and Vue Router for smooth navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **JSON Data Management**: All content loaded from JSON files for easy maintenance
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages
- **SEO Optimized**: Meta tags and structured content for search engines
- **Mobile Responsive**: Optimized for all device sizes
- **High Conversion**: Optimized for lead generation and client acquisition

## Pages

- **Home**: Hero section with value propositions, lead magnet, and case studies
- **About**: Personal bio, skills showcase, and professional background
- **Services**: Engagement models (project-based, retainer, audits) and core services
- **Portfolio**: Real case studies from Samsung, Instacart, RBC Ventures, and Nanameue
- **Blog**: Technical insights and industry expertise
- **Contact**: Booking system and contact form

## Technology Stack

- Vue.js 3
- Vue Router
- Tailwind CSS
- Vite (Build Tool)
- GitHub Actions (CI/CD)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Alex-Karpov-878/Alex-Karpov-878.github.io.git
cd Alex-Karpov-878.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory, ready for deployment.

## JSON Data Management

All website content is managed through JSON files in the `src/data/` directory:

- `home.json` - Homepage content (hero, clients, value propositions, lead magnet, testimonials)
- `about.json` - About page content (bio, skills, education, CTAs)
- `services.json` - Services page content (engagement models, core services, process)
- `portfolio.json` - Portfolio page content (case studies from Samsung, Instacart, etc.)
- `blog.json` - Blog page content (technical insights and articles)
- `contact.json` - Contact page content (booking, form fields, contact info)

### Updating Content

To update website content, simply edit the corresponding JSON files:

1. **Personal Information**: Update `home.json` company section
2. **Skills & Experience**: Edit `about.json` skills and bio sections
3. **Services**: Modify `services.json` engagement models and core services
4. **Case Studies**: Update `portfolio.json` case studies array
5. **Blog Posts**: Edit `blog.json` posts array
6. **Contact Information**: Modify `contact.json` form fields and contact info

### Data Structure

The JSON files use a consistent structure with nested objects and arrays. Each section has:
- `title` and `subtitle` for headings
- Arrays for lists (team, services, projects, etc.)
- Objects for complex data (company info, form fields, etc.)

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.vue
│   │   └── Footer.vue
│   ├── Home.vue
│   ├── About.vue
│   ├── Services.vue
│   ├── Portfolio.vue
│   ├── Blog.vue
│   └── Contact.vue
├── data/
│   ├── home.json
│   ├── about.json
│   ├── services.json
│   ├── portfolio.json
│   ├── blog.json
│   └── contact.json
├── composables/
│   └── useData.js
├── App.vue
├── main.js
└── style.css
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors
      },
      secondary: {
        // Customize secondary colors
      }
    }
  }
}
```

### Content
Update the content in each Vue component to match your specific needs:
- Company information
- Services offered
- Portfolio projects
- Team members
- Contact details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact us at hello@devshoppro.com
