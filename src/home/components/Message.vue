<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop,Emit,Watch } from 'vue-property-decorator'
import {IObservablePromise} from 'hoolinks/observable-promise';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
// @ts-ignore
import * as types from '../store/mutation-type';
import { IActionTokenPrams, IUserState} from '../store/types/user.d';
import { MockEntity, MockContainerEntity } from '../model/mockEntity';
import {setCookie} from 'hoolinks/cookie'

@Component
export default class Message extends Vue {
  @Prop(String) name!: string
  @Emit() onChange(){}
  @Emit('onChange') change(name:string){}
  @State('user') user:IUserState
  @Mutation(types.userType.SETTOKEN) changeToken
  @Action(types.userType.GETASYNCUSERINFO) actionToken(payload:IActionTokenPrams){}
  @Watch('user', { immediate: true, deep: true })
  onPersonChanged1(val: IUserState, oldVal: IUserState) { 
    if(val.userInfo.isResolved){
       console.log(this.user,'watch',val.userInfo.data.result.user.name)
    }
  }
  mounted () {
    console.log(this.name)
    console.log(this.user.token)

    //调用Mutation
    this.changeToken('Mutation new token')
    //执行this.$emit
    this.change('change value');

    //执行action
    this.actionToken({name:'tom',title:'Action1 new token'})
  }
  
}
</script>