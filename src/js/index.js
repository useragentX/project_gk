import '../style/style.scss' 
import './slider.js' 
import './gallery.js' 
import './form.js' 


const awards_btn = document.querySelector('.awards__btn');
function awards_show () {
	var award_hidden = document.querySelectorAll('.awards__list-item_hidden');
	for (var i = 0; i < award_hidden.length; i++)
	{
    	award_hidden[i].classList.remove("awards__list-item_hidden");
    	awards_btn.classList.add("none");
	}
}
awards_btn.addEventListener("click", awards_show);


const feedback_btn_info = document.querySelector('.feedback-form-info')
feedback_btn_info.addEventListener("click", () => {
	var modal_window = document.querySelector('.modal-window');
	modal_window.classList.add("activ");
});

const modal_close = document.querySelector('.modal-window-close')
modal_close.addEventListener("click", () => {
	var modal_window = document.querySelector('.modal-window');
	modal_window.classList.remove("activ"); 
});