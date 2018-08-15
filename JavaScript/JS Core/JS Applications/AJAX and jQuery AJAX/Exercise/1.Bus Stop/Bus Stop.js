function getInfo() {
    let id = $('#stopId').val();
    $.ajax({
        method:'GET',
        url:`https://judgetests.firebaseio.com/businfo/${id}.json`,
        success:appendToTable,
        error:errorHandler
    });
    function appendToTable(req) {
        $('#buses').empty();
        $('#stopName').text(`${req.name}`);
        let busStops=req.buses;
        for (let busStop in busStops) {
            $('#buses').append($(`<li>Bus ${busStop} arrives in ${busStops[busStop]} minutes</li>`))
        }
    }
    function errorHandler() {
        $('#buses').empty();
        $('#stopName').text(`Error`);
    }
}