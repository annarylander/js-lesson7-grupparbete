const coffees = [
  {name: 'Brygg Kaffe', price: 20},
  {name: 'Cappucino', price: 30},
  {name: 'Latte', price: 40}
]


class Customer{
    constructor(){
        this.allTransactions = []
        this.membership = "Brons"
        this.numberOfCups = 0
        this.transactionSum = 0
    }

    getTransaction(){
        return this.allTransactions
    }

    addTransaction(typeOfCoffee, numberOfCups){
        let emptyArray = []
        let sumOfTransaction = 0
        if(typeOfCoffee === "Bryggkaffe") {
            sumOfTransaction = numberOfCups * 20
            emptyArray = ["Bryggkaffe", numberOfCups, sumOfTransaction]
            this.allTransactions.push(emptyArray);
        }else if(typeOfCoffee === "Cappucino") {
            emptyArray = ["Bryggkaffe", numberOfCups]
            this.allTransactions.push(emptyArray)
        }else if(typeOfCoffee === "Latte") {
            emptyArray = ["Bryggkaffe", numberOfCups]
            this.allTransactions.push(emptyArray);
        }
    }

    getTotalSpend(){
        let sumOfTotal = 0;
        
        for(let i = 0; i < this.allTransactions.length; i++){
            sumOfTotal += this.allTransactions[i][2]
        }
        return sumOfTotal;
        
    }

    // getMembershipStatus(){
    //     return this.membership
    // }

    // checkMembershipStatus(){
    //     return this.membership
    // }

}


const customer1 = new Customer()

customer1.addTransaction("Bryggkaffe", 3)
customer1.addTransaction("Bryggkaffe", 2)

customer1.getTransaction()

//Det skriver ut: [ [ 'Bryggkaffe', 3, 60 ], [ 'Bryggkaffe', 2, 40 ] ]
console.log(customer1.allTransactions)

//Det skriver ut: 100 nu!
console.log(customer1.getTotalSpend())
