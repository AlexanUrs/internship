
function getAmountOfPurchases(customers) {
    let AmountOfPurchases = 0;
    customers.forEach(i => {
      AmountOfPurchases += i;
    });
    return AmountOfPurchases;
  }
  
  let valuedCustomers = [10000, 20000, 30000];

  console.log(getAmountOfPurchases(valuedCustomers));