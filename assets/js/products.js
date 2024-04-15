import { drawProducts } from "./drawProducts.js";
import { buttonSearch, filter, inputSearch, paginationNumber, paginationPrev, params } from "./variable.js";

drawProducts();

// Search
const search = () => {
  params.q = inputSearch.value;
  drawProducts();
}

buttonSearch.addEventListener("click", function () {
  search();
})

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search();
  }
})

inputSearch.addEventListener("input", function () {
  search();
})
// End Search

// Filter
filter.addEventListener("change", function (e) {
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "",
        params.order = ""
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "acs";
      break;
    case "gia-cao-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    default:
      break;
  }
  drawProducts();
})
// End Filter

// Pagination
paginationPrev.addEventListener("click", function () {
  if (params.page > 1) {
    --params.page;
    paginationNumber.innerHTML = params.page;
    drawProducts();
  }
});

paginationNext.addEventListener("click", function () {
  if (params.page < 14) {
    ++params.page;
    paginationNumber.innerHTML = params.page;
    drawProducts();
  }
});
// End Pagination