// document.getElementById('submit').addEventListener('click',()=>{
//   console.log('hello');
// })

// let input = [
//     {
//         ele:event.target.value
//     }
// ]
// let input = "";

// document.getElementById("input_feild").addEventListener("change", (event) => {
//   let value = input.split("+");

//   sum = 0;
//   for (let i of value) {
//     sum += Number(i);
//   }
//   console.log(sum);
//   event.target.value = sum;
// });

// document.getElementById("1").addEventListener("click", () => {});
// document.getElementById("plus").addEventListener("click", () => {
//   input.concat("+");
// });

// document.getElementById("input_feild").addEventListener("change", (event) => {
//   let value = input.split("+");

//   sum = 0;
//   for (let i of value) {
//     sum += Number(i);
//   }
//   console.log(sum);
//   event.target.value = sum;
// });

// let input = "";

// document.getElementById("1").addEventListener("click", () => {
//   input += "1";

//   document.getElementById("input_feild").setAttribute("value", input);
// });

// document.getElementById("2").addEventListener("click", () => {
//   input += "2";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("3").addEventListener("click", () => {
//   input += "3";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("4").addEventListener("click", () => {
//   input += "4";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("5").addEventListener("click", () => {
//   input += "5";

//   document.getElementById("input_feild").setAttribute("value", input);
//   console.log(document.getElementById("input_feild"));
// });
// document.getElementById("6").addEventListener("click", () => {
//   input += "6";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("7").addEventListener("click", () => {
//   input += "7";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("8").addEventListener("click", () => {
//   input += "8";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("9").addEventListener("click", () => {
//   input += "9";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("0").addEventListener("click", () => {
//   input += "0";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("+").addEventListener("click", () => {
//   input += "+";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("-").addEventListener("click", () => {
//   input += "-";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("/").addEventListener("click", () => {
//   input += "/";

//   document.getElementById("input_feild").setAttribute("value", input);
// });
// document.getElementById("*").addEventListener("click", () => {
//   input += "*";

//   document.getElementById("input_feild").setAttribute("value", input);
// });

// document.getElementById("C").addEventListener("click", () => {
//   input = "";
//   document.getElementById("input_feild").setAttribute("value", input);
// });

// document.querySelectorAll("inputData").addEventListener("click", (e) => {
//      console.log(e);
//     document.getElementById("input_feild").setAttribute("value", e.target.value);
// });
// Assuming "inputData" is a class for your input elements




let final_input;
document.querySelectorAll(".inputData").forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("data", e.target.innerHTML);
    const valueData = e.target.innerHTML;
     console.log(valueData, "valueData");
    const currentValue = document.getElementById("input_feild").value;
  console.log(currentValue);
    // Concatenate the new value with the current value
    const newValue = currentValue + valueData;
    // Set the new value back to the input field
    document.getElementById("input_feild").value = newValue;

    final_input = document.getElementById("input_feild").value;
    // console.log(nandan, "nandan");
  });
});

document.getElementById("submit").addEventListener("click", () => {
//   console.log(nandan, "nandan submit");

  let ans = eval(final_input);
  console.log(ans, "ans");
  //   document.getElementById("input_feild").setAttribute("value", ans);
  document.getElementById("input_feild").value = ans;
});


