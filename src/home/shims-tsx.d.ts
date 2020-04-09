import Vue, { VNode } from 'vue'


// export default abstract class TsxComponent<P> extends Vue {
//   private vueTsxProps: Readonly<{}> & Readonly<P>;
// }
declare global {
  namespace JSX {
   // tslint:disable no-empty-interface
   interface Element extends VNode {}
   // tslint:disable no-empty-interface
   interface ElementClass extends Vue {}
   interface IntrinsicElements {
     [elem: string]: any;
   }   
   interface ElementAttributesProperty {
    $props: {}
   }
  //  interface ElementAttributesProperty { vueTsxProps: {}; }
  }
}