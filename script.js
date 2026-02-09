const searchInput = document.getElementById("search");
const movies = document.querySelectorAll(".movie");

// Поиск фильмов
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    movies.forEach(movie => {
        const title = movie.querySelector("h3").textContent.toLowerCase();
        movie.style.display = title.includes(value) ? "block" : "none";
    });
});

// Кнопка "Смотреть" → "Добавлено"
movies.forEach(movie => {
    const button = movie.querySelector("button");

    button.addEventListener("click", () => {
        button.textContent = "Добавлено ✓";
        button.style.background = "#2ecc71";
    });
});