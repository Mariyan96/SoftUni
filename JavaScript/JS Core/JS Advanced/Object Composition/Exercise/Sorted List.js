function sortedList() {
    return (() => {
        let arr = [];

        function add(num) {
            arr.unshift(num);
            sortCollection(arr);
            this.size++;
            return arr
        }

        function remove(index) {
            if (!isOutside(arr, index)) {
                arr.splice(index, 1);
                sortCollection(arr);
                this.size--;
                return arr;
            }
            throw new Error(["index was outside the bounds of the collection"]);
        }

        function get(index) {
            if (!isOutside(arr, index)) {
                let element = arr.slice(index, index+1);
                sortCollection(arr);
                return Number(element);
            }
            throw new Error(["index was outside the bounds of the collection"]);
        }

        function isOutside(collection, index) {
            if (index >= collection.length || index < 0) {
                return true;
            }
            return false;
        }

        function sortCollection(colection) {
            colection.sort((a, b) => a - b);
        }

        let size = 0;
        return {add, remove, get, size};
    })();
}

let collection = sortedList();
collection.add(3);