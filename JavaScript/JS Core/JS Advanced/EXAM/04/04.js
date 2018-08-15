function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let product = $('body > div > div.block > input.custom-select');
    let price =$('#price');
    let quantity=$('#quantity')
    let submit = $('#submit');
    let allPrice=$('#sum');
    let capacity=$('#capacity')
    product.on('input',function () {
        if(product.val()!==''){
            submit.prop('disabled', false);
        }else{
            submit.prop('disabled', true);
        }
    });
    submit.on('click',function () {
        $('body > div > div.block > ul').append($(`<li>Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`));
        allPrice.val(Number(allPrice.val())+Number(price.val()));
        capacity.val(Number(capacity.val())+Number(quantity.val()));
        if(capacity.val()>=150){
            capacity.val('full');
            $(capacity).addClass('fullCapacity');
            submit.prop('disabled', true);
            product.prop('disabled', true);
            submit.prop('disabled', true);
            quantity.prop('disabled', true);
            price.prop('disabled', true);
            return;
        }
        product.val('');
        price.val(1);
        quantity.val(1);
    })
}
