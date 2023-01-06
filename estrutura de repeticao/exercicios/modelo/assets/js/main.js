const elems = [
    {tag: "p", texto:"Frase 1"},
    {tag: "div", texto:"Frase 2"},
    {tag: "footer", texto:"Frase 3"},
    {tag: "section", texto:"Frase 4"}
];

for (let i=0;i<elems.length;i++){
    document.querySelector(".content").innerHTML += `<${elems[i].tag}> ${elems[i].texto} </${elems[i].tag}>`
};
// "p"
// "div"
// "footer"
// "section"