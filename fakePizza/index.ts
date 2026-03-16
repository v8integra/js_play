type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let cashInRegister: number = 100
let nextOrderId: number = 1
let nextPizzaId: number = 0
const orderQueue: Order[] = []

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]



function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizzaObj: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    
    menu.push(newPizzaObj)
    return newPizzaObj
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza) {
      console.log(`${pizzaName} does not exist in menu`)
      return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.log(`${orderId} was not found`)
        return
    }
    order.status = "completed"
    return order
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    } else {
        return menu.find(pizza => pizza.id === identifier)
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
