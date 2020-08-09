require('@babel/register'); // 1.

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;

(
  new Sitemap(router)
    .build('https://robertandrosz.pl')
    .save('./sitemap.xml')
); // 2.

console.log('The sitemap was built.'); // Only shows this message after everything works well.