

 const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    const formData = new FormData(form); // Отримуємо всі дані форми
    const formObject = {}; // Об'єкт для збереження даних

    // Перевірка на незаповнені поля
    let isValid = true;
    formData.forEach((value, name) => {
      if (value.trim() === "") {
        isValid = false; // Якщо поле порожнє, то змінюємо статус на false
      }
      formObject[name] = value.trim(); // Додаємо значення до об'єкта, очищене від пробілів
    });

    // Якщо є порожні поля, показуємо попередження
    if (!isValid) {
      alert("All form fields must be filled in");
    } else {
      // Якщо всі поля заповнені, виводимо об'єкт в консоль
      console.log(formObject);
      form.reset(); // Очищаємо форму
    }
  });