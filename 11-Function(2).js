// ===========>>>>>>>>>>>Rest Operator<<<<<<<<<=========
// rest operator denote three dot(...) before parameter name
function calculateCardItemPrice(...ItemsPrice) {
  return ItemsPrice.reduce((a = 5, b = 5) => a + b);
}
console.log(calculateCardItemPrice(199, 299, 852, 124));

// ===========>>>>>>>>>>>How TO Pass Array As An Arguments<<<<<<<<<=============
const itemsPrice = [199, 299, 399];
function takeArray(items) {
  console.log("The array is : ", items);
}
// takeArray(itemsPrice);

// ===========>>>>>>>>>>>How TO Pass Object As An Arguments<<<<<<<<<=============
function handleObject(anyObject) {
  console.log(`name is ${anyObject.name} and price is ${anyObject.ItemsPrice}`);
}

// handleObject({ name: "Apple", ItemsPrice: 25 });
