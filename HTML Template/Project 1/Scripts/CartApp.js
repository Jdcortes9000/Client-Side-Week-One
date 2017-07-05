window.Cart = (function () {
    function cartItem(Itemname, amount, price)
    {
        this.name = Itemname;
        this.amount = amount;
        this.price = price;
    }
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
        var tmp = new cartItem(name, amount, price);
        if (theCart.items.length == 0)
        {
            
            theCart.items.push(tmp);
            return;
        }
        else {
            for (var i = 0; i < theCart.items.length; i++)
            {
                if (theCart.items[i].name == tmp.name)
                {                   
                    theCart.items[i].amount++;
                    theCart.items[i].price += tmp.price;
                    return;
                }                                                  
            }
            theCart.items.push(tmp);           
            return;
        }
       
        console.log(theCart.items);
    }
    function RemoveItem(name, price)
    {
        for (var i = 0; i < theCart.items.length; i++)
        {
            if(theCart.items[i].name == name)
            {
                if (theCart.items[i].amount < 2)
                {
                    theCart.items.splice(i, 1);
                    return;
                }
                else {
                    var subtract = theCart.items[i].price / theCart.items[i].amount;
                    theCart.items[i].amount--;
                    theCart.items[i].price -= subtract;
                    return;
                }
            }
        }
    }
    function UpdateCart(callback)
    {
        callback();
    }
    function GetCart()
    {
        return theCart;
    }
    function GetTotal()
    {
        var total = 0;
        for(var i = 0; i < theCart.items.length; i++)
        {
            total += theCart.items[i].price;            
        }
        return total;
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