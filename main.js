document.getElementById("btn").addEventListener("click", clicked);

function clicked() {
  let num1 = +document.getElementById("F").value;

  let total = ((num1 - 32) * 5) / 9;
  document.getElementById("output").innerHTML = total;
}

document.getElementById("btn1").addEventListener("click", Btnckicked);

function Btnckicked() {
  let num2 = +document.getElementById("C").value;

  let total = (num2 * 9) / 5 + 32;
  document.getElementById("123").innerHTML = total;
}
