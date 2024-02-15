const darkModeSetting = document.getElementById("darkModeSetting");

darkModeSetting.addEventListener("click", darkModeSettingF);
function darkModeSettingF() {
  const darkModeVisiblity = darkModeSetting.getAttribute("mode");
  const darkMOdeStyleLink = document.getElementById("darkMOdeStyleLink");

  if (darkModeVisiblity === "false") {
  // NOTE: The mode is light and becomes dark with a click
    darkMOdeStyleLink.setAttribute("href" , "Style/Dark-Mode.css");
    
    darkModeSetting.classList.add("active-setting");

    darkModeSetting.setAttribute("mode", true);
  } else if (darkModeVisiblity === "true") {
     // NOTE: The mode is dark and becomes light with a click
    darkMOdeStyleLink.setAttribute("href" , "");
    darkModeSetting.classList.remove("active-setting");

    darkModeSetting.setAttribute("mode", false);
  }
}
