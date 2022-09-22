let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')
let tableRowEl;
let timeCol;
let activityCol;
let saveCol;

// Show current date
let dateStatement = moment().format('dddd, MMMM Do YYYY');
currentDayEl.text(dateStatement);



// Function to establish hours of day and create and publish relevent rows to <table>
function publishTableRows() {
    let currentHour = moment().format('H mm A')
    console.log(currentHour);
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
        saveCol = $('<td>').text('💾')
        saveCol.on('click', random)

        // Need to figure this part out using moments
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

function random(){
    console.log('click');
}

