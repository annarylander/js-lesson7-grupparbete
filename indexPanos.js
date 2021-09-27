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
        //   printTransaction = this.allTransactions.forEach(element => {
        //     console.log(`Du köpte ${this.allTransactions.numberOfCups} st ${this.allTransactions.typeOfCoffee} för ${coffees[0].price} kr styck. Summa: ${this.allTransactions.sumOfTransaction}`)
            
            // return `Du köpte ${this.allTransactions.numberOfCups} st ${this.allTransactions.typeOfCoffee} för ${coffees[0].price} kr styck. Summa: ${this.allTransactions.sumOfTransaction}`

            // return `Du köpte ${this.allTransactions.numberOfCups} st ${this.allTransactions.typeOfCoffee} för ${coffees[0].price} kr styck. Summa: ${this.allTransactions.sumOfTransaction}`
        //   })
           
        //   return this.allTransactions
      }
  
     addTransaction(typeOfCoffee, numberOfCups){
          let emptyArray = []
          let sumOfTransaction = 0
          if(typeOfCoffee === "Bryggkaffe") {
              sumOfTransaction = numberOfCups * 20
              emptyArray = ["Bryggkaffe", numberOfCups, sumOfTransaction]
              console.log(`Du köpte ${numberOfCups} st ${typeOfCoffee} för ${coffees[0].price} kr styck. Summa: ${sumOfTransaction}`)
              this.allTransactions.push(emptyArray)
          }else if (typeOfCoffee === "Cappucino") {
              sumOfTransaction = numberOfCups * 30
              emptyArray = ["Cappucino", numberOfCups, sumOfTransaction]
              console.log(`Du köpte ${numberOfCups} st ${typeOfCoffee} för ${coffees[1].price} kr styck. Summa: ${sumOfTransaction}`)
              this.allTransactions.push(emptyArray)
          }else if(typeOfCoffee === "Latte") {
              sumOfTransaction = numberOfCups * 40
              emptyArray = ["Latte", numberOfCups, sumOfTransaction]
              console.log(`Du köpte ${numberOfCups} st ${typeOfCoffee} för ${coffees[2].price} kr styck. Summa: ${sumOfTransaction}`)
              this.allTransactions.push(emptyArray)
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
  
  customer1.addTransaction("Bryggkaffe", 2)
  customer1.addTransaction("Cappucino", 1)
  customer1.addTransaction("Latte", 1)
  
//   customer1.getTransaction()
  
  //Det skriver ut: [ [ 'Bryggkaffe', 3, 60 ], [ 'Bryggkaffe', 2, 40 ] ]
//   console.log(customer1.allTransactions)

//   customer1.getTransaction()
  
  //Nu funkar getTotalSpend()
  console.log(customer1.getTotalSpend())
  
