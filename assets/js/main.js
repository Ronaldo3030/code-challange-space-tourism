// FUNÇÃO QUANDO CLICAR NO BOTÃO DO MENU
function changeInfo(id){
    document.getElementById('img').src = 'assets/starter-code/assets/destination/image-'+id+'.png' //ALTERA O SRC DA IMAGEM, PARA O SRC COM O ID PASSADO POR PARAMETRO

    let menu = document.querySelector('.menu-destination').children //SALVA OS FILHOS DA CLASSE .MENU DESTINATION EM MENU
    for(let item of menu){ //FOR OF EM MENU
        item.classList.remove('select') //VAI PERCORRER O ARRAY MENU E VAI REMOVER A CLASSE SELECT
    }
    document.getElementById(id).classList.add('select') // ADICIONA A CLASSE SELECT NO ELEMENTO COM O ID INFORMADO NO PARAMETRO

    let info = document.querySelector('.info').children //SALVA OS FILHOS DA CLASSE .INFO EM INFO
    for(let item of info){ //FOR OF EM INFO
        item.classList.add('d-none') //VAI PERCORRER O ARRAY INFO E VAI ADICIONAR D-NONE A TODOS ELEMENTOS
    }
    document.querySelector('.info-'+id).classList.remove('d-none') //REMOVE D-NONE DO ELEMENTO COM A CLASSE .INFO- E O ID PASSADO POR PARAMETRO
}