import './styles/css/main.css'
import { Header } from './components/header/header.js';

const appElement = document.querySelector('#app')

const headerComponent = Header();

appElement.appendChild(headerComponent);