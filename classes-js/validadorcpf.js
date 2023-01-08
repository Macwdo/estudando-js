class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: true,
            configurable: true,
            value: cpf.replace(/\D+/g, ''),
            enumerable: true
        })
    }


    geraNovoCPF(){
        const cpfLimpo = this.cpfLimpo;
        const digito1 = ValidaCpf.geraDigito(cpfLimpo.slice(0, -2));
        const digito2 = ValidaCpf.geraDigito(cpfLimpo.slice(0, -2) + digito1);
        const novoCpf = cpfLimpo.slice(0, -2) + digito1 + digito2;
        return cpfLimpo === novoCpf;

    }

    static geraDigito(cpfSChar){
        let indRev = cpfSChar.length + 1;
        let tot = 0;
        for (let strNum of cpfSChar){
            tot += indRev * Number(strNum);
            indRev--
        };
        tot = 11 - (tot % 11)
        return tot >= 10 ? 0: tot;
    }

    isSequence(){
        return this.cpfLimpo.charAt(1).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    validar(){
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
        if(!this.geraNovoCPF())return false;
        return true;
    }
}

const cp1 = new ValidaCpf("197.951.997-81")

console.log(cp1.validar());


