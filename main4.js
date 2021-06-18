const button = document.getElementById("button");
const textarea = document.getElementById("textarea");



button.addEventListener("click", function(event){
  textarea.value = Array.from(textarea.value).reverse().join("");
});
