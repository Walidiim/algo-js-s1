class Personnage {
    constructor(name,sanity){
        this.name = name;
        this.sanity = sanity;
    }
traject(playlist){
    console.log(playlist)
    let NbrChangeTaxi = 0
    let RedLightsNbr = 0


    while (RedLightsNbr < 30 && this.sanity > 0) {
        RedLightsNbr += 1
        let rand = Math.floor(Math.random() * playlist.length) 
        let randomMusics = playlist[rand]
        console.log(randomMusics + " passe à la radio")
        console.log("Jhon à passé " + RedLightsNbr+ " feu rouge") 
        
        
    if (randomMusics == "Anissa - Wejdene"){
        this.sanity -= 1
        NbrChangeTaxi += 1
            console.log("anissa est passé à la radio")
            console.log("John change de taxi" + ", il a changé "+ NbrChangeTaxi + " fois de taxi")
            console.log("John a "+ this.sanity + " de santé mental")
    }
    if(this.sanity===0){
        console.log(" explosion ! ")
        break
    }
    if (RedLightsNbr===30){
        console.log("John est arrivé chez lui, il a "+ this.sanity+ " de santé mental" + ", il a changé "+ NbrChangeTaxi + " fois de taxi")
    }
       
    }
}
}

let John = new Personnage("John", 10);
let Musique = ["Djamel - Dosseh","Anissa - Wejdene","LESSGUI - Luther","Guerilla - Soolking","Tchoin  - Kaaris"]

console.log(John.name + " à encore " + John.sanity + " de santé mental")
console.log(Musique)
John.traject(Musique)




    