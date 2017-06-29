var c = console;

window.onload = function ()
{
    var list = document.getElementById("list");
    var txtBox = document.getElementById("tb");
    var enter = document.getElementById("ent");
    var done = document.getElementById("done");
    function AddTodo(e) {
       // if (e.target.id != "tb" || e.target.id == "tb" && e.which == 13)
        {
            if (txtBox.value != "") {
                var li = document.createElement("li");
                var val = document.createTextNode(txtBox.value);
                var del = document.createElement("button");
                var doneB = document.createElement("button");
                del.innerText = "Delete";
                doneB.innerText = "Done";
                function DoneFunc() {
                    var currLi = del.parentNode;
                    currLi.parentNode.removeChild(currLi);
                    doneB.innerText = "Undo";
                    doneB.onclick = function () {
                        currLi.parentNode.removeChild(currLi);
                        doneB.innerText = "Done";
                        doneB.onclick = DoneFunc;
                        list.appendChild(currLi);
                    }
                    done.appendChild(currLi);
                }
                del.onclick = function () {
                    var currLi = del.parentNode;
                    currLi.parentNode.removeChild(currLi);
                }
                doneB.onclick = DoneFunc;

                li.appendChild(val);
                li.appendChild(del);
                li.appendChild(doneB);
                list.appendChild(li);
                txtBox.value = "";
            }
        }
        }
        
    
    enter.addEventListener("click", AddTodo);
}
