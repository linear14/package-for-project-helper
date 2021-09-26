import './index.scss'
import logo from '/public/logo.png';

const $body = document.querySelector('body');
$body.innerHTML = `
        <h1>Webpack Test</h1>
        <p>웹팩 BoilerPlate 코드</p>
        <img src="${logo}"/>
    `;