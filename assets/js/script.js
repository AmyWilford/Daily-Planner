// Access HTML elements
let currentDayEl  = $('#currentDay')
let tableDisplayEl = $('#table-display')

// Establish current date
let dateStatement = moment().format('dddd, MMMM Do YYYY');
// Publish date on page
currentDayEl.text(dateStatement);
// Establish current hour
let currentHour = moment().hour()

// Establish an arry of hours > use to loop through  
let hours = [];
let availableHours = moment('12');
new Array(24).fill().map((acc, index)=> {
    hours.push(availableHours.format('H mm A'))
    availableHours = availableHours.add(1, 'hour');
})

// Loop through array of hours for 9 hours (available working hours in the day)
for(i = 0; i<9; i++) {
    tableRowEl = $('<tr>').attr('id', i+9);
    timeCol = $('<td>').text(hours[i+9]).addClass('timeblock col-2')
    activityCol = $('<td>').addClass('col-9').attr('class', 'note')
    activityTextarea = $('<textarea>').addClass('w-100').attr('data-id', i+9);
    saveCol = $('<td>').addClass('col-1')
    saveBtn = $('<button>').addClass('saveBtn').on('click', saveNote);
    saveIcon = $('<i>').addClass('fa fa-save');

    // Add Past/Present/Future rules based on current index + 9 (the starting point)
    if(currentHour < (i + 9)) {
    activityCol.addClass('future')
    } else if (currentHour === (i+9)) {
        activityCol.addClass('present')
    } else if (currentHour > i+9){
        activityCol.addClass('past');
    }

// Append created sections to the table
    saveBtn.append(saveIcon);   
    activityCol.append(activityTextarea);
    saveCol.append(saveBtn);
    tableRowEl.append(
        timeCol,
        activityCol,
        saveCol
    );
    tableDisplayEl.append(tableRowEl);
}
// Function to save note into local storage
function saveNote(event){
    // This establishes the button used to saved the note
    console.log(this);
    // Establish variable to hold the id of the parent row used to identify which hour/row the note belongs to
    const parentId = $(this).parents('tr').attr('id');
    const activity = $(this).parent().siblings('.note').children('textarea').val();
    // two valiues = one the key and the other is the value
    if (activity) {
        localStorage.setItem(parentId, activity)
    }
    return;
}
// function to publish note
function loadActivities(){
    for(i=9; i<18; i++){
       let storedActivity = localStorage.getItem(i);

       if(storedActivity){
        let activityEl = $("textarea[data-id='" + i +"']");
    //    console.log( $("textarea[data-id='" + i +"']"));
        activityEl.val(storedActivity);
       }

    }
}
loadActivities();

activityTextarea.addClass('w-100');

