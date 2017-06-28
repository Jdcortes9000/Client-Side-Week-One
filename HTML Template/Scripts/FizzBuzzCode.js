
function FizzBuzz(min,max)
{
    var list = document.createElement("ul");
    for(var i = min; i <= max; i++)
    {
        var element = document.createElement("li");
        var t = document.createTextNode(i);
        if(i%3 == 0 && i%5==0)
        {
            element.style.color = "blue";
            t.textContent = "FizzBuzz";
        }
        else if(i%3 == 0)
        {
            element.style.color = "red";
            t.textContent = "Fizz";
        }
        else if(i%5 == 0)
        {
            element.style.color = "green";
            t.textContent = "Buzz";
        }
        element.appendChild(t);
        list.appendChild(element);
    }
    return list;
}

var d = document.getElementById('main');
var result = FizzBuzz(1, 15);
d.appendChild(result);
//for (var i = 1; i <= num; i++) {
//    var element = document.createElement("li");
//    var t = document.createTextNode(i);
//    element.id = i;
//    element.appendChild(t);
//    list.appendChild(element);
//}
//var d = document.getElementById('main');
//   d.appendChild(list);
//for (var i = 1; i <= num; i++) {
//    if (document.getElementById(i).innerHTML % 3 == 0 && document.getElementById(i).innerHTML % 5 == 0) {
//        document.getElementById(i).innerHTML = "FizzBuzz";
//        document.getElementById(i).style.color = "Red";
//        document.getElementById(i).style.border = "1px solid black";
//    }
//    else if (document.getElementById(i).innerHTML % 5 == 0) {
//        document.getElementById(i).innerHTML = "Buzz";
//        document.getElementById(i).style.color = "Blue";
//        document.getElementById(i).style.border = "1px solid yellow";
//    }
//    else if (document.getElementById(i).innerHTML % 3 == 0) {
//        document.getElementById(i).innerHTML = "Fizz";
//        document.getElementById(i).style.color = "Blue";
//    }
//}
console.log(result);