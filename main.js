window.onload = init();

function init() {
  var list = document.body.querySelector("ul");

  var NYTimes_API_Key = "543efef0096b759361ddfa9e1f310fe2:8:72673622";
  var NYTurl =
    "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
    NYTimes_API_Key;

  fetch(NYTurl, {
      method: "get"
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      var books = json.results;

      books.forEach(function (book, index) {
        var isbns = book.isbns[0].isbn10;
        var url = book.amazon_product_url;
        var rank = book.rank;
        var bookObj = book.book_details[0];

        var item = document.createElement("li");
        item.classList.add("book");
        item.innerHTML =
          '<div class="book-header"><p class="rank"><span>' +
          rank +
          '</span></p><a href="' +
          url +
          '">' +
          '<h3 class="underln">' +
          bookObj.title +
          "</h3></a></div><p>by " +
          "<span>" +
          bookObj.author +
          "</span></p><p>publisher: " +
          "<span>" +
          bookObj.publisher +
          "</span></p><p>" +
          bookObj.description;

        list.appendChild(item);
        item.style.borderTop = "6px solid" + colors[index];

      });
    });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.querySelector(".header").style.top = "0";
    } else {
      document.querySelector(".header").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
  };

  var colors = [
    "#008a00",
    "#00aba9",
    "#f472d0",
    "#d80073",
    "#a20025",
    "#0050ef",
    "#fa6800",
    "#e3c800",
    "#6d8764",
    "#825a2c",
    "#0050ef",
    "#a4c400",
    "#d80073",
    "#825a2c",
    "#00aba9",
    "#fa6800",
    "#1ba1e2",
    "#6d8764",
    "#6a00ff",
    "#f472d0",
    "#60a917",
    "#a20025",
    "#e51400",
    "#f0a30a",
    "#e3c800",
    "#0050ef",
    "#aa00ff",
    "#008a00",
    "#647687",
    "#76608a"
  ];
}

//fixing horizontal scroll
//https://css-tricks.com/findingfixing-unintended-body-overflow/

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );