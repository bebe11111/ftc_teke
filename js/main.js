"use strict"

import{
    players
}   from './data.mjs';

const div = document.querySelector('#cards')

for(const player of players)
{
    const card = document.createElement("div")
    const h5 = document.createElement("h5")
    const best = document.createElement("p")
    const image = document.createElement("img")

    const table = document.createElement("table")
    const tr = document.createElement("tr")
    const td = document.createElement("td")

    card.classList.add('card')

    h5.textContent = player.name

    image.src = player.img
    image.alt = image.tittle = player.name

    best.textContent = "Legjobb eredmény: " +  player.best

    
    tr.append(td)
    table.append(tr)
    card.append(image, h5, best, table)
    div.append(card)
}