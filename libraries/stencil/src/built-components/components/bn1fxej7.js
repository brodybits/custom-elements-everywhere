/*! Built with http://stenciljs.com (es5) */

components.loadComponents("bn1fxej7",function(e,n,t,a){"use strict";var d=function(){function e(){this.lowercaseHandled=!1,this.kebabHandled=!1,this.camelHandled=!1,this.capsHandled=!1,this.pascalHandled=!1}return e.prototype.handleLowercaseEvent=function(){this.lowercaseHandled=!0},e.prototype.handleKebabEvent=function(){this.kebabHandled=!0},e.prototype.handleCamelEvent=function(){this.camelHandled=!0},e.prototype.handleCapsEvent=function(){this.capsHandled=!0},e.prototype.handlePascalEvent=function(){this.pascalHandled=!0},e.prototype.render=function(){return n("div",null,n("div",null,this.lowercaseHandled.toString()),n("div",null,this.kebabHandled.toString()),n("div",null,this.camelHandled.toString()),n("div",null,this.capsHandled.toString()),n("div",null,this.pascalHandled.toString()),n("ce-with-event",{onlowercaseevent:this.handleLowercaseEvent.bind(this),"onkebab-event":this.handleKebabEvent.bind(this),oncamelEvent:this.handleCamelEvent.bind(this),onCAPSEvent:this.handleCapsEvent.bind(this),onPascalEvent:this.handlePascalEvent.bind(this)}))},e}();e["component-with-declarative-event"]=d},["component-with-declarative-event",[["camelHandled",5,0,1],["capsHandled",5,0,1],["kebabHandled",5,0,1],["lowercaseHandled",5,0,1],["pascalHandled",5,0,1]],{}]);;