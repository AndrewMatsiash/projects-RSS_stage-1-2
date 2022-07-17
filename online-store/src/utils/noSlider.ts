import wNumb from 'wnumb';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';



export const sliderElementQuntity = document.querySelector('.slider-quantity') as noUiSlider.target;

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

export const sliderDataReleaseElement = document.querySelector('.slider-data-release') as noUiSlider.target

export const sliderDataRelease= noUiSlider.create(sliderDataReleaseElement, {
  start: [2000,2022],
  connect: true,
  range: {
    'min': 2000,
    'max': 2022
  },
  behaviour: 'tap-drag',
  tooltips: true,
  format: wNumb({
    decimals: 0
  })
});



