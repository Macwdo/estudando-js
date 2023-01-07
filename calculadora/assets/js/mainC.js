function Calculadora() {
    const display = document.querySelector(".display");
    const btnClear = document.querySelector(".btn-clear");
    const btnDel = document.querySelector("btn-del");

    this.inicia = () => {
        clickButton();
        pressEnter();
        pressSpace();
    };

    function pressEnter () {
        display.addEventListener("keyup", e => {
            if (e.keyCode === 13){
                doCalculation();
            }
        })
    }

    function pressSpace () {
        display.addEventListener("keydown", e => {
            if (e.keyCode === 32){
                clearDisplay();
            }
        })
    }
    
    function clearDisplay () {
        display.value = "";
    }

    function delOneChar (){
        display.value = display.value.slice(0, -1);
    }

    function doCalculation () {
        try {
            display.value = eval(display.value).toFixed(2);
        }
        catch(e){
            alert("Conta Invalída.")
        }
    }

    function clickButton () {
        document.addEventListener("click", (e) => {
            const el = e.target;
            if(el.classList.contains('btn-num')){
                btnToDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                delOneChar();
            }

            if (el.classList.contains('btn-equal')){
                doCalculation()
            }
        })
    }

    btnToDisplay = (value) =>{
        display.value += value;
    }

};

const calculadora = new Calculadora();

calculadora.inicia();