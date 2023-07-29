import effect from "./effect.js";

// Fetch data of all products from API
const productsContainer = document.querySelector(".main__product-container");
const menuItems = document.querySelectorAll(".menu__items");
const menuItemWomen = document.querySelector(".menu__items:first-child");
const menuItemMen = document.querySelector(".menu__items:nth-child(3)");
const menuItemAccessories = document.querySelector(".menu__items:last-child");
const searchBar = document.querySelector(".form__search");
const profileIcon = document.querySelector(".member");

const searchForm = document.querySelector(".main-header__form");
const searchBtn = document.querySelector(".form__searchbtn");
const main = document.querySelector(".main");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");
const q = urlParams.get("q");

let paging;
let intervalID;
let position;

const mediaQuery = window.matchMedia("(max-width: 1279px)");
const hostName = "api.appworks-school.tw";
const APIVersion = "1.0";
const endPoint = {
  all: "products/all",
  women: "products/women",
  men: "products/men",
  accessories: "products/accessories",
  search: `products/search?keyword=${q}`,
  campaigns: "marketing/campaigns",
};

const productsAllAPI = `https://${hostName}/api/${APIVersion}/${endPoint.all}`;
const productsWomenAPI = `https://${hostName}/api/${APIVersion}/${endPoint.women}`;
const productsMenAPI = `https://${hostName}/api/${APIVersion}/${endPoint.men}`;
const productsAccessoriesAPI = `https://${hostName}/api/${APIVersion}/${endPoint.accessories}`;
const searchAPI = `https://${hostName}/api/${APIVersion}/${endPoint.search}`;
const campaignsAPI = `https://${hostName}/api/${APIVersion}/${endPoint.campaigns}`;

async function fetchData(url) {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, config);
  const jsonData = await response.json();
  return jsonData;
}

function renderLoading() {
  productsContainer.innerHTML = "";

  let html = "";

  html += `
    <div class="loading-container">
      <img
        src="./images/loading.gif"
        alt="loading"
        class="loading"
      />
    </div>
    `;
  productsContainer.innerHTML = html;
}

function getObjectKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const navigateToProductDetails = (mainHeroes, data) => {
  mainHeroes.forEach((mainHero, i) => {
    mainHero.addEventListener("click", () => {
      window.location.assign(
        `/product?id=${data[i].product_id ? data[i].product_id : data[i].id}`
      );
    });
    mainHero.addEventListener("mouseover", (e) => {
      e.target.style.cursor = "pointer";
    });
    mainHero.addEventListener("mouseout", (e) => {
      e.target.style.cursor = "pointer";
    });
  });
};

function logPagingData(endPointKey, paging) {
  let pagingData = [];
  let data;

  window.addEventListener("scroll", async () => {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + innerHeight === scrollHeight) {
      if (paging) {
        const jsonData = await fetchData(
          `https://${hostName}/api/${APIVersion}/products/${endPointKey}?paging=${paging}`
        );
        data = jsonData.data;
        data.forEach((data) => pagingData.push(data));

        let html = "";

        if (data.length) {
          data.forEach((data) => {
            let colorsHtml = "";

            data.colors.forEach((color) => {
              colorsHtml += `<span class="color" style="background-color:#${color.code}"></span>`;
            });

            html += `
                    <section class="product-container__paging-product">
                      <img
                        src=${data.main_image}
                        alt="product"
                        class="product__image"
                      />
                      <div class="product__colors">
                      ${colorsHtml}
                      </div>
                      <h2 class="product__title">${data.title}</h2>
                      <span class="product__price">TWD\.${data.price}</span>
                    </section>
                  `;
          });
        }
        productsContainer.insertAdjacentHTML("beforeend", html);
        paging = jsonData["next_paging"];
        const products = document.querySelectorAll(
          ".product-container__paging-product"
        );
        navigateToProductDetails(products, pagingData);
      }
    }
  });
}

