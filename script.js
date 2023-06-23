document.addEventListener('DOMContentLoaded', () => {

let fav = document.getElementsByClassName("fav")[1];
fav.innerHTML = `<img src="om.png" alt=""> babaneemkaroli.blog@gmail.com`

//   document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// document.addEventListener('selectstart', function (e) {
//   e.preventDefault();
// });

// document.addEventListener('keydown', function(e) {
//   if (e.key === "F12") {
//     e.preventDefault();
//   }
// });




  // Get the button for scrolling to top
  const myButton = document.getElementById('myBtn');

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      myButton.style.display = 'block';
    } else {
      myButton.style.display = 'none';
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Add click event listener to button
  myButton.addEventListener('click', topFunction);







  // language interchange code
  var toggleButton = document.getElementById('toggle-button');
  var englishContents = document.querySelectorAll('.english');
  var hindiContents = document.querySelectorAll('.hindi');

  toggleButton.addEventListener('click', function () {
    englishContents.forEach(function (content) {
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    hindiContents.forEach(function (content) {
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });





  const burgerF = document.getElementById("burger")
  burgerF.addEventListener("click", burgerFunction)

  function burgerFunction() {

    const toggleButton = document.getElementById("toggle-button")
    const navItems = document.getElementById("navItems")


    if (burgerF.style.color == "white") {
      toggleButton.style.display = "flex";
      navItems.style.display = "flex";
      burgerF.style.color = "red"
    } else {
      burgerF.style.color = "white"
      toggleButton.style.display = "none";
      navItems.style.display = "none";
    }

  }













  const toggleHome = document.getElementById("toggle-Others")
  const hideHome = document.getElementById("hideHome")
  toggleHome.addEventListener("click", toggleHomeFn)
  
  
  
  
  
  const toggleBlog = document.getElementById("toggle-Blog")
  const hideBlog = document.getElementById("hideBlog")
  toggleBlog.addEventListener("click", toggleBlogFn)
  
  
  
  
    
  function toggleHomeFn() {
    if (hideHome.style.display == "none") {
        hideHome.style.display = "flex";
    } else {
        hideHome.style.display = "none";
    }
  }
  
  
  function toggleBlogFn() {
    if (hideBlog.style.display == "none") {
        hideBlog.style.display = "flex";
    } else {
        hideBlog.style.display = "none";
    }
  }
  
  










});
