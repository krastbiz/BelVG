


$(document).ready(function () {
  promo();
  sideMenu();
  fixSlideTitle();
})

function sideMenu() {
  const menuActiveClass = "header-sidebar--active";
  const dropdownActiveClass = "header-nav__dropdown--active";

  $(".header-toggle-menu").on('click', toggleMenuClick);
  $(".header-sidebar__menu-overlay").on('click', overlayClick);

  $(".header-nav__dropdown").on('click', menuDropdownClick);

  $(".header-toggle-search").on('click', searchIconClick)

  function toggleMenuClick() {
    toggleSidebar();
  }
  
  function overlayClick() {
    toggleSidebar();
  }
  
  function toggleSidebar() {
    $(".header-sidebar").toggleClass(menuActiveClass);
  }

  function searchIconClick() {
    toggleSidebar();
    const searchInput = $(".header-sidebar__menu").find(".search-form__input");
    if (searchInput) {
      searchInput.focus();
    }
  }
  
  function menuDropdownClick(e) {
  
    let submenu = e.target.closest(".header-nav__submenu");
    if (submenu) {
      return;
    }
  
    let dropdown = e.target.closest(".header-nav__dropdown");
    $(dropdown).toggleClass(dropdownActiveClass);
  }
}

function promo() {
  $(".promo__close").on("click", function() {
    $(".promo").remove();
  });
};

//fixes different height in slide title
function fixSlideTitle() {
  let slides = $(document).find(".recommend-item");

  const getSlideTitle = (slide) => {
    return $(slide).find(".recommend-title");
  }
  
  //find max slide title height
  let maxTitleHeight = 0;
  [].forEach.call(slides, (slide) => {
    const height = getSlideTitle(slide).height();

    if (height > maxTitleHeight) {
      maxTitleHeight = height;
    }
  });

  //set max height to all slides title
  [].forEach.call(slides, (slide) => {
    getSlideTitle(slide).height(maxTitleHeight);
  });
}