const handleClickCarousel = function (mainHeroes, dotElements, length) {
  dotElements.forEach((dotElement, i) => {
    dotElement.addEventListener("click", () => {
      // Unselect all the items
      mainHeroes.forEach((mainHero) =>
        mainHero.classList.remove("main__hero--selected")
      );
      dotElements.forEach((dotElement) =>
        dotElement.classList.remove("hero__dot--selected")
      );
      position = i;
      mainHeroes[i].classList.add("main__hero--selected");
      dotElement.classList.add("hero__dot--selected");
    });
  });
};

const switchCarousel = function (length, mainHeroes, dotElements) {
  mainHeroes.forEach((mainHero) =>
    mainHero.classList.remove("main__hero--selected")
  );
  dotElements.forEach((dotElement) =>
    dotElement.classList.remove("hero__dot--selected")
  );
  mainHeroes[position].classList.add("main__hero--selected");
  dotElements[position].classList.add("hero__dot--selected");
  if (position === length - 1) {
    position = 0;
  } else {
    position++;
  }
};

const startCarousel = function (length, mainHeroes, dotElements) {
  intervalID = setInterval(() => {
    switchCarousel(length, mainHeroes, dotElements);
  }, 3000);
};

const stopCarousel = function () {
  clearInterval(intervalID);
};

const controlTimer = function (length, mainHeroes, dotElements) {
  dotElements.forEach((dotElement) => {
    dotElement.addEventListener("mouseover", stopCarousel);
    dotElement.addEventListener("mouseout", () => {
      startCarousel(length, mainHeroes, dotElements);
    });
  });
};

async function logCampaignData(url) {
  const jsonData = await fetchData(url);
  const data = jsonData.data;
  const length = data.length;

  let dot = "";
  for (let i = 1; i <= length; i++) {
    dot += `<span class="hero__dot"></span>`;
  }
  const dots = `
      <div class="hero__dots">
      ${dot}
      </div>
      `;

  let html = "";
  data.forEach((data) => {
    const story = data.story;
    const blockQuote = story.split("\r\n");

    html += `
      <section class="main__hero">
        <div class="hero__content__container">
          <div class="hero__content">
            <h1 class="content__title">
              <blockquote>
              ${blockQuote[0]}<br />${blockQuote[1]}<br />${blockQuote[2]}
              </blockquote>
            </h1>
            <cite class="content__citation">${blockQuote[3]}</cite>
          </div>
        </div>
        <img src="${data.picture}" alt="hero" class="hero__image"/>
      </section>
    `;
  });
  main.insertAdjacentHTML("afterbegin", html);

  const mainHeroes = document.querySelectorAll(".main__hero");

  mainHeroes[length - 1].insertAdjacentHTML("afterend", dots);
  const dotElements = document.querySelectorAll(".hero__dot");

  // Display initial carousel once the page is loaded
  position = 0;
  mainHeroes[position].classList.add("main__hero--selected");
  dotElements[position].classList.add("hero__dot--selected");

  handleClickCarousel(mainHeroes, dotElements, length);
  startCarousel(length, mainHeroes, dotElements);
  controlTimer(length, mainHeroes, dotElements);
  navigateToProductDetails(mainHeroes, data);
}

async function logProductData(url, obj, value) {
  renderLoading();
  try {
    const jsonData = await fetchData(url);
    const data = jsonData.data;
    paging = jsonData["next_paging"];
    const endPointKey = getObjectKey(obj, value);

    if (data.length) {
      let html = "";

      data.forEach((data) => {
        let colorsHtml = "";

        data.colors.forEach((color) => {
          colorsHtml += `<span class="color" style="background-color:#${color.code}"></span>`;
        });

        html += `
          <section class="product-container__product">
            <img
              src=${data.main_image}
              alt="product"
              class="product__image"
            />
            <div class="product__colors">
            ${colorsHtml}
            </div>
            <h2 class="product__title">${data.title}</h2>
            <span class="product__price">TWD\.${data.price}</span>
          </section>
        `;
      });

      productsContainer.innerHTML = html;

      const products = document.querySelectorAll(".product-container__product");
      navigateToProductDetails(products, data);

      logPagingData(endPointKey, paging);
    } else {
      productsContainer.innerHTML = `<h2 class="error-message">沒有符合您的商品</h2>`;
    }
  } catch (error) {
    console.error(error);
    productsContainer.innerHTML = `<h2 class="error-message">商品載入失敗</h2>`;
  }
}

