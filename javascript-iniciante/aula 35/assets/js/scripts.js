const elements = [
    {tag: "h1", text: "Frase 0"},
    {tag: "p", text: "Frase 1"},
    {tag: "div", text: "Frase 2"},
    {tag: "footer", text: "Frase 3"},
    {tag: "section", text: "Frase 4"}
];

for (let i = 0; i < elements.length; i++) {
    const elementArray = elements[i]
    const element = document.createElement(elementArray.tag);
    element.innerHTML = elementArray.text;

    document.querySelector(".container").appendChild(element);
}