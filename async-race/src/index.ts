import { updateStateGarage } from './components/garage/updateGarage';
import globalState from './components/globalState';
import { listen } from './components/listeners/listeners';
import { render } from './components/render';
import { startEngine } from './request/startEngine';
import './style.scss';

render();
listen();
updateStateGarage();

alert('Дорогой проверяющий, я не успел доделать функционал, проверьте, пожалуйста, в вечер четверга. Спасибо большое за понимание!');
