function darkMode() {
    const bodyElement = document.body;
    const contentElement = document.getElementsByClassName('content-section');
    const tableElement = document.getElementById('content-table');
    
    

    if (document.getElementById('theme').checked) {
        bodyElement.classList.add('dark-theme');
        for (var i = 0; i < contentElement.length; i++) {
            contentElement[i].classList.add('dark-theme');
        }
        tableElement.classList.add('dark-theme');
    
    }

    else {
        bodyElement.classList.remove('dark-theme');
        for (var i = 0; i < contentElement.length; i++) {
            contentElement[i].classList.remove('dark-theme');
        }
        tableElement.classList.remove('dark-theme');
    }

}
