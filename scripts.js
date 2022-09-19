let item = 0;                     //contador de imagens solicitadas
const max = 79;                  //número da última imagem
const updateRate = 2000;         //taxa de atualizção automática em ms

function proxImagem( img ){ //solicita nova imagem via fetch
fetch("img/"+img+".jpg")
.then(resp => resp.blod())
.then(blod =>{
    const imagemObjteURL = URL.createObjectURL(blod);
    console.log(imagemObjteURL);
    const proxImg = document.createElement("img");
    proxImg.src = imagemObjteURL;
    document.getElementById("placeholder").appendChild(proxImg);
})
}

window.onload = setInterval(function(){
    proxImagem( item++ % (max+1));
    let scrollPoint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: "smooth"});
}, updateRate);