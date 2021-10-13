let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "grey";

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "silver";
    if (viewSlide < 4) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = "grey";
    slider.style.left = -viewSlide * viewport + "px";

});

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "silver";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 4;
    }
    viewSliders[viewSlide].style.backgroundColor = "grey";
    slider.style.left = -viewSlide * viewport + "px";
});

/*модальное окно
function showModalWin() {

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    };
}
*/

