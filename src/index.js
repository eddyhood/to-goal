import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { displayLogo, displayAddGoalForm } from './displayAssets';
import css from './icons/flaticon.css';
import style from './style/style.css';

//User Interface
const addBtn = document.getElementById('goal-btn');
addBtn.addEventListener('click', displayAddGoalForm);

//Render assets
displayLogo();
displayAddGoalForm();



