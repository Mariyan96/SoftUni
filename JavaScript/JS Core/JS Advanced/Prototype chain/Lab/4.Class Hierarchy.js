function result() {
    class Figure{
        constructor(){
            if(new.target===Figure){
                throw new Error();
            }
        }
        toString(){
            return `${this.constructor.name}`;
        }
        get area() {
            return undefined;
        }
    }
    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius=radius;
        }
        get area(){
            return Math.PI*(this.radius**2);
        }
        toString(){
            return super.toString()+` - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure{
        constructor(width,height){
            super();
            this.width=width;
            this.height=height;
        }
        get area(){
            return this.width*this.height;
        }
        toString(){
            return super.toString()+` - width: ${this.width}, height: ${this.height}`;
        }
    }
    return {Figure,Circle,Rectangle}
}
let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;
let r = new Rectangle(3,4);
let c = new Circle(5);
console.log(r.area);
console.log(c.area);