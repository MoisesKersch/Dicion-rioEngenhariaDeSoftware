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

function myFunction()
{
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}