/**
 * 无法提取的子应用专属通用工具
 */
 import type { VNodeProps, DefineComponent } from 'vue';
 import { createVNode, render } from 'vue';
 
 /**
  * 将子应用组件挂载到任意容器，主要用来挂载到主应用。（无法提取出来，会报错）
  */
 function getContainer(containerId: string) {
   window.microApp.removeDomScope();
   const _window = new Function('return window')();
   const container = _window.document.getElementById(containerId);
   if (!container) throw new Error('未找到容器元素');
   return container;
 }
 export class ComponentAppender {
   /**
    * 挂载元素到指定容器
    * @param containerId
    * @param component
    * @param props
    */
   static mount(containerId: string, Component: DefineComponent, props: VNodeProps) {
     const container = getContainer(containerId);
     const vNode = createVNode(Component, props);
     render(vNode, container);
   }
   /**
    * 卸载指定容器的组件
    * @param containerId
    */
   static unmount(containerId: string) {
     const container = getContainer(containerId);
     render(null, container);
   }
 }
 