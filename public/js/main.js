// #1
let div = document.querySelectorAll('.box-body')
console.log(div[0])
let inputFirst = div[0].querySelector('input')
inputFirst.addEventListener('focus', ()=>{
    inputFirst.style.backgroundColor="lightblue"
})
//2

let inputSecond = div[1].querySelector('input')
inputSecond.addEventListener('focus', ()=>{
    inputSecond.style.backgroundColor="lightblue"
    inputSecond.addEventListener('focusout', ()=>{
        inputSecond.style.backgroundColor="transparent"
    })
})

// #3

let btn = div[2].querySelector('button')
let para_firstModif = div[2].getElementsByClassName("premierParagraphe")
let para_secondModif = div[2].getElementsByClassName("secondParagraphe")
let para_troisiemeModif = div[2].getElementsByClassName("dernierParagraphe")

btn.addEventListener('click', ()=>{
 para_firstModif[0].innerText = para_secondModif[0].innerText
 para_troisiemeModif[0].innerText=para_secondModif[0].innerText

})


// 4

let changeNom = div[3].querySelector('input')
let btnNew = div[3].querySelector('button')
let nom = document.getElementById('exo4')
btnNew.addEventListener('click', ()=>{
// console.log(changeNom.value)
    nom.innerText = changeNom.value
})

// 5

let btnEncore = div[4].querySelector('button')
let image = div[4].querySelector('img')
btnEncore.addEventListener('click', ()=>{
    image.src = "./src/image/tartine.png"
})

// #6

let imageExo6 = div[5].querySelectorAll('img')
let srcImage=  imageExo6[0].getAttribute('src')
imageExo6[0].addEventListener('click', ()=>{
    imageExo6[1].addEventListener('click', ()=>{
        imageExo6[1].src = srcImage
    })
})

// #7

let btnExo7 = div[6].querySelector('button')
let parachanger = div[6].querySelectorAll('p')
btnExo7.addEventListener('click', ()=>{
    let variableTemporaire ; 
    variableTemporaire = parachanger[1].innerText
    parachanger[1].innerText = parachanger[0].innerText
    parachanger[0].innerText = variableTemporaire
})



