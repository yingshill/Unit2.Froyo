// Get user input separated by commas, individual flavor can be repeated
// Data collected type is STRING
const user_input = prompt("Please tell us your froyo flavors seperating by commas: ");

// Parse the string into array
const flavor_arr = user_input.split(',');

// Loop through the array
let table_list = {}
for (let i = 0; i < flavor_arr.length; i++) {
    if (table_list.hasOwnProperty(flavor_arr[i])) {
        table_list[flavor_arr[i]] += 1
    } else {
        table_list[flavor_arr[i]] = 0
    }
}
console.log("You have order those flavors below: ")
for (const flavor in table_list) {
    console.log(`${flavor}: ${table_list[flavor]}\n`)
}

//test1
/*
input: ta,ta,ta,oo,oo,la,la,ii,ii,iii
output: 
You have order those flavors below: 
froyo.js:19 ta: 2
froyo.js:19 oo: 1
froyo.js:19 la: 1
froyo.js:19 ii: 1
froyo.js:19 iii: 0
*/