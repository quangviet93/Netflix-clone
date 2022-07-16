import getterTypes from './getterTypes';

const getters = {
  [getterTypes.GET_AUTH_USER]: state => state.user
}

export default getters;