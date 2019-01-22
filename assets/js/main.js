const books = [
  {
    title: "Dive into HTML5",
    author: "Mark Pilgrim",
    url: "http://diveinto.html5doctor.com/",
    onSale: false
  },
  {
    title: "Understanding Flexbox",
    author: "Ohans Emmanuel",
    url: "https://ohansemmanuel.github.io/uf_download.html",
    onSale: true
  },
  {
    title: "Maintenable CSS",
    author: "Adam Silver",
    url: "https://maintainablecss.com/",
    onSale: false
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    url: "http://eloquentjavascript.net/",
    onSale: true
  }
];
function IsOnSale(myArray) {
  const filteredArray = myArray.filter(element => element.onSale == true);
  const sentence = filteredArray.map(
    element =>
      `The book "${element.title}" by ${element.author}, available at ${
        element.url
      } is on sale.`
  );
  const text = sentence.join("<br>");
  document.getElementById("textfield").innerHTML = text;
}
IsOnSale(books);
