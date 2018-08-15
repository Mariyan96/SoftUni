function addProduct() {
    let item =$(':input[type="text"]');
    let price=$(':input[type="number"]');
    console.log(item.val())
    if(item.val()!==''&&price.val()!==''){
        if(Number(price.val())>0){
            $('#product-list').append($(`<tr><td>${item.val()}</td><td>${Number(price.val())}</td></tr>`))
            let rows = $("#product-list tr td").toArray()
            let total =0
            for(let i=1;i<rows.length;i+=2){
                total+=Number($(rows[i]).text())
                $('tfoot>tr td:eq(1)').text(total)
            }
        }
    }
    price.val('');
    item.val('');
}