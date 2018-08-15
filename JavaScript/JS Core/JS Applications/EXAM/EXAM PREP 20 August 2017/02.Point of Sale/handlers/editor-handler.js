handlers.getEditor= async function (ctx) {
    try {
        const userId=sessionStorage.getItem('userId');
        let [receipt] = await receiptServices.getActive(userId);
        if(!receipt){
            receipt=receiptServices.createReceipt();
        }
        let entries =await entriesService.getAllByReceiptId(receipt._id);
        if (entries.length>0){
            entries.forEach(e=>{
                e.subtotal=(e.price*e.quantity).toFixed(2);
            });
            ctx.total=entries.map(e=>+e.subtotal).reduce((a,b)=>a+b);
            ctx.productsCount=entries.length;
        }else{
            ctx.productsCount=0;
            ctx.total=0;
        }
        ctx.entries=entries;
        ctx.receiptId=receipt._id;
        ctx.username = sessionStorage.getItem('username')
        ctx.loadPartials({
            header:'./templates/common/header.hbs',
            footer:'./templates/common/footer.hbs',
            checkOut:'./templates/forms/checkOut.hbs',
            entryForm:'./templates/forms/entryForm.hbs',
            entry:'./templates/forms/entry.hbs'
        }).then(function () {
            this.partial('./templates/createReceipt.hbs');
        })

    }catch(err){
        console.log(err);
    }
}
handlers.createEntry=function (ctx) {
    const type = ctx.params.type;
    const quantity = ctx.params.quantity;
    const price = ctx.params.price;
    const receiptId = ctx.params.receiptId;
    console.log(ctx.params);
    if(type.length===0){
        notify.showError('Product name must be non-empty string')
        return;
    }
    if(isNaN(+quantity)) {
        notify.showError('Quantity must be a number')
        return

    }
    if(isNaN(+price)){
        notify.showError('Price must be a number')
        return;
    }
    entriesService.create(type,quantity,price,receiptId,entryId).then(function () {
        notify.showInfo('Entry crated');
        ctx.redirect('#/editor')
    })
};
handlers.removeEntry=function (ctx) {
    entriesService.remove(ctx.params.entryId).then(function () {
        ctx.redirect('#/editor')
       notify.showInfo('Entry Deleted');
    });
}
handlers.checkOut=function (ctx) {
    const receiptId=ctx.params.receiptId;
    const productsCount=+ctx.params.productCount;
    const total=+ctx.params.total;
    if(productsCount===0){
        notify.showError('Cannot checkout with no items');
    }else{
        receiptServices.checkOut(receiptId,productsCount,total).then(function () {
            notify.showInfo('Checkout Successful');
            ctx.redirect('#/editor')
        })
    }

}