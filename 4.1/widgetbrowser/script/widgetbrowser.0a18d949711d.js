qx.$$packageData['16384']={"locales":{},"resources":{"widgetbrowser/blank.html":"widgetbrowser","widgetbrowser/fo_tester.swf":"widgetbrowser"},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("16384", function() {
(function(){var a="</div>",b="redraw",c="widgetbrowser.pages.Embed",d=" Text",f="widgetbrowser/fo_tester.swf",g="100%",h="<i>L</i>",i="<b>T</b>",j="<i style='color: red;'><b>H</b></i>",k="rgba(0, 0, 200, 0.5)",l="bgcolor",m="rgb(200,0,0)",n="<u>M</u>",o="auto",p="html.canvas",q="Browser does not support canvas",r="main",s="this is passed in via FlashVars",t="<div style='background-color: white; text-align: center;'>",u="bold",v='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla f',w="Text with set font (bold)!",x="Canvas",y="Flash",z="white",A="noscale",B="#FF6600",C="HTML";qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);var D=new qx.ui.layout.Grid(100,10);D.setColumnFlex(1,1);this.__mG=new qx.ui.container.Composite(D);this.add(this.__mG,{width:g,height:g});this.initWidgets();},members:{__mG:null,initWidgets:function(){var O=this._widgets;var J;J=new qx.ui.basic.Label(y);this.__mG.add(J,{row:0,column:0});var P={flashVarText:s};var I=new qx.ui.embed.Flash(f).set({scale:A,width:100,height:200,variables:P});I.getContentElement().setParam(l,B);O.push(I);this.__mG.add(I,{row:1,column:0,colSpan:2});J=new qx.ui.basic.Label(x);this.__mG.add(J,{row:2,column:0});if(qx.core.Environment.get(p)){var E=new qx.ui.embed.Canvas().set({width:200,height:200,canvasWidth:200,canvasHeight:200,syncDimension:true});E.addListener(b,this.__LP,this);O.push(E);this.__mG.add(E,{row:3,column:0});}else {this.__mG.add(new qx.ui.basic.Label(q),{row:3,column:0});};J=new qx.ui.basic.Label(C);this.__mG.add(J,{row:2,column:1});var M=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));this.__mG.add(M,{row:3,column:1});var K=t+j+i+n+h+d+a;var H=new qx.ui.embed.Html(K);O.push(H);H.setMaxWidth(200);H.setHeight(20);H.setDecorator(r);M.add(H);var L=w;var G=new qx.ui.embed.Html(L);O.push(G);G.setMaxWidth(200);G.setFont(u);G.setHeight(20);G.setDecorator(r);M.add(G);var N=v;var F=new qx.ui.embed.Html(N);O.push(F);F.setOverflow(o,o);F.setDecorator(r);F.setBackgroundColor(z);F.setHeight(150);F.setMaxWidth(200);M.add(F);},__LP:function(e){var Q=e.getData();var R=Q.context;R.fillStyle=m;R.fillRect(20,20,105,100);R.fillStyle=k;R.fillRect(70,70,105,100);}}});})();(function(){var a="sameDomain",b="Boolean",c="quality",d="_applyVariables",e="low",f="_applyLoop",g="opaque",h="scale",i="_applyAllowScriptAccess",j="showall",k="Map",l="wmode",m="Integer",n="_applyMenu",o="loaded",p="_applyPlay",q="loop",r="allowScriptAccess",s="_applyWmode",t="menu",u="noborder",v="loading",w="qx.event.type.Event",x="swLiveConnect",y="qx.ui.embed.Flash",z="String",A="_applyId",B="high",C="",D="transparent",E="exactfit",F="play",G="_applyLiveConnect",H="_applySource",I="appear",J="$$widget",K="medium",L="flash",M="timeout",N="_applyMayScript",O="best",P="_applyQuality",Q="never",R="_applyScale",S="autohigh",T="always",U="window",V="noscale",W="undefined",X="autolow",Y="mayscript";qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(ba,bb){qx.ui.core.Widget.call(this);{};this.setSource(ba);if(bb){this.setId(bb);}else {this.setId(L+this.toHashCode());};this.initQuality();this.initWmode();this.initAllowScriptAccess();this.initLiveConnect();this.addListenerOnce(I,function(){this._checkLoading();this.getContentElement().createFlash();},this);},events:{"loading":w,"loaded":w,"timeout":w},properties:{source:{check:z,apply:H},id:{check:z,apply:A},quality:{check:[e,X,S,K,B,O],init:O,nullable:true,apply:P},scale:{check:[j,u,E,V],nullable:true,apply:R},wmode:{check:[U,g,D],init:g,nullable:true,apply:s},play:{check:b,nullable:true,apply:p},loop:{check:b,nullable:true,apply:f},mayScript:{check:b,nullable:false,apply:N},menu:{check:b,nullable:true,apply:n},allowScriptAccess:{check:[a,T,Q],init:a,nullable:true,apply:i},liveConnect:{check:b,init:true,nullable:true,apply:G},variables:{init:{},check:k,apply:d},loadTimeout:{check:m,init:10000}},members:{__EV:null,getFlashElement:function(){var bc=this.getContentElement();if(bc){return bc.getFlashElement();}else {return null;};},isLoaded:function(){return this.getPercentLoaded()===100;},getPercentLoaded:function(){var bd=this.getFlashElement();if(typeof (bd)!=W&&bd!=null){try{return bd.PercentLoaded();}catch(be){return 0;};}else {return 0;};},_createContentElement:function(){var bf=new qx.html.Flash();bf.setAttribute(J,this.toHashCode());return bf;},_checkLoading:function(){var bg=this.getSource();if(bg!=C&&bg!=null&&bg!=W){if(!this.isLoaded()){if(!this.__EV){this.__EV=new Date().getTime();};var bh=new Date().getTime()-this.__EV;if(this.getLoadTimeout()>bh){var bi=qx.util.TimerManager.getInstance();bi.start(this._checkLoading,0,this,null,10);this.fireEvent(v);}else {{};this.fireEvent(M);this.__EV=null;};}else {this.fireEvent(o);this.__EV=null;};};},_applySource:function(bl,bk){var bj=qx.util.ResourceManager.getInstance().toUri(bl);this.getContentElement().setSource(bj);qx.ui.core.queue.Layout.add(this);},_applyId:function(bn,bm){this.getContentElement().setId(bn);qx.ui.core.queue.Layout.add(this);},_applyVariables:function(bp,bo){this.getContentElement().setVariables(bp);qx.ui.core.queue.Layout.add(this);},_applyMayScript:function(br,bq){this.getContentElement().setAttribute(Y,br?C:false);qx.ui.core.queue.Layout.add(this);},_applyQuality:function(bt,bs){this.__EW(c,bt);},_applyScale:function(bv,bu){this.__EW(h,bv);},_applyWmode:function(bx,bw){this.__EW(l,bx);},_applyPlay:function(bz,by){this.__EW(F,bz);},_applyLoop:function(bB,bA){this.__EW(q,bB);},_applyMenu:function(bD,bC){this.__EW(t,bD);},_applyAllowScriptAccess:function(bF,bE){this.__EW(r,bF);},_applyLiveConnect:function(bH,bG){this.__EW(x,bH);},__EW:function(bI,bJ){this.getContentElement().setParam(bI,bJ);qx.ui.core.queue.Layout.add(this);}}});})();(function(){var a="qx.util.TimerManager",b="interval",c="singleton";qx.Class.define(a,{extend:qx.core.Object,type:c,statics:{__EX:[],__EY:{},__uw:0},members:{__Fa:false,start:function(g,f,h,d,j){if(!j){j=f||0;};var e=(new Date()).getTime()+j;this.self(arguments).__EY[ ++this.self(arguments).__uw]={callback:g,userData:d||null,expireAt:e,recurTime:f,context:h||this};this.__Fb(e,this.self(arguments).__uw);return this.self(arguments).__uw;},stop:function(k){var l=this.self(arguments).__EX;var length=l.length;for(var i=0;i<length;i++ ){if(l[i]==k){l.splice(i,1);break;};};delete this.self(arguments).__EY[k];if(l.length==0&&this.__Fa){qx.event.Idle.getInstance().removeListener(b,this.__Fc,this);this.__Fa=false;};},__Fb:function(m,p){var o=this.self(arguments).__EX;var n=this.self(arguments).__EY;var length=o.length;for(var i=0;i<length;i++ ){if(n[o[i]].expireAt>m){o.splice(i,0,p);break;};};if(o.length==length){o.push(p);};if(!this.__Fa){qx.event.Idle.getInstance().addListener(b,this.__Fc,this);this.__Fa=true;};},__Fc:function(){var r=(new Date()).getTime();var t=this.self(arguments).__EX;var s=this.self(arguments).__EY;while(t.length>0&&s[t[0]].expireAt<=r){var v=t.shift();var q=s[v];q.callback.call(q.context,q.userData,v);if(q.recurTime&&s[v]){var u=(new Date()).getTime();q.expireAt=u+q.recurTime;this.__Fb(q.expireAt,v);}else {delete s[v];};};if(t.length==0&&this.__Fa){qx.event.Idle.getInstance().removeListener(b,this.__Fc,this);this.__Fa=false;};}}});})();(function(){var a="$$",b="The id cannot be modified after initial creation",c="The variables cannot be modified after initial creation",d="$$widget",e="movie",f="div",g="The source cannot be modified after initial creation",h="The params cannot be modified after initial creation",i="The attributes cannot be modified after initial creation",j="id",k="qx.html.Flash";qx.Class.define(k,{extend:qx.html.Element,construct:function(l,m){qx.html.Element.call(this,f,l,m);this.__Fd={};this.__Fe={};this.__Ff={};},members:{__Fd:null,__Ff:null,__Fe:null,__Fg:null,_createDomElement:function(){return qx.dom.Element.create(f);},createFlash:function(){this.__Fg=qx.bom.Flash.create(this.getDomElement(),this.getAttributes(),this.__Fe,this.__Fd);},setSource:function(n){{};if(this.__Fg){throw new Error(g);};this.setAttribute(e,n);},setId:function(o){{};if(this.__Fg){throw new Error(b);};this.setAttribute(j,o);},getVariables:function(){return this.__Fe;},setVariables:function(p){{};if(this.__Fg){throw new Error(c);};this.__Fe=p;},getAttributes:function(){return this.__Ff;},setAttribute:function(q,r){{};if(q==d||q.indexOf(a)===0){qx.html.Element.prototype.setAttribute.call(this,q,r);}else if(this.__Fg){throw new Error(i);};if(r===null||r===undefined){delete this.__Ff[q];}else {this.__Ff[q]=r;};},getParams:function(){return this.__Fd;},setParam:function(s,t){{};if(this.__Fg){throw new Error(h);};if(t===null||t===undefined){delete this.__Fd[s];}else {this.__Fd[s]=t;};},getFlashElement:function(){return this.__Fg;}},destruct:function(){if(this.__Fg){qx.bom.Flash.destroy(this.__Fg);};this.__Fd=this.__Fe=this.__Ff=null;}});})();(function(){var a="function",b="application/x-shockwave-flash",c="DOM element is null or undefined!",d="param",e='" />',f="100%",g="qx.bom.Flash",h='<param name="',j="type",k="load",l="browser.documentmode",m="name",n="data",o='</object>',p="",q="mshtml",r='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" $$widget="',s='">',t="movie",u='" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" $$widget="',v="DOM element has or is not a flash object!",w="value",x="&",y="engine.name",z="beforeunload",A="$$widget",B='<object id="',C="=",D='" value="',E="undefined",F="object";qx.Class.define(g,{statics:{_flashObjects:{},create:function(J,L,H,K,G){if(!G){G=window;};{};if(!L.width){L.width=f;};if(!L.height){L.height=f;};K=K?qx.lang.Object.clone(K):{};if(!K[t]){K[t]=L.movie;};L[n]=L.movie;delete L.movie;if(H){for(var name in H){if(typeof K.flashvars!=E){K.flashvars+=x+name+C+H[name];}else {K.flashvars=name+C+H[name];};};};var I=this.__Fm(J,L,K,G);this._flashObjects[L.id]=I;return I;},destroy:function(N,M){if(qx.core.Environment.get(y)==q&&qx.core.Environment.get(l)<11){N=this.__Fh(N);if(N.readyState==4){this.__Fi(N);}else {if(!M){M=window;};qx.bom.Event.addNativeListener(M,k,function(){qx.bom.Flash.__Fi(N);});};}else {N=this.__Fh(N);if(N.parentNode){N.parentNode.removeChild(N);};delete this._flashObjects[N.id];};},__Fh:function(O){if(!O){throw new Error(c);};if(O.tagName.toLowerCase()!==F){O=O.firstChild;};if(!O||O.tagName.toLowerCase()!==F){throw new Error(v);};return O;},__Fi:qx.core.Environment.select(y,{"mshtml":qx.event.GlobalError.observeMethod(function(P){for(var i in P){if(typeof P[i]==a){P[i]=null;};};if(P.parentNode){P.parentNode.removeChild(P);};delete this._flashObjects[P.id];}),"default":null}),__Fj:qx.event.GlobalError.observeMethod(function(){for(var Q in qx.bom.Flash._flashObjects){qx.bom.Flash.destroy(qx.bom.Flash._flashObjects[Q]);};window.__Fk=function(){};window.__Fl=function(){};qx.bom.Event.removeNativeListener(window,z,qx.bom.Flash.__Fj);}),__Fm:function(U,W,V,R){if(qx.core.Environment.get(y)==q&&qx.core.Environment.get(l)<11){V.movie=W.data;delete W.data;delete W.classid;var S=p;for(var name in V){S+=h+name+D+V[name]+e;};if(W.id){U.innerHTML=B+W.id+u+W.$$widget+s+S+o;delete W.id;}else {U.innerHTML=r+W.$$widget+s+S+o;};for(var name in W){if(name!=A){U.firstChild.setAttribute(name,W[name]);};};return U.firstChild;};delete W.classid;delete V.movie;var X=qx.dom.Element.create(F,W,R);X.setAttribute(j,b);var T;for(var name in V){T=qx.dom.Element.create(d,{},R);T.setAttribute(m,name);T.setAttribute(w,V[name]);X.appendChild(T);};U.appendChild(X);return X;}},defer:function(Y){if(qx.core.Environment.get(y)==q){qx.bom.Event.addNativeListener(window,z,Y.__Fj);};}});})();(function(){var a="resize",b="_applyCanvasWidth",c="redraw",d="Boolean",f="__Ef",g="_applyCanvasHeight",h="qx.ui.embed.Canvas",i="Integer",j="qx.event.type.Data";qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(l,k){qx.ui.core.Widget.call(this);this.__Ef=new qx.util.DeferredCall(this.__Eg,this);this.addListener(a,this._onResize,this);if(l!==undefined){this.setCanvasWidth(l);};if(k!==undefined){this.setCanvasHeight(k);};},events:{"redraw":j},properties:{syncDimension:{check:d,init:false},canvasWidth:{check:i,init:300,apply:b},canvasHeight:{check:i,init:150,apply:g}},members:{__Ef:null,_createContentElement:function(){return new qx.html.Canvas();},__Eg:function(){var n=this.getContentElement();var p=n.getHeight();var m=n.getWidth();var o=n.getContext2d();this._draw(m,p,o);this.fireNonBubblingEvent(c,qx.event.type.Data,[{width:m,height:p,context:o}]);},_applyCanvasWidth:function(r,q){this.getContentElement().setWidth(r);this.__Ef.schedule();},_applyCanvasHeight:function(t,s){this.getContentElement().setHeight(t);this.__Ef.schedule();},update:function(){this.__Ef.schedule();},_onResize:function(e){var u=e.getData();if(this.getSyncDimension()){this.setCanvasHeight(u.height);this.setCanvasWidth(u.width);};},getContext2d:function(){return this.getContentElement().getContext2d();},_draw:function(v,x,w){}},destruct:function(){this._disposeObjects(f);}});})();(function(){var a="canvas",b="2d",c="qx.html.Canvas";qx.Class.define(c,{extend:qx.html.Element,construct:function(d,e){qx.html.Element.call(this,a,d,e);this.__ez=document.createElement(a);},members:{__ez:null,_createDomElement:function(){return this.__ez;},getCanvas:function(){return this.__ez;},setWidth:function(f){this.__ez.width=f;},getWidth:function(){return this.__ez.width;},setHeight:function(g){this.__ez.height=g;},getHeight:function(){return this.__ez.height;},getContext2d:function(){return this.__ez.getContext(b);}},destruct:function(){this.__ez=null;}});})();(function(){var a="_applyOverflowX",b="_applyOverflowY",c="auto",d="overflowX",e="visible",f="hidden",g="qx.ui.core.MNativeOverflow",h="scroll",i="overflowY";qx.Mixin.define(g,{properties:{overflowX:{check:[f,e,h,c],nullable:true,apply:a},overflowY:{check:[f,e,h,c],nullable:true,apply:b},overflow:{group:[d,i]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(d,j);},_applyOverflowY:function(k){this.getContentElement().setStyle(i,k);}}});})();(function(){var a="mshtml",b="engine.name",c="relative",d="",e="text",f="none",g="position",h="webkit",i="changeHtml",j="_applyCssClass",k="qx.ui.embed.Html",l="_applyHtml",m="userSelect",n="color",o="String",p="browser.documentmode",q="html";qx.Class.define(k,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(r){qx.ui.core.Widget.call(this);if(r!=null){this.setHtml(r);};},properties:{html:{check:o,apply:l,event:i,nullable:true},cssClass:{check:o,init:d,apply:j},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();},_applyHtml:function(u,s){var t=this.getContentElement();if(qx.core.Environment.get(b)==a&&qx.core.Environment.get(p)==9){t.setStyle(g,c);};t.setAttribute(q,u||d);},_applyCssClass:function(w,v){this.getContentElement().removeClass(v);this.getContentElement().addClass(w);},_applySelectable:function(x){qx.ui.core.Widget.prototype._applySelectable.call(this,x);if((qx.core.Environment.get(b)==h)){this.getContentElement().setStyle(m,x?e:f);};},_applyFont:function(A,z){var y=A?qx.theme.manager.Font.getInstance().resolve(A).getStyles():qx.bom.Font.getDefaultStyles();if(this.getTextColor()!=null){delete y[n];};this.getContentElement().setStyles(y);},_applyTextColor:function(C,B){if(C){this.getContentElement().setStyle(n,qx.theme.manager.Color.getInstance().resolve(C));}else {this.getContentElement().removeStyle(n);};}}});})();
});