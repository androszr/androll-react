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

  skills: {
    eCommerce: {

    },
    productManagement: {

    },
    webDevelopment: {

    },
    dataScience: {

    },
    
    about: {

    },
  },
  portfolio: {

  },
  experience: [
    {
      dates: '2019-now',
      position: 'freelance',
      descOne: '',
      descTwo: '',
    },
  ],
};

export const listData = [
 
];




const initialStoreData = {
  app: {...pageContents},
};

export default initialStoreData;