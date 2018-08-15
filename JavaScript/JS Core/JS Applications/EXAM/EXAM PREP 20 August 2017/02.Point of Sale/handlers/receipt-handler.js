handlers.getMyReceipts=function (ctx) {
    let userId=sessionStorage.getItem('userId')
    receiptServices.getMyReceipts(userId).then(function (allReceipts) {
        allReceipts.forEach((e)=>{
            e.date = new Date(e._kmd.ect).toDateString();
        })
        ctx.username=sessionStorage.getItem('username')

        ctx.receipts=allReceipts;
        ctx.total=allReceipts.map(e=>+e.total).reduce((a,b)=>a+b);
        ctx.loadPartials({
            header:'./templates/common/header.hbs',
            footer:'./templates/common/footer.hbs',
            receipt:'./templates/forms/receipt.hbs',
        }).then(function () {
            this.partial('./templates/overview.hbs')
        })
    })

};
handlers.getReceiptDetails=function (ctx) {
    const receiptId=ctx.params.id;
   
    entriesService.getAllByReceiptId(receiptId).then(function (entries) {
        entries.forEach(e=>{
            e.subtotal=(+e.price*e.quantity).toFixed(2);
        });
        ctx.entries=entries;
        console.log(ctx.entries);
        ctx.username=sessionStorage.getItem('username')
        ctx.loadPartials({
            header:'./templates/common/header.hbs',
            footer:'./templates/common/footer.hbs',
            entry:'./templates/forms/curEntryDetails.hbs'
        }).then(function () {
            this.partial('./templates/entryDetails.hbs');
        })
    })
   
};