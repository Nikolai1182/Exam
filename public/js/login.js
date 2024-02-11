const logForm = document.querySelector("#log-form");

logForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password) {
    const msg = document.querySelector(".message");
    msg.innerText = "Заполните все поля!";
    msg.style.color = "red";
  } else {
    try {
      const response = await fetch("/users/login", {
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
        setTimeout(() => {
          window.location.href = "/register";
        }, 1500);
      }
    } catch (error) {
      console.log("Ошибка в клиентском коде Логина", error);
    }
  }
});
