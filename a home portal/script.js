/* JavaScript for the year and update */
let dateNow = new Date();
document.querySelector("#currentYear").textContent = dateNow.getFullYear();

document.querySelector("#lastUpdate").textContent = document.lastModified;