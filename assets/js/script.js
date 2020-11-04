function currentTime() {
    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(day)
}
setInterval(currentTime, 1000);


$('textarea').each(function () {
    var hr = moment().format('H')
    var dataIndex = $(this).data('index')
    console.log(dataIndex)
    if (hr == dataIndex) {
        $(this).addClass('present')
    }
    else if (hr <= dataIndex) {
        $(this).addClass('future')
    }
    else {
        $(this).addClass('past')
    }
})

