"use strict";
function calculateTax(income, tasyear = 2022) {
    if (tasyear < 2022)
        return income * 1.2;
    return income * 1.5;
}
const total = calculateTax(1000, 2022);
console.log(total);
let employee = {
    id: 1,
    name: "John Doe",
    retire: (date) => {
        console.log(date);
    }
};
employee.retire(new Date());
//# sourceMappingURL=index.js.map