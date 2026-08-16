async function loadUsers() {
  const usersJSON = localStorage.getItem("users");

  if (usersJSON === null) {
    try {
      const response = await fetch("users.json");

      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }

      const data = await response.json();

      setTimeout(() => {
        renderUsers(data.users);
      }, 3000);

      localStorage.setItem("users", JSON.stringify(data));
    } catch (error) {
      console.error(error);

      const container = document.getElementById("app");
      container.innerHTML = "Ошибка при загрузке данных";
    }
  } else {
    const users = JSON.parse(usersJSON);
    renderUsers(users.users);
  }
}

function renderUsers(users) {
  const container = document.getElementById("app");
  const userCardCopy = document.getElementById("users-template");

  container.innerHTML = "";

  users.forEach((user) => {
    const cardClone = userCardCopy.content.cloneNode(true);

    cardClone.querySelector(".user-name").textContent = user.name;
    cardClone.querySelector(".user-surname").textContent = user.surname;
    cardClone.querySelector(".user-email").textContent = user.email;
    cardClone.querySelector(".user-age").textContent = user.age;
    cardClone.querySelector(".user-city").textContent = user.city;

    const deleteBtn = cardClone.querySelector(".delete-card-btn");
    const cardElement = cardClone.querySelector(".user-card");

    deleteBtn.addEventListener("click", () => {
      const usersData = JSON.parse(localStorage.getItem("users"));

      usersData.users = usersData.users.filter((item) => {
        return item.id !== user.id;
      });

      localStorage.setItem("users", JSON.stringify(usersData));

      cardElement.remove();
    });

    container.appendChild(cardClone);
  });
}

const deleteAllBtn = document.getElementById("delete-all-btn");

deleteAllBtn.addEventListener("click", () => {
  const usersData = JSON.parse(localStorage.getItem("users"));

  if (!usersData || usersData.users.length === 0) {
    alert("Все карточки уже удалены");
    return;
  }

  usersData.users = [];

  localStorage.setItem("users", JSON.stringify(usersData));

  document.getElementById("app").innerHTML = "";
});

const getAllBtn = document.getElementById("get-all-btn");

getAllBtn.addEventListener("click", async () => {
  const existingCards = document.querySelectorAll(".user-card");

  const data = await fetchUsersData();

  if (!data) {
    return;
  }

  if (data.users.length === existingCards.length) {
    alert("Все карточки уже отображены");
  } else {
    renderUsers(data.users);
    localStorage.setItem("users", JSON.stringify(data));
  }
});

async function fetchUsersData() {
  try {
    const response = await fetch("users.json");

    if (!response.ok) {
      throw new Error("Ошибка данных");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    const container = document.getElementById("app");
    container.innerHTML = "Ошибка при загрузке данных";

    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
});