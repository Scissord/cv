import registerButton from './ui/button/registerButton';
import registerInput from './ui/input/registerInput';
import registerLoader from './ui/loader/registerLoader';
import registerModal from './ui/modal/registerModal';
import registerSearch from './ui/search/registerSearch';

export default function registerComponents(app) {
  registerButton(app);
  registerInput(app);
  registerLoader(app);
  registerModal(app);
  registerSearch(app);
}
