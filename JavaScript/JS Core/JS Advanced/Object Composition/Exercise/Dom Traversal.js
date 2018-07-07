function colorize(selector) {
    let container = $(selector);
    let bestDepth=-Infinity;
    let bestSelector;
    findDeepestChild(0,container)
    function findDeepestChild(depth,selector) {
        if(depth>bestDepth){
            bestDepth=depth;
            bestSelector=selector;
        }
        let children = selector.children()
        for (let child of children) {
            findDeepestChild(depth+1,$(child))
        }
    }
    while (true){
        bestSelector.addClass('highlight');
        if(bestSelector.attr('id')===container.attr('id')){
            return
        }else{
            bestSelector=bestSelector.parent();
        }
    }
}
   