import '@styles/styles.scss'
import {createParallax} from '@scripts/Parallax';


const scrollBtn = document.querySelector('.bg-container__scroll-down') as HTMLDivElement
const scrollTo = document.querySelector('.description') as HTMLDivElement

scrollBtn.addEventListener('click', function scrollToDescription() {
    scrollTo.scrollIntoView({behavior: 'smooth'})
})

const mainTitle = document.querySelector('.bg-container__title-section') as HTMLDivElement

const scrollHandler = (element: HTMLDivElement) => {

    const coords = element.getBoundingClientRect()


    const changeOpacityByScroll = (scroll: number, maxScroll: number) => {
        return 0.1 + (maxScroll - scroll) / maxScroll
    }

    return event => {

        const currentScroll = event.target.documentElement.scrollTop

        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        element.style.position = 'relative'
        element.style.top = `${currentScroll + coords.y}px`
        element.style.opacity = changeOpacityByScroll(currentScroll, scrollHeight * 0.2).toString()

    }
}

document.addEventListener('scroll', scrollHandler(mainTitle))



const Layers = document.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>

createParallax(Layers,0.2);


