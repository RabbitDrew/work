import '../../main/intro/intro.css'

import elementCreator from '../../../global/create_el'
import elementRendering from '../../../global/render_el'


const createTitleSection = () => {
    const introSection = elementCreator('section', 'main-intro')
    const introWrapper = createIntroWrapper ()
    elementRendering (introSection, introWrapper)
    
    const IntroTitleWrapper = createIntroTitleWrapper ()
    elementRendering (introWrapper, IntroTitleWrapper)
    const introTitleAgency = createIntroTitleAgency ()
    elementRendering (IntroTitleWrapper, introTitleAgency)
    const introTitle = createIntroTitle ()
    elementRendering (IntroTitleWrapper, introTitle)

    const introSubtitleWrapper = createIntroSubtitleWrapper ()
    elementRendering (introWrapper, introSubtitleWrapper)
    const introSubtitle = createIntroSubtitle ()
    elementRendering(introSubtitleWrapper, introSubtitle)

    return introSection
}

const createIntroWrapper = () => {
    const element = elementCreator('div', 'intro__wrapper')
    return element
}

const createIntroTitleWrapper = () => {
    const element = elementCreator('div', 'intro-title__wrapper')
    return element
}

const createIntroTitleAgency = () => { 
    const element = elementCreator('h2', 'intro-title__agency')
    element.textContent = 'Турагентство'
    return element
}

const createIntroTitle = () => {
    const element = elementCreator('h1', 'intro-title')
    element.textContent = 'Лимпо-Тур'
    return element
}

const createIntroSubtitleWrapper = () => {
    const element = elementCreator('div', 'intro-subtitle__wrapper')
    return element
}

const createIntroSubtitle = () => {
    const element = elementCreator('h2', 'intro-subtitle')
    element.textContent = 'Ваш идеальный отдых по лучшим ценам!'
    return element
}



export default createTitleSection 













