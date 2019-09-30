const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Update the nav items
const nav = document.querySelectorAll("a");
nav[0].innerText = siteContent["nav"]["nav-item-1"];
nav[1].innerText = siteContent["nav"]["nav-item-2"];
nav[2].innerText = siteContent["nav"]["nav-item-3"];
nav[3].innerText = siteContent["nav"]["nav-item-4"];
nav[4].innerText = siteContent["nav"]["nav-item-5"];
nav[5].innerText = siteContent["nav"]["nav-item-6"];
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Update middle text
const topText = document.querySelector(".cta-text h1");
topText.innerText = siteContent["cta"]["h1"];

//Update button
const topButton = document.querySelector(".cta-text button");
topButton.innerText = siteContent["cta"]["button"];

//Update image
let topImg = document.getElementById("cta-img");
topImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Update main text
const mainFeatures = document.querySelectorAll(".top-content .text-content h4");
mainFeatures[0].innerText = siteContent["main-content"]["features-h4"];

const featuresText = document.querySelectorAll(".text-content p");
featuresText[0].innerText = siteContent["main-content"]["features-content"];

mainFeatures[1].innerText = siteContent["main-content"]["about-h4"];
featuresText[1].innerText = siteContent["main-content"]["about-content"];

//Update Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Update bottom content
const bottomContent = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContent[0].innerText = siteContent["main-content"]["services-h4"];

const bottomText = document.querySelectorAll(".bottom-content .text-content p");
bottomText[0].innerText = siteContent["main-content"]["services-content"];

bottomContent[1].innerText = siteContent["main-content"]["product-h4"];
bottomText[1].innerText = siteContent["main-content"]["product-content"];

bottomContent[2].innerText = siteContent["main-content"]["vision-h4"];
bottomText[2].innerText = siteContent["main-content"]["vision-content"];

//Update Contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.innerText = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerText = siteContent["contact"]["address"];
contactInfo[1].innerText = siteContent["contact"]["phone"];
contactInfo[2].innerText = siteContent["contact"]["email"];

//Update Footer
const footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"];
