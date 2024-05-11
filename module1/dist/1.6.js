"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 3);
const addArraow = (num1, num2) => num1 + num2;
// object -> function -> method
const poorUser = {
    name: 'Bushra',
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
const arr = [1, 4, 9];
const numArray = arr.map((elem) => elem);
