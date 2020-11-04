      //----define moment varibles used to show time and indicate the variable
var date = moment().format("MMM DD YYYY");

      //-------append date
$("#currentDay").append(date);


      //---------background Updater

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

      //------If the timeOfday (timeblock) is less than the current time change colour to gray. If the timeOfday is (timeblock) 

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

      //-----Past time
    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: white");

      //-----Present time
    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: red");
      
      //-----Future time
    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: green");
    
    }
  }
}

      //----------------Creating jquery for local storage for onClick for save, pulls rowBtn from index and assign on.click action then set funtion with this as it will include all times

$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();
    
    localStorage.setItem(timeOfday, textContent);
    //console log to confirm and ensure it is saved
    console.log(timeOfday, textContent);
});

//-------Getting individual childern and setting to parent

  $("#9am").children("input").val(localStorage.getItem("9am"));

  $("#10am").children("input").val(localStorage.getItem("10am"));

  $("#11am").children("input").val(localStorage.getItem("11am"));

  $("#12pm").children("input").val(localStorage.getItem("12pm"));

  $("#1pm").children("input").val(localStorage.getItem("1pm"));

  $("#2pm").children("input").val(localStorage.getItem("2pm"));

  $("#3pm").children("input").val(localStorage.getItem("3pm"));

  $("#4pm").children("input").val(localStorage.getItem("4pm"));

  $("#5pm").children("input").val(localStorage.getItem("5pm"));