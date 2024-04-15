// Params
export let params = {
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 8,
  category: ""
};
// End Params

// Products
export const products = document.querySelector("#products .row-2");

// Search
export const inputSearch = document.querySelector("#form .search");
export const buttonSearch = document.querySelector("#form .button");
// End Search

// Filter
export const filter = document.querySelector("#filter");
// End Filter

// Pagination
export const paginationPrev = document.querySelector("#paginationPrev");
export const paginationNumber = document.querySelector("#paginationNumber");
export const paginationNext = document.querySelector("#paginationNext");
// End Pagination
// End Products

// Categories
export const categories = document.querySelector("#categories .row");
// End Categories