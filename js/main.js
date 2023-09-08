/**
 * CURRENT DAY OF THE WEEK
 */

const currentDayElement = document.querySelector('.current-day');
/* Condition to check if the element exists */
if(currentDayElement){
    const currentDate = new Date ();
    currentDayOfWeek = currentDate.getDay();    // this will return an integer of numbers

    // create an array containing all days of the week
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayName = weekDays[currentDayOfWeek];

    //now we can append this to the element
    currentDayElement.textContent = `${currentDayName}`;
}

/**
 * UPDATE CURRENT UTC TIME CONTINUOUSLY
 */
const currentTime = document.querySelector('.current-time');

function updateCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const seconds = currentDate.getUTCSeconds();
    const milliseconds = currentDate.getTime();

    const currentTimeUTC = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    currentTime.textContent = `${String(currentTimeUTC)} | UTC Time(ms): ${String(milliseconds)}`;
}

if (currentTime) {
    // call the function
    updateCurrentTime();

    // Update the time every second
    setInterval(updateCurrentTime, 1000);
}