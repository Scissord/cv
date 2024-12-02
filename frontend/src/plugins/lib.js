import { registerFontAwesome } from './fontAwesome';
import { registerToast } from './toast';
import { registerVSelect } from './vSelect';
import { registerVueDatePicker } from './vueDatePicker';

export default function registerPlugins(app) {
  registerFontAwesome(app);
  registerToast(app);
  registerVSelect(app);
  registerVueDatePicker(app);
}
