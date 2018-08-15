function solve() {
    let currentStop="";
    let nextStop="depot";
    const BASE_URL=`https://judgetests.firebaseio.com/schedule`;
    let departBtn=$('#depart');
    let arriveBtn=$('#arrive');

    function depart() {
        departBtn.prop("disabled",true);
        arriveBtn.prop("disabled",false);

        let req = {
            method:'GET',
            url:BASE_URL+'/'+nextStop+'.json',
            success:nextStopResult,
            error:handleError
        }
        $.ajax(req);
    }
    function nextStopResult(stop) {
        currentStop=stop.name;
        $('span').text(`Next stop ${currentStop}`);
        nextStop=stop.next;
    }
    function handleError() {
        departBtn.prop("disabled", true);
        arriveBtn.prop("disabled", true);
        $("span").text(`Error`);
    }
    function arrive() {
        departBtn.prop("disabled", false);
        arriveBtn.prop("disabled", true);
        $("span").text(`Arriving at ${currentStop}`);
    }
    return {
        depart,
        arrive
    };
}
let result = solve();