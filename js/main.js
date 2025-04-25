import{
    name,
    best,
    gender,
    tittle,
    img
}   from './data';

const div = document.querySelector('#cards')

for(const player in players)
{
    const card = document.createElement("div")
    const h5 = document.createElement("h5")
    const image = document.createElement("img")

    card.classList.add('card')

    h5.textContent = player.name

    image.src = player.img
    image.alt = img.tittle = player.name

    card.append("h5", "image")
    div.append("card")
}