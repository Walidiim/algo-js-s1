class Pokemon {
    constructor(name, atk, def, pv,luck) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.pv = pv;
        this.luck = luck;
    }

    
    IsLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(Pokemon) {
       
        if (this.IsLucky()) {
            console.log(this.name + " a de la chance et esquive l'attaque !");
        } else {
            Pokemon.pv -= this.atk - Pokemon.def
        }
    }
}

let Magicarpe = new Pokemon("Magicarpe", 10, 4, 100, 0.1);
let Crisacier = new Pokemon("Crisacier", 9, 5, 100, 0.2);

while (Magicarpe.pv > 0 && Crisacier.pv > 0) {
    Magicarpe.attackPokemon(Crisacier);
    console.log("Crisacier a " + Crisacier.pv + " pv");

    if (Crisacier.pv <= 0) {
        console.log("Magicarpe a gagné avec " + Magicarpe.pv + " pv restants.");
        break;
    }

    Crisacier.attackPokemon(Magicarpe);
    console.log("Magicarpe a " + Magicarpe.pv + " pv");

    if (Magicarpe.pv <= 0) {
        console.log("Crisacier a gagné avec " + Crisacier.pv + " pv restants.");
        break;
    }
}
