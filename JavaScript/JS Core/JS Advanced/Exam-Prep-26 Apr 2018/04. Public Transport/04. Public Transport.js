class PublicTransportTable {
    constructor(town){
        this.town=town;
        this.addEventListeners()
    }
    set town(name){
        $('caption').text(`${name}'s Public Transport`)
    }
    addVehicle(obj){
        let tr =$(`<tr><td>${obj.type}</td><td>${obj.name}</td></tr>`);
        let button =$('<button>More Info</button>');
        let extra=$(`<tr class="more-info"><td colspan="3"><table><tr><td>Route: ${obj.route}</td></tr>
                    <tr><td>Price: ${obj.price}</td></tr>
                    <tr><td>Driver: ${obj.driver}</td></tr>
                </table>
            </td>
        </tr>`);
        button.on('click',function (event) {
            if(button.text()==='More Info'){
                button.text('Less Info')
                extra.insertAfter(tr);
            }else{
                button.text('More Info');
                extra.remove();
            }
        });
        tr.append($('<td>').append(button));
        $('.vehicles-info').append(tr);

    }
    addEventListeners(){
        $('.search-btn').on('click',function () {
            let inputType = $('input[name="type"]');
            let inputName=  $('input[name="name"]');
            let type =inputType.val();
            let name =inputName.val();
            if(name||type){
                let searchBtn =$('.search-btn');
                let rows = $('.vehicles-info >tr').not('.more-info');
                for (let row of rows) {
                    let searchBtn=$(row).find('button');
                    let currentType=$(row).find('td')[0];
                    let currentName=$(row).find('td')[1];
                    if(!$(currentType).text().includes(type)
                        ||!$(currentName).text().includes(name)){
                        if(searchBtn.text()==='Less Info'){
                            searchBtn.click()
                        }
                        $(row).css('display','none')
                    }else {
                        $(row).css('display', '')
                    }
                }
            }
        })
        $('.clear-btn').on('click',function () {
            $('input[name="type"]').val('')
            $('input[name="name"]').val('')
            let rows = $('.vehicles-info >tr')
            for (let row of rows) {
                $(row).css('display','')
            }
        })

    }
}