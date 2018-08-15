function solve() {
    class Balloon{
        constructor(color,gasWeight){
            this._color=color;
            this._gasWeight=Number(gasWeight);
        }
        get color(){
            return this._color;
        }
        get gasWeight(){
            return this._gasWeight;
        }
        set color(value){
            this._color=value;
        }
        set gasWeight(value){
            this._gasWeight=Number(value);
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight);
            this._ribbonColor=ribbonColor;
            this._ribbonLength=Number(ribbonLength);
        }
        get ribbon(){
            return {color:this._ribbonColor,
                    length:this._ribbonLength};
        }
    }
    class BirthdayBalloon extends  PartyBalloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength,text){
            super(color,gasWeight,ribbonColor,ribbonLength);
            this._text=text;
        }
        get text(){
            return this._text;
        }
    }
    return {Balloon,PartyBalloon,BirthdayBalloon};
}