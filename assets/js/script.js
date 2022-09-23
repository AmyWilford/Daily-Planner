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
    hours.push(availableHours.format('hA'))
    availableHours = availableHours.add(1, 'hour');
})

// Loop through array of hours for 9 hours (available working hours in the day)
// Add class & styles to elements as they are created
for(i = 0; i<9; i++) {
    // set tableRowEl id to the index displayed on on the calendar to easily identify which row belongs to which hour
    tableRowEl = $('<tr>').attr('id', i+9).addClass('custom-row');
    timeCol = $('<td>').text(hours[i+9]).addClass('time-block col-2 custom-td text-right')
    activityCol = $('<td>').addClass('col-9').attr('class', 'note')
    activityTextarea = $('<textarea>').addClass('w-100').attr('data-id', i+9);
    saveCol = $('<td>').addClass('col-1 p-0')
    // Add eventlistener on each button that will run saveNote()
    saveBtn = $('<button>').addClass('saveBtn').on('click', saveNote);
    saveIcon = $('<i>').addClass('fa fa-save');

    // Add Past/Present/Future rules based on current index + 9 (the starting hour point)
    if(currentHour < (i + 9)) {
    activityCol.addClass('future')
    } else if (currentHour === (i+9)) {
        activityCol.addClass('present')
    } else if (currentHour > i+9){
        activityCol.addClass('past');
    }

// Append created sections to the tableDisplayElement
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
    // Establish variable to hold the id of the parent row used to identify which hour/row the note belongs to
    const parentId = $(this).parents('tr').attr('id');
    const activity = $(this).parent().siblings('.note').children('textarea').val();
    if (activity) {
        localStorage.setItem(parentId, activity)
    }
    return;
}

// function to loadNotes on page refresh
function loadNotes(){
    for(i=9; i<18; i++){
       let storedNote = localStorage.getItem(i);

       if(storedNote){
        let noteEl = $("textarea[data-id=" + i + "]");
    //    console.log( $("textarea[data-id='" + i +"']"));
        noteEl.val(storedNote);
       }
    }
}
// Function to load stored notes on page load
loadNotes();
