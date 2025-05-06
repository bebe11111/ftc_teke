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
    const tr1 = document.createElement("tr")
    const tr2 = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const button = document.createElement("button")

    card.classList.add('card')

    image.src = player.img
    image.alt = image.tittle = player.name

    button.textContent = "Törlés"

    td1.textContent = h5.textContent = player.name
    td2.rowSpan = 2

    td3.textContent =  best.textContent = "Legjobb eredmény: " +  player.best 

    td2.append(button)
    tr1.append(td1, td2)
    tr2.append(td3)
    table.append(tr1, tr2)
    card.append(image, table)
    div.append(card)
}