import getterTypes from './getterTypes';

const getters = {
  [getterTypes.GET_ALL_MOVIE]: (state) => state.allMovie,
};

export default getters;
