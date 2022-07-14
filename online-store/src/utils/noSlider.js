import wNumb from 'wnumb';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';



export const sliderElementQuntity = document.querySelector('.slider-quantity');

export const sliderQuantity = noUiSlider.create(sliderElementQuntity, {
  start: [1, 12],
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
  behaviour: 'tap-drag',
  tooltips: true,
  format: wNumb({
    decimals: 0,
  }),
});

// export const slider2 = document.querySelector('.slider2')

//   noUiSlider.create(slider2, {
//   start: [1, 12],
//   connect: true,
//   range: {
//     'min': 1,
//     'max': 12
//   },
//   behaviour: 'tap-drag',
//   tooltips: true,
//   format: wNumb({
//     decimals: 0
//   })
// });



