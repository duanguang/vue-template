import { Vue, Component, Prop,Emit,Watch } from 'vue-property-decorator'
import  { CreateElement,ComponentOptions }from 'vue'
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
import { IActionTokenPrams, IUserState} from '../store/types/user';
import { MockEntity, MockContainerEntity } from '../model/mockEntity';
import {setCookie} from 'hoolinks/cookie'
import TsxComponent from '../shims-tsx'
interface IName{
  age:Number
}


interface HelloInterface {
  ss?: IName,
  name: String,
  sname:String
}
@Component
export default class MessageTest extends Vue {
   @Prop(String) name!: String
  @Prop(String) sname!: String
  // @Prop({ type:  Object as ()=>IName,default:{age:1}}) ss!:IName
  @Prop({ type: Object as () => IName}) ss!:IName
  //  @Prop({ type: Array as Prop<string[]>}) s1
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
    console.log(this.name,this)
    console.log(this.user.token)

    //调用Mutation
    this.changeToken('Mutation new token')
    //执行this.$emit
    this.change('change value');

    //执行action
    this.actionToken({name:'tom',title:'Action1 new token'})
  }
  render(h:CreateElement){
      return(
        <div>
         {this.name}
        </div>  
      )
  }
} 