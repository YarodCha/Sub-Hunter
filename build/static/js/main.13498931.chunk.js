(this.webpackJsonpestado=this.webpackJsonpestado||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i(1),s=i(7),a=i.n(s),c=(i(14),i(2)),r=i(3),h=i(5),l=i(4),d=(i(15),i(8)),u=function(t){var e={width:t.width,height:t.height};return Object(n.jsx)("div",{style:e,className:"cuadro",onClick:t.accion,id:t.id})},b=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(t){var n;Object(c.a)(this,i);return(n=e.call(this,t)).state={win:!1,numberHorizontalPixels:window.innerWidth,numberVerticalPixels:window.innerHeight,blockSize:Math.floor(window.innerWidth/30),gridWidth:30,gridHeight:Math.floor(window.innerHeight/Math.round(window.innerWidth/30)),subPosition:-1,seleccionados:[],shotsTaken:0,horizontalTouched:-100,verticalTouched:-100,distance:9999,subHorizontalPosition:0,subVerticalPosition:0},n}return Object(r.a)(i,[{key:"rellenarTablero",value:function(){for(var t=this,e=this.state.gridWidth*this.state.gridHeight,i=[],o=function(e){i.push(Object(n.jsx)(u,{id:e,color:"solid 1px black",width:t.state.blockSize+"px",height:t.state.blockSize+"px",accion:function(){return t.disparar(e)},children:e},e))},s=0;s<e;s++)o(s);return i}},{key:"printDebugText",value:function(){return Object(n.jsx)("div",{className:"info",children:Object(n.jsxs)("h1",{children:["Shots Taken: ",this.state.shotsTaken," distance: ",this.state.distance," "]})})}},{key:"printWin",value:function(){return Object(n.jsxs)("div",{className:"ganaste",children:[Object(n.jsx)("h1",{children:"GANASTE"}),Object(n.jsx)("button",{type:"button",onClick:function(){return window.location.reload()},children:"Nuevo juego"})]})}},{key:"iniciarJuego",value:function(){var t=this.state.gridWidth*this.state.gridHeight,e=Math.floor(Math.random()*t),i=Math.floor(e/30),n=e%30;this.setState({subPosition:e,subHorizontalPosition:n,subVerticalPosition:i})}},{key:"disparar",value:function(t){if(this.state.seleccionados.includes(t)||this.state.win);else{t===this.state.subPosition&&this.setState({win:!0});var e=Math.floor(t/30),i=t%30,n=Math.floor(Math.sqrt(Math.pow(this.state.subHorizontalPosition-i,2)+Math.pow(this.state.subVerticalPosition-e,2)));this.setState({seleccionados:[].concat(Object(d.a)(this.state.seleccionados),[t]),shotsTaken:this.state.shotsTaken+1,horizontalTouched:i,verticalTouched:e,distance:n})}}},{key:"componentDidMount",value:function(){this.iniciarJuego()}},{key:"render",value:function(){var t=this;return this.state.seleccionados.forEach((function(e){var i=document.getElementById(e);t.state.seleccionados.indexOf(e)===t.state.seleccionados.length-1?i.className="cuadro seleccionadoUltimo":i.className="cuadro seleccionado"})),Object(n.jsxs)(n.Fragment,{children:[this.printDebugText(),this.state.win?this.printWin():null,Object(n.jsx)("div",{className:"tablero",children:this.rellenarTablero()})]})}}]),i}(o.Component),j=function(t){Object(h.a)(i,t);var e=Object(l.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"contenedor",children:Object(n.jsx)(b,{})})}}]),i}(o.Component);a.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.13498931.chunk.js.map