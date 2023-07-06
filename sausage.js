class Sausage{
    constructor(px,py,radius,minsz,maxsz,sp, clr){
        this.x =px;
        this.y =py;
        this.radius = radius
        this.minsz =minsz
        this.maxsz = maxsz
        this.clr = clr;
        this.sp = sp // speed
        this.px =px; //position of center of the system
        this.py = py // need these as origin so we can measure radius

    }

    move(){
        let dx = random(-this.sp,this.sp)
        let dy = random(-this.sp,this.sp)
        this.x += dx;
        this.y += dy;
        let dfy = dist(this.x, this.y,this.x, this.py);
        //print(dfy, this.radius,this.sp)
        let dfx = dist(this.x,this.y,this.px,this.y)
        if (dfy > this.radius) {
            dy*=-1; 
            this.y+=dy
            //this.y = this.py
            //print("bing")
         }
         if (dfx > this.radius) {
            dx*=-1;
            this.x+=dx;
            //this.x = this.px
           // print("bong")
         }

         }

    show(){
        let sz = random(this.minsz,this.maxsz);
        noStroke()
        fill(this.clr);
        ellipse(this.x,this.y,sz);

    }
}