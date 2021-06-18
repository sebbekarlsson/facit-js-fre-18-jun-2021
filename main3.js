const button = document.getElementById("button");
const textarea = document.getElementById("textarea");



button.addEventListener("click", function(event){
  textarea.value = textarea.value.toUpperCase();
});
