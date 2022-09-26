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
    if(scrollY > 500){
        document.querySelector('nav').classList.add('navScrolled')
        
    } else {
        document.querySelector('nav').classList.remove('navScrolled')
        
    }
}

function showIconWhatsapp(){
    if(scrollY > 175 && scrollY < 4150){
        document.getElementById('icon-whatsapp').style.display = 'block'
    } else{
        document.getElementById('icon-whatsapp').style.display = 'none'
    }
}



ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 300
}).reveal(`
    #section-header, 
    ##section-printer, 
    #ct400, 
    #ct410,
    #section-ribbon,
    #revenda`);