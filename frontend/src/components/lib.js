import registerButton from './ui/button/registerButton';
import registerInput from './ui/input/registerInput';
import registerLoader from './ui/loader/registerLoader';
import registerModal from './ui/modal/registerModal';
import registerSearch from './ui/search/registerSearch';
import registerCounter from './ui/counter/registerCounter';
import registerSelect from './ui/select/registerSelect';
import registerDrawer from './ui/drawer/registerDrawer';
import registerPaginate from './ui/paginate/registerPaginate';
import registerCheckbox from './ui/checkbox/registerCheckbox';

export default function registerComponents(app) {
  registerButton(app);
  registerInput(app);
  registerLoader(app);
  registerModal(app);
  registerSearch(app);
  registerCounter(app);
  registerSelect(app);
  registerDrawer(app);
  registerPaginate(app);
  registerCheckbox(app);
};
