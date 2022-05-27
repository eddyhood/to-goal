import logo from './images/logo.png'

export function displayLogo() {
    const logoContainer = document.getElementById('logo');
    const logoAnchor = new Image();
    logoAnchor.src = logo;
    logoAnchor.classList.add('w-25')
    logoContainer.appendChild(logoAnchor);
}