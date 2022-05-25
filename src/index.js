import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png'

const logoContainer = document.getElementById('logo');
const logoAnchor = new Image();
logoAnchor.src = logo;
logoContainer.appendChild(logoAnchor);