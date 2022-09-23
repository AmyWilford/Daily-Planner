

let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')
let tableRowEl;
let timeCol;
let activityCol;
let saveCol;

// Show current date
let dateStatement = moment().format('dddd, MMMM Do YYYY');

let currentHour = moment().hour()
console.log(currentHour);


// Function to establish hours of day and create and publish relevent rows to <table>
function publishTableRows() {
    let hours = [];
    let availableHours = moment('12');
    new Array(19).fill().map((acc, index)=> {
        hours.push(availableHours.format('H mm A'))
        availableHours = availableHours.add(1, 'hour');
    })
    for(i = 8; i<hours.length; i++) {
        tableRowEl = $('<tr>');
        timeCol = $('<td>').text(hours[i]);
        activityCol = $('<td>');
        activityTextarea = $('<textarea>');
        saveCol = $('<td>').addClass('fa fa-save')
        // saveCol.on('click', saveActivity)

        // Need to figure this part out using moments
        if(currentHour < (i + 9)) {
        activityCol.addClass('future')
        } else if (currentHour === (i+9)) {
            activityCol.addClass('present')
        } else if (currentHour > i+9){
            activityCol.addClass('past');
        }

      if (hours[i] < currentHour) {
        console.log('past')
        timeCol.css('background-color', 'green')
      } else if (hours[i] === currentHour) {
            console.log('right now')
            timeCol.css('background-color', 'red')
        } else if (hours[i] > currentHour) {
                console.log('future');
            timeCol.css('background-color', 'blue')
            }

        activityCol.append(activityTextarea);
        tableRowEl.append(
            timeCol,
            activityCol,
            saveCol
        );
        tableDisplayEl.append(tableRowEl);
    }
    return 
}
publishTableRows();


