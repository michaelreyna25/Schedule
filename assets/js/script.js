// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var date = dayjs();
 $('#currentDay').text(date.format('[Today is] MMMM DD, YYYY'));

var saveBtn = $('.savebtn');
var description = $('.description')
var timeBlock = $('.time-block')


  
  function getStringFromStor() {
    var textArea = localStorage.setItem('textArea') 
    if (textArea) {
      textArea = JSON.stringify(textArea);
    } else {
      textArea = [""];
    }
    return textArea;
  }
  saveBtn.on('click', function(textArea){
    getStringFromStor()
    localStorage.setItem('text', JSON.stringify(textArea))
  });

  function displayDescription(){
    let hourNine = $('#hour-9');
    let hourTen = $('#hour-10');
    let hourEleven = $('#hour-11');
    let hourTwelve = $('#hour-12');
    let hourThirteen = $('#hour-1');
    let hourFourteen = $('#hour-2');
    let hourFifteen  = $('#hour-3');
    let hourSixteen = $('#hour-4');
    let hourSeventeen = $('#hour-5');
    var workHours = [hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourteen, hourFifteen, hourSixteen, hourSeventeen]

    for( var i=0; i < workHours.length; i++){
      let hour = workHours[i]
      var hourCount = dayjs(hour.date)
      var nowHour = dayjs().format('LT')
      
      if(hourCount === nowHour){
        console.log(workHours[i])
          workHours[i].addClass('present')
        } else if(hourCount == nowHour){
          workHours[i].addClass('future')
        } else {
          workHours[i].addClass('past')
        }
  }}

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  displayDescription()

// for loop
  //i = 0; i < day time; i++

// when the time has moved by one
// change the hour to past
// when the hour is now 
//change the hour to present
// when the hour has not yet arrived
// keep the hour as furture