import { renderGarage } from "./garage/garage";
import { renderMenu } from "./menu/menu";
import { renderWinners } from "./winners/winners";

export const render = () => {
  const html = `
 <header class="header">${renderMenu()}</header>
    <main class="main">
    <section class="garage-container">
     <form class="form" id="create">
        <input type="text" id="create-name" name="name" value="" />
        <input type="color" id="create-color" name="color" value="#ffffff" />
        <button class="button create-btn" type="submit" id="create-btn">create</button>
      </form>
      <form class="form" id="update">
        <input type="text" id="update-name" name="name" disabled value="" />
        <input type="color" id="update-color" name="color" disabled value="#ffffff"/>
        <button class="button update-btn" type="submit" disabled id="update-btn">update</button>
      </form>
      <div class="race-controls">
        <button class="button race-btn" id="race">Race</button>
        <button class="button reset-btn" id="reset">Reset</button>
        <button class="button generation-btn" id="generation">generation cars</button>
      </div>
      <div class="garage-wrapper" id="garage">${renderGarage()}</div>
      <div class="massage-wrapper">
        <div class="massage" id="message"></div>
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
