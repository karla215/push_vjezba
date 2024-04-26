"use strict"

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
//drugi zadatak
document.getElementById("lokalni_json").addEventListener("click", povuciJson);

function povuciJson() {
  fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;

      data.forEach((user) => {
        ispis += `<ul>
        <li>ID: ${user.id}</li>
        <li>Ime: ${user.ime}</li>
        <li>Prezime: ${user.prezime}</li>
        </ul>`;
      });

      document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

/* ZADAĆA - isto ovo što smo napravili sa buttonom lokalni json napravite sa fetchom sa adrese
"https://jsonplaceholder.typicode.com/posts" i ispišite "title" i "body" u div elementu sa ID-em "ispisi" */ 
/*
async function getPost() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data.id);
    } catch(error) {
        console.log(error);
    }
};
getPost();
*/