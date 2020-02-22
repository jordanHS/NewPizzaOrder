function Pizza (cost, toppings) {
    this.cost = cost;
    this.toppings = toppings;
}

Pizza.prototype.total = function() {
   var price = parseInt(this.cost);
//    console.log(price);
   if (this.toppings.length > 3) {
   return price + (parseInt(this.toppings.length) - 3)
   } else {
       return price;
   }
}

function Beverage (cost) {
    this.cost = cost;
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

    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    console.log(newPizza);
    console.log(newPizza.total());
    
    $("#message").show().text("Thanks for the order, " + name +  "! Your order cost $" + newPizza.total() + " &  will be delivered to the following address: " + address + ". See you soon!")
    });
});

