'use strict';
const themeSwitch = document.querySelector('.btn');
themeSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode"
    }
});
