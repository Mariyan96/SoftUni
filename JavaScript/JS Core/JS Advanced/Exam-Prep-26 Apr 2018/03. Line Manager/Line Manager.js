class LineManager {
    constructor(busStops){
        this.busStops = busStops;
        this.currentStop=0;
        this.delay=0;
        this.totalTimeTravelled=0;
    }
    get atDepot(){
        return this.currentStop ===this._busStops.length-1;
    }
    get nextStopName(){
        if(this.atDepot){
            return 'At depot.'
        }
        return this._busStops[this.currentStop+1].name;
    }
    get currentDelay() {
        return this.delay
    }
    set busStops(array) {
        for (let stop of array) {
            if(typeof stop.timeToNext!=='number'
            ||typeof stop.name!=='string'||stop.name===''||stop.timeToNext<0){
                throw new Error("Invalid Object")
            }
        }
        this._busStops = array;
    }
    arriveAtStop(minutes){
        if(minutes<0||this.atDepot){
            throw new Error();
        }
        this.totalTimeTravelled+=minutes;
        this.delay+= minutes-this._busStops[this.currentStop].timeToNext;
        this.currentStop++;
        return !this.atDepot;
    }
    toString(){
        let line = this.atDepot?`- Course completed\n`:`- Next stop: ${this._busStops[this.currentStop + 1].name}\n`;
        return 'Line summary\n' +
            line +
            `- Stops covered: ${this.currentStop}\n` +
            `- Time on course: ${this.totalTimeTravelled} minutes\n` +
            `- Delay: ${this.delay} minutes`
    }

}
// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}
console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
// man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([
//     { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
// ]);
// Line summary
// - Next stop: Romanian Embassy
// - Stops covered: 0
// - Time on course: 0 minutes
// - Delay: 0 minutes
// Line summary
// - Next stop: TV Tower
// - Stops covered: 1
// - Time on course: 4 minutes
// - Delay: 0 minutes
// Line summary
// - Next stop: Interpred
// - Stops covered: 2
// - Time on course: 8 minutes
// - Delay: 2 minutes
// Line summary
// - Next stop: Dianabad
// - Stops covered: 3
// - Time on course: 12 minutes
// - Delay: 3 minutes
// Line summary
// - Next stop: Depot
// - Stops covered: 4
// - Time on course: 16 minutes
// - Delay: 3 minutes
// Line summary
// - Course completed
// - Stops covered: 5
// - Time on course: 20 minutes
// - Delay: 5 minutes
