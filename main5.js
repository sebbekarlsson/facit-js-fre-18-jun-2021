const button = document.getElementById("button");
const ul = document.getElementById("ul");



button.addEventListener("click", async function(event){
  ul.innerHTML = "";

  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await response.json(); // array

  data.forEach(function(obj){
    const li = document.createElement("li");
    li.innerText = obj.text;

    ul.appendChild(li);
  });
});
