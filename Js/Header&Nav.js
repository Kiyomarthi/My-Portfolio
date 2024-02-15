// SCOPE: onClickMenu-desktop & tablet
const menuIcon = document.getElementById("menuIcon");
const body = document.getElementById("body");
const header = document.getElementById("header");


// NOTE: added because the user cannot scroll on the page when extend nav mode
let scrollValue = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    scrollValue = window.scrollY;
  } else if (window.scrollY == 0) {
  }
});

/*
UNDONE: The codes related to clicking the icon in desktop and tablet mode have been completely changed...
UNDONE: ---Because the codes were not optimal and did not have standard conditions...
UNDONE: ---The codes were optimized and reconstructed for better readability and understanding.
*/
// TODO: please add lock-scroll on max-width: 576px
changeVisibility();
window.addEventListener("resize", changeVisibility);
function changeVisibility() {
  let navlinkTextStyle = document.getElementById("navlinkTextStyle"),
    navlinkTextStyleCss = window.getComputedStyle(navlinkTextStyle),
    navlinkTextStyleDisplay = navlinkTextStyleCss.getPropertyValue("display");
  if (window.innerWidth > 992) {
    if (navlinkTextStyleDisplay === "block") {
      menuIcon.setAttribute("data-visible", true);
      body.classList.remove("lock-scrollbar");
      window.scrollTo(0, scrollValue);
    } else if (navlinkTextStyleDisplay === "none") {
      menuIcon.setAttribute("data-visible", false);
      body.classList.remove("lock-scrollbar");
      window.scrollTo(0, scrollValue);
    }
  } else if (window.innerWidth <= 992 & window.innerWidth > 576) {
    if (navlinkTextStyleDisplay === "block") {
      menuIcon.setAttribute("data-visible", true);
      body.classList.add("lock-scrollbar");
      body.style.top = -scrollValue + "px";
    } else if (navlinkTextStyleDisplay === "none") {
      menuIcon.setAttribute("data-visible", false);
    }
  }
}


// TODO: please add lock-scroll on max-width: 576px
menuIcon.addEventListener("click", () => {
  const visibility = menuIcon.getAttribute("data-visible");
  const menuIconItem1 = document.getElementById("menuIconItem1");
  const menuIconItem2 = document.getElementById("menuIconItem2");
  const menuIconItem3 = document.getElementById("menuIconItem3");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  const nav = document.getElementById("nav");
  const width = document.getElementById("width");
  const marginNav = document.getElementById("marginNav");
  const bodyScroll = scrollY;
  const headerOne = document.getElementById("headerOne");
  const menuDarkBack = document.getElementById("menuDarkBack");
  const settingItemText = document.querySelectorAll(".setting-item-text");

  if (visibility === "true") {
    menuIcon.setAttribute("data-visible", false);
    if (window.innerWidth > 992) {
      closeDesktop();
      function closeDesktop() {
        width.classList.add("nav-width100");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.add("displayNone");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.add("displayNone");
        });
        headerOne.classList.add("padding-right-small-headerOne");
      }
    } else if (window.innerWidth <= 992) {
      closeTablet();
      function closeTablet() {
        width.classList.remove("nav-width-tablet");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.remove("displayBlock");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.remove("displayBlock");
        });
        menuDarkBack.classList.remove("menu-dark-back");

        navFix.classList.remove("fix-zindex");

        body.classList.remove("lock-scrollbar");
        window.scrollTo(0, scrollValue);
      }
    }
  } else if (visibility === "false") {
    menuIcon.setAttribute("data-visible", true);
    if (window.innerWidth > 992) {
      openDesktop();
      function openDesktop() {
        width.classList.remove("nav-width100");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.remove("displayNone");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.remove("displayNone");
        });
        headerOne.classList.remove("padding-right-small-headerOne");
      }
    } else if (window.innerWidth <= 992) {
      openTablet();
      function openTablet() {
        width.classList.add("nav-width-tablet");
        for (let x = 0; x < navlinkTextStyle.length; x++) {
          navlinkTextStyle[x].classList.add("displayBlock");
        }
        settingItemText.forEach((SIT) => {
          SIT.classList.add("displayBlock");
        });
        menuDarkBack.classList.add("menu-dark-back");

        navFix.classList.add("fix-zindex");

        body.classList.add("lock-scrollbar");
        body.style.top = -scrollValue + "px";
      }
    }
  }
});

