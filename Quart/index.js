function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("game");
    li = ul.getElementsByClassName("sun");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "Game Cannot be found";
      } else {
        li[i].style.display = "Game Cannot Be found";
      }
    }
  }
  
  
const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

