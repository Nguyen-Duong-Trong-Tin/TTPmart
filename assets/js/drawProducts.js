import { API_PRODUCTS } from "./constants.js";
import { fetchApi } from "./fetchApi.js";
import { params, products } from "./variable.js";

export const drawProducts = () => {
  let category = "";
  if (params.category != "") {
    category = `category=${params.category}`;
  }

  const api = `${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&${category}`;

  fetchApi(api)
    .then(data => {
      let htmls = data.map(item => {
        return `
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="product__item">
              <img class="img" src="${item.thumbnail}" alt="${item.title}">
              <div class="percentage">${item.discountPercentage}%</div>
              <div class="content">
                <h5 class="title">${item.title}</h5>
                <div class="price-stock">
                  <p class="price">${item.price}$</p>
                  <p class="stock">Còn lại: ${item.stock} sp</p>
                </div>
              </div>
            </div>
          </div>
        `;
      })

      products.innerHTML = htmls.join("");
    })
}