import { API_CATEGORIES } from "./constants.js";
import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./fetchApi.js";
import { categories, params } from "./variable.js";

export const drawCategories = () => {
  fetchApi(API_CATEGORIES)
    .then(data => {
      let htmls = data.map(item => {
        if (item == 'All') {
          return `
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
              <div class="category__item" data-category="">${item}</div>
            </div>
          `;
        }
        else {
          return `
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
              <div class="category__item" data-category="${item}">${item}</div>
            </div>
          `;
        }
      })

      categories.innerHTML = htmls.join("");

      const listCategory = document.querySelectorAll("#categories .category__item");
      listCategory.forEach(item => {
        item.addEventListener("click", function() {
          // params.category = item.dataset.category;
          params.category = item.getAttribute("data-category");
          drawProducts();
        })
      })
    })
}