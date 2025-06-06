

// PasCalCase
// enum Size { small = 1, medium, large }
// let muSize:Size = Size.medium
// console.log(muSize);



function calculateTax(income: number, tasyear: number = 2022) : number {
  if (tasyear < 2022)
    return income * 1.2
  return income * 1.5 // 15000
}

const total = calculateTax(10_00, 2022)
console.log(total);

let employee : {
  readonly id: number,
  name: string
  retire: (date: Date) => void

} = {
  id: 1,
  name:  "John Doe",
  retire: (date: Date) => {
    console.log(date);
  }
}
employee.retire(new Date())



