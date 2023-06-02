window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    // Слайдер
    // Текущий слайд
    let slideIndex = 1,
        slides = document.querySelectorAll('.sliderNew-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.sliderNew-dots'),
        dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);
    // Принимала аргумент номер слайда, который нужно показать
    function showSlides (n) {
        // дополнительно делаем проверку чтобы индекс не вышел за пределы
        if (n > slides.length) {
            // Возвращаемся к первому слайду
            slideIndex = 1;
        }
        if (n < 1) {
            // Возвращаемся к последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
        
    }
    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    //Создаем событие клика на родителя, используя делегирование событий
    dotsWrap.addEventListener('click', function(event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            // проверяем элемент на соответствие и узнаем номер точки
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //аккордеон(прости Господи...)

    const accordion = () => {
		const btns = document.querySelectorAll(".acordion-head");
		const blocks = document.querySelectorAll(".acordion-block");

		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				if (!this.classList.contains("active-p")) {
					btns.forEach((btn) => {
						btn.classList.remove("active-p", "active-style");
					});
					this.classList.add("active-p", "active-style");
				} else
					btns.forEach((btn) => {
						btn.classList.remove("active-p", "active-style");
					});
			});
		});
	};
	accordion();
	//Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info"),
        acordino1 = document.querySelectorAll(".acordino-list-1"),
        acordino2 = document.querySelectorAll(".acordino-list-2"),
		tabContect = document.querySelectorAll(".info-tabcontent");
        
	//Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	//Скрываются все кроме 1 элемента
	hideTabContect(1);
	//Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	//Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;
        console.log('click!')
        console.log(target)
		if (target && target.classList.contains("info-header-tab")) {
			// Связь элементов при совпадении target
            console.log('click!')
			for (let i = 0; i < tab.length; i++) {
				//если совпадают
				if (target == tab[i]) {
					//Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					//элементу target(на который кликнули) добавляем активный класс
					target.classList.add("active");
                    console.log('click!')
                    acordino1[i].classList.toggle("activee");
                    acordino2[i].classList.toggle("activee");
					//Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});



    const modal = document.getElementById("modal");
	const btn = document.querySelector(".modal-but");
	const closeBtn = document.querySelector(".modal__close");
    const closeBtn2 = document.querySelector(".modal__close2");

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);
        closeBtn2.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);
            closeBtn2.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		//Закрытие при клике вне зоны модального окна
		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});
    
    //табы
    //Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tabt = document.querySelectorAll(".info-headert-tab"),
    infot = document.querySelector(".infot"),
    tabContectt = document.querySelectorAll(".tabt-content");
//Функция которая скрывает контентные табы
function hideTabContectt(a) {
    for (let i = a; i < tabContectt.length; i++) {
        tabContectt[i].classList.remove("showt");
        tabContectt[i].classList.add("hide");
    }
}
//Скрываются все кроме 1 элемента
hideTabContectt(1);
//Функция показа контентных табов
function ShowTabContectt(b) {
    if (tabContectt[b].classList.contains("hide")) {
        tabContectt[b].classList.remove("hide");
        tabContectt[b].classList.add("showt");
    }
}

//Создаем событие клика на родителя, используя делегирование событий
infot.addEventListener("click", function (event) {
    let target = event.target;
    console.log('click!')
    console.log(target)
    if (target && target.classList.contains("info-headert-tab")) {
        // Связь элементов при совпадении target
        console.log('click!')
        for (let i = 0; i < tabt.length; i++) {
            //если совпадают
            if (target == tabt[i]) {
                //Скрываем все табы
                hideTabContectt(0);
                // удаляем класс активности таба
                tabt.forEach((item) => {
                    item.classList.remove("active");
                });
                //элементу target(на который кликнули) добавляем активный класс
                target.classList.add("active");

                //Совпадение по нумерации
                ShowTabContectt(i);

                break;
            }
        }
    }
});


    //получаем иконку бургер меню
	const hamb = document.querySelector("#humb");
	const popup = document.querySelector("#popup");
	// Глубокое клонирование со всем содержимым
	const menu = document.querySelector("#menu").cloneNode(1);
	// const body = document.body;
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
		// body.classList.toggle('noscroll');
	}
	function renderPopup() {
		popup.appendChild(menu);
	}

});

