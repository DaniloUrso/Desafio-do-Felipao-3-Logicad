class heroiMitologico {
    constructor(heroi, idade, tipo, arma) {
        this.nome = heroi;
        this.idade = idade;
        this.tipo = tipo;
        this.poder = arma;
    }
    atacar(){
        let ataque;
        switch (this.tipo) {

        case "Mago":
        console.log(`O nosso heroi ${this.nome} o ${this.tipo} milenar, atacou usando ${this.poder} !`)
        break;

        case "Guerreiro":
        console.log(`O nosso heroi ${this.nome} o ${this.tipo} O Rei de toda a Terra Média, atacou usando sua ${this.poder} !`)
        break;

        case "Monja":
        console.log(`A nossa heroína ${this.nome} a ${this.tipo} dominadora dos 4 elementos, atacou usando a ${this.poder} !`)
        break;
        
        case "Ninja":
        console.log(`O nosso heroi ${this.nome} o ${this.tipo}, atacou usando ${this.poder} !`)
        break;
        default:
    }
}

}

let heroiMago = new heroiMitologico("Gandalf", 1700, "Mago", "Força devastadora do cajado")
let heroiGuerreiro = new heroiMitologico("Aragorn", 40, "Guerreiro", "Espada Andúril")
let heroinaMonja = new heroiMitologico("Monja Cohen", 76, "Monja", "Arte Marcial Forças da Meditação - Avatar")
let heroiNinja = new heroiMitologico("Hattori Hanzo", 45, "Ninja", "Shuriken")


heroiGuerreiro.atacar()



