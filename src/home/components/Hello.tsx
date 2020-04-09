import Vue , { CreateElement,ComponentOptions }from 'vue'
import  { Button,Steps } from 'iview';
import Component from 'vue-class-component'
import {IObservablePromise} from 'hoolinks/observable-promise';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { MockEntity } from '../model/mockEntity';
 import { Select } from "ant-design-vue";
 const OptionItem=Select.Option
 import MessageTest from './messages'

// import { Button, Input, Poptip } from "ant-design-vue";
@Component({
  components:{},
})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue-Typescript App'
  mounted () {
  }
  //          {/* 
  // // @ts-ignore */}
  render(h:CreateElement){
    const name={age:1}
    // @ts-ignore
      return(
        <div>
          <p>{this.msg}</p>
          <Select>         
             
             <OptionItem value="111">2222</OptionItem>
          </Select>
          <Button          
         
           >demo示例</Button>

           <MessageTest name={'222'} sname='111' ss={name} />
        </div>  
      )
  }
}

