// function to display current time on screen
function currentTime() {
    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(day)
}
// keep time running
setInterval(currentTime, 1000);

// create object from local storage keys and values
var storageObject = {
    storageKey: Object.keys(localStorage),
    storageValue: Object.values(localStorage)
}
// check each textarea and fill in color based on time
$('textarea').each(function () {
    var hr = moment().format('HH')
    var dataIndex = $(this).data('index')
    var areaHr = this.id
    console.log(areaHr, hr)
    if (hr == areaHr) {
        $(this).addClass('present')
    }
    else if (hr <= areaHr) {
        $(this).addClass('future')
    }
    else {
        $(this).addClass('past')
    }
    // loop through keys and values
    for (let i = 0; i < storageObject.storageKey.length && storageObject.storageValue.length; i++) {
        const keyIndex = storageObject.storageKey[i];
        const keyValue = storageObject.storageValue[i]
        // if storage key is = to textarea data index
        if (dataIndex == keyIndex) {
            // make target value the key value
            $(this).val(keyValue)
        }
    }
})

// add click event for each button set sibling index and value in local storage
$('button').click(function (event) {
    event.preventDefault()
    var textAttr = $(this).prev().data('index')
    var text = $(this).prev().val()
    if ($(this).data('number')) {
        localStorage.setItem(textAttr, text)
    }
})