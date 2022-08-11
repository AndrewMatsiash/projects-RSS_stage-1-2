import { IWinners } from '../../types/type';
import { renderImg } from '../car/car';
import { globalState } from '../globalState';

export const renderWinners = (): string => `
<h1>Winners (${globalState.winnersCount})</h1>
<h2>Page ${globalState.winnersPage}</h2>
<table class="table" cellspading="0" border="0" cellpadding="0">
  <thead>
    <th>Number</th>
    <th class='id'>id</th>
    <th>Car</th>
    <th>Name</th>
    <th class="table-button wins id="sort-by-wins">Wins</th>
    <th class="table-button time id="sort-by-time">Best time(second)</th>
  </thead>
  <tbody>

  ${globalState.winners.map((winner:IWinners, index:number) => `
    <tr>
    <td>${index + 1}</td>
    <td>${winner.id}</td>
    <td>${renderImg(winner.car.color)}</td>
    <td>${winner.car.name}</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
    </tr>
  `).join('')}
  </tbody>

</table>
`;
