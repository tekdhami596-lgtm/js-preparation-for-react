const changeText = document.querySelector('p');
changeText.textContent = "new changes content";

const elements = document.querySelectorAll('.item');
elements.forEach((item)=>{
  item.style.backgroundColor = 'yellow';
});