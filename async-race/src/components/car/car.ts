export const renderImg = (color: string) => `<svg class="icon-car"><use xlink:href="sprite.svg#car" fill="${color}"></use></svg>`;

export const renderCar = ({ id, name, color }: ICar) => {
  const carHtml = `
<div class="general-buttons">
  <button class="button select-btn color" id="select-car-${id}">select</button>
  <button class="button remove-btn color" id="remove-car-${id}">remove</button>
  <span class="car-name"> ${name}</span>
</div>
  <div class="road">
    <div class="launch-pad" >
      <div class="control-panel">
        <button class="icon start-engine-btn color" id="start-engine-car-${id}">go</button>
        <button class="icon stop-engine-btn color" id="stop-engine-btn-${id}">stop</button>
        <div class="car" id="car-${id}">${renderImg(color)}</div>
      </div>
    </div>
    <div class="flag" id="flag-${id}">🏁</div>
  </div>`;
  return carHtml;
};
