var c = console;
window.onload = function () {

    var body = document.getElementById("menuBody");
    //Menu Section
    (function (MenuStuff) {
        var tmp = [];
        var tmp2 = [];
        var tmp3 = [];

        var appetizers = MenuStuff.CreateCategory("Appetizers", tmp);
        c.log(appetizers);
        var lunch = MenuStuff.CreateCategory("Lunch", tmp2);
        var dessert = MenuStuff.CreateCategory("Dessert", tmp3);

        var appFood = [MenuStuff.CreateFoodItem("Salad", "$3.95"),
            MenuStuff.CreateFoodItem("Soup", "$4.34"),
            MenuStuff.CreateFoodItem("Flatbread", "$5.26")];
        c.log(appFood);

        var lunchFood = [MenuStuff.CreateFoodItem("Pizza", "$6.99"),
            MenuStuff.CreateFoodItem("Hamburger", "$7.99"),
            MenuStuff.CreateFoodItem("Chicken Strips", "$8.99")];

        var dessFood = [MenuStuff.CreateFoodItem("Ice Cream", "$5.00"),
           MenuStuff.CreateFoodItem("Chocolate Cake", "$6.57"),
           MenuStuff.CreateFoodItem("Sundae", "$7.45")];

        for (var i = 0; i < 3; i++)
        {
            MenuStuff.AddFoodItem(appetizers, appFood[i]);
            MenuStuff.AddFoodItem(lunch, lunchFood[i]);
            MenuStuff.AddFoodItem(dessert, dessFood[i]);
            if(i == 2)
            {
                MenuStuff.AddCategory(appetizers);
                MenuStuff.AddCategory(lunch);
                MenuStuff.AddCategory(dessert);
            }
        }

        var theMenu = MenuStuff.GetMenu();
        c.log(theMenu);
        for(var i = 0; i < theMenu.length; i++)
        {
            var catg = document.createElement("h2");
            catg.className = "menuCategory";
            catg.appendChild(document.createTextNode(theMenu[i].name));
            body.appendChild(catg);
            var tb = document.createElement("table");
            for(var j = 0; j < theMenu[i].list.length; j++)
            {
                var tr = document.createElement("tr");
                var tdName = document.createElement("td");
                tdName.appendChild(document.createTextNode(theMenu[i].list[j].name));
                c.log(tdName);
                tr.appendChild(tdName);
                var tdPrice = document.createElement("td");
                tdPrice.appendChild(document.createTextNode(theMenu[i].list[j].price));
                tr.appendChild(tdPrice);
                tb.appendChild(tr);
            }
            body.appendChild(tb);
        }
    })(window.Menu)
}