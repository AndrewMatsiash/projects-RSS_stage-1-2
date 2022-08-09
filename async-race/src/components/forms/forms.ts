export const renderForm = ():string => `
    <form class="form" id="create">
        <input type="text" id="create-name" name="name" value="" />
        <input type="color" id="create-color" name="color" value="#ffffff" />
        <button class="button create-btn" type="submit" id="create-btn">create</button>
      </form>
      <form class="form" id="update">
        <input type="text" id="update-name" name="name" disabled value="" />
        <input type="color" id="update-color" name="color" disabled value="#ffffff"/>
        <button class="button update-btn" type="submit" disabled id="update-btn">update</button>
      </form>`;
