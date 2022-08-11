import { updateStateGarage } from './components/garage/updateGarage';
import { listen } from './components/listeners/listeners';
import { render } from './components/render';
import './style.scss';

render();
listen();
updateStateGarage();

alert('Спасибо за понимание! Я не доделал updateWinner для увелечения побед.Остальной функционал должен работать. Еще раз спасибо за ожидание');
