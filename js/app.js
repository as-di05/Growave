const button_mobile_menu_container = document.querySelector('.button_mobile_menu_container')
const mobile_navigation = document.querySelector('.mobile_navigation')
const mobile_navigation_background = document.querySelector('#mobile_navigation_background')
const button_mobile_menu_line = document.querySelectorAll('.button_mobile_menu_line')

let active_menu = false

button_mobile_menu_container.addEventListener('click', () => {
    active_menu = !active_menu
    if (active_menu) {
        document.body.style.overflow = 'hidden'
        // button_mobile_menu_line[0].classList.add('line1')
        // button_mobile_menu_line[1].classList.add('line2')
        // button_mobile_menu_line[2].classList.add('line3')
        button_mobile_menu_line.forEach((item, index) => {
            item.classList.add(`line${index + 1}`)
        })
        mobile_navigation_background.classList.add('mobile_navigation_background')
        return mobile_navigation.classList.add('menu_active')
    }
    document.body.style.overflow = 'visible'
    button_mobile_menu_line.forEach((item, index) => {
        item.classList.remove(`line${index + 1}`)
    })
    mobile_navigation_background.classList.remove('mobile_navigation_background')
    mobile_navigation.classList.remove('menu_active')
})

mobile_navigation_background.addEventListener('click', () => {
    active_menu = false
    document.body.style.overflow = 'visible'
    button_mobile_menu_line.forEach((item, index) => {
        item.classList.remove(`line${index + 1}`)
    })
    mobile_navigation_background.classList.remove('mobile_navigation_background')
    mobile_navigation.classList.remove('menu_active')
})

/////////////////////

const scroll_up = document.querySelector('.scroll_up')

window.addEventListener('scroll', () => {
    const positionWindowScroll = window.scrollY

    if (positionWindowScroll > 100) {
        return scroll_up.style.display = 'block'
    }
    scroll_up.style.display = 'none'
})

scroll_up.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}))