




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

 function calculateTax(amount) {
    return amount*0.01
 }


 function convertToUpperCase(text){
    return text.toUpperCase();
 }


 function findMaximum(num1,num2){
    return Math.max(num1,num2);
 }

 function isPalindrome(word) {
    const word = word.toLowerCase();
    return word === word.split('').reverse().join('');

 }
 function calculateDiscountedPrice(originalPrice,discountPercentage) {
    const discountAmount =(originalPrice*discountPercentage) /100;
    return originalPrice -discountAmount;
 }
