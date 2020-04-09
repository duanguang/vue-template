import * as types from '../mutation-type';

import { PromiseAction } from 'hoolinks/promise-action';
import observablePromise,{IObservablePromise} from 'hoolinks/observable-promise';
import { IUserState, IActionTokenPrams } from '../types/user.d';
import { MockContainerEntity, MockEntity } from '../../model/mockEntity';
import { getMockData } from '../../service/message';

export const userState:IUserState= {
  userInfo:observablePromise<MockContainerEntity>(),
  token:''
}
const state = Object.assign({}, userState);
const mutations = {
  [types.userType.SETUSERINFO](state, newState) {
    state.userInfo = newState
  },
  [types.userType.SETTOKEN](state,newState){
     state.token=newState
  }
}
const actions={
  [types.userType.GETASYNCUSERINFO](dispatch,payload:IActionTokenPrams){
    let promiseList=getMockData();
    new PromiseAction().set(dispatch,types.userType.SETUSERINFO,promiseList)
  }
}

export default {
  state,
  actions,
  mutations
}
