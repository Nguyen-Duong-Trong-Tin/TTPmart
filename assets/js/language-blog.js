const vietnam = document.querySelector(".language .vietnam");
const england = document.querySelector(".language .england");

const headerDesc = document.querySelector(".header .desc");
const headerAccount = document.querySelector(".header #account");
const headerSearchInput = document.querySelector(".header-search input");
const headerMainList = document.querySelectorAll(".header-main .list li");
const headerMainNavHome = document.querySelector(".header-main #navHome");
const headerMainButtonPage = document.querySelector(".header-main #button-page");
const headerMainHome = document.querySelector(".header-main #home");
const headerMainAbout = document.querySelector(".header-main #about");
const headerMainPages = document.querySelector(".header-main #pages");
const headerMainShop = document.querySelector(".header-main #shop");
const headerMainBlog = document.querySelector(".header-main #blog");
const headerMainContact = document.querySelector(".header-main #contact");
const breadcrumbTitle = document.querySelector(".breadcrumb .title");
const breadcrumbA = document.querySelector(".breadcrumb a");
const breadcrumbSpan = document.querySelector(".breadcrumb span");
const blogTitle = document.querySelector(".blog .title");
const blogP = document.querySelectorAll(".blog p");
const commentsTitle = document.querySelector(".comments .title");
const commentsButton = document.querySelectorAll(".comments .button");
const leaveCommentTitle = document.querySelector(".leave-comment .title");
const leaveCommentInput = document.querySelector(".leave-comment input");
const leaveCommentTextarea = document.querySelector(".leave-comment textarea");
const leaveCommentButton = document.querySelector(".leave-comment .button");
const footerFooterTopP = document.querySelector(".footer .footer-top p");
const footerFooterTopBoxH4 = document.querySelectorAll(".footer .footer-top .box h4");
const footerFooterTopBoxListLiA = document.querySelectorAll(".footer .footer-top .box .list li a");
const footerFooterTopBoxFourListLi2 = document.querySelector(".footer .footer-top .box-four .list li:nth-child(2)");

vietnam.addEventListener("click", () => {
  window.location.reload();
});

england.addEventListener("click", () => {
  headerDesc.innerHTML = "World Wide Completely Free Returns and Shipping";
  headerAccount.innerHTML = "Account";
  headerSearchInput.setAttribute("placeholder", "Search");
  console.log(headerMainList);
  headerMainList.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "HOME";
    else if (idx == 1) item.innerHTML = "ABOUT";
    else if (idx == 2) item.innerHTML = "PAGES";
    else if (idx == 3) item.innerHTML = "SHOP";
    else if (idx == 4) item.innerHTML = "BLOG";
    else item.innerHTML = "CONTACT";
  });
  headerMainNavHome.innerHTML = "HOME";
  headerMainButtonPage.innerHTML = "Page";
  headerMainHome.innerHTML = "Home";
  headerMainAbout.innerHTML = "About";
  headerMainPages.innerHTML = "Pages";
  headerMainShop.innerHTML = "Shop";
  headerMainBlog.innerHTML = "Blog";
  headerMainContact.innerHTML = "Contact";
  breadcrumbTitle.innerHTML = "Blog";
  breadcrumbA.innerHTML = "HOME";
  breadcrumbSpan.innerHTML = "BLOG";
  blogTitle.innerHTML = "How does providing the best products create a competitive advantage?";
  blogP.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Product differentiation strategy or best product positioning in the market is one of the best and most unique business competition strategies in today's business field. But do you know how the strategy of providing the best products creates a competitive advantage? If not, please follow the article below to learn more.";
    else if (idx == 1) item.innerHTML = "What a good product! Well, I think it's good, but if the product isn't good, that's okay. Just buy any product immediately, especially our products.";
    else if (idx == 3) item.innerHTML = "Product quality is of course a top criterion for product evaluation. The best product is one that must have quality and meet all standards in that field. Because it is the deciding criterion for a product, to be able to compete in the market, product quality is an extremely important key.";
    else if (idx == 4) item.innerHTML = "Product cost is also one of the basic product factors that many customers compare when choosing to buy a product. A product needs to have a price suitable for product quality, and a good product must meet all of these factors: moderate price - high quality, moderate price - moderate quality,...";
    else if (idx == 5) item.innerHTML = "When choosing a supplier with good products, customers will often tend to consider the rate of damage to the goods. A good product that meets quality standards needs to be a packaged good. Carefully protected when delivered to customers. That means that a product with a high failure rate will lower the product quality and thereby reduce the supplier's competitive rate greatly.";
    else if (idx == 6) item.innerHTML = "Competitive advantage can be defined as an advantage that you can do better than your competitors. Therefore, providing the best products will create an extremely effective competitive advantage for you. For example, after using your product, the customer feels that your product is really good and of real quality, then the next time they choose to buy, they will definitely prioritize choosing your product. you first. Not only that, it can also position the product's brand much better, creating a highlight so customers can remember you more. This will create very good revenue and profits for your company, creating a newer and more unique breakthrough.";
    else if (idx == 7) item.innerHTML = "Tags: Mobile, laptop";
    else if (idx == 8) {
      item.innerHTML = `
        Share:
        <a href="https://www.facebook.com/profile.php?id=100015809478694">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1">
          <i class="fa-brands fa-tiktok"></i>
        </a>
      `
    }
  });
  commentsTitle.innerHTML = "Comments (03)";
  commentsButton.forEach(item => item.innerHTML = "Reply");
  leaveCommentTitle.innerHTML = "Leave A Comment";
  leaveCommentInput.setAttribute("placeholder", "Name *");
  leaveCommentTextarea.setAttribute("placeholder", "Your comment...");
  leaveCommentButton.innerHTML = "Send a comment";

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