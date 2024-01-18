const pDiv = document.querySelector(".p-div");
const background = getComputedStyle(document.body).background;

for (const pDivElement of pDiv.children) {
    pDivElement.style.background = background;
    document.style
}