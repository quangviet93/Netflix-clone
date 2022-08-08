import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import state from './state';

const movieModule = {
  state,
  getters,
  actions,
  mutations,
};

export default movieModule;
