"use strict"

import{
    players
}   from './data.mjs';

const div = document.querySelector('#cards')

function generatecard(){
    const div = document.querySelector('#cards')

    for(const player of players)
        {
            const card = document.createElement("div")
            const h5 = document.createElement("h5")
            const best = document.createElement("p")
            const image = document.createElement("img")
        
            const table = document.createElement("table")
        
            card.classList.add('card')
        
            image.src = player.img
            image.alt = image.tittle = player.name
        
            card.append(image, table)
            div.append(card)

            
        }
        
}

generatecard();

function generateCell(text, classes) {
    const cell = document.createElement('td');
    cell.textContent = text;
    cell.classList.add(...classes ?? '');
    return cell;
}

function generateTable(){
    const table = document.querySelector('table')

    const button = document.createElement("button")
    button.textContent = "Törlés"

    const rows = [];

    for (const player of players){

        const row1 = document.createElement('tr')
        const row2 = document.createElement('tr')

        row1.append(
            generateCell(player.name),
            generateCell().append(button)
        )
        row2.append(
            generateCell("Legjobb eredmény: " +  player.best)
        )

        rows.push(row1, row2);
    }

    table.replaceChildren(...rows);
}

generateTable();
