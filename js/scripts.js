function Pizza (cost, toppings) {
    this.cost = cost;
    this.toppings = toppings;
}

Pizza.prototype.total = function() {
   var price = parseInt(this.cost);
   if (this.toppings.length > 3) {
   return price + (parseInt(this.toppings.length) - 3);
   } else {
       return price;
   }
}

function Beverage (cost) {
    this.cost = cost;
}

Beverage.prototype.total = function() {
    var price = parseFloat(this.cost);
    return price;
}


//User Interface
$(document).ready(function() {
    $("#order").submit(function(event) {
      event.preventDefault();
        var name = $("input#userName").val();
        var address = $("input#address").val();
        var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
        var pizzaToppings = [];
        $("input:checkbox[name=pizzaTopping]:checked").each(function(){
        var toppings = $(this).val();
        pizzaToppings.push(toppings)
       })
    
       var drinkSize = $("input:radio[name=drinkSize]:checked").val();

    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    var newDrink = new Beverage(drinkSize);
    console.log(newPizza);
    console.log(newPizza.total());
    console.log(newDrink);
    
    $("#message").show().text("Thanks for the order, " + name +  "! Your order cost $" + (newPizza.total() + newDrink.total()) + " &  will be delivered to the following address: " + address + ". See you soon!")
    });
});

