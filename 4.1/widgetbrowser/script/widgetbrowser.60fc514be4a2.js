qx.$$packageData['32770']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("32770", function() {
(function(){var a="splitbutton",b="hovered",c="Enter",d="pressed",f="changeShow",g="pointerover",h="Space",i="keydown",j="abandoned",k="both",l="button",m="execute",n="_applyMenu",o="arrow",p="String",q="icon",r="changeVisibility",s="keyup",t="qx.ui.menu.Menu",u="_applyIcon",v="label",w="_applyShow",x="changeMenu",y="_applyLabel",z="pointerout",A="qx.ui.form.SplitButton";qx.Class.define(A,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(E,C,B,D){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.HBox);this._createChildControl(o);this.addListener(g,this._onPointerOver,this,true);this.addListener(z,this._onPointerOut,this,true);this.addListener(i,this._onKeyDown);this.addListener(s,this._onKeyUp);if(E!=null){this.setLabel(E);};if(C!=null){this.setIcon(C);};if(B!=null){this.setMenu(B);};if(D!=null){this.setCommand(D);};},properties:{appearance:{refine:true,init:a},focusable:{refine:true,init:true},label:{apply:y,nullable:true,check:p},icon:{check:p,apply:u,nullable:true,themeable:true},show:{init:k,check:[k,v,q],themeable:true,inheritable:true,apply:w,event:f},menu:{check:t,nullable:true,apply:n,event:x}},members:{__vV:null,_createChildControlImpl:function(H,G){var F;switch(H){case l:F=new qx.ui.form.Button;F.addListener(m,this._onButtonExecute,this);F.setFocusable(false);this._addAt(F,0,{flex:1});break;case o:F=new qx.ui.form.MenuButton();F.setFocusable(false);F.setShow(k);this._addAt(F,1);break;};return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);},_forwardStates:{hovered:1,focused:1},_applyLabel:function(K,J){var I=this.getChildControl(l);K==null?I.resetLabel():I.setLabel(K);},_applyIcon:function(N,M){var L=this.getChildControl(l);N==null?L.resetIcon():L.setIcon(N);},_applyMenu:function(P,O){var Q=this.getChildControl(o);if(P){Q.resetEnabled();Q.setMenu(P);P.setOpener(this);P.addListener(r,this._onChangeMenuVisibility,this);}else {Q.setEnabled(false);Q.resetMenu();};if(O){O.removeListener(r,this._onChangeMenuVisibility,this);O.resetOpener();};},_applyShow:function(S,R){},_onPointerOver:function(e){e.stopPropagation();this.addState(b);delete this.__vV;},_onPointerOut:function(e){e.stopPropagation();if(!this.hasState(b)){return;};var U=e.getRelatedTarget();if(qx.ui.core.Widget.contains(this,U)){return;};var T=this.getMenu();if(T&&T.isVisible()){this.__vV=true;return;};this.removeState(b);},_onKeyDown:function(e){var V=this.getChildControl(l);switch(e.getKeyIdentifier()){case c:case h:V.removeState(j);V.addState(d);};},_onKeyUp:function(e){var W=this.getChildControl(l);switch(e.getKeyIdentifier()){case c:case h:if(W.hasState(d)){W.removeState(j);W.removeState(d);W.execute();};};},_onButtonExecute:function(e){this.execute();},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__vV){this.removeState(b);};}}});})();(function(){var a="qx.ui.form.RadioGroup",b="Boolean",c="menu-radiobutton",d="label",f="_applyValue",g="qx.ui.menu.RadioButton",h="value",i="changeValue",j="toolTipText",k="enabled",l="_applyGroup",m="checked",n="menu",o="execute";qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(q,p){qx.ui.menu.AbstractButton.call(this);if(q!=null){this.setLabel(q);};if(p!=null){this.setMenu(p);};this.addListener(o,this._onExecute,this);},properties:{appearance:{refine:true,init:c},value:{check:b,nullable:true,event:i,apply:f,init:false},group:{check:a,nullable:true,apply:l}},members:{_bindableProperties:[k,d,j,h,n],_applyValue:function(s,r){s?this.addState(m):this.removeState(m);},_applyGroup:function(u,t){if(t){t.remove(this);};if(u){u.add(this);};},_onExecute:function(e){var v=this.getGroup();if(v&&v.getAllowEmptySelection()){this.toggleValue();}else {this.setValue(true);};}}});})();
});