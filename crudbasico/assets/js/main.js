const searchterm = document.querySelector(".search")
const form = document.querySelector(".form")

const listaItem = [];



function loadItems () {    
    const storageItems = JSON.parse(localStorage.getItem("list"));
    let total = "";
    for (let i in storageItems){
        total += `<li>${storageItems[i]} <input type="button" value="Apagar" class="id-${i}"/><br>`;
    }
    document.querySelector(".contents").innerHTML = total;
    
}

loadItems()

function deleteItem (e) {
    const elemVal = String(e.target.className).search("id");
    const elem = e.target.className
    if(elemVal === 0){
        listaItem.splice(elem.at(-1), 1)
        let listaJSON = JSON.stringify(listaItem);
        localStorage.setItem("list", listaJSON)
        loadItems()
    }
}

function submitItem() {
    const val = searchterm.value;
    listaItem.push(val);
    let listaJSON = JSON.stringify(listaItem);
    localStorage.setItem("list", listaJSON)
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    submitItem()

})

document.addEventListener("click", function(e) {
    deleteItem(e);
})

document.addEventListener("submit",res => {
    loadItems();
})
