import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { displayLogo } from './displayImages';
import css from './icons/flaticon.css';
import style from './style/style.css';

//Page layout
displayLogo();
const goalForm = document.getElementById('goal-form');
const addBtn = document.getElementById('goal-btn');
addBtn.addEventListener('click', displayAddGoalForm);

function displayAddGoalForm() {
    if(goalForm.style.display == 'none') {
        goalForm.style.display = 'block';
    } else {
        goalForm.style.display = 'none';
    }
}



