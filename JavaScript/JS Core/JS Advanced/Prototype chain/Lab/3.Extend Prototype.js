function extendingPrototype(cl) {
    cl.prototype.species='Human';
    cl.prototype.toSpeciesString=function () {
        return `I am a ${this.species}. `+this.toString();
    }
}