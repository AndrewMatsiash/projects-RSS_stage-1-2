import { renderImg } from "../car/car";
import globalState from "../globalState";

export const renderWinners = () => `
<h1>Winners (${globalState.winnersCount})</h1>
<h2>Page #${globalState.winnersPage}</h2>
<table class="table" cellspading="0" border="0" cellpadding="20">
  <thead>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th class="table-button table-wins id="sort-by-wins">Wins</th>
    <th class="table-button table-time id="sort-by-time">Best time(second)</th>
  </thead>
  <tbody>

  ${globalState.winners.map((winner, index) => `
    <tr>
    <td>${index + 1}</td>
    <td>${renderImg(winner)}</td>
    <td>name</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
    </tr>
  `).join('')}
  </tbody>

</table>
`