// SCOPE: dark-backgraound-whenNav-expanded
menuDarkBack.addEventListener("click", () => {
  const settingItemText = document.querySelectorAll(".setting-item-text");
  const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
  menuIcon.setAttribute("data-visible", false);
  width.classList.remove("nav-width-tablet");
  for (let x = 0; x < navlinkTextStyle.length; x++) {
    navlinkTextStyle[x].classList.remove("displayBlock");
  }
  settingItemText.forEach((SIT) => {
    SIT.classList.remove("displayBlock");
  });
  menuDarkBack.classList.remove("menu-dark-back");

  navFix.classList.remove("fix-zindex");
  body.classList.remove("lock-scrollbar");
  window.scrollTo(0, scrollValue);
});

// SCOPE: navHeight
window.addEventListener("resize", navbarHeight);
navbarHeight();
function navbarHeight() {
  const navbarNav = document.getElementById("navbarNav");
  let heightnav = window.innerHeight;
  let searchUl = document.getElementById("searchUl");
  if (window.innerWidth > 576) {
    searchUl.style.height = heightnav - 44 + "px";
    console.log("nav")
  } else if (window.innerWidth < 577) {
    searchUl.style.height = "fit-content";
    console.log("fit")
  }
}

// SCOPE: menu-icon-mobile
const menuIconMobile = document.getElementById("menuIconMobile");

menuIconMobile.addEventListener("click", () => {
  const visibilityMobile = menuIconMobile.getAttribute("data-visible");
  const menuIconItem1Mobile = document.getElementById("menuIconItem1Mobile");
  const menuIconItem2Mobile = document.getElementById("menuIconItem2Mobile");
  const menuIconItem3Mobile = document.getElementById("menuIconItem3Mobile");
  const menuIconItem4Mobile = document.getElementById("menuIconItem4Mobile");
  const root = document.querySelector(":root");
  const taskbarMobile = document.getElementById("taskbarMobile");
  const arrowUpIcon = document.getElementById("arrowUpIcon");
  const searchBoxDiv = document.getElementById("searchBoxDiv");
  const searchUl = document.getElementById("searchUl");

  if (visibilityMobile === "false") {
    // NOTE: The menu is false and closed, the mobile opens with a click
    // SCOPE: menuiconanimate {(in: menu-icon-mobile)}
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate2");

    // SCOPE: navHeight-for-mobile {(in: menu-icon-mobile)}
    nav.classList.add("mobile-nav-height");

    taskbarMobile.classList.add("taskbar-borderup");

    navbarNav.classList.add("navbar-nav-block-mobile");

    arrowUpIcon.classList.add("arrowup-toleft");

    menuDarkBack.classList.add("menu-dark-back");

    searchBoxDiv.classList.add("display-none-search-div");


    searchUl.classList.remove("disply-none-searchUl");

    menuIconMobile.setAttribute("data-visible", true);
  } else if (visibilityMobile === "true") {
    // NOTE: The menu is open and closes with a click

    // SCOPE: menuiconanimate {(in: menu-icon-mobile)}
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");
    menuIconItem1Mobile.classList.add("menu-icon-item1-mobile-animate2");
    menuIconItem2Mobile.classList.add("menu-icon-item2-mobile-animate2");
    menuIconItem3Mobile.classList.add("menu-icon-item3-mobile-animate2");
    menuIconItem4Mobile.classList.add("menu-icon-item4-mobile-animate2");

    // SCOPE: navHeight-for-mobile {(in: menu-icon-mobile)}
    nav.classList.remove("mobile-nav-height");

    taskbarMobile.classList.remove("taskbar-borderup");

    navbarNav.classList.remove("navbar-nav-block-mobile");

    arrowUpIcon.classList.remove("arrowup-toleft");
    menuDarkBack.classList.remove("menu-dark-back");

    searchBoxDiv.classList.remove("display-none-search-div");

    searchUl.classList.add("disply-none-searchUl");

    menuIconMobile.setAttribute("data-visible", false);
  }
});

// SCOPE: navHeight-for-mobile
window.addEventListener("resize", mobileNavHeightF);
mobileNavHeightF();
function mobileNavHeightF() {
  const root = document.querySelector(":root");
  let mobileNavHeight = window.innerHeight - 20 + "px";
  root.style.setProperty("--mobile-nav-height", mobileNavHeight);
}

