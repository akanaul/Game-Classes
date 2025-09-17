class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataques = ["magia","espada","artes marciais","shuriken"]
        if(this.tipo == "mago"){
            return console.log(`O ${this.tipo} atacou usando ${ataques[0]}`)
        }

}
}

let heroIgnis = new hero("Ignis", 20, "mago")
heroIgnis.atacar()