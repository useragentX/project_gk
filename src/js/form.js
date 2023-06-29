const inputName = document.querySelector('.feedback-form-input-name');
const inputPhone = document.querySelector('.feedback-form-input-phone');
const inputQuestion = document.querySelector('.feedback-form-input-question');

const labelName = document.querySelector('.feedback-form-label-name');
const labelPhone = document.querySelector('.feedback-form-label-phone');
const labelQuestion = document.querySelector('.feedback-form-label-question');

const errorName = document.querySelector('.feedback-form-error-name');
const errorPhone = document.querySelector('.feedback-form-error-phone');
const errorQuestion = document.querySelector('.feedback-form-error-question');

const button = document.querySelector('.feedback-form-button');


inputName.addEventListener('focus', () => {
    labelName.classList.add('activ');
});

inputPhone.addEventListener('focus', () => {
    labelPhone.classList.add('activ');
});

inputQuestion.addEventListener('focus', () => {
    labelQuestion.classList.add('activ');
});

inputName.addEventListener('blur', () => {
	if (inputName.value.length > 0) {
    	labelName.classList.add('activ');
	} else {
    	labelName.classList.remove('activ');
	}
	errorName.classList.remove('activ');
});

inputPhone.addEventListener('blur', () => {
	if (inputPhone.value.length > 0) {
    	labelPhone.classList.add('activ');
	} else {
    	labelPhone.classList.remove('activ');
	}
	errorPhone.classList.remove('activ');
});

inputQuestion.addEventListener('blur', () => {
	if (inputQuestion.value.length > 0) {
    	labelQuestion.classList.add('activ');
	} else {
    	labelQuestion.classList.remove('activ');	
	}
	errorQuestion.classList.remove('activ');
});

document.addEventListener('focus', () => {
    errorName.classList.remove('activ');
    errorPhone.classList.remove('activ');
    errorQuestion.classList.remove('activ');
});

document.addEventListener('input', () => {
    errorName.classList.remove('activ');
    errorPhone.classList.remove('activ');
    errorQuestion.classList.remove('activ');
});

/* button.addEventListener('click', () => {
	event.preventDefault();
	if (inputQuestion.value.length < 0) {
		inputQuestion.click();
	}
}); */

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                errorPhone.classList.remove('activ');
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }

    for (let ev of ['input', 'blur', 'focus']) {
        inputPhone.addEventListener(ev, eventCalllback);
    }
});

function checkValidate(e) {
	e.preventDefault();
	if (inputName.value.length == 0) {
		inputName.focus();
		errorName.classList.add('activ');
		return true;
	}

	if (inputPhone.value.length == 0) {
		inputPhone.focus();
		errorPhone.classList.add('activ');
		return true;
	}

	if (inputQuestion.value.length == 0) {
		inputQuestion.focus();
		errorQuestion.classList.add('activ');
		return true;
	}
}


button.addEventListener('click', checkValidate);