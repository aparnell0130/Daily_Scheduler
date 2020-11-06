function currentTime() {
    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(day)
}
setInterval(currentTime, 1000);

$('.hr-9').val(localStorage.getItem('9'))
$('.hr-10').val(localStorage.getItem('10'))
$('.hr-11').val(localStorage.getItem('11'))
$('.hr-12').val(localStorage.getItem('12'))
$('.hr-13').val(localStorage.getItem('13'))
$('.hr-14').val(localStorage.getItem('14'))
$('.hr-15').val(localStorage.getItem('15'))
$('.hr-16').val(localStorage.getItem('16'))
$('.hr-17').val(localStorage.getItem('17'))

$('textarea').each(function () {
    var hr = moment().format('H')
    var dataIndex = $(this).data('index')

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

$('button').click(function (event) {
    event.preventDefault()
    var textAttr = $(this).prev().data('index')
    var text = $(this).prev().val()
    if ($(this).data('number')) {
        localStorage.setItem(textAttr, text)
    }
})