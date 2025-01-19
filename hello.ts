const divEl = document.createElement("div");
document.body.append(divEl);
divEl.classList.add("users-cards");

type Card = {
  name: string;
  description: string;
};

const usersEl = [
  { name: "Anton", description: "student" },
  { name: "Karl", description: "Hello" },
  { name: "Igor", description: "Hi" },
  { name: "Danil", description: "Therapist" },
];

const addUsers = (name: string, description: string) => {
  divEl.insertAdjacentHTML(
    "beforeend",
    `<div class="user-card">
    <p class="users-card-name">Name: ${name}</p>
    <p class="users-card-description hidden">description: ${description}</p>
    </div>
    `
  );
};
usersEl.forEach((user) => addUsers(user.name, user.description));

const userCardEl = document.querySelectorAll(".user-card");
userCardEl.forEach((card) => {
  card.addEventListener("click", function (event) {
    const clickedEl = event.currentTarget as HTMLElement;
    const descriptionEl = clickedEl.querySelector(
      ".users-card-description"
    ) as HTMLElement;
    descriptionEl.classList.toggle("hidden");
  });
});
