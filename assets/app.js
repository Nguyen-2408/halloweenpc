
        let darkClouds0 = document.querySelector('.ga0');
        let darkClouds1 = document.querySelector('.ga1');
        let darkClouds2 = document.querySelector('.ga2');
        let darkClouds3 = document.querySelector('.ga3');
        let darkClouds4 = document.querySelector('.ga4');
        let darkClouds5 = document.querySelector('.ga5');
        let changeMode = document.querySelector('.loader span');
        let btnMoon = document.querySelector('.moon__btn');
        let lineColor = document.querySelector('.line');
        let rocketColor = document.querySelector('.rocket .fa-rocket')
        btnMoon.onclick = function(){
            changeMode.classList.toggle('active');
            btnMoon.classList.toggle('dark_btn-moon')
            darkClouds0.classList.toggle('dark-clouds')
            darkClouds1.classList.toggle('dark-clouds')
            darkClouds2.classList.toggle('dark-clouds')
            darkClouds3.classList.toggle('dark-clouds')
            darkClouds4.classList.toggle('dark-clouds')
            darkClouds5.classList.toggle('dark-clouds')
            lineColor.classList.toggle('line__change')
            rocketColor.classList.toggle('rocketColor')
        };

        /* btnMoon.onclick = function(){
            btnMoon.classList.toggle('active');
        } */