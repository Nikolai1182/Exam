const regForm = document.querySelector("#reg-form");

regForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  const res = Object.fromEntries(data);
  if (!res.login || !res.email || !res.password) {
    const msg = document.querySelector(".message");
    msg.innerText = "Заполните все поля!";
    msg.style.color = "red";
  } else {
    try {
      const response = await fetch("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.msg) {
        const msg = document.querySelector(".message");
        msg.innerText = result.msg;
        msg.style.color = "green";
        setTimeout(() => {
          window.location.href = "/profile";
        }, 2000);
      }
      if (result.err) {
        const msg = document.querySelector(".message");
        msg.innerText = result.err;
        msg.style.color = "red";
      }
    } catch (error) {
      console.log("Ошибка в клиентском коде Register", error);
    }
  }
});
