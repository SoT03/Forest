const firstName = document.querySelector('#name');
const surName = document.querySelector('#surname');
const email = document.querySelector('#email');
const message = document.querySelector('#text');
const checkBox = document.querySelector('#personal-data');
const popup = document.querySelector('.popup');
const sendBtn = document.querySelector('.contact__send');
const clearBtn = document.querySelector('.contact__clear');
const closePopup = document.querySelector('.popup__box-btn');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.contact__error');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
	const errorMsg = formBox.querySelector('.contact__error');
	errorMsg.textContent = '';
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText} składa się z min. ${min} znaków`
		);
	}
};

const checkMail = (email) => {
	const reg =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	if (reg.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny');
		return;
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box');
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		popup.classList.add('show-popup');
		popup.showModal();
		[firstName, surName, email, message].forEach((el) => {
			el.value = '';
		});
	}
};

const isChecked = (checkBox) => {
	if (checkBox.checked === false) {
		showError(checkBox, 'Musisz wyrazić zgodę na przetwarzanie danych');
	} else {
		clearError(checkBox);
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([firstName, surName, email, message]);
	checkLength(firstName, 2);
	checkLength(surName, 2);
	checkLength(message, 10);
	checkMail(email);
	isChecked(checkBox);
	checkErrors();
});

clearBtn.addEventListener('click', (e) => {
	[firstName, surName, email, message].forEach((el) => {
		clearError(el);
	});
});

closePopup.addEventListener('click', () => {
	popup.close();
});
