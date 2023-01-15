// pour éviter d'avoir une div de plus de 200 lignes on intègre les carrés via une boucle de js vers l'html

for (let i = 0 ; i<20 ; i++) {
    const iconesInput = document.querySelector("#iconesDiv")
    iconesInput.insertAdjacentHTML("beforebegin", '<img src="image/square1_black.png" alt="square" class="square"><img src="image/square2_black.png" alt="square" class="square"><img src="image/square3_black.png" alt="square" class="square"><img src="image/square4_black.png" alt="square" class="square"><img src="image/square5_black.png" alt="square" class="square"><img src="image/square6_black.png" alt="square" class="square"><img src="image/square7_black.png" alt="square" class="square"><img src="image/square8_black.png" alt="square" class="square"><img src="image/square9_black.png" alt="square" class="square"><img src="image/square10_black.png" alt="square" class="square"><img src="image/square11_black.png" alt="square" class="square"><img src="image/square12_black.png" alt="square" class="square"><img src="image/square13_black.png" alt="square" class="square"><img src="image/square14_black.png" alt="square" class="square">')
}

//l'idée c'est de changer le filtre de l'image quand on passe la sourie dessus, et le retablir à la normale après 0.7s
//ça doit s'appliquer pour chaque image sur laquelle la sourie de l'utilisateur passe

let mouseOver = document.querySelectorAll('img')

mouseOver.forEach(img => {
    img.addEventListener("mouseover", function(event){
        event.target.style.filter = "brightness(100)"
    
        setTimeout(function(){
            event.target.style.filter = ""
        }, 700)
    })
})

// L'idée c'est de faire un bouton qui joue la musique quand on appuie sur play et qui la met sur pause quand on clique sur pause
// Il va donc falloir faire une condition qui vérifie la classe du bouton et qui va changer le texte, la class et jouer ou non l'audio quand on clique dessus

let classBouton = document.getElementById('player')
const audio = new Audio("audio/royalty_music.mp3")

//on rajoute un petit changement de couleur à chaque click de manière aléatoire parmis celles que j'ai mises dans l'array dessous
const border = document.querySelector(".button")  
const color = ['blue', 'turquoise', 'dodgeblue', 'darkslateblue', 'darkorchid']

const button = document.getElementById ("player")

button.addEventListener('click', () =>{

    //a chaque click on change la couleur de la bordure de l'encadré de manière aléatoire parmis celles de l'array plus haut et on lisse le changement de couleur à l'aide d'une transition pour que ce soit plus esthétique 
    const colorIndex = parseInt(Math.random() * color.length)
    border.style.border = `5px solid ${color[colorIndex]}`
    border.style.transition = '1s linear'
    
    // première condition pour lancer la musique et échanger la class et le text
    if (classBouton.classList.contains('pause')){
        audio.play();
        const buttonClick = document.querySelector('button')
        buttonClick.innerHTML = 'Pause'
        buttonClick.classList.remove("pause")
        buttonClick.classList.add("play")  
    } else {
    // deuxième condition pour revenir au point de départ au niveau du texte et de la class avec la musique sur pause
        audio.pause();
        const buttonClick = document.querySelector('button')
        buttonClick.innerHTML = 'Play'
        buttonClick.classList.remove("play")
        buttonClick.classList.add("pause")   
    }

})