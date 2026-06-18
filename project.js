


const button = document.getElementById("getStarted");

button.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (email === "") {
        message.innerHTML = "Please enter your email!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Membership started successfully!";
        message.style.color = "green";
    }
});

const movies = [
    "Stranger Things",
    "Wednesday",
    "Money Heist",
    "Dark",
    "The Witcher",
    "Peaky Blinders"
];

const movieList = document.getElementById("movieList");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerText = movie;

    movieList.appendChild(card);
});