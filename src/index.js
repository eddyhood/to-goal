import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { displayLogo, displayAddGoalForm } from './displayAssets';
import { createNewGoal } from './goals';
import css from './icons/flaticon.css';
import style from './style/style.css';

//User Interface
const addBtn = document.getElementById('goal-btn');
addBtn.addEventListener('click', displayAddGoalForm);
const goalForm = document.getElementById('goal-form');
goalForm.addEventListener('submit', e => {
    createNewGoal(e);
})

//Render assets
displayLogo();
displayAddGoalForm();



