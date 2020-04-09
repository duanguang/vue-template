<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vue-typescrip-starter</h2>
    <Message :name="'tom'" @on-change='onChange' @onChange='onChange'></Message>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import  { Button,Steps } from 'iview';
import Message from './Message.vue'
// @ts-ignore
// const Step = Steps.Step
//  import { Button, Input, Poptip } from "ant-design-vue";
@Component({
  // @ts-ignore
  components:{Button,Message},
})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue-Typescript App'
  mounted () {
  }
  onChange(name){
    this.msg = `${name} Welcome to Your Vue-Typescript App`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>