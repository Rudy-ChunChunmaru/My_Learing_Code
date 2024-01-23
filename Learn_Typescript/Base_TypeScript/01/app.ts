function add(n1: number, n2: number) {
  //   if (typeof n1 == "number" && typeof n2 == "number") {
  //     throw new Error("salah input");
  //   }
  return n1 + n2;
}

const num1 = "5";
const num2 = "4";
const result = add(+num1, +num2);
console.log(result);
