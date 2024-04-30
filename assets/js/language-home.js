const vietnam = document.querySelector(".language .vietnam");
const england = document.querySelector(".language .england");

const headerP = document.querySelector(".header p");
const slideP = document.querySelectorAll("#slide p");
const slideH1 = document.querySelectorAll("#slide h1");
const slideButton = document.querySelectorAll("#slide button");
const bannerH2 = document.querySelectorAll(".banner h2");
const bannerP = document.querySelectorAll(".banner p");
const cardsButton = document.querySelectorAll(".cards button");
const cardsP = document.querySelectorAll(".cards p");
const cardsH5 = document.querySelectorAll(".cards h5");
const smartFashionH2 = document.querySelector(".smart-fashion h2");
const smartFashionP = document.querySelector(".smart-fashion p");
const smartFashionButton = document.querySelector(".smart-fashion button");
const featuredOffersH2 = document.querySelector(".featured-offers h2");
const featuredOffersP = document.querySelector(".featured-offers p");
const featuredOffersH4A = document.querySelector(".featured-offers h4 a");
const featuredOffersButton = document.querySelector(".featured-offers button");
const featuredOffersList = document.querySelectorAll(".featured-offers .list li");
const featuredOffersH5A = document.querySelectorAll(".featured-offers h5 a");
const clientFeedbacksH2 = document.querySelector(".client-feedbacks h2");
const clientFeedbacksP = document.querySelector(".client-feedbacks p");
const lastestBlogH2 = document.querySelector(".lastest-blog h2");
const lastestBlogP = document.querySelector(".lastest-blog p");
const lastestBlogH4 = document.querySelectorAll(".lastest-blog h4");
const lastestBlogBoxP = document.querySelectorAll(".lastest-blog .box p");
const lastestBlogBoxButton = document.querySelectorAll(".lastest-blog .box button");
const footerFooterTopP = document.querySelector(".footer .footer-top p");
const footerFooterTopBoxH4 = document.querySelectorAll(".footer .footer-top .box h4");
const footerFooterTopBoxListLiA = document.querySelectorAll(".footer .footer-top .box .list li a");
const footerFooterTopBoxFourListLi2 = document.querySelector(".footer .footer-top .box-four .list li:nth-child(2)");


vietnam.addEventListener("click", () => {
  window.location.reload();
});

england.addEventListener("click", () => {
  headerP.innerHTML = "World Wide Completely Free Returns and Shipping";
  slideP.forEach((item) => {
    item.innerHTML = "Welcome to TTPmart";
  });
  slideH1.forEach((item) => {
    item.innerHTML = "Your Home Smart Devices & Best Solution";
  });
  slideButton.forEach((item) => {
    item.innerHTML = "Shop All Devices";
  });
  bannerH2.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Smart Watch For Your Hand";
    else if (idx ==  1) item.innerHTML = "Headphones";
    else item.innerHTML = "Smartphone";
  });
  bannerP.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "From $29.00";
    else if (idx ==  1) item.innerHTML = "From $95.00";
    else item.innerHTML = "From $69.00";
  });
  cardsButton.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "New";
    else if (idx ==  1) item.innerHTML = "Top Rate";
    else item.innerHTML = "Featured";
  });
  cardsP.forEach((item) => {
    item.innerHTML = "Accessories";
  });
  cardsH5.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Modern Smart Phone";
    else if (idx ==  1) item.innerHTML = "Bluetooth Headphone";
    else if (idx ==  2) item.innerHTML = "Smart Music Box";
    else if (idx ==  3) item.innerHTML = "Air Pods 25Hjkl Black";
    else if (idx ==  4) item.innerHTML = "Smart Hand Watch";
    else if (idx ==  5) item.innerHTML = "Smart Table Camera";
    else if (idx ==  6) item.innerHTML = "Round Pocket Router";
    else item.innerHTML = "Power Bank 10000Mhp";
  });
  smartFashionH2.innerHTML = "Smart Fashion";
  smartFashionP.innerHTML = "With Smart Devices";
  smartFashionButton.innerHTML = "Shop All Devices";
  featuredOffersH2.innerHTML = "Featured Offers";
  featuredOffersP.innerHTML = "These products are always available in your store.";
  featuredOffersH4A.innerHTML = "Bluetooth Headphone";
  featuredOffersButton.innerHTML = "Shop Now";
  featuredOffersList.forEach((item, idx) => {
    if (idx == 0 || idx == 4) item.innerHTML = `<b>Predecessor</b> None.`;
    else if (idx == 1|| idx == 5) item.innerHTML = `<b>Support Type</b> Neutral.`;
    else if (idx == 3|| idx == 6) item.innerHTML = `<b>Cushioning</b> High Energizing.`;
    else if (idx == 4) item.innerHTML = `<b>Total Weight</b> 300gm.`;
    else item.innerHTML = `<b>Total Weight</b> 900gm.`;
  });
  featuredOffersH5A.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Ladies Smart Watch";
    else item.innerHTML = "Smart Phone";
  });
  clientFeedbacksH2.innerHTML = "Client Feedbacks";
  clientFeedbacksP.innerHTML = "These are feedback from loyal customers";
  lastestBlogH2.innerHTML = "Latest Blog";
  lastestBlogP.innerHTML = "These are the most prominent articles recently";
  lastestBlogH4.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "10 Quick Tips About Smart Product";
    else item.innerHTML = "5 Real-Life Lessons About Smart Product";
  });
  lastestBlogBoxP.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Do you know tips to help smart devices make them 100 times smarter?";
    else item.innerHTML = "Have you ever been so busy that you couldn't clean the house? Do you find it impossible to live without AI?.";
  });
  lastestBlogBoxButton.forEach((item) => {
    item.innerHTML = "Read More";
  });
  footerFooterTopP.innerHTML = "The technology device you are using is our product.";
  footerFooterTopBoxH4.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Services";
    else if (idx == 1) item.innerHTML = "Me";
    else item.innerHTML = "Contact";
  });
  footerFooterTopBoxListLiA.forEach((item, idx) => {
    if (idx == 0 || idx == 5) item.innerHTML = "Account";
    else if (idx == 1 || idx == 6) item.innerHTML = "Contact";
    else if (idx == 2 || idx == 7) item.innerHTML = "Card";
    else if (idx == 3 || idx == 8) item.innerHTML = "Shop";
    else item.innerHTML = "Sign up";
  });
  footerFooterTopBoxFourListLi2.innerHTML = "Phone: 0123456789";
});