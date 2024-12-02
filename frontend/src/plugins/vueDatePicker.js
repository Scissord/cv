import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export function registerVueDatePicker(app) {
  app.component('DatePicker', VueDatePicker);
}
