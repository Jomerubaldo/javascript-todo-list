const input = document.querySelector("#inputText");
const btn = document.querySelector("button");
const ul = document.querySelector("#myList");

const arrayList = [];

const submit = () => {
  if (input.value === "") {
    alert("You need to add text first!");
    return;
  }
  arrayList.push(input.value);

  ul.innerHTML = "";

  arrayList.forEach((list) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(list));
    ul.appendChild(li);
  });

  input.value = "";
};

btn.addEventListener("click", submit);
