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
    p.classList.add('flex','flex-col','justify-around',) //nincsen középen a szöveg
    p.textContent = text
    return p
}

function generatecard(){
    const div = document.querySelector('#cards');
    const u15wmn = document.createElement('div');
    const u19wmn = document.createElement('div');
    const u15mn = document.createElement('div');
    const u19mn = document.createElement('div');
    const captain = document.createElement('div');

    const u15wmnh4 = document.createElement('h4');
    const u19wmnh4 = document.createElement('h4');
    const u15mnh4 = document.createElement('h4');
    const u19mnh4 = document.createElement('h4');
    const captainh4 = document.createElement('h4');

    u15wmnh4.textContent = 'U15 LÁNYOK';
    u19wmnh4.textContent = 'U19 LÁNYOK';
    u15mnh4.textContent = 'U15 FIÚK';
    u19mnh4.textContent = 'U19 FIÚK';
    captainh4.textContent ='SZÖVETSÉGI KAPITÁNYOK';

    u15wmnh4.classList.add('basis-full')
    u19wmnh4.classList.add('basis-full','mt-[3rem]')
    u15mnh4.classList.add('basis-full','mt-[3rem]')
    u19mnh4.classList.add('basis-full','mt-[3rem]')
    captainh4.classList.add('basis-full','mt-[3rem]')

    u15wmn.classList.add('flex-div',)
    u19wmn.classList.add('flex-div',)
    u15mn.classList.add('flex-div',)
    u19mn.classList.add('flex-div',)
    captain.classList.add('flex-div',)

    u15wmn.append(u15wmnh4)
    u19wmn.append(u19wmnh4)
    u15mn.append(u15mnh4)
    u19mn.append(u19mnh4)
    captain.append(captainh4)

    div.replaceChildren()

    for(const [index, player] of players.entries())
        {
            const card = document.createElement("div")
            const image = document.createElement("img")
            const flex = document.createElement('div')
            
            flex.classList.add('flex','flex-wrap','m-5','mx-auto','gap-1','justify-evenly',)

            flex.append(
                generateParagraph(player.name),
                generateEditButton(index),
                generateParagraph("Legjobb eredmény: " +  player.best),
                generateDelButton(index),
                generateParagraph(player.team)

            )
        
            card.classList.add('card','text-black',)
        
            image.src = player.img
            image.alt = image.tittle = player.name
        
            card.append(image, flex)

            if (player.type == 'u15' && player.gender == 'nő') {
                u15wmn.append(card)
            }
            else if (player.type == 'u19' && player.gender == 'nő')
            {
                u19wmn.append(card)
            }
            else if (player.type == 'u15' && player.gender == 'férfi')
            {
                u15mn.append(card)
            }
            else if (player.type == 'u19' && player.gender == 'férfi')
            {
                u19mn.append(card)
            }
            else{captain.append(card)}
            
        }

    div.append(u15wmn,u19wmn, u15mn, u19mn, captain)
        
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