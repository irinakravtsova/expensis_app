//создай переменные- строковые константы
// let LIMIT = newLIMIT;
const CURRENCY = 'руб.';
const STATUS_IN_LIMIT = 'всё хорошо';
const STATUS_OUT_OF_LIMIT = 'всё плохо';
const STATUS_OUT_OF_LIMIT_CLASSNAME = 'status__negative';
const POPUP_OPENED_CLASSNAME = 'popup__open';


//создай переменные - ссылки на html
const expenseInputNode = document.querySelector('.js-moneyInput__input');
const categorySelectNode = document.querySelector('.js-categoryInput')
const expenseButtonNode = document.querySelector('.js-expenseButton');
const buttonResetNode = document.querySelector('.js-button_reset');
const sumNode = document.querySelector('.js-sum');
const statusNode = document.querySelector('.js-status');
const historyNode = document.querySelector('.js-history');
const limitNode = document.querySelector('.js-limit'); 

const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn_limit');
const btnCloseNode = document.querySelector('.js-popup__close-btn');
const btnPopupNode = document.querySelector('.js-popup__button')
const popupContentNode = document.querySelector('.js-popup__content')
const popupInputNode = document.querySelector('.js-popup__input')
console.log(btnPopupNode);

//получи лимит из элемента HTML
let limit = parseInt(limitNode.innerText) 


//1. создай структуру данных 
//создай основную переменную, при запуске  - пустой массив из объектов, наполняемый при нажатии на кнопку ДОБАВИТЬ
let expenses = [];
const expensesAmount = []; 


expenseButtonNode.addEventListener('click', function() {
  //проверь на пустые инпуты
  if (!expenseInputNode.value){
   console.log('пустая строка в поле ввода');
    return
  }
  if (categorySelectNode.value === "Категория") {
    console.log('выбери категорию расходов');
    return
  }

const expense = parseInt(expenseInputNode.value); //получи данные из поля инпута
const category = categorySelectNode.value;

expensesAmount.push(expense);


const newExpense = {//создай бъект
 amount: expense, 
  category: category};

  // очисти инпуты
  expenseInputNode.value = "";
categorySelectNode.value = "Категория";


// добавь объект в массив
expenses.push(newExpense);

// отрисовываем/обновляем Историю
let expensesListHTML = '';  
expenses.forEach(newExpense => {
    expensesListHTML +=  `<li>${newExpense.category} - ${newExpense.amount} ${CURRENCY}</li>`;
  });
  historyNode.innerHTML = expensesListHTML;

//посчитай сумму и выведи
let sum = 0;
expensesAmount.forEach(element => {
  sum += element
  sumNode.innerHTML = sum;
});

//выводим статус

if (sum > limit) {
  statusNode.innerHTML = `${STATUS_OUT_OF_LIMIT} (- ${sum - limit} ${CURRENCY})`
  statusNode.classList.toggle(STATUS_OUT_OF_LIMIT_CLASSNAME) 
  }
});

//кнопка сбросить расходы

buttonResetNode.addEventListener('click', function(){
  historyNode.innerHTML = '';
  expensesAmount.length = 0;
  expenses.length = 0;
  sumNode.innerHTML = 0;
  statusNode.innerHTML = `${STATUS_IN_LIMIT}`;
  statusNode.classList.toggle(STATUS_OUT_OF_LIMIT_CLASSNAME);

})
 //корректировка лимита


btnOpenNode.addEventListener('click', togglePopup);
// btnPopupNode.addEventListener('click', togglePopup);

function togglePopup() {
 popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);

}

btnPopupNode.addEventListener('click', function() {
 if (!popupInputNode) {
   return
 }
 popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);

// let newLIMIT = parseInt(popupInputNode.value);
// console.log(newLIMIT);
// let LIMIT = newLIMIT;

});
// limitNode.innerHTML = newLIMIT









// //1. получи значение из поля ввода суммы
// function getExpenseFromUser() { //возвращает введенную пользователем сумму
//   if (!inputNode.value) { // если нет ничего в поле или (inputNode.value === '')если пустая строка в поле ввода
//     return null; //то заверши, т.е. код дальше не будет выполняться,
//   };
//   const expense = parseInt(inputNode.value);  //сохряняем расходы числами parseInt() - позволяет делать преобразование строки в  целочисленное число
// }

// }) 
// getExpenseFromUser();
// console.log(getExpenseFromUser()); 
  
    
// const expense = getExpenseFromUser(); 
// console.log(expense);
//   // if (!expense) {
//   //   return;
//   // }

// // //сохраняем в переменную curentCategory (текущая категория) выбранную категорию
// // const curentCategory = getSelectedCategory();
// // //если текущая категория равна значению Категория
// // if (curentCategory === "Категория") {
// //   return; //пользователь не выбрал категорию
// // }
// //собираем объект расходов newExpense
// // const newExpense = { amount: expense, category: curentCategory};
// // console.log(newExpense);

// // //добавляем наш новыйРасход в массив расходов
// // expenses.push(newExpense);

// //   trackExpanse(expense); //создаем массив из данных
  

// //   render(expenses); // выводим в интерфейс


// //   clearInput();



 


