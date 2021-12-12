(function(){
    function Calculadora (){
        this.display = document.getElementById('display')
        this.clearDisplay = ()=> this.display.value = '';
        this.delet = () => this.display.value = this.display.value.slice(0, -1);
        this.calc = () =>{
            try{
            this.display.value = eval(this.display.value)
            }catch{
                alert('Conta invalida')
                this.clearDisplay()
            }
        }
        this.event = addEventListener('click', event => {
            const element = event.target
            if(element.classList.contains('num')) this.display.value += element.innerText;
            if(element.classList.contains('clear')) this.clearDisplay();
            if(element.classList.contains('delete')) this.delet()
            if(element.classList.contains('igual')) this.calc()
        })
    }

    const calculadora = new Calculadora()

})()