// Change colour when the menu item is clicked
const changeColor = function (menuItem) {
  if (mediaQuery.matches) {
    menuItem.style.color = "#fff";
  } else {
    menuItem.style.color = "#8b572a";
  }
};

// Reset colour of menu items
const resetColor = function (menuItems) {
  for (const menuItem of menuItems) {
    if (mediaQuery.matches) {
      menuItem.style.color = "#828282";
    } else {
      menuItem.style.color = "#3f3a3a";
    }
  }
};

// Register event listener to each menu item
const switchDifferentMenuItem = function (
  menuItem,
  queryString,
  menuItems,
  url,
  object,
  value
) {
  menuItem.addEventListener("click", function () {
    window.history.pushState({}, {}, `./home?category=${queryString}`);
    resetColor(menuItems);
    changeColor(menuItem);
    logProductData(url, object, value);
  });
};

const menuOnHandleClick = () => {
  switchDifferentMenuItem(
    menuItemWomen,
    getObjectKey(endPoint, endPoint.women),
    menuItems,
    productsWomenAPI,
    endPoint,
    endPoint.women
  );

  switchDifferentMenuItem(
    menuItemMen,
    getObjectKey(endPoint, endPoint.men),
    menuItems,
    productsMenAPI,
    endPoint,
    endPoint.men
  );

  switchDifferentMenuItem(
    menuItemAccessories,
    getObjectKey(endPoint, endPoint.accessories),
    menuItems,
    productsAccessoriesAPI,
    endPoint,
    endPoint.accessories
  );
};

const reloadCategory = () => {
  // Reload each category to ensure the relevant products are rendered
  window.addEventListener("popstate", function () {
    location.reload();
  });
};

const searchOnHandleClick = () => {
  // Search Feature
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetColor(menuItems);
    let searchValue = searchBar.value;
    window.history.pushState({}, {}, `./home.html?q=${searchValue}`);
    logProductData(
      `https://${hostName}/api/${APIVersion}/products/search?keyword=${searchValue}`,
      endPoint,
      endPoint.search
    );

    searchBar.value = "";
  });
};

// Keep the same page when the page is reloaded
const staySamePage = function () {
  if (category === "women") {
    resetColor(menuItems);
    changeColor(menuItemWomen);
    logProductData(productsWomenAPI, endPoint, endPoint.women);
  } else if (category === "men") {
    resetColor(menuItems);
    changeColor(menuItemMen);
    logProductData(productsMenAPI, endPoint, endPoint.men);
  } else if (category === "accessories") {
    resetColor(menuItems);
    changeColor(menuItemAccessories);
    logProductData(productsAccessoriesAPI, endPoint, endPoint.accessories);
  } else if (q) {
    resetColor(menuItems);
    logProductData(searchAPI, endPoint, endPoint.search);
  } else {
    logProductData(productsAllAPI, endPoint, endPoint.all);
  }
};

const persistCart = () => {
  const cartNumber = document.querySelector(".cart__number");
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const totalQuantity = cartFromLocalStorage.reduce(
    (accumulator, currentObject) => accumulator + currentObject.prodQuantity,
    0
  );

  cartNumber.textContent = totalQuantity;
};

const navToProfile = () => {
  profileIcon.addEventListener("click", () => {
    window.location.assign("/profile");
  });
};

const init = () => {
  logCampaignData(campaignsAPI);
  menuOnHandleClick();
  reloadCategory();
  searchOnHandleClick();
  staySamePage();
  persistCart();
  navToProfile();
};

init();
