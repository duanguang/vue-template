import * as types from '../mutation-type';

import { PromiseAction } from 'hoolinks/promise-action';
import observablePromise from 'hoolinks/observable-promise';

export const userState = {
  userId: observablePromise(),
  userRole: observablePromise(),
  userName: observablePromise(),
  ucToken: observablePromise()
}

const state = Object.assign({}, userState);
const mutations = {
  [types.userType.SaveUserId](state, newState) {
    state.userId = newState;
  },
  [types.userType.SaveUserRole](state, newRole) {
    state.userRole = newRole
  },
  [types.userType.SaveUserName](state, newUserName) {
    state.userName = newUserName
  },
  [types.userType.SaveUcToken](state, newUcToken) {
    state.ucToken = newUcToken
  }
}
const actions = {}

export default {
  state,
  actions,
  mutations
}
