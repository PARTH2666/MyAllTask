let data;
let number_of_quote;
let random;
let quote, author, length;
let values = [];
// document.getElementById("range").addEventListener("change", (event) => {
//   number_of_quote = event.target.value;
// });

document.getElementById("btn").addEventListener("click", () => {
  let random_number = Math.floor(Math.random() * 15);
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      data = response.json();
      return data;
    })
    .then((data) => {
      if (length == number_of_quote) {
        document.getElementById("quote_container").childNodes.forEach((ele) => {
          ele.remove();
        });
      }

      author = data[random_number].author.split(",");
      quote = document.createElement("p");
      quote.className = "quote";
      quote.textContent = `@ ${data[random_number].text} - ${author[0]}`;
      document
        .getElementById("quote_container")
        .insertAdjacentElement("beforeend", quote);
    });
});
