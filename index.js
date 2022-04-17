function carregar (){

    let msg = document.getElementById("msg");
    let img = document.getElementById("img");

    let data = new Date();
    let hora = data.getHours()  ;
  
    // let hora = 10;
    // let hora = 15;
    // let hora = 20;

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if ((hora >=0) && (hora < 12)) {

        img.src = './img/manha.jpeg';
        document.body.style.background = '#e2cd9f';

    } else if ((hora >= 12) &&(hora < 18)) {
      
        img.src = './img/tarde.jpeg';
        document.body.style.background = '#b9846f';

    }else{
        
        img.src = './img/noite.jpeg';
        document.body.style.background = '#515154';

    }

}
