var c = console;
window.onload = function () {

    var body = document.getElementById("menuBody");
    var shoppingCart = document.getElementById("shoppingCart");
    //variable that references the AddItem function from the cart file
    var addRef;
    //variable that references the RemoveItem function from the cart file
    var remRef
    //variable that references the UpdateCart function from the cart file
    var updateRef;
    //variable that references the displayCart function created in the cart section
    var displayFunc;

    var GetCartFunc;
    //Cart Section
    (function (CartStuff) {
        //Create and add the name and address of user in the cart
        //CartStuff.SetUserName("Josue Cortes");
        //CartStuff.SetAddress("70 Urayoan Street, Manati PR 00674");
        var name = document.getElementById("UserName");
        var address = document.getElementById("Address");
       // name.innerText = "Name: " + CartStuff.GetUserName();
       // address.innerText = "Address: " + CartStuff.GetAddress();

        //Referencing the functions
        addRef = CartStuff.AddItem;
        updateRef = CartStuff.UpdateCart;
        remRef = CartStuff.RemoveItem;
        GetCartFunc = CartStuff.GetCart;
        var table = document.getElementById("cartList");      
        /*This function will delete all the content of the created table in the cart 
        and refill it again. A refresh in other words*/
        function DisplayCart(theCart)
        {
            name.innerText = "Name: " + theCart.name;
            address.innerText = "Address: " + theCart.address;
            //Deletes all rows except the first one which contains the headers: 
            //ITEM, AMOUNT, PRICE
            for (var i = table.rows.length -1; i > 0; i--)
            {
                if (i != 0)
                {
                table.deleteRow(i);                
                }
            }
             //Populates the table          
            for(var i = 0; i < theCart.items.length; i++)
            {
                var tr = document.createElement("tr");
                var tdName = document.createElement("td");
                tdName.appendChild(document.createTextNode(theCart.items[i].name));
                tr.appendChild(tdName);

                var tdAmount = document.createElement("td");
                tdAmount.appendChild(document.createTextNode(theCart.items[i].amount));
                tr.appendChild(tdAmount);

                var tdPrice = document.createElement("td");
                tdPrice.appendChild(document.createTextNode(theCart.items[i].price.toFixed(2)));                               

                //Remove button with the function to remove the item off the cart, 
                //after removing, it will call the display function to refresh the table
                var removeButton = document.createElement("button");
                removeButton.innerText = "Remove";
                
                tdPrice.appendChild(removeButton)
                tr.appendChild(tdPrice);
                table.appendChild(tr);
                table.onclick = function (e) {
                    if (e.target.nodeName == "BUTTON")
                    {
                        var parent = e.target.parentNode.parentNode;
                        var n = parent.cells[0].innerText;
                        var p = parent.cells[2].innerText;
                        c.log(p);
                        remRef(n, parseFloat(p));
                        updateRef(displayFunc);
                    }                    
                }
            }
            
            CartStuff.GetTotal(TheTotal);
        }
        function TheTotal(val)
        {
            var total = document.getElementById("Total");
            total.innerText = "Total: " + val.toFixed(2);
        }
        displayFunc = DisplayCart;
        CartStuff.GetCart(DisplayCart);
    })(window.Cart);

    //Menu Section
    (function (MenuStuff) {
       
        
        //Displays the menu on screen
        function FillMenuBody(theMenu)
        {
  
            for (var i = 0; i < theMenu.length; i++)
            {
                //Writes the category
                var catg = document.createElement("h2");
                catg.className = "menuCategory";
                catg.appendChild(document.createTextNode(theMenu[i].name));
                body.appendChild(catg);

                var tb = document.createElement("table");
                //Function that will Add the item in the cart,
                //then call the display function to refresh the cart table
                tb.onclick = function(e)
                {
                    if (e.target.nodeName == "BUTTON")
                    {
                        var parent = e.target.parentNode.parentNode;
                        var n = parent.cells[0].innerText;
                        var p = parent.cells[1].innerText;

                        addRef(n, 1, parseFloat(p));
                        updateRef(displayFunc);
                    }                   
                }
                for (var j = 0; j < theMenu[i].list.length; j++)
                {
                    //Writes all the food of the category created
                    var tr = document.createElement("tr");
                    var tdName = document.createElement("td");
                    tdName.appendChild(document.createTextNode(theMenu[i].list[j].name));                
                    tr.appendChild(tdName);

                    var tdPrice = document.createElement("td");
                    tdPrice.appendChild(document.createTextNode(theMenu[i].list[j].price));
                    
                    var button = document.createElement("button");
                    button.innerText = "Add to cart"                                       
                                      
                    tdPrice.appendChild(button);
                    tr.appendChild(tdPrice);
                    tb.appendChild(tr);
                }
                body.appendChild(tb);
            }
        }
        MenuStuff.GetMenu(FillMenuBody);

    })(window.Menu);
    
}