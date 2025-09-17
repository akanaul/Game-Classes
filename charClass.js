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
        } else if (this.tipo == "guerreiro"){
            return console.log(`O ${this.tipo} atacou usando ${ataques[1]}`)
        } else if (this.tipo == "monge"){
            return console.log(`O ${this.tipo} atacou usando ${ataques[2]}`)
        } else if (this.tipo == "ninja"){
            return console.log(`O ${this.tipo} atacou usando ${ataques[3]}`)
        }

}
}
//tentar usando um método melhor outra hora para o ataque, talvez com uma estrutura de repetição
let heroIgnis = new hero("Ignis", 20, "ninja")
heroIgnis.atacar()