const operation = prompt("What do you want to do? (add, sub, multi, div):");
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
let result;
let operator;

if (isNaN(num1) || isNaN(num2)) {
  alert("Error. You only need to enter a number.");
} else if (
  operation === "+" ||
  operation === "-" ||
  operation === "*" ||
  operation === "/"
) {
  if (operation === "+") {
    result = num1 + num2;
    operator = "+";
  } else if (operation === "-") {
    result = num1 - num2;
    operator = "-";
  } else if (operation === "*") {
    result = num1 * num2;
    operator = "*";
  } else if (operation === "/") {
    if (num2 === 0) {
      alert("Error: Division by zero is not allowed.");
    } else {
      result = num1 / num2;
      operator = "/";
    }
  }

  if (operator) {
    alert(`${num1} ${operator} ${num2} = ${result}`);
  }
} else {
  alert("Invalid operator. Please enter the correct character.");
}

const obj = {
  prop: "42",
  prop2: [
    8,
    9,
    10,
    {
      beautifulPropertyName: 88,
      "property with spaces": {
        a: {
          b: "",
          c: {
            someProperty: [
              {
                "prop name": "I am a smart programmer",
              },
            ],
          },
        },
      },
    },
  ],
  prop3: function () {
    return {
      baz: "Hello",
      bar: {
        anotherBeautifulProp: [
          8,
          {
            target: "It was simple!",
            qwe: [8, 17, 37],
          },
        ],
      },
    };
  },
};

console.log(
  obj.prop2[3]["property with spaces"].a.c.someProperty[0]["prop name"]
);
console.log(obj.prop3().bar.anotherBeautifulProp[1].target);
