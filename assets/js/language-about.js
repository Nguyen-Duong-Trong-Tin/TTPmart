const vietnam = document.querySelector(".language .vietnam");
const england = document.querySelector(".language .england");

const headerDesc = document.querySelector(".header .desc");
const aboutSmartFashionTitle = document.querySelector(".about-smart-fashion .title");
const aboutSmartFashionSubtitle = document.querySelector(".about-smart-fashion .subtitle");
const aboutSmartFashionDesc = document.querySelector(".about-smart-fashion .desc");
const teamMemberTitle = document.querySelector(".team-member .title");
const teamMemberDesc = document.querySelector(".team-member .desc");
const featureTitle = document.querySelectorAll(".feature .title");
const featureDesc = document.querySelectorAll(".feature .desc");
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
  headerDesc.innerHTML = "World Wide Completely Free Returns and Shipping";
  aboutSmartFashionTitle.innerHTML = "Smart Fashion";
  aboutSmartFashionSubtitle.innerHTML = "With Smart Devices";
  aboutSmartFashionDesc.innerHTML = "One of our top priorities is reputation and quality. With a customer care approach that always loves our customers, we always provide quality and durable products over time. As business operators, we can deeply understand your needs. We understand our existence is to contribute to society and give back the values ​​we have to the community.";
  teamMemberTitle.innerHTML = "Team Member";
  teamMemberDesc.innerHTML = "These are members who have many important contributions to the company";
  featureTitle.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Free Shipping";
    else if (idx == 1) item.innerHTML = "Card Payments";
    else item.innerHTML = "Easy Returns";
  });
  featureDesc.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Capped at $39 per order";
    else if (idx == 1) item.innerHTML = "12 Months Installments";
    else item.innerHTML = "Shop With Confidencer"
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