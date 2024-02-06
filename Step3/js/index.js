"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];



// разметка прелоадера 

const preloader = `
<div class="loader">
	<div class="loader-inner">
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
	</div>
</div>
`


const body = document.querySelector('body');

// подключение прелоадера

document.body.insertAdjacentHTML("afterbegin", preloader);
const loader = document.querySelector('.loader');
const style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = './css/preloader.css';
document.head.appendChild(style)
//Лок/Анлок скрола========================================================
let scrollPosition;

const disableScroll = () => {
	const body = document.body;
	scrollPosition = window.scrollY;

	body.style.overflow = 'hidden';
	body.style.position = 'fixed';
	body.style.width = '100%';
	body.style.top = `-${scrollPosition}px`;

}

const enableScroll = () => {
	const body = document.body;

	body.style.overflow = '';
	body.style.position = '';
	body.style.width = 'auto';
	body.style.top = '';

	window.scrollTo(0, scrollPosition);
}

//глобальные переменные
const cardContainer = document.querySelector('.trainers-cards__container');
const trainerCard = document.querySelector('#trainer-card');
const sortedSection = document.querySelector('.sorting');
const sortingButtons = document.querySelectorAll('.sorting__btn');
const sidebar = document.querySelector('.sidebar');
const infoPopup = document.querySelector('#modal-template');
const sidebarForm = document.querySelector('.filters');
const inputs = document.querySelectorAll('input');
const filterSubmit = document.querySelector(".filters__submit");

// масив отфильтрованных карточек 
let filteredData = [];
// текущее значение фильтров. Обновляется при сабмите
const confirmFilters = {
	category: 'всі',
	specialization: 'всі',
};
// выбранные инпут. Обновляется при выборе
const checkedFilters = {
	categoryId: 'all-category',
	specializationId: 'all-direction',
};
// Текущее значени сортировки 
const appliedSorting = {
	value: 'за замовчуванням',
	valueId: 0,
};

window.addEventListener('load', () => {
	setTimeout(() => {
		// удаляем прелоадер по истечениию таймаута
		loader.remove();
		// отключаем стили прелоадере
		style.remove();
		// скролим вверх страницы
		window.scrollTo(0, 0);
	}, 1500);
});



// загружаем страницу
document.addEventListener('DOMContentLoaded', () => {
	sortedSection.removeAttribute('hidden');
	sidebar.removeAttribute('hidden');
	filterData();
	sortingData();
	renderCard(filteredData);
})


// рендер карточек
const renderCard = (data) => {
	data.forEach((elem, id) => {
		const card = trainerCard.content.cloneNode(true);
		const trainerName = `${elem["first name"]} ${elem["last name"]}`

		card.querySelector('img').setAttribute('src', elem.photo);
		card.querySelector('.trainer__name').innerText = trainerName;
		card.querySelector('.trainer').setAttribute('data-id', id);
		cardContainer.append(card);
	});
};
// очистка блока карточек и новый рендер 
const removeAndRenderCard = () => {
	cardContainer.innerHTML = '';
	renderCard(filteredData);
}


// Приминяем фильтры 
filterSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	updateFilters();
	filterData();
	sortingData();
	removeAndRenderCard();
});

