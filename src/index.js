import dishesListData from "./data/dishes.json";
import dishesTemplate from "./templates/dishes.hbs"

const dishesList = dishesTemplate(dishesListData)
console.dir(dishesList)

const container = document.querySelector('.container')
container.innerHTML = dishesList