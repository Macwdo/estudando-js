function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),
        btnDel: document.querySelector("btn-del"),

        inicia(){
            this.clickButton();
            this.pressEnter();
            this.pressSpace();
        },

        pressEnter(){
            this.display.addEventListener("keyup", e => {
                if (e.keyCode === 13){
                    this.doCalculation();
                }
            })
        },

        pressSpace(){
            this.display.addEventListener("keydown", e => {
                if (e.keyCode === 32){
                    this.clearDisplay();
                }
            })
        },
        
        clearDisplay(){
            this.display.value = "";
        },

        delOneChar(){
            this.display.value = this.display.value.slice(0, -1);
        },

        doCalculation(){
            try {
                this.display.value = eval(this.display.value).toFixed(2);
            }
            catch(e){
                alert("Conta Invalída.")
            }
        },

        clickButton(){
            document.addEventListener("click", (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.delOneChar();
                }

                if (el.classList.contains('btn-equal')){
                    this.doCalculation()
                }
            })
        },

        btnToDisplay(value) {
            this.display.value += value;
        }
        
    };

};

const calculadora = criaCalculadora();

calculadora.inicia();
