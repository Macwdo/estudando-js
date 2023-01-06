const paragrafos = document.querySelectorAll("p")
const estilosBody = getComputedStyle(document.body);

for(let i in paragrafos){
    paragrafos[i].style.color = "white";
    paragrafos[i].style.backgroundColor = estilosBody.backgroundColor
}
