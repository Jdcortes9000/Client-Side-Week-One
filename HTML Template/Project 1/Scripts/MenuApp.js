
window.Menu = (function () {
   
    //Contructor for the foodItem in menu
    function menuItem(itemName, price)
    {
        this.name = itemName;
        this.price = price;       
    }
    //Constructor for the menu Category that contains a list of food Items
    function menuCategory(categoryName, itemList)
    {
        this.name = categoryName;
        this.list = itemList;
    }
    var Categories = [];
 
    function AddCategory(category)
    {
        Categories.push(category);
    }
    function CreateCategory(name, list)
    {
        var catg = new menuCategory(name, list);
        return catg;
    }
    function AddFoodItem(category, item)
    {
        category.list.push(item);
    }
    function CreateFoodItem(itemName, price)
    {
        var item = new menuItem(itemName, price);
        return item;
    }
    function GetMenu(callback)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/MenuApi/api/Menu/GetMenu', true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status == 200) {
                callback(xhr.response);
            }
            else {
                console.log("Error connecting");
                console.log(xhr.status);
            }
        };
        
        xhr.send();
    }
    return {
        GetMenu: GetMenu,
        AddCategory: AddCategory,
        CreateCategory: CreateCategory,
        AddFoodItem: AddFoodItem,
        CreateFoodItem: CreateFoodItem
    }
})();