class Salad{
    constructor(){
        let cucumber = 2;
        let tomato = 2;
        let celery = 2;
        let spinach = 2;
        let salt = "pinch";
        let sauce = "some";
        let saladPic = document.querySelector(".result");
    }
    washAll(cucumber, tomato, celery, spinach){
        return new Promise(function(resolve, reject) {
            document.querySelector(".cut").addEventListener("click", ()=>{
                resolve("foo");
            });
          });  
    }
    cutAll(cucumber, tomato, celery, spinach){
        return new Promise(function(resolve, reject) {
            document.querySelector(".washed").addEventListener("click", ()=>{
                resolve("foo");
            });
          });  
    } 
    saltAll(salt){
        return new Promise(function(resolve, reject) {
            document.querySelector(".mixed").addEventListener("click", ()=>{
                resolve("foo");
            });
          });  
    }
    mixSauce(sauce){
        return new Promise(function(resolve, reject) {
            document.querySelector(".salted").addEventListener("click", ()=>{
                resolve("foo");
            });
          });  
    }
    allDone(){
        return Promise.all([
            this.washAll(), 
            this.cutAll(),
            this.saltAll(),
            this.mixSauce(),
         ])
    }
    endPic(){
   endPic.classList.toggle(".result");
}
}

let salad = new Salad();
salad.allDone().then(()=>endPic());


