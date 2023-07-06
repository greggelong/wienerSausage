
let saugs = []
function setup(){
    createCanvas(800, 800);
    //greg = new Sausage(width/4,height/2,100,25,65,10,color(0));
    //mj = new Sausage(width-width/4,height/2,100,25,65,10,color(255,0,0))
    for (let j =1; j<5; j++){
        saugs[j]=[]
        for(let i=1; i<5;i++){
            saugs[j][i] = new Sausage(j*160,i*160,50,10,30,10,color(0))
        }
    }

}

function draw(){
   background(255,1)
   for (let j =1; j<5; j++){
    for(let i =1; i<5;i++){
        saugs[j][i].move()
        saugs[j][i].show()
    }
}
//noLoop()
}