
window.Menu = (function () {
   
    function menuItem(itemName, price)
    {
        this.name = itemName;
        this.price = price;       
    }
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
    function GetMenu()
    {
        return Categories;
    }
    return {
        GetMenu: GetMenu,
        AddCategory: AddCategory,
        CreateCategory: CreateCategory,
        AddFoodItem: AddFoodItem,
        CreateFoodItem, CreateFoodItem
    }
})();