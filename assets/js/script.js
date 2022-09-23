let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')



// Show current date
let dateStatement = moment().format('dddd, MMMM Do YYYY');

let currentHour = moment().hour()
console.log(currentHour);

// Function to establish hours of day and create and publish relevent rows to <table>
// function publishTableRows() {
    let hours = [];
    let availableHours = moment('12');
    new Array(19).fill().map((acc, index)=> {
        hours.push(availableHours.format('H mm A'))
        availableHours = availableHours.add(1, 'hour');
    })
    for(i = 0; i<9; i++) {
        tableRowEl = $('<tr>');
        timeCol = $('<td>').text(hours[i+9]);
        activityCol = $('<td>');
        activityTextarea = $('<textarea>');
        saveCol = $('<td>')
        saveButton = $('<td>').addClass('fa fa-save')
        // saveCol.on('click', saveActivity)

        if(currentHour < (i + 9)) {
        activityCol.addClass('future')
        } else if (currentHour === (i+9)) {
            activityCol.addClass('present')
        } else if (currentHour > i+9){
            activityCol.addClass('past');
        }

        activityCol.append(activityTextarea);
        saveCol.append(saveButton);
        tableRowEl.append(
            timeCol,
            activityCol,
            saveCol
        );
        tableDisplayEl.append(tableRowEl);
    }
    // return 
// }
// publishTableRows();


