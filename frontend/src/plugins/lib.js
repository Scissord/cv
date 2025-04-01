import { registerFontAwesome } from './fontAwesome';
import { registerToast } from './toast';

export default function registerPlugins(app) {
  registerFontAwesome(app);
  registerToast(app);
}
