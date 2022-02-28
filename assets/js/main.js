

function changeInfo(id){
    document.getElementById('img').src = 'assets/starter-code/assets/destination/image-'+id+'.png'

    let menu = document.querySelector('.menu-destination').children
    for(let item of menu){
        item.classList.remove('select')
    }
    document.getElementById(id).classList.add('select')

    let info = document.querySelector('.info').children
    for(let item of info){
        item.classList.add('d-none')
    }
    document.querySelector('.info-'+id).classList.remove('d-none')
}