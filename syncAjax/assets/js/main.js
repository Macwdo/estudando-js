const request = obj => {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send();
        // xhr.onload = function () === V V V 
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else {
                reject({
                    code: xhr.status, 
                    msg: xhr.statusText
                })
            }
        })

    })
}

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if (tag === 'a'){
        loadPage(el)
    }
})

async function loadPage(e){
    const href = e.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href
    }

    // request(objConfig).then(response => {
    //     loadResult(response)
    // }).catch(e => console.log(e))
    // Without async - await

    const response = await request(objConfig);
    loadResult(response)


}

function loadResult(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML =  response
}

