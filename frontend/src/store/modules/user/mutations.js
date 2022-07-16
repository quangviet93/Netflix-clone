import mutationTypes from "./mutationTypes";
import localStorageUtils from '@/utils/localStorage';

const mutations = {
  [mutationTypes.MUTATE_LOGIN]: (state, payload) => {
    localStorageUtils.saveToken(payload.token);
    state.user = payload.user;
    state.isAuth = true;
  },
  [mutationTypes.MUTATE_LOGOUT]: (state) => {
    localStorageUtils.removeToken();
    state.user = {};
    state.isAuth = false;
  },
  [mutationTypes.MUTATE_SET_USER]: (state, payload) => {
    state.user = payload;
    state.isAuth = true;
  }
}

export default mutations;