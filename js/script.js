window.onload = function () {

    setTimeout(() => {
        document.querySelector('#div-header-products p:first-child').style.transform = "translateX(0%)"
    }, 350)

    setTimeout(() => {
        document.querySelector('#div-header-products p:nth-of-type(2)').style.transform = "translateX(0%)"
    }, 450)

    setTimeout(() => {
        document.querySelector('#div-header-products p:last-child').style.transform = "translateX(0%)"
    }, 550)


    //Vanilla JS Scroll effects
    function showNavOnScroll() {
        if (scrollY > 550) {
            document.querySelector('.desktop-menu').classList.add('navScrolled')

        } else {
            document.querySelector('.desktop-menu').classList.remove('navScrolled')
        }
    }

    function showIconWhatsapp() {
        if (scrollY > 175 && scrollY < 4150) {
            document.getElementById('icon-whatsapp').style.display = 'block'
        } else {
            document.getElementById('icon-whatsapp').style.display = 'none'
        }
    }

    function onScroll() {
        showNavOnScroll()
        showIconWhatsapp()
    }

    window.addEventListener('scroll', onScroll)



    //open & close menu functions
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        document.querySelector('.mobile-menu').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
    })

    function closeMenu() {
        document.querySelector('.mobile-menu').style.display = 'none'
        document.querySelector('body').style.overflow = 'scroll'
    }

    document.getElementById('button-close-menu').addEventListener('click', closeMenu)
    document.querySelectorAll('.mobile-menu li a').forEach(link => link.addEventListener('click', closeMenu))



    //submit email functions
    document.getElementById('bt-submit').onclick = sentEmail

    function sentEmail() {

        const inputNome = document.getElementById('name')
        const inputEmail = document.getElementById('email')

        if (verifyForm()) {

            inputNome.style.borderColor = '#000'
            inputEmail.style.borderColor = '#000'
            inputNome.style.backgroundColor = '#FFF'
            inputEmail.style.backgroundColor = '#FFF'

            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/igorfernamdez@gmail.com', {

                _subject: 'Revenda Code Tiger',
                Nome: inputNome.value,
                Email: inputEmail.value,
                Telefone: document.getElementById('phone').value,
                Empresa: document.getElementById('company').value
            })
                .then(response => {

                    showSucessMessage()
                })
                .catch(error => {

                    console.log(error)
                    showErrorMessage()
                });

            inputNome.value = ''
            inputEmail.value = ''
            document.getElementById('phone').value = ''
            document.getElementById('company').value = ''

        } else {

            inputNome.style.borderColor = '#900'
            inputNome.style.backgroundColor = '#ff000011'
            inputEmail.style.backgroundColor = '#ff000011'
            inputEmail.style.borderColor = '#900'

            showIncompleteFormMessage()

            setTimeout(() => {
                inputNome.style.borderColor = '#000'
                inputEmail.style.borderColor = '#000'
                inputNome.style.backgroundColor = '#FFF'
                inputEmail.style.backgroundColor = '#FFF'
            }, 10000)

        }


    }



    function showSucessMessage() {
        document.querySelector('.submit-message.sucesso').style.opacity = 1
        setTimeout(() => document.querySelector('.submit-message.sucesso').style.opacity = 0, 3000)
    }


    function showIncompleteFormMessage() {
        document.querySelector('.submit-message.formIncompleto').style.opacity = 1
        setTimeout(() => document.querySelector('.submit-message.formIncompleto').style.opacity = 0, 5000)
    }

    function showErrorMessage() {
        document.querySelector('.submit-message.erro').style.opacity = 1
        setTimeout(() => document.querySelector('.submit-message.erro').style.opacity = 0, 3000)
    }

    function verifyForm() {

        if (document.getElementById('name').value.length >= 3 && document.getElementById('email').value.includes('@') && document.getElementById('email').value.includes('.com')) {
            return true
        }

        return false
    }



    //show amplied image at mobile

    document.querySelectorAll('.mySwiper2 img').forEach(imagem => {
        imagem.addEventListener('click', evt => {
            const divImagem = document.querySelector('.imagem-ampliada')

            if (divImagem.getAttribute('ampliada') === null) {
                divImagem.setAttribute('ampliada', '')
                divImagem.style.display = 'flex'
                divImagem.firstElementChild.setAttribute('src', evt.target.getAttribute('src'))
                document.querySelector('body').style.overflow = 'hidden'
            }



            divImagem.addEventListener('click', event => {
                divImagem.removeAttribute('ampliada', '')
                divImagem.style.display = 'none'
                document.querySelector('body').style.overflow = 'initial'
            })


        })
    })



}