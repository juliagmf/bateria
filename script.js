document.body.addEventListener('keyup', (event)=>{
    // identificando os eventos
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    
    if (song !== ''){
        //transformando em uma lista
        let songArray = song.split('');
        console.log(songArray);
        playComposition(songArray);
    }        
});


// função para tocar o som
function playSound(sound){
    //adicionando os elementos em template string, selecionando a variavel
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //verificando se foi encontrado
    //se foi encontrado, toque
    if(audioElement) {
        //zerando o audio e tocando novamente sem delay
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        //adiciona a classe
        keyElement.classList.add('active');

        //passando paramentros, função e tempo 
        setTimeout(()=>{
            //removendo a classe
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    //aumentando o tempo
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;       
    }   
}