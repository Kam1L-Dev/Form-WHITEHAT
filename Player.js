class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.main=null
    }

    countGet(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
            playerCount=data.val()
            
        }
        
        )
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance 
           
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
}