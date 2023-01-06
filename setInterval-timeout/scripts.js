const timer = setInterval(action => {console.log(new Date().toString())}, 1000);

setTimeout(action => {
    clearInterval(timer)
}, 5000)

setTimeout(action => {
    console.log("Fui antes")
}, 500)