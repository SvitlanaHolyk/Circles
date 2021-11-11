/* Нарисовать на странице круг используя параметры, которые введет пользователь.При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". Данная кнопка должна являться единственным контентом в теле HTML документа, весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript. При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. При клике на конкретный круг - этот круг должен исчезать */

window.addEventListener("DOMContentLoaded", function () {
    //добавляем название первой кнопки и навешиваем событие
    const inputBtnFirst = document.getElementById("firstButton");
    inputBtnFirst.setAttribute('value', 'Draw a circle');
    inputBtnFirst.addEventListener("click",
        function () {
            const form = document.createElement('form');
            form.setAttribute('onsubmit', "return false")
            document.body.append(form);

            //При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга.
            const inputD = document.createElement('input');
            inputD.setAttribute("id", "inputCircleD");
            inputD.setAttribute("required", true);
            inputD.setAttribute('min', '1');
            inputD.setAttribute('type', 'number')
            inputD.setAttribute('placeholder', 'diameter');

            //записать диаметр,заданный юзером
            const getText = inputD.value + "px";
            form.append(inputD);

            //Создание кнопки Нарисовать
            const btnDraw = document.createElement('input');
            btnDraw.setAttribute('type', 'submit')
            btnDraw.setAttribute('value', 'Draw');
            form.append(btnDraw);

            //массив случайных цветов
            const colors = ['#ee82ee', '#3cb371', '#00bfff', '#00ffff', '#7fffd4', "#1e90ff", "#6495ed", "#7b68ee", "#5f9ea0", "#4682b4", "#4169e1", "#0000ff", "#0000cd", "#00008b", "#000080", "#191970", '#6a5acd', '#483d8b'];

            //При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета.
            btnDraw.addEventListener('click',
                function () {
                    let circleD = document.getElementById("inputCircleD").value;
                    console.log(circleD);
                    if (circleD > 0) {
                        //1. div внутри которого будут создаваться круги
                        const divCirles = document.createElement('div');
                        document.body.append(divCirles);;
                        //2. цикл для создания 100 div, которы будут кругами
                        for (let i = 1; i < 101; i++) {
                            const circle = document.createElement('div')
                            let divId = "Div" + i;
                            circle.setAttribute("id", divId);

                            //удаление круга при нажатии
                            circle.addEventListener('click', function (e) {
                                if (e.target && e.target.id == divId) {
                                    console.log(divId)
                                    document.getElementById(divId).remove();
                                }
                                wrapCircles();

                            });
                            circle.setAttribute("id", "Div" + i);

                            //3.добавления стилей для круга, диаметр - заданный юзером
                            circle.classList.add('circlesClass');
                            circle.style.display = 'inline-block';
                            circle.style.height = circleD + "px";
                            circle.style.width = circleD + "px";
                            circle.style.borderRadius = "30px";
                            circle.style.margin = '10px';
                            circle.style.position = 'relative';
                            divCirles.appendChild(circle);
                            //4. установка random colors
                            function setColor(circle) {
                                const getRandomColor = colors[Math.floor(Math.random() * colors.length)];
                                circle.style.background = getRandomColor;
                            }
                            setColor(circle);
                            //перенос строки
                            if (i % 10 == 0) {
                                const wrapText = document.createElement('br');
                                divCirles.append(wrapText);
                            }
                        }
                        wrapCircles();
                    }
                });
        },
        { once: true });
})
// сформировать поле 10*10 после того как один круг удалили
function wrapCircles() {
    const [...circles] = document.querySelectorAll('.circlesClass')
    circles.forEach(element => {
        element.addEventListener("click", () => {
            if (circles.indexOf == 10) {
                document.querySelector('br').remove();
            }
        });
    });
}
