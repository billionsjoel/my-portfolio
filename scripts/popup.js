<<<<<<< HEAD
let project = {
	title: 'Multi-Post Stories',
	description:
		"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
	imageLink: 'about-me-img.png',
	technologies: ['html', 'css', 'javascript'],
	liveLink: 'https://live.com',
	sourceLink: 'https://live.com',
=======
const project = {
  title: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  imageLink: 'about-me-img.png',
  technologies: ['html', 'css', 'javascript'],
  liveLink: 'https://billionsjoel.github.io/',
  sourceLink: 'https://github.com/billionsjoel/my-portfolio',
>>>>>>> 8b8b0bee2c813ea93ef92aad8e1b502125bdab9c
};

const grabBtnProject1 = document.querySelectorAll('.toggle-modal');
const popUp = document.querySelector('.project1-popUp');
const close = document.querySelector('.pop-close-btn');

const title = document.querySelector('.pop-up-title');
const description = document.querySelector('.model-text-p');
const image = document.querySelector('.model-image');
const liveLink = document.querySelector('#left-btn');
const sourceLink = document.querySelector('#right-btn');
const techItem1 = document.querySelector('#item1');
const techItem2 = document.querySelector('#item2');
const techItem3 = document.querySelector('#item3');

function showProject1() {
<<<<<<< HEAD
	popUp.classList.remove('hide');
	popUp.classList.add('show');
}
function closeProject() {
	popUp.classList.add('hide');
}

grabBtnProject1.forEach((e) => {
	e.addEventListener('click', function (event) {
		event.preventDefault();
	});
	e.addEventListener('click', showProject1, false);
=======
  popUp.classList.remove('hide');
  popUp.classList.add('show');
}
function closeProject() {
  popUp.classList.add('hide');
}

grabBtnProject1.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
  });
  e.addEventListener('click', showProject1, false);
>>>>>>> 8b8b0bee2c813ea93ef92aad8e1b502125bdab9c
});
close.addEventListener('click', closeProject, false);

const imgHtml = `<img src="${project.imageLink}" alt="about section background image-3" />`;

title.innerHTML = project.title;
description.innerHTML = project.description;
image.innerHTML = imgHtml;
liveLink.href = project.liveLink;
sourceLink.href = project.sourceLink;
<<<<<<< HEAD
techItem1.innerHTML = project.technologies[0];
techItem2.innerHTML = project.technologies[1];
techItem3.innerHTML = project.technologies[2];
=======

const [html, css, javascript] = project.technologies;

techItem1.innerHTML = html;
techItem2.innerHTML = css;
techItem3.innerHTML = javascript;
>>>>>>> 8b8b0bee2c813ea93ef92aad8e1b502125bdab9c
