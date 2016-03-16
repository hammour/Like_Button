var button = document.querySelector("input[type=button]");
button.addEventListener("click", function() {
 likes=likes+1;
 button.value = likes+" likes";
})

var likes = parseInt(button.value.charAt(0));
