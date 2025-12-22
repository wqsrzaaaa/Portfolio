/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wqsrz.netlify.app', // Your live URL
  generateRobotsTxt: true,               // Generate robots.txt automatically
  sitemapSize: 5000,                     // Number of URLs per sitemap file
  changefreq: 'daily',                   // How often pages are updated
  priority: 0.7,                         // Default priority
  exclude: ['/secret-page'],             // Pages you want to exclude (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