const updateFilters = () => {
	const value = [];

	inputs.forEach((elem) => {
		if (elem.type === "radio" && elem.checked) {
			value.push(sidebar.querySelector(`label[for="${elem.id}"]`).innerText.trim().toLowerCase());
			value.push(elem.id);
		}
	});
	// передаем значения  в объекти confirmFilters и checkedFilters
	confirmFilters.specialization = value[0];
	checkedFilters.specializationId = value[1];
	confirmFilters.category = value[2];
	checkedFilters.categoryId = value[3];

	sessionStorage.setItem('checkedFilters', JSON.stringify(checkedFilters))
};
// фильтрация 
const filterData = () => {
	filteredData = DATA.filter((elem) => {
		const arraySpecialization = elem.specialization.toLocaleLowerCase();
		const arrarCategory = elem.category.toLocaleLowerCase();
		const specializationValue = confirmFilters.specialization;
		const categoryValue = confirmFilters.category;

		return (arraySpecialization === specializationValue || specializationValue === 'всі') &&
			(arrarCategory === categoryValue || categoryValue === 'всі');
	});

	sessionStorage.setItem('confirmFilters', JSON.stringify(confirmFilters));
}
// сортировка по клику на кнопку 
sortedSection.addEventListener("click", (event) => {
	const target = event.target;
	if (target.closest('button')) {

		sortingButtons.forEach((btn, id) => {
			btn.classList.remove('sorting__btn--active');
			if (btn === target) {
				appliedSorting.valueId = id;
				appliedSorting.value = btn.innerText.toLocaleLowerCase();

				sessionStorage.setItem('appliedSorting', JSON.stringify(appliedSorting));

				btn.classList.add('sorting__btn--active');
				sortingData();
			};
		});
		removeAndRenderCard();
	};
});
// сортировка
const sortingData = () => {

	switch (appliedSorting.value) {

		case 'за прізвищем':
			filteredData.sort((a, b) => a['last name'].localeCompare(b['last name']));
			break;

		case 'за досвідом':
			filteredData.sort((a, b) => parseInt(b['experience']) - parseInt(a['experience']));
			break;

		case 'за замовчуванням':
			filterData();
			break;
	};
};



// Лисеннер для появления попапа====================================================
cardContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains('trainer__show-more')) {
		const popup = infoPopup.content.cloneNode(true);
		const cardId = event.target.closest('li').dataset.id;


		const trainerName = `${filteredData[cardId]['first name']} ${filteredData[cardId]['last name']} `;

		// заменяем только нужный текст
		let trainerCategory = popup.querySelector(".modal__point--category");
		let newTrainerCaegory = trainerCategory.innerText.replace(/інструктор/i, `${filteredData[cardId].category}`);

		let trainerExperience = popup.querySelector(".modal__point--experience");
		let newTrainerExperience = trainerExperience.innerText.replace(/8 років/i, `${filteredData[cardId].experience}`);

		let trainerSpecialization = popup.querySelector(".modal__point--specialization")
		let newTrainerSpecialization = trainerSpecialization.innerText.replace(/Тренажерний зал/i, `${filteredData[cardId].specialization}`);

		// подставляем наши значения
		popup.querySelector('img').setAttribute('src', `${filteredData[cardId].photo}`);;
		popup.querySelector('.modal__name').innerText = trainerName;
		trainerCategory.innerText = newTrainerCaegory;
		trainerExperience.innerText = newTrainerExperience;
		trainerSpecialization.innerText = newTrainerSpecialization;
		popup.querySelector(".modal__text").innerText = `${filteredData[cardId].description}`;

		// Вешаем листенер на закрытие попапа и анлочим скролл
		popup.querySelector('.modal__close')
			.addEventListener("click", () => {
				document.querySelector('.modal').remove()
				enableScroll();
			});
		// Добавляем попап в DOM и лочим скролл
		document.body.append(popup);
		disableScroll();
	};

});

// Проверяем есть ли в sessionStorage значения фильтров 
const storedFilters = sessionStorage.getItem('confirmFilters');
const storedSavedFilters = JSON.parse(storedFilters);

// Забираем данные и обновляем confirmFilters
if (storedFilters) {
	confirmFilters.category = storedSavedFilters.category;
	confirmFilters.specialization = storedSavedFilters.specialization;
};

// проверяем есть ли в sessionStorage значение checked для фильтра
const storedCheckFilters = sessionStorage.getItem('checkedFilters');
const storedSavedCheckFilters = JSON.parse(storedCheckFilters);

// Забираем данные checked фильтра и обновляем checkedFilters
if (storedCheckFilters) {
	inputs.forEach((element) => {
		if (element.id === storedSavedCheckFilters.categoryId ||
				element.id === storedSavedCheckFilters.specializationId) {
			element.checked = true;
		};
	});
};

// проверка сортировки 
const storedSorting = sessionStorage.getItem('appliedSorting');
const storedSavedSorting = JSON.parse(storedSorting);

// забираем данные и обновляем appliedSorting
if (storedSorting) {
	appliedSorting.value = storedSavedSorting.value;

	sortingButtons.forEach((button, id) => {
		button.classList.remove('sorting__btn--active');
		if (id === storedSavedSorting.valueId) {
			button.classList.add('sorting__btn--active');
		};
	});
};
