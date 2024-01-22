// $(document).ready(function() {

// var timeSlots = document.querySelectorAll("#inputGroup-sizing-lg");
// var currentDay = $("#currentDay");

var currentDay = dayjs();
console.log(currentDay)
$("#currentDay").text(currentDay.format("D MMMM YYYY"));


var timeSpace = document.getElementById("#inputGroup-sizing-lg");
console.log(timeSpace)

function generateOneHourSlots(startTime, endTime) {
  const slots = [];
  let currentSlot = dayjs(startTime);

  // Loop to add one-hour slots to the array
  while (currentSlot.isBefore(dayjs(endTime))) {
    slots.push(currentSlot.format('HH:mm'));
    currentSlot = currentSlot.add(1, 'hour');
  }

  return slots;
}

// Example: Generate one-hour slots from 9 am to 5 pm
const startTime = '2024-01-21 08:00'; // Replace with your desired start time
const endTime = '2024-01-21 19:00';   // Replace with your desired end time

const oneHourSlots = generateOneHourSlots(startTime, endTime);

// Display the one-hour slots
console.log(oneHourSlots);

var textInput = function() {
  for(var index = 0; index < oneHourSlots.length; index++) 
  {
    $( "#inputGroup-sizing-lg" + index).text(oneHourSlots[index])
  }
  };

textInput()

// Colouring based on time
 var timeHour = (currentDay.format(" HH "));
 console.log(timeHour)
 var timeAssign = function() {
  for(var index = 0; index < oneHourSlots.length; index++) 
  {
    var timeNow = parseInt(timeHour);
    var slotOneHour = parseInt(oneHourSlots[index].substr(0, 2));
    if(timeNow< slotOneHour){
      $( ".form-control" + index).addClass("future")
    }
    else if(timeNow == slotOneHour){
    $( ".form-control" + index).addClass("present")
    }
    else {
    $( ".form-control" + index).addClass("past")
    }
  }

  };
  timeAssign();



// });