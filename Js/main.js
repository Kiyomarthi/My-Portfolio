// NOTE: This is for the first section, the hum, to determine its height
const homeSecParg = document.getElementById("homeSecParg");
homeSecPargF();
window.addEventListener("resize", homeSecPargF);
function homeSecPargF() {
  const homeSecPargHei = window.getComputedStyle(homeSecParg);
  const bb = homeSecPargHei.getPropertyValue("height");

  if (
    (window.innerWidth > 576) &
    (window.innerHeight > 510) &
    (window.innerHeight < 2001) &
    (window.innerWidth < 4001)
  ) {
    homeSecParg.style.height = window.innerHeight - 160 + "px";
  } else if (window.innerWidth <= 576) {
    homeSecParg.style.height = "fit-content"
  }
}








const skillSecUL1 = document.getElementById("skillSecUL1");
const skillSecUL1Item = skillSecUL1.querySelectorAll("li");

skillSecUL1Item.forEach((SSU1I) => {
  SSU1I.addEventListener("click", () => {
    skillSecUL1.querySelector(".activeSSU1").classList.remove("activeSSU1");
    SSU1I.classList.add("activeSSU1")
    
    const skillSecMa = document.querySelectorAll("#skillSecMa");
    skillSecMa.forEach((SSM) => {
      const SSU1IV = SSU1I.getAttribute('value');
      const SSMV = SSM.getAttribute("value");
      if(SSMV == SSU1IV){
        SSM.style.display="block";

      }else if(SSMV != SSU1IV){
        SSM.style.display="none";
      }

    })
    
  })
})





//NOTE: for update page in search
const search = document.getElementById("search");
const popUpdate = document.getElementById("popUpdate");
const butCloPop = document.getElementById("butCloPop");

search.addEventListener('click' , () => {
  popUpdate.setAttribute('open', '')
})

butCloPop.addEventListener('click' , () => {
  popUpdate.removeAttribute('open')
})