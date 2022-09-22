let currentDayEl  = $('#currentDay')

// Show current date
let dateStatement = moment().format('dddd MMMM, Do YYYY');
currentDayEl.text(dateStatement);

function publishHours() {
    let hours = [];
    let availableHours = moment('12');
    new Array(24).fill().map((acc, index)=> {
        hours.push(availableHours.format('h A'))
        availableHours = availableHours.add(1, 'hour');
    })
    for(i = 0; i<hours.length; i++) {
        console.log(hours[i] + 'happy');
    }
    return hours;
}

publishHours();