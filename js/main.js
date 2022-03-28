const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let header = $('.header')
let headerBtn = $('.header-btn')
let headerSubMenu = $('.header-sub-menu')
let subClose = $('.sub-menu-close')

let main = $('main')
let featuresMenuItems = $$('.features-menu-item')
let featuresContentItems = $$('.features-content-item')

let faqContents = $$('.faq-content')
let faqArrows = $$('.faq-question img')

let contactInput = $('.contact-form form input')
let contactForm = $('.contact-form form')
let contactError = $('form p')
let contactBtn = $('.contact-form button')

function autoScrollHeader() {
    let lastScrollTop = 0
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if(scrollTop > lastScrollTop){
            header.style.top = '-100px'
        } else {
            header.style.top = '0'
        }
        lastScrollTop = scrollTop
    })

    main.addEventListener('click', () => {
        header.style.top = '-100px'
    })
}

function showFeature() {
    headerBtn.addEventListener('click', () => {
        headerSubMenu.style.transform = 'translateX(0)'
    })
    
    subClose.addEventListener('click', () => {
        headerSubMenu.style.transform = 'translateX(100%)'
    })
    
    featuresMenuItems.forEach((item,index) => {
        item.addEventListener('click', () => {
            $('.features-menu-item.selected').classList.remove('selected')
            $('.features-content-item.show').classList.remove('show')
            item.classList.add('selected')
            featuresContentItems[index].classList.add('show')
        })
    })     
}

function showFAQ(){
    faqContents.forEach((ques, index) => {
        ques.addEventListener('click', () => {
            ques.classList.toggle('show-ques')
            faqArrows[index].classList.toggle('change-arrow')
        })
    })
}

function addError(){
    contactError.classList.add('error')
    contactInput.classList.add('error')
    contactForm.classList.add('error')
}

function removeError() {
    contactError.classList.remove('error')
    contactInput.classList.remove('error')
    contactForm.classList.remove('error')
}

function showError(){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    contactInput.onblur = function(){
        if(!contactInput.value.match(mailFormat)){
            addError()
        } else {
            removeError()
        }
    }
    contactInput.addEventListener('focus', () =>{
        removeError()
    })
    contactBtn.addEventListener('click', () => {
        if(!contactInput.value.match(mailFormat)){
            addError()
            alert('Fail, please re-enter your email!')
        } else {
            alert('Success!')
        }
    })
}

function start(){
    autoScrollHeader()
    showFeature()
    showFAQ()
    showError()
}

start()