
document.getElementById("enterBtn").addEventListener("click", () => {
  document.querySelector(".navbar").scrollIntoView({ behavior: "smooth" });
});


const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    
    sections.forEach(sec => {
      sec.classList.remove("visible");
      if(sec.id === item.dataset.target){
        sec.classList.add("visible");
      }
    });
  });
});
