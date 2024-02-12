//создай переменные- строковые константы
// let LIMIT = 100;
const CURRENCY = 'руб.';
const STATUS_IN_LIMIT = 'всё хорошо';
const STATUS_OUT_OF_LIMIT = 'всё плохо';
const STATUS_OUT_OF_LIMIT_CLASSNAME = 'status__negative';
const STATUS_IN_LIMIT_CLASSNAME = 'status';
const POPUP_OPENED_CLASSNAME = 'popup_open';

//создай переменные - ссылки на html
const moneyInputNode = document.querySelector(".js-moneyInput__input");
const categorySelectNode = document.querySelector('.js-categorySelectNode')
const addButtonNode = document.querySelector(".js-addButton");
const buttonResetNode = document.querySelector('.js-button_reset');
const sumNode = document.querySelector('.js-sum');
const statusNode = document.querySelector('.js-status');
const historyNode = document.querySelector('.js-history');
const limitNode = document.querySelector('.js-limit');
const btnLimitOpenNode = document.querySelector('.js-btn_limit');

const popupNode = document.querySelector('.js-popup');

const btnCloseNode = document.querySelector('.js-popup__close-btn');
const btnPopupNode = document.querySelector('.js-popup__button')
const popupContentNode = document.querySelector('.js-popup__content')
const popupInputNode = document.querySelector('.js-popup__input')

let LIMIT = 0;
let expenses = [];
let expensesObject = [];
limitNode.innerText = 0; //задаем и отображаем лимит
statusNode.innerText = STATUS_IN_LIMIT;
sumNode.innerText = 0

console.log(addButtonNode);

 
addButtonNode.addEventListener('click', function() {
  if (!moneyInputNode.value) {
    console.log('добавь сумму расхода');
    return;
   }
  if (categorySelectNode.value == 'Категория'){
    console.log('выбери категорию');
    return;
  }
  
  const expense = parseInt(moneyInputNode.value);
  expenses.push(expense);
  const category = categorySelectNode.value;
  const expenseObject = {
    expense: expense,
    category: category
  }
 
  expensesObject.push(expenseObject);
     
  moneyInputNode.value = '';
  categorySelectNode.value = 'Категория';

    //список расходов. История
  
  let expensesListHTML = '';
  expensesObject.forEach(element => {
       expensesListHTML +=`<li>${element.expense} ${CURRENCY} - ${element.category} </li>`;
  });
  historyNode.innerHTML = expensesListHTML;

  //сумма затрат
  let sum = 0;
  expenses.forEach(element => {
    sum += element;
  });
  sumNode.innerText = sum;

  //статус
  if (sum > LIMIT) {
    statusNode.innerHTML = `${STATUS_OUT_OF_LIMIT} (${LIMIT - sum} ${CURRENCY})`;
    statusNode.className = STATUS_OUT_OF_LIMIT_CLASSNAME
  }
 
 })

 buttonResetNode.addEventListener('click', function() {
  expenses = [];
  expensesObject = [];
  statusNode.innerText = STATUS_IN_LIMIT;
  statusNode.className = STATUS_IN_LIMIT_CLASSNAME;
  sumNode.innerText = 0;
  historyNode.innerText = '';
 })

 btnLimitOpenNode.addEventListener('click', function() {
  const limit = prompt("определи новый лимит");
  LIMIT = limit;
  

 })




