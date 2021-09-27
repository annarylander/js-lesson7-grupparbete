const coffees = [
    { name: 'Brygg Kaffe', price: 20 },
    { name: 'Cappucino', price: 30 },
    { name: 'Latte', price: 40 }
]

class Customer {
    constructor() {
        this.transactions = []
        this.membership = "Brons"
        this.numberOfCups = 0
        this.transactionSum = 0

    }

    getTransaction(index) {
        return this.transactions[index]
    }

    addTransaction(typeOfCoffee, numberOfCups) {
        let emptyArray = []
    

        if (typeOfCoffee === "Bryggkaffe") {
            emptyArray = [{type: "Bryggkaffe", numberOfCups: 2, price: coffees[0].price}]
            this.transactions.push(emptyArray)
        } else if (typeOfCoffee === "Cappuccino") {
            emptyArray = [{type: "Cappuccino", numberOfCups: 3, price: coffees[1].price}]
            this.transactions.push(emptyArray)
        } else if (typeOfCoffee === "Latte") { 
            emptyArray = [{type: "Latte", numberOfCups: 4, price: coffees[2].price}]
            this.transactions.push(emptyArray)
        }
    }
    
    getTotalSpent() {
        let sum = 0
        let counter = 0
        this.transactions.forEach(transaction => {
            transaction = getTransaction(counter)
            sum += transaction[0][0].price * transaction[0][0].numberOfCups
            counter++
        })
        return sum

    }

    getMembershipStatus() {
        return this.membership
    }
}

let customer1 = new Customer()
customer1.addTransaction("Bryggkaffe", 5)
customer1.addTransaction("Cappuccino", 2)
customer1.addTransaction("Latte", 4)
console.log(customer1.getTotalSpent())

/*console.log(customer1.transactions[0][0].type)
console.log(customer1.getTransaction
*/

    /*
    checkMembershipStatus() {
        return this.membership() >= this.
    
*/