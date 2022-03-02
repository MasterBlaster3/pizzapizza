const pizzas = [
	{
		name: "Meat Lovers",
		cost: 15,
		crust: "pan",
		toppings: ["hamburger", "pepperoni", "sausage", "bacon", "cheese"]
	},
	{
		name: "Bacon Artichoke",
		cost: 18,
		crust: "thin",
		toppings: ["bacon", "artichoke", "feta cheese"]
	},
	{
		name: "Veggie Delight",
		cost: 12,
		crust: "original",
		toppings: ["black olives", "peppers", "onions", "tomato"]
	},
  {
		name: "Best Pizza Known to Man",
		cost: 12,
		crust: "original",
		toppings: ["pineapple", "bannana peppers", "ham", "extra pineapple"]
	}
  
  
]
let pizzapizza = document.querySelector(".pizza-pizza")

const pizzaFinder = (zaType) => {
  
  for (const pizza of pizzas) {
    if (pizza.name === zaType) {
      return pizza
    }
  }
}

const getZaString = (pizzaObj) => {

  
let zaString = `<article class="pizza-card">
				<h3 class="pizza-name">${pizzaObj.name} &#127821</h3>             
        <p>Price: $${pizzaObj.cost}.00</p>
        <p>Crust: ${pizzaObj.crust}</p>
		    <p class="pizza-details">This pizza has ${pizzaObj.toppings.length} toppings</p>
        <p> The toppings include `

zaString += pizzaObj.toppings.join(", ")

zaString +=  ".</p>"
  return zaString
}

const pizzaThrower = (zaType) =>{
  const zaString = getZaString(pizzaFinder(zaType)) 
  pizzapizza.innerHTML += zaString 
}

pizzaThrower("Best Pizza Known to Man")
pizzaThrower("Bacon Artichoke")
pizzaThrower("Veggie Delight")
pizzaThrower("Meat Lovers")