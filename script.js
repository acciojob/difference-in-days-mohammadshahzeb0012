var dateDiffInDays = function (date1, date2) {
  //   write your code here
	    let r1 = date1.split('-').map(Number);
    let r2 = date2.split('-').map(Number);
    const dateObj1 = new Date(r1[0],r1[1]-1,r1[2]) 
    const dateObj2 = new Date(r2[0],r2[1]-1,r2[2])
    const miliseconds = dateObj2-dateObj1;
    const days = miliseconds/(1000*60*60*24)
    return days
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
