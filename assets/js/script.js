let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')
let something;

// Show current date
let dateStatement = moment().format('dddd MMMM, Do YYYY');
currentDayEl.text(dateStatement);

function publishTableRows() {
    let hours = [];
    let availableHours = moment('12');
    new Array(24).fill().map((acc, index)=> {
        hours.push(availableHours.format('h A'))
        availableHours = availableHours.add(1, 'hour');
    })
    for(i = 0; i<hours.length; i++) {
        console.log(hours[i]);
        let tableRowEl = $('<tr>').text('');
        let timeCol = $('<td>').text(hours[i]);
        let activityCol = $('<td>').text('');
        let saveCol = $('<td>').text('');
        
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