// //.....ФУНКЦИИ...............
// //инициируем первоначальное значение
// // function init(expenses) { 
// //   limitNode.innerText = LIMIT;
// //   statusNode.innerText = STATUS_IN_LIMIT;
// //   sumNode.innerText = 0;
// // };
// //  возврати введенную пользователем сумму
// function getExpenseFromUser() {
//    if (!inputNode.value) { // если нет ничего в поле или (inputNode.value === '')если пустая строка в поле ввода
//     return null; //то заверши, т.е. код дальше не будет выполняться,
//   };
//   const expense = parseInt(inputNode.value);  //сохряняем расходы числами parseInt() - позволяет делать преобразование строки в  целочисленное число

//   clearInput();

//   return expense;
 
//  };

//   //посчитай сумму и выведи
// function calculateExpanses() { 
//   let sum = 0;
//   //пройди по массиву, бери из каждого объекта поле amount, прибавь к переменной sum
//   expenses.forEach(function(newExpense) {
//   sum += newExpense.amount;
// });
// console.log(sum);

// }

// //отрисуй/обнови блок Сумма, Лимит и Статус
// //  сравнение с лимитом и вывод статуса
// function renderStatus() {
//  const total = calculateExpanses(expenses);
//  console.log(total);
//  sumNode.innerText = total;
//   if (total > LIMIT) {
//      statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${LIMIT - total}  ${CURRENCY})`;
//      statusNode.classList.toggle(STATUS_OUT_OF_LIMIT_CLASSNAME);
//     };
//    }


// // function renderSum(sum) {
// //   sumNode.innerText = sum;
// // }
// //отрисовываем/обновляем блок
// function renderHistory() {
//   historyNode.innerHTML = "";
//   expenses.forEach(expense => {
//     const histiryItem = document.createElement("li");
//     histiryItem.className = "rub";
//     histiryItem.innerText = `${expense.category} - ${expense.amount}`;
//     historyNode.appendChild(histiryItem); 
// });
// }

// //отрисовываем/обновляем весь интерфейс (история, сумма, статус)
// function render() {
//  renderStatus();//выводим статус
//   renderHistory();//выводим историю
// }


// // init(expenses);






// function trackExpanse(expense) {
//   expenses.push(expense);
// };


//  function getSelectedCategory() {
//   return categorySelectNode.value;
//  }

// //  const getExpenseFromUser = () => parseInt(inputNode.value); -более короткая запись
//   const clearInput = () => {
//     inputNode.value = '';
//   }





// // function renderHistory(expenses) {
// //   let expensesListHTML = '';  //переменная списка расходов
  
// //   //на базе массива создаем список и передаем в разметку ynml
// //   expenses.forEach(element => {
// //   expensesListHTML +=  `<li>${element} ${CURRENCY}</li>`; //добавляй в список расходов новый элемент (+= - возьми предыдущее значение и прибавь к нему новое)

// // });
// //  historyNode.innerHTML = `<ol class='history-list'>${expensesListHTML}</ol>`;

// // };





// //кнопка сбросить расходы: 
// // в1
// // // buttonResetNode.addEventListener('click', function() {
// //   sumNode.innerText = 0;
// //   statusNode.innerText = STATUS_IN_LIMIT
// //   statusNode.classList.toggle(STATUS_OUT_OF_LIMIT_CLASSNAME);
// //   historyNode.innerHTML = "";
// //  expenses.length = 0;
 
  
// // });

// //в2 функции обработчики кнопки называют хендер clearButtonHander - обработчик кнопки сброс

// const clearButtonHander = () => {
//   expenses = [];
//   // sumNode.innerText = 0;
//   // statusNode.innerText = STATUS_IN_LIMIT
//   statusNode.classList.toggle(STATUS_OUT_OF_LIMIT_CLASSNAME);
//   // historyNode.innerHTML = "";
//   render(expenses);
//   init(expenses)
//   // render();
// };
// buttonResetNode.addEventListener('click', clearButtonHander)

// // btnLimitNode.addEventListener('click', function() {
// // console.log(1);
// // });


// // btnOpenNode.addEventListener('click', togglePopup);
// // // btnCloseNode.addEventListener('click', togglePopup);


// // popupNode.addEventListener('click', (event) => {
// //     const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

// //     if (isClickOutsideContent) {
// //         togglePopup();
// //     }
// // })

// // function togglePopup() {
// //     popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    
// // }
// // btnPopupNode.addEventListener('.click', function() {
// //   const limit = popupInputNode.value;
// //   const LIMIT = limit;
// // })
//   //1. получаем значение из поля ввода


// //   if (!limit) {
// //     return;
// //   }
// //     render(limit); // выводим в интерфейс
// // });

// // function getLimitFromUser() {
 
// //   if (!popupInputNode.value) { // если нет ничего в поле или (inputNode.value === '')если пустая строка в поле ввода
// //     return null; //то заверши, т.е. код дальше не будет выполняться, а если не пустая, то код будет выполняться дальше
// //   };
// //   const limit = parseInt(popupInputNode.value);  //сохряняем расходы числами parseInt() - позволяет делать преобразование строки в  целочисленное число

// //   clearInput();

// //   return limit;

// //  };
// //  function clearInput() {
// //   popupInputNode.value = ''; //сбрасываем значение из поля ввода после добавления значения в массив
// // }; 
// // function render(limit) {
// //   const LIMIT = limit;
// // }


