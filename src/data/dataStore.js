import palmLaptopImage from '../images/main-image.png';
import palmsImage from '../images/main-image-3.png';

export const settings = {
  defaultNavIcon: 'code',
  homeImage: palmLaptopImage,
  contactImage: palmsImage,
};

export const pageContents = {
  contact: {
    location: 'Warsaw, Poland (GMT + 2)',
    email: 'kontakt@robertandrosz.pl',
    phone: '+48 571 310 321',
    linkedin: 'https://www.linkedin.com/in/robert-androsz-08914355/',
    github: 'https://github.com/androszr/',
  },

  skills: [
    { 
      id: 'eCommerce',
      name: 'E-Commerce',
    },
    { id: 'productManagement',
      name: 'Product Management',
    },
    { id: 'webDevelopment',
      name: 'Web Development',
    },
    { id: 'dataScience',
      name: 'Data Science', 
    },
  ],
    
  portfolio: {

  },
  experience: [
    {
      dates: '2019-now',
      position: 'Freelance',
      descOne: 'Consulting on web development and e-commerce related topics.',
      descTwo: 'Preparation and implementation of web pages and native web application.',
    },
    {
      dates: '2015-2019',
      position: 'IKEA',
      descOne: 'Lead and managed e-commerce, digital, data science and web development teams in IKEA Poland.',
      descTwo: 'Launched e-commerce and telesales for IKEA Poland within omnichannel landscape. Lead digital transformation on all levels of organization.',
    },
    {
      dates: '2016-2018',
      position: 'Cateromarket',
      descOne: 'From ideation to coding, go-live and incorporation - first diet catering comparison marketplace.',
      descTwo: 'Startup featured in numerous media such as: Forbes, Na Temat, Women’s Health, Gazeta Wyborcza.',
    },
    {
      dates: '2009-2015',
      position: 'Media Saturn',
      descOne: 'Ideation and delivery of new Loyalty Program for MediaMarkt and Saturn brands with personalization and marketing automation within omnichannel landscape.',
      descTwo: 'Part of the small team that launched e-commerce for Mediamarkt and Saturn brands.',
    },
  ],
};

export const listData = [
 
];




const initialStoreData = {
  app: {...pageContents},
};

export default initialStoreData;