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

let LIMIT = 100;
let expenses = [];

init(expenses);

btnLimitOpenNode.addEventListener('click', function() {
  const limit = prompt("определи новый лимит");
  limitNode.innerText = limit;  //задаем и отображаем лимит
   LIMIT = limit;
 })

 
addButtonNode.addEventListener('click', function() {
   const expense = getexpenseFromUse();
  if (!expense) {
    return;
  }
  trackExpanse(expense);
  clearInputs();
  render(expenses);
});

 function init(expenses) {
  statusNode.innerText = STATUS_IN_LIMIT;
  sumNode.innerText = calculateExpenses(expenses);
  limitNode.innerText =LIMIT;
  };

  function trackExpanse(expense) {
    expenses.push(expense);
     }
  
 function getexpenseFromUse() {
    if (!moneyInputNode.value) {
      console.log('добавь сумму расхода');
      return null;
     }
     let expense = parseInt(moneyInputNode.value);
     return expense;
    
  }

  function clearInputs() {
    moneyInputNode.value = '';
    }
  
  function calculateExpenses(expenses) {
    let sum = 0;
    expenses.forEach(element => {
      sum += element;
    });
    console.log(sum);
    return sum;  
  }

  function render(expenses) {
    const sum = calculateExpenses(expenses);
    renderHistory(expenses);
    renderSum(sum);
    renderStatus(sum);  
  }

  function renderHistory(expenses) {
    let expensesListHTML = '';
    expenses.forEach(element => {
         expensesListHTML +=`<li>${element} ${CURRENCY} </li>`;
    });
    historyNode.innerHTML = expensesListHTML;
  }

  function renderSum(sum) {
    sumNode.innerText = sum;    
  }

  function renderStatus(sum) {
    if (sum > LIMIT) {
      statusNode.innerHTML = `${STATUS_OUT_OF_LIMIT} (${LIMIT - sum} ${CURRENCY})`;
      statusNode.className = STATUS_OUT_OF_LIMIT_CLASSNAME
    }
  }

 buttonResetNode.addEventListener('click', function() {
  expenses = [];
  expensesObject = [];
  statusNode.innerText = STATUS_IN_LIMIT;
  statusNode.className = STATUS_IN_LIMIT_CLASSNAME;
  sumNode.innerText = 0;
  historyNode.innerText = '';

 })






