class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque básico";
    }

    console.log("o " + this.tipo + " atacou usando " + ataque);
  }
}

// criando vários heróis (classes e objetos)
let heroiMago = new Heroi("Merlin", 150, "mago");
let heroiGuerreiro = new Heroi("Thorg", 30, "guerreiro");
let heroiMonge = new Heroi("Li", 40, "monge");
let heroiNinja = new Heroi("Ryu", 25, "ninja");

// laço de repetição para atacar com todos
let listaDeHerois = [heroiMago, heroiGuerreiro, heroiMonge, heroiNinja];

for (let i = 0; i < listaDeHerois.length; i++) {
  listaDeHerois[i].atacar();
}
