class Header {
    selectors = {
        root: '[data-js-header]', //root:-свойства объекта '[data-js-header]'-строки
        overlay: '[data-js-header-overlay]', //overlay:-свойства объекта '[data-js-header-overlay]'-строки
        burgerButton: '[data-js-header-burger-button]', //burgerButton:-свойства объекта '[data-js-header-burger-button]'-строки
        promo: '[data-js-header-promo]',
        promoCloseButton: '[data-js-header-promo-close]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        

        this.promoElement = this.rootElement.querySelector(this.selectors.promo)
        this.promoCloseButtonElement = this.rootElement.querySelector(this.selectors.promoCloseButton)

        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    onPromoCloseButtonClick = () => {
        this.promoElement.classList.remove(this.stateClasses.isActive)
    }

    bindEvents() {
        this.burgerButtonElement?.addEventListener('click', this.onBurgerButtonClick)

        this.promoCloseButtonElement?.addEventListener('click',this.onPromoCloseButtonClick)
    }
}

export default Header