import LazySizes from './components/lazysizes';
import Loader from './components/loader';
import Links from './components/links';

const App = {
  root: window.location.hostname == 'localhost' ? '/xxx/www' : '',
  init: async _ => {
    await Loader.init();
    await App.sizeSet();
    await App.interact();
    window.addEventListener('resize', debounce(App.sizeSet, 300), false)
    await Loader.loaded();
  },
  sizeSet: _ => {
    App.width = (window.innerWidth || document.documentElement.clientWidth)
    App.height = (window.innerHeight || document.documentElement.clientHeight)
    App.isMobile = App.width <= 767
  },
  addListener: (target, eventType, func = () => {}) => {
    const targets = document.querySelectorAll('[event-target="' + target + '"]');
    [...targets].forEach(elem => {
      elem.addEventListener(eventType, func)
    })
  },
  interact: async _ => {
    await Links.init();
  }
};

export default App;
