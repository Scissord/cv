import { registerFontAwesome } from './fontAwesome';
import { registerToast } from './toast';
import { registerVueDatePicker } from './vueDatePicker';

export default function registerPlugins(app) {
  registerFontAwesome(app);
  registerToast(app);
  registerVueDatePicker(app);
}
