/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  ComponentWithDeclarativeEvent as ComponentWithDeclarativeEvent
} from './components';

declare global {
  interface HTMLComponentWithDeclarativeEventElement extends ComponentWithDeclarativeEvent, HTMLElement {
  }
  var HTMLComponentWithDeclarativeEventElement: {
    prototype: HTMLComponentWithDeclarativeEventElement;
    new (): HTMLComponentWithDeclarativeEventElement;
  };
  interface HTMLElementTagNameMap {
    "component-with-declarative-event": HTMLComponentWithDeclarativeEventElement;
  }
  interface ElementTagNameMap {
    "component-with-declarative-event": HTMLComponentWithDeclarativeEventElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "component-with-declarative-event": JSXElements.ComponentWithDeclarativeEventAttributes;
    }
  }
  namespace JSXElements {
    export interface ComponentWithDeclarativeEventAttributes extends HTMLAttributes {
      
    }
  }
}
