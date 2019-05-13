const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": `DOM Is \n Awesome`,
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : `123 Way 456 Street Somewhere, USA`,
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navigationBar = document.querySelectorAll("header nav a");

(()=>{
  for(let i = 0; i < navigationBar.length; i++){
    navigationBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
  }
})();

const headerText = document.querySelector(".cta .cta-text h1")
headerText.textContent = siteContent["cta"]["h1"]

const headerButton = document.querySelector(".cta .cta-text button")
headerButton.textContent = siteContent["cta"]["button"]

const headerIMG = document.getElementById("cta-img")
headerIMG.setAttribute('src', siteContent["cta"]["img-src"])


const contentTextHeader = document.querySelectorAll(".text-content h4")
const contentTextBody = document.querySelectorAll(".text-content p")
const middleImg = document.getElementById("middle-img")

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

contentTextHeader[0].textContent = siteContent["main-content"]["features-h4"]
contentTextHeader[1].textContent = siteContent["main-content"]["about-h4"]
contentTextHeader[2].textContent = siteContent["main-content"]["services-h4"]
contentTextHeader[3].textContent = siteContent["main-content"]["product-h4"]
contentTextHeader[4].textContent = siteContent["main-content"]["vision-h4"]

contentTextBody[0].textContent = siteContent["main-content"]["features-content"]
contentTextBody[1].textContent = siteContent["main-content"]["about-content"]
contentTextBody[2].textContent = siteContent["main-content"]["services-content"]
contentTextBody[3].textContent = siteContent["main-content"]["product-content"]
contentTextBody[4].textContent = siteContent["main-content"]["vision-content"]

const contactHeader = document.querySelector(".contact h4")
const contactBody = document.querySelectorAll(".contact p")

contactHeader.textContent = siteContent["contact"]["contact-h4"];


contactBody[0].textContent = siteContent["contact"]["address"]
contactBody[1].textContent = siteContent["contact"]["phone"]
contactBody[2].textContent = siteContent["contact"]["email"]

