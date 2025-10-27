# JSON Data Structure Documentation

This document describes the structure and usage of JSON data files for the Portfolio Republic Development website.

## Overview

All website content is managed through JSON files located in `src/data/`. This approach provides several benefits:

- **Easy Content Management**: Non-technical users can update content without touching code
- **Version Control**: All content changes are tracked in git
- **Consistency**: Structured data ensures consistent formatting across the site
- **Maintainability**: Centralized content management makes updates efficient

## File Structure

### 1. home.json
Contains all homepage content including hero section, client logos, value propositions, case studies, and testimonials.

```json
{
  "company": {
    "name": "Portfolio Republic Development",
    "tagline": "...",
    "description": "...",
    "email": "...",
    "phone": "...",
    "location": "...",
    "website": "..."
  },
  "hero": {
    "title": "...",
    "highlightedTitle1": "...",
    "highlightedTitle2": "...",
    "subtitle": "...",
    "description": "...",
    "primaryCTA": "...",
    "secondaryCTA": "..."
  },
  "clients": [
    {
      "name": "...",
      "logo": "..."
    }
  ],
  "valuePropositions": [
    {
      "icon": "...",
      "title": "...",
      "description": "..."
    }
  ],
  "caseStudies": [
    {
      "id": "...",
      "client": "...",
      "project": "...",
      "type": "...",
      "category": "...",
      "description": "...",
      "results": [...],
      "technologies": [...],
      "challenge": "...",
      "solution": "..."
    }
  ],
  "testimonials": [
    {
      "id": "...",
      "name": "...",
      "position": "...",
      "initials": "...",
      "quote": "...",
      "rating": 5
    }
  ],
  "stats": [
    {
      "metric": "...",
      "label": "..."
    }
  ]
}
```

### 2. about.json
Contains company information, team members, values, and company history.

```json
{
  "company": {
    "name": "...",
    "mission": "...",
    "commitment": "...",
    "stats": [...]
  },
  "team": [
    {
      "id": "...",
      "name": "...",
      "position": "...",
      "initials": "...",
      "bio": "...",
      "skills": [...]
    }
  ],
  "values": [
    {
      "icon": "...",
      "title": "...",
      "description": "..."
    }
  ],
  "history": [
    {
      "year": "...",
      "title": "...",
      "description": "..."
    }
  ]
}
```

### 3. services.json
Contains service offerings, technology stack, and development process information.

```json
{
  "services": {
    "title": "...",
    "subtitle": "...",
    "overview": {
      "title": "...",
      "description": "...",
      "features": [...],
      "techStack": [...]
    },
    "offerings": [
      {
        "id": "...",
        "icon": "...",
        "title": "...",
        "description": "...",
        "features": [...]
      }
    ],
    "process": {
      "title": "...",
      "subtitle": "...",
      "steps": [...]
    }
  }
}
```

### 4. portfolio.json
Contains project case studies, filters, and portfolio statistics.

```json
{
  "portfolio": {
    "title": "...",
    "subtitle": "...",
    "filters": [...],
    "projects": [
      {
        "id": "...",
        "client": "...",
        "project": "...",
        "type": "...",
        "category": "...",
        "color": "...",
        "description": "...",
        "results": [...],
        "technologies": [...],
        "challenge": "...",
        "solution": "..."
      }
    ],
    "stats": [...]
  }
}
```

### 5. blog.json
Contains blog posts, featured articles, and newsletter information.

```json
{
  "blog": {
    "title": "...",
    "subtitle": "...",
    "featuredPost": {
      "title": "...",
      "description": "...",
      "date": "...",
      "author": {...},
      "category": "..."
    },
    "posts": [
      {
        "id": "...",
        "title": "...",
        "description": "...",
        "date": "...",
        "author": {...},
        "category": "...",
        "color": "..."
      }
    ],
    "newsletter": {
      "title": "...",
      "subtitle": "..."
    }
  }
}
```

### 6. contact.json
Contains contact information, form fields, FAQ, and business hours.

```json
{
  "contact": {
    "title": "...",
    "subtitle": "...",
    "company": {...},
    "businessHours": [...],
    "responseTime": {...},
    "faqs": [
      {
        "question": "...",
        "answer": "..."
      }
    ],
    "form": {
      "fields": [
        {
          "name": "...",
          "label": "...",
          "type": "...",
          "required": true/false,
          "placeholder": "...",
          "options": [...] // for select fields
        }
      ],
      "submitText": "...",
      "submittingText": "..."
    }
  }
}
```

### 7. careers.json
Contains job openings, company benefits, and application process.

```json
{
  "careers": {
    "title": "...",
    "subtitle": "...",
    "benefits": [
      {
        "icon": "...",
        "title": "...",
        "description": "..."
      }
    ],
    "positions": [
      {
        "id": "...",
        "title": "...",
        "location": "...",
        "type": "...",
        "status": "...",
        "description": "...",
        "requirements": [...],
        "technologies": [...]
      }
    ],
    "process": {
      "title": "...",
      "subtitle": "...",
      "steps": [...]
    }
  }
}
```

## Usage in Components

Components use the `useData` composable to access JSON data:

```javascript
import { useHomeData } from '../composables/useData'

export default {
  name: 'Home',
  setup() {
    const data = useHomeData()
    return {
      data
    }
  }
}
```

## Data Validation

When updating JSON files, ensure:

1. **Valid JSON Syntax**: Use proper quotes, commas, and brackets
2. **Required Fields**: Don't remove required fields that components expect
3. **Data Types**: Maintain correct data types (strings, numbers, booleans, arrays)
4. **Consistent Structure**: Follow the established patterns for similar data

## Best Practices

1. **Backup Before Changes**: Always backup JSON files before making major changes
2. **Test After Updates**: Build and test the site after updating content
3. **Version Control**: Commit JSON changes with descriptive messages
4. **Consistent Naming**: Use consistent naming conventions for IDs and keys
5. **Documentation**: Update this documentation when adding new fields

## Common Updates

### Adding a New Team Member
Edit `about.json` and add to the `team` array:

```json
{
  "id": "new-member",
  "name": "John Doe",
  "position": "Senior Developer",
  "initials": "JD",
  "bio": "Experienced developer with expertise in...",
  "skills": ["React", "Node.js", "AWS"]
}
```

### Adding a New Case Study
Edit `portfolio.json` and add to the `projects` array:

```json
{
  "id": "new-project",
  "client": "Client Name",
  "project": "Project Name",
  "type": "Project Type",
  "category": "Category",
  "color": "blue",
  "description": "Project description...",
  "results": [
    {
      "metric": "50%",
      "label": "Improvement",
      "color": "green"
    }
  ],
  "technologies": ["Ruby on Rails", "React"],
  "challenge": "Challenge description...",
  "solution": "Solution description..."
}
```

### Updating Company Information
Edit `home.json` company section:

```json
{
  "company": {
    "name": "New Company Name",
    "email": "new@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "New Location"
  }
}
```

This JSON-based approach makes content management simple and efficient while maintaining the professional appearance and functionality of the website.
