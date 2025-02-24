const fs = require('fs');
const path = require('path');

// Define your website URL
const BASE_URL = 'https://lonescore.com';

// Define the paths of your website
const pages = [
  '/',
  '/news',
  '/leagues',
  '/faves',

  // Add more routes here
];

// Create a function to generate the sitemap
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
      .map(page => {
        return `<url><loc>${BASE_URL}${page}</loc></url>`;
      })
      .join('\n')}\n</urlset>`;

  // Write the sitemap.xml file
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully.');
};

generateSitemap();
