import { data } from "../data/games.js";

let grid;

function create_element(name, url) {
    let temp = document.createElement('div');
    temp.className = 'grid-item';

    let title = document.createElement('h2');
    title.textContent = name;

    let a = document.createElement('a');
    a.href = url;
    a.textContent = url;
    a.target = "_blank";  // Ouvre dans nouvel onglet

    temp.appendChild(title);
    temp.appendChild(a);
    grid.appendChild(temp);
}

function place(tag = null) {
    grid = document.getElementById("grid-view");
    grid.innerHTML = "";

    if (!tag || tag.trim() === "") {
        for (let k of data) {
            create_element(k.name, k.url);
        }
        return;
    }

    const tags = tag.split(',').map(t => t.trim().toLowerCase());

    for (let k of data) {
        const gameTags = k.tags.map(t => t.toLowerCase());

        if (tags.some(t => gameTags.includes(t))) {
            create_element(k.name, k.url);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    place();  // Affiche tout au chargement

    document.getElementById('s').addEventListener('click', () => {
        let input = document.getElementById('research-input');
        place(input.value);  // .value au lieu de .textContent
    });
});
