function getDay(value)
{
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
	return days[value];
}
	
function getMonth(value)
{
	var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.",
  	"Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
	
	return monthNames[value];
}
	
function getDateTime()
{
	n =  new Date();
	
	document.getElementById('date').innerHTML = getDay(n.getDay()) + " " + getMonth(n.getMonth()) + " " + n.getDate() + ", " + n.getFullYear();	
}

