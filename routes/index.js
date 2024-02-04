var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', (req, res, next) => {
  res.redirect("home")
})
router.get('/home', function (req, res, next) {
  res.render('home', {
    html: {
      title: "YPOnline | E-commerce | Hospitality | Search Functionality | Custom Domain | Responsive Themes"
    },
    hero: {
      title: 'Does Your Business Need To Grow?',
      tagline: 'You\'re in luck, we have just what you need: simple, affordable and quick-to-deploy technology, tools and apps for your SME and Large Enterprises!'
    },
    section2: {
      title: "Who We Are",
      body: "We Yeepsters make running a business a breeze by developing smart technology that simplifies tasks, streamlines operations, and boosts efficiency and profits. Yeep that's what we do! We'll take care of the technical side of things, so you can focus on the fun part of running your business. Let's work together to make your business soar!",
    },
    section3: {
      title: "We Can Help",
      body: "Let\'s show you how we can use Tech to grow your business!",
      featureImage: "/images/place-order-illustrator.svg"
    },
    section4: {
      title: "Solutions Provided",
      body: "We focus on bringing value and solve business main challenges",
      featureImage: "/images/place-order-illustrator.svg",
      solutionList: [
        {
          title: "E-commerce",
          img: "/images/e-commerce-illustrator.svg",
          animate_delay: 0
        },
        {
          title: "Hospitality",
          img: "/images/hospitality-illustrator.svg",
          animate_delay: 1000
        },
        {
          title: "Search Functionality",
          img: "/images/search-functionality-illustrator.svg",
          animate_delay: 1300
        },
        {
          title: "Custom Domain",
          img: "/images/custom-domain-illustrator.svg",
          animate_delay: 1500
        },
        {
          title: "Responsive Themes",
          img: "/images/responsive-themes-illustrator.svg",
          animate_delay: 1800
        }
      ]
    }
  });
});

/* GET Contact-us page. */
router.get('/contact-us', function (req, res, next) {
  res.render('contact-us',
    {
      html: {
        title: "YPOnline | Contact Us"
      },
    });
});

/* GET Careers page. */
router.get('/careers', function (req, res, next) {
  res.render('careers',
    {
      html: {
        title: "YPOnline | Contact Us"
      },
    });
});

/* GET Products page. */
router.get('/products', function (req, res, next) {
  res.render('products',
    {
      html: {
        title: "YPOnline | Contact Us"
      },
    });
});

/* GET Page-not-found page. */
router.get('**', (req, res, next) => {
  res.render("page-not-found",
  {
    html: {
      title: "YPOnline | 404: The Page You Are Looking For Is Not Found"
    },
  })
})


module.exports = router;
