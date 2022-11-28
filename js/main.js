







window.onscroll = () => {

    // searchForm.classList.remove('active')
    if (window.scrollY > 80) {
        document.querySelector('.header .header-tow').classList.add('active');

    } else {
        document.querySelector('.header .header-tow').classList.remove('active');

    }
}
