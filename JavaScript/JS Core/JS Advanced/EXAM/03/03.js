class BookCollection {
    constructor(shelfGenre,room,shelfCapacity){
        this._room = room;
        this.shelf=[];
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
    }
    set _room(value) {
        switch (value){
            case 'livingRoom':
                this.room=value;
                break;
            case 'closet':
                this.room=value;
                break;
            case 'bedRoom':
                this.room=value;
                break;
            default:
                let err =`Cannot have book shelf in ${value}`;
                throw err;
        }
    }
    addBook(bookName, bookAuthor, bookGenre){
        let book={}
        if(bookGenre!==undefined){
            book = {bookName:bookName,bookAuthor:bookAuthor,bookGenre:bookGenre};
        }
        else{
            book = {bookName:bookName,bookAuthor:bookAuthor};
        }
        if(this.shelfCapacity!==0){
            this.shelf.push(book);
            this.shelfCapacity--;
        }else{
            this.shelf.shift();
            this.shelf.push(book);
        }
        this.shelf.sort(compare);
        function compare(a,b) {
            if (a.bookAuthor < b.bookAuthor)
                return -1;
            if (a.bookAuthor > b.bookAuthor)
                return 1;
            return 0;
        }
    }
    throwAwayBook(bookName){
        for (let i = 0; i < this.shelf.length; i++) {
            if(this.shelf[i].bookName===bookName){
                this.shelf.splice(i,1);
                this.shelfCapacity++;
                return;
            }
        }
    }
    showBooks(genre){
        if(genre!==undefined){
            let result =[];
            let resultText=`Results for search "${genre}":`;
            for (let book of this.shelf) {
                if(book.bookGenre===genre){
                    resultText+=`\n\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`
                }
            }
            return resultText;
        }
    }
    toString(){
        let output;
        if(this.shelf.length===0){
            return `It's an empty shelf`;
        }else{
            output=`"${this.shelfGenre}" shelf in ${this.room} contains:`;
            for (let book of this.shelf) {
                output+=`\n\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`
            }
        }
        return output;
    }
    get shelfCondition(){
        return this.shelfCapacity;
    }
}
let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
