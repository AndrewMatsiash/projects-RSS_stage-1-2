import { renderForm } from './forms/forms';
import { renderGarage } from './garage/garage';
import { renderMenu } from './menu/menu';
import { renderWinners } from './winners/winners';
// import { renderWinners } from "./winners/winners";

export const render = (): void => {
  const html = `
 <header class="header">${renderMenu()}</header>
    <main class="main">
    <section class="garage-container">
     ${renderForm()}
      <div class="race-controls">
        <button class="button race-btn" id="race">Race</button>
        <button class="button reset-btn" id="reset">Reset</button>
        <button class="button generation-btn" id="generation">Generation cars</button>
      </div>
      <div class="garage-wrapper" id="garage">${renderGarage()}</div>
      <div class="massage-wrapper">
        <div class="massage" id="massage">asdlfjlasjflsjflkjsflkj</div>
      </div>
    </section>
    <section class="winners-container" style="display: none">
    <div class="winners" id="winners-view" >
        ${renderWinners()}
      </div>
    <section>

    </main>
    <footer class="footer">
      <div class="pagination">
        <button class="button prev-btn color" id="prev-btn">Prev</button>
        <button class="button next-btn color" id="next-btn">Next</button>
      </div>
    </footer>

`;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerHTML = html;
  document.body.append(wrapper);
};
