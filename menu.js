const menu = document.querySelector('.block')

get();


function get() {
  let getData = JSON.parse(localStorage.getItem('info')) || [];
  getData.forEach((el) => {
    const heroBlock = document.createElement('div')
    heroBlock.setAttribute('class', 'hero_block')
    const heroImg = document.createElement('div')
    heroImg.setAttribute('class', 'hero_img')
    heroImg.style.background = `url(${el.url}) no-repeat center / cover`
    const heroPrice = document.createElement('div')
    heroPrice.setAttribute('class', 'hero_price')
    const h4 = document.createElement('h4')
    h4.innerHTML = el.name
    const price = document.createElement('div')
    price.setAttribute('class', 'price')
    const h5 = document.createElement('h4')
    h5.innerHTML = `${el.number}$`
    const button = document.createElement('button')
    button.setAttribute('class', 'btn_price')
    button.innerText = 'to order'


    price.append(h5)
    price.append(button)
    heroPrice.append(h4)
    heroPrice.append(price)
    heroBlock.append(heroImg)
    heroBlock.append(heroPrice)
    menu.append(heroBlock)
  });
}