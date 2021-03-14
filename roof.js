class Roof{
    constructor(x,y,width,height){
     var options={
         isStatic:true
       }
     this.roof =Bodies.rectangle(x,y,width,height) ;
     this.width = width;
     this.height= height;
     World.add(world,this.roof);
    }
    display(){
        var pos = this.roof.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}