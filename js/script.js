'use strick';
window.addEventListener('DOMContentLoaded', () =>  {
    const tabParent = document.querySelector('.tabheader__items')
        tabs = document.querySelectorAll('.tabheader__item')
        tabsContent = document.querySelectorAll('.tabcontent')
        loader = document.querySelector('.loader')

    // loader
    setTimeout(() => {
        loader.style.opacity = '0'

        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)

    // tab 
    function hideTabContent(){
        tabsContent.forEach((item) => {
            item.style.display = 'none'
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')  
        })
    }
    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabParent.addEventListener('click', (event) =>{
        const target = event.target
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, idx) => {
                if(target == item){
                    hideTabContent()
                    showTabContent(idx)
                }
            })
        }
    })


    // timer

    const deadline = '2024-08-11'

    function getTimeRemaining(endtime){
        let days, hours, minutes, seconds
        const timer = Date.parse(endtime) - Date.parse(new Date())

        if (timer <= 0){
            days = 0
            hours = 0
            minutes = 0
            seconds = 0

        }else{
            days = Math.floor(timer / (1000*60*60*24))
            hours = Math.floor(timer / (1000*60*60)%24)
            minutes = Math.floor(timer / (1000*60)%60)
            seconds = Math.floor(timer / (1000)%60)
        }    
        return{
            timer,
            days,
            hours,
            minutes,
            seconds
        }
    }

    

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds')
         timeInterval = setInterval(updatClock, 1000)
        
         updatClock()

        function updatClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = t.days        
            hours.innerHTML = t.hours        
            minutes.innerHTML = t.minutes
            seconds.innerHTML = t.seconds

            if (t.timer <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.timer', deadline)

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
    
    function closeModal() {
        modal.classList.remove('show')
        document.body.style.overflow = ''  
    }

    function openModal() {
        modal.classList.add('show')
        document.body.style.overflow = 'hidden' 
        clearInterval(modalTimerId)  
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal)
    })

  
    
    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal){
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal()
        }
    })

    // const modalTimerId = setTimeout(openModal, 5000)
    
    

    function showModalByScrol(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){
            openModal()
            window.removeEventListener('scroll', showModalByScrol)

        }
    }

    window.addEventListener('scroll', showModalByScrol)


    // Class

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src
            this.alt = alt
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.parent = document.querySelector(parentSelector)
            this.transfer = 11000
            this.changeToUZS()
        }

        changeToUZS(){
            this.price = this.price * this.transfer
        }

        rander(){
            const element = document.createElement('div')

            element.innerHTML = `
            <div class="menu__item">
              <img src=" ${this.src}" alt="${this.alt}" />
              <h3 class="menu__item-subtitle">${this.title}"</h3>
              <div class="menu__item-descr">
                 ${this.descr}  
              </div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total"><span>${this.price}</span>  uzs/month</div>
              </div>
            </div>
            
            `

            this.parent.append(element)
        }
    }

    new MenuCard(
        'img/tabs/1.png',
        'Usual',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container'
    ).rander()


    new MenuCard(
        'img/tabs/1.png',
        'Usual',
        'Plan "Usfghsrtghual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container'
    ).rander()

    new MenuCard(
        'img/tabs/1.png',
        'Usual',
        'Plewfgaewgaan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container'
    ).rander()
})

 