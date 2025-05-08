"use strict"

import{
    players
}   from './data.mjs';

const div = document.querySelector('#cards')

let updatePlayer = -1;

let deletePlayer = -1;

const updateDialog = document.querySelector('#update-dialog')

const deleteDialog = document.querySelector('#delete-dialog')

function generateParagraph(text){
    const p = document.createElement('p')
    p.classList.add('flex','flex-col','justify-around','text-black') //nincsen középen a szöveg
    p.textContent = text
    return p
}

function generatecard(){
    const div = document.querySelector('#cards')
    div.replaceChildren()

    for(const [index, player] of players.entries())
        {
            const card = document.createElement("div")
            const image = document.createElement("img")
            const grid = document.createElement('div')
            
            grid.classList.add('grid','grid-cols-2','m-5','mx-auto','gap-1',)

            grid.append(
                generateParagraph(player.name),
                generateEditButton(index),
                generateParagraph("Legjobb eredmény: " +  player.best),
                generateDelButton(index),

            )
        
            card.classList.add('card')
        
            image.src = player.img
            image.alt = image.tittle = player.name
        
            card.append(image, grid)
            
            div.append(card)
            
        }
        
}

generatecard();


function generateDelButton(idx) {
    const button = document.createElement('button');
    const div = document.createElement('div')
    button.textContent = "Törlés"
    button.classList.add('bg-red-500','p-2', 'rounded', 'cursor-pointer',);
    button.addEventListener('click', () => {
        deletePlayer = idx;
        const items = [];
        for (const key in players[idx]) {
            const li = document.createElement('li')
            li.classList.add('border', 'border-green-800', 'rounded','m-3', 'min-h-[2rem]')
            li.textContent = players[idx][key];
            items.push(li);
        }
        deleteDialog.querySelector('ul').replaceChildren(...items);
        deleteDialog.showModal();
    });
    div.classList.add('p-2')
    div.append(button)
    return div
}

function generateEditButton(idx) {
    const button = document.createElement('button');
    const div = document.createElement('div')
    button.textContent = "Szerkesztés"
    button.classList.add('bg-yellow-500', 'p-2', 'rounded', 'cursor-pointer');
    button.addEventListener('click', () => {
        updatePlayer = idx;
        for (const key in players[idx]) {
            updateDialog.querySelector(`[name="${key}"]`).value = players [idx] [key];
        }
        updateDialog.showModal();
    });
    div.classList.add('p-2')
    div.append(button)
    return div
}

document.querySelector('#create').addEventListener('submit', event =>{
    event.preventDefault()

    const name = document.querySelector('#name').value;
    const best = document.querySelector('#best').value;
    const gender = document.querySelector('#gender').value;
    const img = document.querySelector('#img').value;

    players.push({
        name,
        best,
        gender,
        img,
    });

    generatecard();

    event.target.reset();
});

document.querySelector('#update').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#update-name').value;
    const best = document.querySelector('#update-best').value;
    const gender = document.querySelector('#update-gender').value;
    const img = document.querySelector('#update-img').value;

    players.splice(updatePlayer, 1, {
        name,
        best,
        gender,
        img,
    })

    generatecard();
    updatePlayer = -1;
    updateDialog.close();
    event.target.reset();
});

document.querySelector('#close-update').addEventListener('click', () => {
    updatePlayer = -1;
    updateDialog.close();
});

document.querySelector('#delete').addEventListener('submit', (event) => {
    event.preventDefault();

    players.splice(deletePlayer, 1)

    generatecard();

    deletePlayer = -1;

    deleteDialog.close();
})

document.querySelector('#close-delete').addEventListener('click', () => {
    updatePlayer = -1;
    deleteDialog.close();
});