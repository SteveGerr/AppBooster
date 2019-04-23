
document.addEventListener('DOMContentLoaded', function() {
    
   let selectAll = document.querySelector('.selectAll'),
       allinputs = document.querySelectorAll('input'), 
       icon_3    = document.querySelectorAll('.icon-3'),
       iconGrad  = document.querySelectorAll('.icon-grad'),
       iconJ     = document.querySelectorAll('.icon-j');
      

    let arrIcon = [icon_3, iconGrad, iconJ];     


// Icons event

    arrIcon.forEach(function (arrI) {
        arrI.forEach(function (icons) {
            icons.addEventListener('mouseover', () => {
                arrI.forEach(function (icons) {
                    icons.style.border = "2px solid #e0c3e0";
                    icons.style.borderRadius = "8px";
                });
            });
            icons.addEventListener('mouseout', () => {
                arrI.forEach(function (icons) {
                    icons.style.border = "";
                });
            });
        });
    });

// Input event
    
    
    allinputs.forEach(function(inp){
        selectAll.addEventListener('click', (e)=>{
            el = e.target.checked;
            if (el == true) {
                inp.checked = true;
            } else {
                inp.checked = false;
            }
        });
        
    });

// Toggle info block

    let menuWrapper = document.querySelectorAll('.menu-header__wrapper');
    // Находим все блоки .menu-header__wrapper с кнопкой .col-name__buttons_triangle
    let i;
    for(i=0; i<menuWrapper.length; i++){
        // Перебираем каждый .menu-header__wrapper
        menuWrapper[i].addEventListener('click', function(e){
            //Вешаем на него событие через делегирование
            if (e.target && e.target.classList.contains('col-name__buttons_triangle')){
                //Если e.target(кликнутый елемент) и у него класс .col-name__buttons_triangle                
                let toggleBlock = this.nextElementSibling;
                // Выбираем следующий элемент в дереве, находящийся ниже .toggle-block
                toggleBlock.classList.toggle('invisible');
                //Если у этого блока есть класс .invisible, то удаялем его, если нет, то добавляем.
            }
        });
    };

// Star click

    let star = document.querySelectorAll('.col-name__buttons_star');
    //Находим все блоки со звёздами .col-name__buttons_star
    star.forEach(function(str){
        //Перебираем их и на каждый вешаем обработчик события
        str.addEventListener('click', ()=> {
            str.classList.toggle('checked-star');
        });
    });


 }, false);