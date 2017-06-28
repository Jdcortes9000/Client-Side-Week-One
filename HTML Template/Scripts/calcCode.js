var c = console;

window.onload = function ()
{
    var firstInput = true;
    var inputs = [];
    var panel = document.getElementById("panel");
    var table = document.getElementById("calc");
    table.addEventListener("click", function (event) {
        var elem = event.target;
        if (elem.innerText.length < 2)
        {
            switch (elem.innerText) {
                case "+":
                    inputs.push(parseFloat(panel.innerText));                  
                    inputs.push("+");                 
                    firstInput = true;
                    break;
                case "-":
                    inputs.push(parseFloat(panel.innerText));
                    inputs.push("-");
                    firstInput = true;
                    break;
                case "X":
                    inputs.push(parseFloat(panel.innerText));
                    inputs.push("X");
                    firstInput = true;
                    break;
                case "/":
                    inputs.push(parseFloat(panel.innerText));
                    inputs.push("/");
                    firstInput = true;
                    break;
                case "=":
                    inputs.push(parseFloat(panel.innerText));
                    console.log(inputs);
                    var result = inputs[0];
                    console.log(result);
                    for(var i = 1; i < inputs.length; i++)
                    {
                        if(isNaN(inputs[i]))
                        {
                            switch (inputs[i]) {
                                case"+":
                                    result+=inputs[i+1];
                                    break;
                                case "-":
                                    result -= inputs[i + 1];
                                    break;
                                case "X":
                                    result *= inputs[i + 1];
                                    break;
                                case "/":
                                    result /= inputs[i + 1];
                                    break;
                                default:
                            }
                        }
                    }
                    panel.innerText = result;
                    //firstInput = true;
                    inputs = [];
                    break;
                case "C":
                    panel.innerText = "0";
                    firstInput = true;
                    inputs = [];
                    break;
                default:
                    if (firstInput == true)
                    {
                        panel.innerText = "";
                        firstInput = false;
                    }
                    panel.innerText = panel.innerText + elem.innerText;
            }
        }
        
    })
}
