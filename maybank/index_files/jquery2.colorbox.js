(function(c,p,A){function g(a,e,da){a=p.createElement(a);e&&(a.id="cbox"+e);da&&(a.style.cssText=da);return c(a)}function Q(){return A.innerHeight?A.innerHeight:c(A).height()}function L(a,e){e!==Object(e)&&(e={});this.cache={};this.el=a;this.value=function(a){var b;void 0===this.cache[a]&&(b=c(this.el).attr("data-cbox-"+a),void 0!==b?this.cache[a]=b:void 0!==e[a]?this.cache[a]=e[a]:void 0!==R[a]&&(this.cache[a]=R[a]));return this.cache[a]};this.get=function(a){a=this.value(a);return c.isFunction(a)?
a.call(this.el,this):a}}function M(a){var e=k.length;a=(m+a)%e;return 0>a?e+a:a}function n(a,e){return Math.round((/%/.test(a)?("x"===e?w.width():Q())/100:1)*parseInt(a,10))}function ea(a,e){return a.get("photo")||a.get("photoRegex").test(e)}function fa(a,e){return a.get("retinaUrl")&&1<A.devicePixelRatio?e.replace(a.get("photoRegex"),a.get("retinaSuffix")):e}function ga(a){"contains"in f[0]&&!f[0].contains(a.target)&&a.target!==q[0]&&(a.stopPropagation(),f.focus())}function F(a){F.str!==a&&(f.add(q).removeClass(F.str).addClass(a),
F.str=a)}function ka(b){m=0;b&&!1!==b?(k=c(".cboxElement").filter(function(){var a=c.data(this,"colorbox");return(new L(this,a)).get("rel")===b}),m=k.index(a.el),-1===m&&(k=k.add(a.el),m=k.length-1)):k=c(a.el)}function C(a){c(p).trigger(a);r.triggerHandler(a)}function N(b){var e;if(!G){e=c(b).data("colorbox");a=new L(b,e);ka(a.get("rel"));if(!x){x=H=!0;F(a.get("className"));f.css({visibility:"hidden",display:"block",opacity:""});h=g("div","LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");
u.css({width:"",height:""}).append(h);t=S.height()+T.height()+u.outerHeight(!0)-u.height();v=U.width()+V.width()+u.outerWidth(!0)-u.width();y=h.outerHeight(!0);z=h.outerWidth(!0);b=n(a.get("initialWidth"),"x");e=n(a.get("initialHeight"),"y");var d=a.get("maxWidth"),B=a.get("maxHeight");a.w=(!1!==d?Math.min(b,n(d,"x")):b)-z-v;a.h=(!1!==B?Math.min(e,n(B,"y")):e)-y-t;h.css({width:"",height:a.h});l.position();C("cbox_open");a.get("onOpen");W.add(X).hide();f.focus();a.get("trapFocus")&&p.addEventListener&&
(p.addEventListener("focus",ga,!0),r.one("cbox_closed",function(){p.removeEventListener("focus",ga,!0)}));if(a.get("returnFocus"))r.one("cbox_closed",function(){c(a.el).focus()})}q.css({opacity:parseFloat(a.get("opacity"))||"",cursor:a.get("overlayClose")?"pointer":"",visibility:"visible"}).show();a.get("closeButton")?O.html(a.get("close")).appendTo(u):O.appendTo("<div/>");la()}}function ha(){!f&&p.body&&(Y=!1,w=c(A),f=g("div").attr({id:"colorbox","class":!1===c.support.opacity?"cboxIE":"",role:"dialog",
tabindex:"-1"}).hide(),q=g("div","Overlay").hide(),P=c([g("div","LoadingOverlay")[0],g("div","LoadingGraphic")[0]]),D=g("div","Wrapper"),u=g("div","Content").append(X=g("div","Title"),Z=g("div","Current"),I=c('<button type="button"/>').attr({id:"cboxPrevious"}),J=c('<button type="button"/>').attr({id:"cboxNext"}),E=g("button","Slideshow"),P),O=c('<button type="button"/>').attr({id:"cboxClose"}),D.append(g("div").append(g("div","TopLeft"),S=g("div","TopCenter"),g("div","TopRight")),g("div",!1,"clear:left").append(U=
g("div","MiddleLeft"),u,V=g("div","MiddleRight")),g("div",!1,"clear:left").append(g("div","BottomLeft"),T=g("div","BottomCenter"),g("div","BottomRight"))).find("div div").css({"float":"left"}),K=g("div",!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),W=J.add(I).add(Z).add(E),c(p.body).append(q,f.append(D,K)))}function ma(){function b(a){1<a.which||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey||(a.preventDefault(),N(this))}if(f){if(!Y)if(Y=!0,J.click(function(){l.next()}),
I.click(function(){l.prev()}),O.click(function(){l.close()}),q.click(function(){a.get("overlayClose")&&l.close()}),c(p).bind("keydown.cbox",function(b){var c=b.keyCode;x&&a.get("escKey")&&27===c&&(b.preventDefault(),l.close());x&&a.get("arrowKey")&&k[1]&&!b.altKey&&(37===c?(b.preventDefault(),I.click()):39===c&&(b.preventDefault(),J.click()))}),c.isFunction(c.fn.on))c(p).on("click.cbox",".cboxElement",b);else c(".cboxElement").live("click.cbox",b);return!0}return!1}function la(){var b,e,f=l.prep,
B,h=++aa;H=!0;d=!1;C("cbox_purge");C("cbox_load");a.get("onLoad");a.h=a.get("height")?n(a.get("height"),"y")-y-t:a.get("innerHeight")&&n(a.get("innerHeight"),"y");a.w=a.get("width")?n(a.get("width"),"x")-z-v:a.get("innerWidth")&&n(a.get("innerWidth"),"x");a.mw=a.w;a.mh=a.h;a.get("maxWidth")&&(a.mw=n(a.get("maxWidth"),"x")-z-v,a.mw=a.w&&a.w<a.mw?a.w:a.mw);a.get("maxHeight")&&(a.mh=n(a.get("maxHeight"),"y")-y-t,a.mh=a.h&&a.h<a.mh?a.h:a.mh);b=a.get("href");ia=setTimeout(function(){P.show()},100);if(a.get("inline")){var ba=
c(b);B=c("<div>").hide().insertBefore(ba);r.one("cbox_purge",function(){B.replaceWith(ba)});f(ba)}else a.get("iframe")?f(" "):a.get("html")?f(a.get("html")):ea(a,b)?(b=fa(a,b),d=new Image,c(d).addClass("cboxPhoto").bind("error",function(){f(g("div","Error").html(a.get("imgError")))}).one("load",function(){h===aa&&setTimeout(function(){var b;c.each(["alt","longdesc","aria-describedby"],function(b,e){var f=c(a.el).attr(e)||c(a.el).attr("data-"+e);f&&d.setAttribute(e,f)});a.get("retinaImage")&&1<A.devicePixelRatio&&
(d.height/=A.devicePixelRatio,d.width/=A.devicePixelRatio);a.get("scalePhotos")&&(e=function(){d.height-=d.height*b;d.width-=d.width*b},a.mw&&d.width>a.mw&&(b=(d.width-a.mw)/d.width,e()),a.mh&&d.height>a.mh&&(b=(d.height-a.mh)/d.height,e()));a.h&&(d.style.marginTop=Math.max(a.mh-d.height,0)/2+"px");k[1]&&(a.get("loop")||k[m+1])&&(d.style.cursor="pointer",d.onclick=function(){l.next()});d.style.width=d.width+"px";d.style.height=d.height+"px";f(d)},1)}),d.src=b):b&&K.load(b,a.get("data"),function(b,
e){h===aa&&f("error"===e?g("div","Error").html(a.get("xhrError")):c(this).contents())})}var R={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,
slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},
href:function(){return c(this).attr("href")},title:function(){return this.title}},q,f,D,u,S,U,V,T,k,w,h,K,P,X,Z,E,J,I,O,W,r=c("<a/>"),a,t,v,y,z,m,d,x,H,G,ia,l,aa=0,ja={},Y,na=function(){function b(){clearTimeout(n)}function c(){if(a.get("loop")||k[m+1])b(),n=setTimeout(l.next,a.get("slideshowSpeed"))}function d(){E.html(a.get("slideshowStop")).unbind("click.cbox").one("click.cbox",B);r.bind("cbox_complete",c).bind("cbox_load",b);f.removeClass("cboxSlideshow_off").addClass("cboxSlideshow_on")}function B(){b();
r.unbind("cbox_complete",c).unbind("cbox_load",b);E.html(a.get("slideshowStart")).unbind("click.cbox").one("click.cbox",function(){l.next();d()});f.removeClass("cboxSlideshow_on").addClass("cboxSlideshow_off")}function g(){h=!1;E.hide();b();r.unbind("cbox_complete",c).unbind("cbox_load",b);f.removeClass("cboxSlideshow_off cboxSlideshow_on")}var h,n;return function(){h?a.get("slideshow")||(r.unbind("cbox_cleanup",g),g()):a.get("slideshow")&&k[1]&&(h=!0,r.one("cbox_cleanup",g),a.get("slideshowAuto")?
d():B(),E.show())}}();c.colorbox||(c(ha),l=c.fn.colorbox=c.colorbox=function(a,e){var f,d=this;a=a||{};if(c.isFunction(d))d=c("<a/>"),a.open=!0;else if(!d[0])return d;if(!d[0])return d;ha();ma()&&(e&&(a.onComplete=e),d.each(function(){var d=c.data(this,"colorbox")||{};c.data(this,"colorbox",c.extend(d,a))}).addClass("cboxElement"),f=new L(d[0],a),f.get("open")&&N(d[0]));return d},l.position=function(b,d){function g(){S[0].style.width=T[0].style.width=u[0].style.width=parseInt(f[0].style.width,10)-
v+"px";u[0].style.height=U[0].style.height=V[0].style.height=parseInt(f[0].style.height,10)-t+"px"}var h,k=0,m=0,p=f.offset(),ca,r;w.unbind("resize.cbox");f.css({top:-9E4,left:-9E4});ca=w.scrollTop();r=w.scrollLeft();a.get("fixed")?(p.top-=ca,p.left-=r,f.css({position:"fixed"})):(k=ca,m=r,f.css({position:"absolute"}));m=!1!==a.get("right")?m+Math.max(w.width()-a.w-z-v-n(a.get("right"),"x"),0):!1!==a.get("left")?m+n(a.get("left"),"x"):m+Math.round(Math.max(w.width()-a.w-z-v,0)/2);k=!1!==a.get("bottom")?
k+Math.max(Q()-a.h-y-t-n(a.get("bottom"),"y"),0):!1!==a.get("top")?k+n(a.get("top"),"y"):k+Math.round(Math.max(Q()-a.h-y-t,0)/2);f.css({top:p.top,left:p.left,visibility:"visible"});D[0].style.width=D[0].style.height="9999px";h={width:a.w+z+v,height:a.h+y+t,top:k,left:m};if(b){var q=0;c.each(h,function(a){h[a]!==ja[a]&&(q=b)});b=q}ja=h;b||f.css(h);f.dequeue().animate(h,{duration:b||0,complete:function(){g();H=!1;D[0].style.width=a.w+z+v+"px";D[0].style.height=a.h+y+t+"px";a.get("reposition")&&setTimeout(function(){w.bind("resize.cbox",
l.position)},1);d&&d()},step:g})},l.resize=function(b){var c;x&&(b=b||{},b.width&&(a.w=n(b.width,"x")-z-v),b.innerWidth&&(a.w=n(b.innerWidth,"x")),h.css({width:a.w}),b.height&&(a.h=n(b.height,"y")-y-t),b.innerHeight&&(a.h=n(b.innerHeight,"y")),b.innerHeight||b.height||(c=h.scrollTop(),h.css({height:"auto"}),a.h=h.height()),h.css({height:a.h}),c&&h.scrollTop(c),l.position("none"===a.get("transition")?0:a.get("speed")))},l.prep=function(b){function e(){a.w=a.w||h.width();a.w=a.mw&&a.mw<a.w?a.mw:a.w;
return a.w}function n(){a.h=a.h||h.height();a.h=a.mh&&a.mh<a.h?a.mh:a.h;return a.h}if(x){var q,t="none"===a.get("transition")?0:a.get("speed");h.remove();h=g("div","LoadedContent").append(b);h.hide().appendTo(K.show()).css({width:e(),overflow:a.get("scrolling")?"auto":"hidden"}).css({height:n()}).prependTo(u);K.hide();c(d).css({"float":"none"});F(a.get("className"));q=function(){function b(){!1===c.support.opacity&&f[0].style.removeAttribute("filter")}var d=k.length,e,g;x&&(g=function(){clearTimeout(ia);
P.hide();C("cbox_complete");a.get("onComplete")},X.html(a.get("title")).show(),h.show(),1<d?("string"===typeof a.get("current")&&Z.html(a.get("current").replace("{current}",m+1).replace("{total}",d)).show(),J[a.get("loop")||m<d-1?"show":"hide"]().html(a.get("next")),I[a.get("loop")||m?"show":"hide"]().html(a.get("previous")),na(),a.get("preloading")&&c.each([M(-1),M(1)],function(){var a,b=k[this];a=new L(b,c.data(b,"colorbox"));(b=a.get("href"))&&ea(a,b)&&(b=fa(a,b),a=p.createElement("img"),a.src=
b)})):W.hide(),a.get("iframe")?(e=p.createElement("iframe"),"frameBorder"in e&&(e.frameBorder=0),"allowTransparency"in e&&(e.allowTransparency="true"),a.get("scrolling")||(e.scrolling="no"),c(e).attr({src:a.get("href"),name:(new Date).getTime(),"class":"cboxIframe",allowFullScreen:!0}).one("load",g).appendTo(h),r.one("cbox_purge",function(){e.src="//about:blank"}),a.get("fastIframe")&&c(e).trigger("load")):g(),"fade"===a.get("transition")?f.fadeTo(t,1,b):b())};"fade"===a.get("transition")?f.fadeTo(t,
0,function(){l.position(0,q)}):l.position(t,q)}},l.next=function(){!H&&k[1]&&(a.get("loop")||k[m+1])&&(m=M(1),N(k[m]))},l.prev=function(){!H&&k[1]&&(a.get("loop")||m)&&(m=M(-1),N(k[m]))},l.close=function(){x&&!G&&(G=!0,x=!1,C("cbox_cleanup"),a.get("onCleanup"),w.unbind(".cbox"),q.fadeTo(a.get("fadeOut")||0,0),f.stop().fadeTo(a.get("fadeOut")||0,0,function(){f.hide();q.hide();C("cbox_purge");h.remove();setTimeout(function(){G=!1;C("cbox_closed");a.get("onClosed")},1)}))},l.remove=function(){f&&(f.stop(),
c.colorbox.close(),f.stop().remove(),q.remove(),G=!1,f=null,c(".cboxElement").removeData("colorbox").removeClass("cboxElement"),c(p).unbind("click.cbox"))},l.element=function(){return c(a.el)},l.settings=R)})(jQuery,document,window);