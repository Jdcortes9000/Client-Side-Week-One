window.Cart = (function () {
    //Constructor for the cartItem that displays the name, amount and price
    function cartItem(Itemname, amount, price)
    {
        this.name = Itemname;
        this.amount = amount;
        this.price = price;
    }
    //Constructor for the actual cart that has all purchased items and the users info
    function shoppingCart(userName, address, items)
    {
        this.name = userName;
        this.address = address;
        this.items = items;
    }
    var theItems = [];
    var theCart = new shoppingCart("","",theItems);
    function SetUserName(name)
    {
        theCart.name = name;
    }
    function GetUserName()
    {
        return theCart.name;
    }
    function SetAddress(adr)
    {
        theCart.address = adr;
    }
    function GetAddress()
    {
        return theCart.address;
    }
    function AddItem(name,amount, price)
    {        
        //var tmp = new cartItem(name, amount, price);
        //if (theCart.items.length == 0)
        //{            
        //    theCart.items.push(tmp);
        //    return;
        //}
        //else {
        //    for (var i = 0; i < theCart.items.length; i++)
        //    {
        //        if (theCart.items[i].name == tmp.name)
        //        {                   
        //            theCart.items[i].amount++;
        //            theCart.items[i].price += tmp.price;
        //            return;
        //        }                                                  
        //    }
        //    theCart.items.push(tmp);           
        //    return;
        //}
        var xhr = new XMLHttpRequest();
        xhr.open('POST',
            'http://localhost/MenuApi/api/Cart/AddItem/?name='
            + name + '&amount=' + amount + '&price=' + price, true);
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                
            }
            else {
                console.log("Error connecting");
                console.log(xhr.status);
            }
        };

        xhr.send();
        //console.log(theCart.items);
    }
    function RemoveItem(name, price)
    {
        //for (var i = 0; i < theCart.items.length; i++)
        //{
        //    if(theCart.items[i].name == name)
        //    {
        //        if (theCart.items[i].amount < 2)
        //        {
        //            theCart.items.splice(i, 1);
        //            return;
        //        }
        //        else {
        //            var subtract = theCart.items[i].price / theCart.items[i].amount;
        //            theCart.items[i].amount--;
        //            theCart.items[i].price -= subtract;
        //            return;
        //        }
        //    }
        //}
        var xhr = new XMLHttpRequest();
        xhr.open('POST',
            'http://localhost/MenuApi/api/Cart/RemoveItem/?name='
            + name + '&price=' + price, true);
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log(xhr.responseText);

            }
            else {
                console.log("Error connecting");
                console.log(xhr.status);
            }
        };

        xhr.send();
    }
    function UpdateCart(callback)
    {
        GetCart(callback);
    }   
    function GetCart(callback)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/MenuApi/api/Cart/GetCart', true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log(xhr.response);
                callback(xhr.response);
            }
            else {
                console.log("Error connecting");
                console.log(xhr.status);
            }
        };

        xhr.send();
    }
    function GetTotal(callback)
    {
        //var total = 0;
        //for(var i = 0; i < theCart.items.length; i++)
        //{
        //    total += theCart.items[i].price;            
        //}
        //return total;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/MenuApi/api/Cart/GetTotal', true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log(xhr.response);
                callback(xhr.response);
            }
            else {
                console.log("Error connecting");
                console.log(xhr.status);
            }
        };

        xhr.send();

    }
    function LoadCart(cart)
    {

    }
    return {
        SetUserName: SetUserName,
        GetUserName: GetUserName,
        SetAddress: SetAddress,
        GetAddress: GetAddress,
        AddItem: AddItem,
        RemoveItem: RemoveItem,
        UpdateCart: UpdateCart,
        GetCart: GetCart,
        GetTotal: GetTotal,
        LoadCart: LoadCart
    }
})();