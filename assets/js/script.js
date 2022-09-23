let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')

// Show current date
let dateStatement = moment().format('dddd, MMMM Do YYYY');

let currentHour = moment().hour()
console.log(currentHour);

// Establish an arry of hours
let hours = [];
let availableHours = moment('12');
new Array(24).fill().map((acc, index)=> {
    hours.push(availableHours.format('H mm A'))
    availableHours = availableHours.add(1, 'hour');
})
// Loop through array of hours and publish to table
for(i = 0; i<9; i++) {
    tableRowEl = $('<tr>');
    timeCol = $('<td>').text(hours[i+9]);
    activityCol = $('<td>');
    activityTextarea = $('<textarea>');
    saveCol = $('<td>')
    saveBtn = $('<button>').addClass('fa fa-save saveBtn')

    // Add Past/Present/Future rules based on current index + 9 (the starting point)
    if(currentHour < (i + 9)) {
    activityCol.addClass('future')
    } else if (currentHour === (i+9)) {
        activityCol.addClass('present')
    } else if (currentHour > i+9){
        activityCol.addClass('past');
    }
// Append created sections to the table
    activityCol.append(activityTextarea);
    saveCol.append(saveBtn);
    tableRowEl.append(
        timeCol,
        activityCol,
        saveCol
    );
    tableDisplayEl.append(tableRowEl);
}

// Create styles
// Not working.... can I use bootstrap classes in a js file?
activityTextarea.addClass('w-100');