// SCOPE: arrow-up-click
const arrowUpIcon = document.getElementById("arrowUpIcon");
arrowUpIcon.addEventListener("click", () => {
  const arrowUpIcontrans =
    getComputedStyle(arrowUpIcon).getPropertyValue("transform");
  const menuIconItem1Mobile = document.getElementById("menuIconItem1Mobile");
  const menuIconItem2Mobile = document.getElementById("menuIconItem2Mobile");
  const menuIconItem3Mobile = document.getElementById("menuIconItem3Mobile");
  const menuIconItem4Mobile = document.getElementById("menuIconItem4Mobile");
  const root = document.querySelector(":root");
  const taskbarMobile = document.getElementById("taskbarMobile");
  const nav = document.getElementById("nav");
  const navbarNav = document.getElementById("navbarNav");

  if (arrowUpIcontrans == "matrix(1, 0, 0, 1, 0, 0)") {
    // NOTE: (up key) in this case, the menu is closed and it is directed to the top of the page by clicking. (TO UP)
    arrowUpIcon.setAttribute("href", "#");
  } else if (
    arrowUpIcontrans === "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)" ||
    arrowUpIcontrans === "matrix(0, -1, 1, 0, 0, 0)"
  ) {
    //NOTE: (return key) in this mode, the menu is opened and the menu is closed by clicking (return mode)
    menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
    menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
    menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
    menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");

    nav.classList.remove("mobile-nav-height");

    taskbarMobile.classList.remove("taskbar-borderup");

    navbarNav.classList.remove("navbar-nav-block-mobile");

    arrowUpIcon.classList.remove("arrowup-toleft");
    arrowUpIcon.setAttribute("href", "#don'tgoup");

    menuDarkBack.classList.remove("menu-dark-back");

    menuIconMobile.setAttribute("data-visible", false);
  }
});

// SCOPE: Active-linkItem
// NOTE: When it is clicked, the active will be transferred to it

let section = document.querySelectorAll(".section-main");
const navItem = document.querySelectorAll("#navItem");
function activeLink(li) {
  navItem.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

// UNDONE: added because the user cannot scroll on the page when extend nav mode ane this is new code:
//  TODO: This code and function is not standard, please create a code with better logic later.
window.onscroll = () => {
  if (window.scrollY != 0) {
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset - 150 && top < offset + height) {
        const target = document.querySelector(`[href='#${id}']`).parentElement;
        activeLink(target);
      }
    });
  }
};

// NOTE: Closing the menu in tablet and mobile mode by clicking on the items
navItem.forEach((NI) => {
  NI.addEventListener("click", () => {
    const navlinkTextStyle = document.querySelectorAll(".navlink-text-style");
    if (window.innerWidth <= 992) {
      const menuIconItem1Mobile = document.getElementById(
        "menuIconItem1Mobile"
      );
      const menuIconItem2Mobile = document.getElementById(
        "menuIconItem2Mobile"
      );
      const menuIconItem3Mobile = document.getElementById(
        "menuIconItem3Mobile"
      );
      const menuIconItem4Mobile = document.getElementById(
        "menuIconItem4Mobile"
      );
      const settingItemText = document.querySelectorAll(".setting-item-text");
      menuIconItem1Mobile.classList.remove("menu-icon-item1-mobile-animate");
      menuIconItem2Mobile.classList.remove("menu-icon-item2-mobile-animate");
      menuIconItem3Mobile.classList.remove("menu-icon-item3-mobile-animate");
      menuIconItem4Mobile.classList.remove("menu-icon-item4-mobile-animate");
      nav.classList.remove("mobile-nav-height");
      menuIcon.setAttribute("data-visible", false);

      taskbarMobile.classList.remove("taskbar-borderup");

      navbarNav.classList.remove("navbar-nav-block-mobile");

      arrowUpIcon.classList.remove("arrowup-toleft");
      menuDarkBack.classList.remove("menu-dark-back");

      searchBoxDiv.classList.remove("display-none-search-div");

      menuIcon.setAttribute("data-visible", false);
      width.classList.remove("nav-width-tablet");
      for (let x = 0; x < navlinkTextStyle.length; x++) {
        navlinkTextStyle[x].classList.remove("displayBlock");
      }
      settingItemText.forEach((SIT) => {
        SIT.classList.remove("displayBlock");
      });
      menuDarkBack.classList.remove("menu-dark-back");

      navFix.classList.remove("fix-zindex");
      body.classList.remove("lock-scrollbar");
      window.scrollTo(0, scrollValue);
    }
  });
});

// undone: قبلا اینجا ساعت داشته که برش داشتم

