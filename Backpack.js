function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
const names = ['часы', 'картина', 'радио', 'ваза', 'книга', 'компьютер', 'золото']
const prices = [175, 90, 20, 50, 10, 200, 3000]
const weights = [10, 9, 4, 2, 1, 20, 1]
const items = []
const maxWeights = 20
let myItems = []
let nowWeights = 0
let allowedWeight = maxWeights
let maxPrice = getMaxOfArray(prices)
for (let i = 0; i < prices.length; i++)
{
    items.push({
        name:names[i], 
	    price: prices[i], 
	    weight: weights[i]
    })
}
console.log(items)
while(allowedWeight > 0 ) {
    for (let k = 0; k < items.length; k++) {
        if(items[k].weight > allowedWeight) {
            items.splice(k, 1)
            prices.splice(k, 1)
            maxPrice = getMaxOfArray(prices)
            k = 0
        }
        else if (items[k].price == maxPrice && items[k].weight <= allowedWeight){
            myItems.push(items[k])
            nowWeights += items[k].weight
            allowedWeight -= items[k].weight
            console.log(allowedWeight)
            items.splice(k, 1)
            prices.splice(k, 1)
            maxPrice = getMaxOfArray(prices)
        }
    }
}   
console.log(myItems)