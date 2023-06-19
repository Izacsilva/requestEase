import './styles/css/main.css'
import Header from './components/header/header.js';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import  App  from './App';

const root = document.querySelector('#root')

root.append(Header())
root.append(Main())
root.append(Footer())

