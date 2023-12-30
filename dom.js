const url = document.querySelector('.img');
const name = document.querySelector('.name');
const number = document.querySelector('.in_price');
const button = document.querySelector('.form_btn');




button.addEventListener('click', () => {
  let obj = {
    url: url.value,
    name: name.value,
    number: number.value,
  };

  let data = JSON.parse(localStorage.getItem('info')) || [];
  data.push(obj);
  localStorage.setItem('info', JSON.stringify(data));
});
