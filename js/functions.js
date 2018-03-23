function start()
{
		getDateTime();
    groupByLetter();
}


function getDay(value)
{
	var days = ["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sábado"];
	return days[value];
}

function getMonth(value)
{
	var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junnho",
  	"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

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

function groupByLetter()
{
    var triggers = $('div.alphabet button');
    var filters = $('ul.dictionary li a');

    triggers.click(function(){
        var takeLetter = $(this).text();
        var found = false;
        filters.parent().hide();
        var areaexpandedtrue = $('[aria-expanded=true]');
        if(areaexpandedtrue.length){
						location.reload();
            areaexpandedtrue.hide();
        }

        filters.each(function(i) {
            var compareFirstLetter = $(this).text().substr(0,1);
            if ( compareFirstLetter ==  takeLetter ) {
                $(this).parent().fadeIn(222);
                found = true;
            }
        });
        if (!found) {console.log('There is no result.');}
    });
}
