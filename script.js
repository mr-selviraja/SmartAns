const navEl = document.getElementById('nav')

let navActive = false
document.getElementById('nav__toggle').addEventListener('click', () => {
    console.log("outside: "+navActive);
    if (!navActive) {
        navEl.style.transform = 'translateX(0)'
        navActive = !navActive
    } else {
        navEl.style.transform = 'translateX(-100%)'
        navActive = !navActive
    }
})