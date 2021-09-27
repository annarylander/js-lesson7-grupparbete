const coffees = [
    { name: 'Bryggkaffe', price: 20 },
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

    getMembershipStatus() {
        return this.membership
    }

    updateMembershipStatus() {
        if (this.numberOfCups >= 10 && this.numberOfCups < 30) {
            this.membership = "Silver"
        }
        else if (this.numberOfCups >= 30) {
            this.membership = "Guld"
        }
        return this.membership
    }


    getTransaction() {
        return this.transactions
    }

    getTotalSpent() {
        let sum = 0
        for (let i = 0; i < this.transactions.length; i++) {
            const element = this.transactions[i]
            sum += (element[0].price * element[0].numberOfCups)
        }
        this.transactionSum = sum

    }

 



    addTransaction(typeOfCoffee, numberOfCups) {
        let emptyArray = []
        if (typeOfCoffee === "Bryggkaffe") {
            emptyArray = [{ type: "Bryggkaffe", numberOfCups: numberOfCups, price: coffees[0].price }]
            this.transactions.push(emptyArray)

        } else if (typeOfCoffee === "Cappuccino") {
            emptyArray = [{ type: "Cappuccino", numberOfCups: numberOfCups, price: coffees[1].price }]
            this.transactions.push(emptyArray)

        } else if (typeOfCoffee === "Latte") {
            emptyArray = [{ type: "Latte", numberOfCups: numberOfCups, price: coffees[2].price }]
            this.transactions.push(emptyArray)

        }


    }

    getTotalCups() {
        let sum = 0
        for (let i = 0; i < this.transactions.length; i++) {
            const element = this.transactions[i]
            sum += element[0].numberOfCups
        }
        this.numberOfCups = sum

    }

    writeMessage() {
        for (let i = 0; i < this.transactions.length; i++) {
            const element = this.transactions[i]
            if (element.typeOfCoffee === "Bryggkaffe") {
            console.log(`Du har köpt ${element[0].numberOfCups} st ${element[0].typeOfCoffee} för ${coffees[0].price} kr/st Summa:${this.transactionSum}`)
        }
        
    }
    }
}

let customer1 = new Customer()
customer1.addTransaction("Bryggkaffe", 5)
customer1.addTransaction("Cappuccino", 50)
customer1.addTransaction("Latte", 4)
customer1.getTotalCups()
customer1.getTotalSpent()
console.log(customer1.numberOfCups)
console.log(customer1.transactionSum)
console.log(customer1.updateMembershipStatus())
customer1.writeMessage()



//console.log(customer1.getTotalSpent())
//console.log(customer1.transactions)
//console.log(customer1.getTotalCups())