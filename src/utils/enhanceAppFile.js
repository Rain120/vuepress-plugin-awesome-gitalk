import Gitalk from '../components/Gitalk.vue'
import * as config from '../../package.json'

export default ({
  Vue
}) => {
  Vue.prototype.$gitalkAppName = config.name;
  Vue.prototype.$gitalkAppUrl = config.homepage;
  Vue.prototype.$gitalkAppDescription = config.description;

  Vue.component('Gitalk', Gitalk);
}
