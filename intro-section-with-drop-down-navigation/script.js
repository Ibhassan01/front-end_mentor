const sidemenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".close")

const mFeatures = document.getElementById("mobile-features")
const mCompany = document.getElementById("mobile-company")
const msubEl = document.querySelector(".mobile-sub-menu .mobile-sub")
const mCompanySubEl = document.querySelector(".mobile-company-sub-menu .mobile-company-sub")
const mArrowEl = document.getElementById("mobile-arrow")
const mSecondArrowEl = document.getElementById("mobile-company-arrow")

const features = document.getElementById("features")
const company = document.getElementById("company")
const subEl = document.querySelector(".sub-menu .sub")
const companySubEl = document.querySelector(".company-sub-menu .company-sub")
const arrowEl = document.getElementById("arrow")
const secondArrowEl = document.getElementById("company-arrow")

mFeatures.addEventListener("click", () => {
    msubEl.classList.toggle("hide")
    mArrowEl.classList.toggle("rotate")
})
mCompany.addEventListener("click", () => {
    mCompanySubEl.classList.toggle("hide")
    mSecondArrowEl.classList.toggle("rotate")
})

features.addEventListener("click", () => {
    subEl.classList.toggle("hide")
    arrowEl.classList.toggle("rotate")
})
company.addEventListener("click", () => {
    companySubEl.classList.toggle("hide")
    secondArrowEl.classList.toggle("rotate")
})

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-100%";
}
