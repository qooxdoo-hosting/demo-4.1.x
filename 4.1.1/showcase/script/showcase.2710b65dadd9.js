qx.$$packageData['128']={"locales":{},"resources":{"qx/icon/Tango/22/emotes/face-angel.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-embarrassed.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-kiss.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-laugh.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-plain.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-raspberry.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-sad.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile-big.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-surprise.png":[22,22,"png","qx"],"showcase/virtuallist/down.png":[7,7,"png","showcase"],"showcase/virtuallist/imicons/christian_hagendorn.png":[52,64,"png","showcase"],"showcase/virtuallist/imicons/martin_wittemann.png":[52,52,"png","showcase"],"showcase/virtuallist/imicons/readme.txt":"showcase","showcase/virtuallist/imicons/status_away.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_busy.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_offline.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_online.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/tino_butz.png":[48,48,"png","showcase"],"showcase/virtuallist/imicons/tristan_koch.png":[73,73,"png","showcase"],"showcase/virtuallist/imicons/user_add.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/user_delete.png":[16,16,"png","showcase"],"showcase/virtuallist/right.png":[7,7,"png","showcase"]},"translations":{"C":{},"cs":{},"de":{},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{},"es_ES":{},"es_MX":{},"pt":{},"ro":{},"ro_RO":{},"sv":{},"sv_SE":{}}};
qx.Part.$$notifyLoad("128", function() {
(function(){var a="separator-vertical",b="Escape",c="Cancel",d="Group: ",f="changeValue",g="Name:",h="execute",i="Enter",j="away",k="source",l="Group:",m="selection[0]",n="offline",o="showcase.page.virtuallist.Content",p="center",q="value",r="showcase/virtuallist/imicons/user_delete.png",s="online",t="enabled",u="middle",v="group",w="Name: ",x="name",y="keypress",z="",A="icon",B="textfield",C="busy",D="selection.length",E="selection[0].status",F="modelSelection",G="top",H="Contacts",I="right",J="Status: ",K="selection",L="Add",M="Contact Details",N="Add user",O="model",P="appear",Q="avatar",R="showcase/virtuallist/imicons/user_add.png",S="left",T="Avatar: ";qx.Class.define(o,{extend:showcase.AbstractContent,construct:function(U){showcase.AbstractContent.call(this,U);this.setView(this._createView());},members:{messenger:null,__we:null,__wf:null,__wg:null,__wh:null,_createView:function(){var Y=new qx.ui.window.Desktop(new qx.ui.window.Manager());var V=new qx.ui.window.Window(H);V.set({showClose:false,showMinimize:false,contentPadding:0});Y.add(V);V.moveTo(250,20);V.open();var X=new qx.ui.layout.VBox();X.setSeparator(a);V.setLayout(X);this.messenger=new showcase.page.virtuallist.messenger.Roster();var W=showcase.page.virtuallist.messenger.BuddyModel.createBuddies(200);this.messenger.setModel(W);V.add(this.createToolbar());V.add(this.messenger,{flex:1});Y.add(this.createDetailsView(),{left:20,top:20});return Y;},createToolbar:function(){var toolbar=new qx.ui.toolbar.ToolBar();var bc=new qx.ui.toolbar.Part();toolbar.add(bc);var ba=new qx.ui.toolbar.Button(z,R).set({show:A});ba.addListener(h,this.showAddContactWindow,this);bc.add(ba);var bb=new qx.ui.toolbar.Button(z,r).set({show:A});this.messenger.bind(D,bb,t,{converter:function(bd){return bd>0;}});bb.addListener(h,function(){this.messenger.getModel().remove(this.messenger.getSelection().getItem(0));},this);bc.add(bb);return bc;},createDetailsView:function(){var bh=new qx.data.controller.Object();this.messenger.bind(m,bh,O);var be=new qx.ui.groupbox.GroupBox(M);var bi=new qx.ui.layout.Grid(5,5);bi.setColumnAlign(0,I,u);be.setLayout(bi);be.add(new qx.ui.basic.Label(w),{row:0,column:0});var bk=new qx.ui.form.TextField();bh.addTarget(bk,q,x,true);be.add(bk,{row:0,column:1});be.add(new qx.ui.basic.Label(d),{row:1,column:0});var bf=new qx.ui.form.VirtualComboBox();bf.setLabelPath(x);bf.setModel(this.messenger.getGroups());bh.addTarget(bf,q,v,true);be.add(bf,{row:1,column:1});be.add(new qx.ui.basic.Label(J),{row:2,column:0});var bj=new qx.ui.form.SelectBox();bj.add(new qx.ui.form.ListItem(s).set({model:s}));bj.add(new qx.ui.form.ListItem(j).set({model:j}));bj.add(new qx.ui.form.ListItem(C).set({model:C}));bj.add(new qx.ui.form.ListItem(n).set({model:n}));this.messenger.bind(E,bj,F,{converter:function(bl){return [bl];}});bj.bind(K,this.messenger,E,{converter:function(bm){return bm[0].getModel();}});be.add(bj,{row:2,column:1});be.add(new qx.ui.basic.Label(T).set({alignY:G}),{row:3,column:0});var bg=new qx.ui.basic.Image().set({alignX:p,maxWidth:70,maxHeight:70,scale:true});bh.addTarget(bg,k,Q);be.add(bg,{row:3,column:1});return be;},showAddContactWindow:function(){if(this.__we==null){var bn=new qx.ui.layout.Grid(5,10);var bp=new qx.ui.window.Window(N,R);bp.set({width:165,height:100,showMinimize:false,showClose:false,showMaximize:false});bp.setLayout(bn);var bs=new qx.ui.basic.Label(g);var bt=new qx.ui.form.TextField();bt.setLiveUpdate(true);var bq=new qx.ui.form.VirtualComboBox();bq.getChildControl(B).setLiveUpdate(true);bq.setLabelPath(x);bq.setModel(this.messenger.getGroups());var bo=new qx.ui.basic.Label(l);var bu=new qx.ui.form.Button(L);bu.setEnabled(false);var bv=new qx.ui.form.Button(c);this.__wf=bt;this.__wg=bq;this.__wf.addListener(f,this.enableAddButton,this);this.__wg.addListener(f,this.enableAddButton,this);bu.setAllowGrowX(false);bv.setAllowGrowX(false);this.__wh=bu;bp.addListener(P,bt.focus,bt);bv.addListener(h,bp.close,bp);var br=function(){var bw=new showcase.page.virtuallist.messenger.BuddyModel();bw.setName(bt.getValue());bw.setGroup(bq.getValue());this.messenger.getModel().push(bw);this.messenger.getSelection().setItem(0,bw);bp.close();};bu.addListener(h,br,this);bp.addListener(y,function(e){var bx=e.getKeyIdentifier();if(bx==i){br.call(this);}else if(bx==b){bp.close();};},this);bp.add(bs,{row:0,column:0});bp.add(bt,{row:0,column:1,colSpan:2});bp.add(bo,{row:1,column:0});bp.add(bq,{row:1,column:1,colSpan:2});bp.add(bu,{row:2,column:1});bp.add(bv,{row:2,column:2});bn.setColumnAlign(0,S,u);bn.setColumnAlign(1,I,u);this.getView().add(bp,{left:270,top:40});this.__we=bp;};this.__wf.setValue(z);this.__we.open();},enableAddButton:function(){if(this.__wf.getValue()&&this.__wg.getValue()){this.__wh.setEnabled(true);}else {this.__wh.setEnabled(false);};},removeContact:function(){this.messenger.getModel().pop();}}});})();(function(){var c="changeModel",d="name",e="open",f="changeOpen",g="model",h="change",j="qx.data.Array",k="status",l="progressive-table-row-background-even",m="row-layer",n="count",o="avatar",p="_applyModel",q="off",r="changeSelection",s="changeBubble",t="changeGroup",u="showcase.page.virtuallist.messenger.Roster",v="progressive-table-row-background-odd",w="auto";qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);var x=new qx.ui.layout.VBox();this._setLayout(x);var z=this.list=new qx.ui.list.List();z.set({scrollbarX:q,scrollbarY:w,width:200,height:300,itemHeight:28,decorator:null,autoGrouping:false,padding:0});z.setDelegate(this);this._add(z,{flex:1});this.initGroups(z.getGroups());this.initModel(new qx.data.Array());this.initSelection(z.getSelection());this.bind(g,z,g);var y=z.getChildControl(m);y.set({colorEven:l,colorOdd:v});new qx.ui.virtual.behavior.Prefetch(z,{minLeft:0,maxLeft:0,minRight:0,maxRight:0,minAbove:600,maxAbove:800,minBelow:600,maxBelow:800}).set({interval:500});},properties:{model:{check:j,event:c,apply:p,nullable:false,deferredInit:true},selection:{check:j,event:r,nullable:false,deferredInit:true},groups:{check:j,event:t,nullable:false,deferredInit:true}},members:{createItem:function(){return new showcase.page.virtuallist.messenger.Buddy();},createGroupItem:function(){return new showcase.page.virtuallist.messenger.Group();},bindItem:function(B,A,C){B.bindProperty(d,d,null,A,C);B.bindProperty(o,o,null,A,C);B.bindProperty(k,k,null,A,C);},bindGroupItem:function(E,D,F){E.bindProperty(d,d,null,D,F);E.bindProperty(n,n,null,D,F);E.bindProperty(e,e,null,D,F);E.bindPropertyReverse(e,e,null,D,F);},filter:function(G){return this.__wj(G.getGroup()).isOpen();},sorter:function(a,b){return a.getName()<b.getName()?-1:1;},group:function(H){return this.__wj(H.getGroup());},_applyModel:function(J,I){J.addListener(h,this.__wi,this);J.addListener(s,this.__wi,this);if(I!=null){I.removeListener(h,this.__wi,this);I.removeListener(s,this.__wi,this);};this.__wi();},__wi:function(event){var N=this.getModel();var M=this.getGroups();var O={};for(var i=0;i<M.getLength();i++ ){var L=M.getItem(i);O[L.getName()]=0;};for(var i=0;i<N.getLength();i++ ){var L=N.getItem(i).getGroup();if(O[L]==null){O[L]=1;}else {O[L]+=1;};};for(var name in O){var K=O[name];var L=this.__wj(name);L.setCount(K);};if(event&&event.getType()==s){this.list.refresh();};},__wj:function(name){var R=this.getGroups();var Q=null;for(var i=0;i<R.getLength();i++ ){var P=R.getItem(i);if(name==P.getName()){Q=P;break;};};if(Q==null){Q=new showcase.page.virtuallist.messenger.GroupModel(name);Q.addListener(f,this.__wk,this);R.push(Q);};return Q;},__wk:function(event){this.list.refresh();}}});})();(function(){var a="__eg",b="_applyInterval",c="appear",d="interval",e="qx.ui.virtual.behavior.Prefetch",f="scroll",g="_applyScroller",h="qx.ui.virtual.core.Scroller",i="scrollbar-x",j="Integer",k="scrollbar-y";qx.Class.define(e,{extend:qx.core.Object,construct:function(l,m){{};qx.core.Object.call(this);this.setPrefetchX(m.minLeft,m.maxLeft,m.minRight,m.maxRight);this.setPrefetchY(m.minAbove,m.maxAbove,m.minBelow,m.maxBelow);this.__eg=new qx.event.Timer(this.getInterval());this.__eg.addListener(d,this._onInterval,this);if(l){this.setScroller(l);};},properties:{scroller:{check:h,nullable:true,init:null,apply:g},interval:{check:j,init:200,apply:b}},members:{__wl:null,__wm:null,__eg:null,__wn:null,__wo:null,setPrefetchX:function(n,q,o,p){this.__wl=[n,q,o,p];},setPrefetchY:function(u,t,s,r){this.__wm=[u,t,s,r];},_onInterval:function(){var v=this.__wl;if(v[1]&&v[3]){this.getScroller().getPane().prefetchX(v[0],v[1],v[2],v[3]);qx.ui.core.queue.Manager.flush();};var w=this.__wm;if(w[1]&&w[3]){this.getScroller().getPane().prefetchY(w[0],w[1],w[2],w[3]);qx.ui.core.queue.Manager.flush();};},_applyScroller:function(y,x){if(x){if(this.__wn){x.getChildControl(i).removeListenerById(this.__wn);};if(this.__wo){x.getChildControl(k).removeListenerById(this.__wo);};};if(y){if(!y.getContentElement().getDomElement()){this.__eg.stop();y.addListenerOnce(c,this.__eg.start,this.__eg);}else {this.__eg.restart();};this.__wn=y.getChildControl(i).addListener(f,this.__eg.restart,this.__eg);this.__wo=y.getChildControl(k).addListener(f,this.__eg.restart,this.__eg);}else {this.__eg.stop();};},_applyInterval:function(A,z){this.__eg.setInterval(A);}},destruct:function(){this.setScroller(null);this.__wl=this.__wm=null;this._disposeObjects(a);}});})();(function(){var a="listitem",b="showcase.page.virtuallist.messenger.Buddy",c="",d="icon",e="label",f=".png",g="_applyAvatar",h="statusIcon",i="middle",j="_applyLabel",k="_applyStatus",l="showcase/virtuallist/imicons/status_",m="String";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({padding:[0,3]});this._setLayout(new qx.ui.layout.HBox(3).set({alignY:i}));this._add(this.getChildControl(h));this._add(this.getChildControl(e),{flex:1});this._add(this.getChildControl(d));},properties:{appearance:{refine:true,init:a},name:{check:m,apply:j,init:c},avatar:{check:m,apply:g,init:c},status:{check:m,apply:k,init:c},gap:{themeable:true}},members:{_createChildControlImpl:function(p,o){var n;switch(p){case e:n=new qx.ui.basic.Label().set({allowGrowX:true});break;case d:n=new qx.ui.basic.Image().set({width:26,height:26,scale:true});break;case h:n=new qx.ui.basic.Image();break;};return n||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);},_applyLabel:function(r,q){this.getChildControl(e).setValue(r);},_applyAvatar:function(t,s){this.getChildControl(d).setSource(t);},_applyStatus:function(w,v){var u=l+w+f;this.getChildControl(h).setSource(u);}}});})();(function(){var a="showcase/virtuallist/down.png",b="_applyName",c="_applyCount",d="showcase.page.virtuallist.messenger.Group",e="Boolean",f="changeOpen",g="icon",h="",i="label",j="(",k=")",l="showcase/virtuallist/right.png",m="_applyOpen",n="count",o="dark-blue",p="white",q="tap",r="middle",s="Integer",t="String",u="bold";qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({backgroundColor:o,padding:[0,3]});this._setLayout(new qx.ui.layout.HBox(3).set({alignY:r}));this._add(this.getChildControl(g));this._add(this.getChildControl(i),{flex:1});this._add(this.getChildControl(n));},properties:{open:{check:e,event:f,apply:m,init:true},name:{check:t,apply:b,init:h},count:{check:s,apply:c,init:0}},members:{_createChildControlImpl:function(x,w){var v;switch(x){case i:v=new qx.ui.basic.Label().set({allowGrowX:true,textColor:p,font:u});break;case g:v=new qx.ui.basic.Image(a);v.addListener(q,this._onTap,this);break;case n:v=new qx.ui.basic.Label().set({textColor:p,font:u});break;};return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);},_applyOpen:function(A,z){var y=a;if(A==false){y=l;};this.getChildControl(g).setSource(y);},_applyName:function(C,B){this.getChildControl(i).setValue(C);},_applyCount:function(E,D){this.getChildControl(n).setValue(j+E+k);},_onTap:function(event){this.toggleOpen();}}});})();(function(){var a="changeOpen",b="Boolean",c="changeCount",d="changeName",e="showcase.page.virtuallist.messenger.GroupModel",f="Friends",g="Integer",h="String";qx.Class.define(e,{extend:qx.core.Object,construct:function(name){qx.core.Object.call(this);if(name!==undefined){this.setName(name);};},properties:{name:{init:f,event:d,check:h},open:{check:b,init:true,event:a},count:{check:g,init:0,event:c}}});})();(function(){var a="User #",b="qooxdoo",c="Alexander Steitz",d=".png",e="kiss",f="changeStatus",g="Friends",h="icon/22/emotes/face-smile.png",j="away",k="embarrassed",l="showcase/virtuallist/imicons/christian_hagendorn.png",m="showcase/virtuallist/imicons/tino_butz.png",n="plain",o="smile-big",p="surprise",q="smile",r="raspberry",s="sad",t="showcase/virtuallist/imicons/martin_wittemann.png",u="offline",v="online",w="changeGroup",x="Tino Butz",y="String",z="showcase/virtuallist/imicons/tristan_koch.png",A="changeAvatar",B="Daniel Wagner",C="showcase.page.virtuallist.messenger.BuddyModel",D="(unnamed)",E="Andreas Ecker",F="busy",G="Christian Hagendorn",H="laugh",I="Thomas Herchenröder",J="changeName",K="angel",L="icon/22/emotes/face-",M="Tristan Koch",N="_applyEventPropagation",O="Martin Wittemann";qx.Class.define(C,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{name:{init:D,event:J,check:y,apply:N},avatar:{init:h,event:A,check:y,apply:N},status:{init:u,event:f,check:[j,F,v,u],apply:N},group:{init:g,event:w,check:y,apply:N}},statics:{createBuddies:function(Q){var R=[{name:c,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:E,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:O,img:t,statusIcon:this.getRandomStatus()},{name:I,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:B,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:G,img:l,statusIcon:this.getRandomStatus()},{name:x,img:m,statusIcon:this.getRandomStatus()},{name:M,img:z,statusIcon:this.getRandomStatus()}];for(var i=0;i<R.length;i++ ){R[i].group=b;};for(var i=R.length;i<Q;i++ ){R[i]={name:a+i,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus(),group:g};};var P=[];for(var i=0;i<R.length;i++ ){var S=new showcase.page.virtuallist.messenger.BuddyModel().set({name:R[i].name,avatar:R[i].img,status:R[i].statusIcon,group:R[i].group});P.push(S);};return new qx.data.Array(P);},getRandomBuddy:function(){var T=[K,k,e,H,n,r,s,o,q,p];return L+T[Math.floor(Math.random()*T.length)]+d;},getRandomStatus:function(){var U=[j,F,v,u];return U[Math.floor(Math.random()*U.length)];}}});})();
});