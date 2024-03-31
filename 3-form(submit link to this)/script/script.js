const form = document.querySelector(".card__form");
const messageList = document.querySelector(".card__message-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let { firstName, email, confirm } = event.target;
  firstName = firstName.value;
  email = email.value;
  confirm = confirm.value;
  if (firstName == "" || email == "" || confirm == "") {
    message("Please fill all the fields");
  } else if (email != confirm) {
    message("E-mail address is diffenent");
    form.confirm.value = "";
  } else {
    message("Success", "green");
    form.firstName.value = "";
    form.email.value = "";
    form.confirm.value = "";
  }
});

function message(str, color) {
  const item = document.createElement("div");
  item.classList.add("card__message-list-item");
  item.innerText = str;
  if (color) {
    item.style.color = color;
  }
  messageList.appendChild(item);
  setTimeout(() => {
    item.remove();
  }, 5000);
}
