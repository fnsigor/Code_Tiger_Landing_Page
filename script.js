document.getElementById('bt-submit').addEventListener('click', event => {
    const phone = document.getElementById('phone').value
    const company = document.getElementById('company').value

    document.getElementById('message').value = `Telefone: ${phone}  |  Empresa: ${company}`
})



window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll()
    showIconWhatsapp()
}



function showNavOnScroll(){
    if(scrollY > 550){
        document.querySelector('.desktop-menu').classList.add('navScrolled')
        
    } else {
        document.querySelector('.desktop-menu').classList.remove('navScrolled')
    }
}

function showIconWhatsapp(){
    if(scrollY > 175 && scrollY < 4150){
        document.getElementById('icon-whatsapp').style.display = 'block'
    } else{
        document.getElementById('icon-whatsapp').style.display = 'none'
    }
}

document.getElementById('mobile-menu-button').addEventListener('click', ()=>{
    document.querySelector('.mobile-menu').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
})

document.getElementById('button-close-menu').addEventListener('click', closeMenu)
document.querySelectorAll('.mobile-menu li a').forEach(link => link.addEventListener('click', closeMenu))

function closeMenu(){
    document.querySelector('.mobile-menu').style.display = 'none'
    document.querySelector('body').style.overflow = 'scroll'
}