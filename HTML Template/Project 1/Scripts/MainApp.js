var c = console;
window.onload = function () {

    var body = document.getElementById("menuBody");
    var shoppingCart = document.getElementById("shoppingCart");
    var addRef;
    var remRef
    var updateRef;
    var displayFunc;
    //Cart Section
    (function (CartStuff) {
        CartStuff.SetUserName("Josue Cortes");
        CartStuff.SetAddress("70 Urayoan Street, Manati PR 00674");
        var name = document.getElementById("UserName");
        name.innerText = "Name: " + CartStuff.GetUserName();
        var address = document.getElementById("Address");
        address.innerText = "Address: " + CartStuff.GetAddress();
        addRef = CartStuff.AddItem;
        updateRef = CartStuff.UpdateCart;
        remRef = CartStuff.RemoveItem;
        var table = document.getElementById("cartList");
        var theCart = CartStuff.GetCart();
        function DisplayCart()
        {
           
            for (var i = table.rows.length -1; i > 0; i--)
            {
                if (i != 0)
                {
                table.deleteRow(i);                
                }
            }
                       
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
                tdPrice.appendChild(document.createTextNode(theCart.items[i].price));
                
                //var addButton = document.createElement("button");
                //addButton.innerText = "Add";
                //addButton.onclick = function(e)
                //{
                //    var parent = e.target.parentNode.parentNode;                    
                //    var n = parent.cells[0].innerText;
                //    var p = parent.cells[1].innerText;

                //    addRef(n, 1, parseFloat(p));
                //    updateRef(displayFunc);
                //}
                //tdPrice.appendChild(addButton);

                var removeButton = document.createElement("button");
                removeButton.innerText = "Remove";
                removeButton.onclick = function (e) {
                    var parent = e.target.parentNode.parentNode;
                    var n = parent.cells[0].innerText;
                    var p = parent.cells[2].innerText;
                    c.log(p);
                    remRef(n, parseFloat(p));
                    updateRef(displayFunc);
                }
                tdPrice.appendChild(removeButton)
                tr.appendChild(tdPrice);
                table.appendChild(tr);
                
            }
            var total = document.getElementById("Total");
            total.innerText = "Total: " + CartStuff.GetTotal();
        }
        displayFunc = DisplayCart;
    })(window.Cart);
    //Menu Section
    (function (MenuStuff) {
        var tmp = [];
        var tmp2 = [];
        var tmp3 = [];
        var appetizers = MenuStuff.CreateCategory("Appetizers", tmp);
       // c.log(appetizers);
        var lunch = MenuStuff.CreateCategory("Lunch", tmp2);
        var dessert = MenuStuff.CreateCategory("Dessert", tmp3);

        var appFood = [MenuStuff.CreateFoodItem("Salad", "3.95"),
            MenuStuff.CreateFoodItem("Soup", "4.34"),
            MenuStuff.CreateFoodItem("Flatbread", "5.26")];
      //  c.log(appFood);

        var lunchFood = [MenuStuff.CreateFoodItem("Pizza", "6.99"),
            MenuStuff.CreateFoodItem("Hamburger", "7.99"),
            MenuStuff.CreateFoodItem("Chicken Strips", "8.99")];

        var dessFood = [MenuStuff.CreateFoodItem("Ice Cream", "5.00"),
           MenuStuff.CreateFoodItem("Chocolate Cake", "6.57"),
           MenuStuff.CreateFoodItem("Sundae", "7.45")];

        for (var i = 0; i < 3; i++) {
            MenuStuff.AddFoodItem(appetizers, appFood[i]);
            MenuStuff.AddFoodItem(lunch, lunchFood[i]);
            MenuStuff.AddFoodItem(dessert, dessFood[i]);
            if (i == 2) {
                MenuStuff.AddCategory(appetizers);
                MenuStuff.AddCategory(lunch);
                MenuStuff.AddCategory(dessert);
            }
        }
        function FillMenuBody(theMenu) {
           // c.log(theMenu);
            for (var i = 0; i < theMenu.length; i++) {
                var catg = document.createElement("h2");
                catg.className = "menuCategory";
                catg.appendChild(document.createTextNode(theMenu[i].name));
                body.appendChild(catg);
                var tb = document.createElement("table");
                for (var j = 0; j < theMenu[i].list.length; j++) {
                    var tr = document.createElement("tr");
                    var tdName = document.createElement("td");
                    tdName.appendChild(document.createTextNode(theMenu[i].list[j].name));
                   // c.log(tdName);
                    tr.appendChild(tdName);
                    var tdPrice = document.createElement("td");
                    tdPrice.appendChild(document.createTextNode(theMenu[i].list[j].price));

                    var button = document.createElement("button");
                    button.innerText = "Add to cart"
                   
                    function ADD(e)
                    {                       
                        var parent = e.target.parentNode.parentNode;                      
                        var n = parent.cells[0].innerText;
                        var p = parent.cells[1].innerText;

                        addRef(n,1,parseFloat(p));
                        updateRef(displayFunc);
                    }
                    button.onclick = ADD;
                   
                    
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