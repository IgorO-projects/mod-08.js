// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут
  
//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

const skills = [ '#HTML', '#CSS', '#JAVASCRIPT', '#NPM', '#BABEL', '#WEBPACK', '#REACT', '#REDUX', '#NODEJS'];

const string = skills.reduce((acc, item)=> {
  acc += `<li><a href="#" class ="btn" data-value="${item.toLowerCase()}">${item}</a></li>`;
  return acc;
}, '');
// console.log(string);

const bodyRef = document.querySelector('body');

const nav = document.createElement('ul');
nav.classList.add('nav', 'js-nav');
bodyRef.prepend(nav);
nav.insertAdjacentHTML("afterbegin" ,string);

const output = document.createElement('p');
output.classList.add('js-output');
nav.after(output);


function handleNavClick (event) {
  event.preventDefault;
  const target = event.target;

  if (target.nodeName !== 'A') {
    return;
  };
  console.log(target);
  
  setActiveLink(target);
};

function setActiveLink (nextActiveLink) {
  const currentActiveLink = nav.querySelector('.active');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active');
  }
  nextActiveLink.classList.add('active');
  console.log(nextActiveLink.dataset.value);
  setOutputText(nextActiveLink);

  if (nextActiveLink === currentActiveLink) {
    console.log('цель события совпадает с текущим элиментом, удаляю класс');
    currentActiveLink.classList.remove('active');
  }
};

function setOutputText (value) {
  output.textContent = `user chose "${value.dataset.value}"`;
}

nav.addEventListener('click', handleNavClick);