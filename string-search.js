const products = ['Dell hardcore i29 200GB laptop', 'iphone 1TB camera flashlight phone', 'yellow laptop with black camera', 'Dell 1X59 Lenovo commercial yoga laptop', 'LG supernova laptop', 'HTC low price phone', 'Dell purple color phone with Laptop'];

const searching = 'laptop';
const searching1 = 'dell';

// indexof

const output = [];
/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
} */

// includes

/* for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
} */

// startsWith

/* for (const product of products) {
    if (product.toLowerCase().startsWith(searching1.toLowerCase())) {
        output.push(product);
    }
} */

// endsWith

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
