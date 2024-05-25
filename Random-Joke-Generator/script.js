const jokeContent = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

const getJoke = () => {
    jokeContent.classList.remove('fade');
    fetch(url)// 发起一个 GET 请求到指定的 URL
    .then(data => data.json()) // Convert the response(data) to JSON format
    //input the joke content
    .then(item => {
        jokeContent.textContent = `${item.joke}`
        jokeContent.classList.add('fade');
    }) 
}

btn.addEventListener('click',getJoke);