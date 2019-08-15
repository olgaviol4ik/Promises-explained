class Salad{
    constructor(){
        this.cucumber = 2;
        this.tomato = 2;
        this.celery = 2;
        this.spinach = 2;
        this.salt = "pinch";
        this.sauce = "some";
    }
    washAll(veggies){ //veggies is an array
        return new Promise(function(resolve, reject) {
            document.querySelector(".cut").addEventListener("click", ()=>{
                resolve(veggies);
            });
          });  
    }
    cutAll(veggies){
        return new Promise(function(resolve, reject) {
            document.querySelector(".washed").addEventListener("click", ()=>{
                resolve(veggies);
            });
          });  
    } 
    saltAll(salt){
        return new Promise(function(resolve, reject) {
            document.querySelector(".mixed").addEventListener("click", ()=>{
                resolve(salt);
            });
          });  
    }
    mixSauce(sauce){
        return new Promise(function(resolve, reject) {
            document.querySelector(".salted").addEventListener("click", ()=>{
                resolve(sauce);
            });
          });  
    }
    allDone(){
        return Promise.all([
            this.washAll([this.cucumber, this.tomato, this.celery, this.spinach]), //our array veggies
            this.cutAll([this.cucumber, this.tomato, this.celery, this.spinach]),
            this.saltAll(this.salt),
            this.mixSauce(this.sauce),
         ])
    } 
}
let saladPic = document.querySelector(".result");

let salad = new Salad();
salad.allDone().then((values)=>{
    console.log(values)
    saladPic.style.display="block";
    window.scrollTo(0,document.body.scrollHeight)
});

