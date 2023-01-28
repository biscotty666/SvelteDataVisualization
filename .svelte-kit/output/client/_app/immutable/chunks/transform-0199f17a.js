const rn=Math.PI,an=2*rn,Z=1e-6,fn=an-Z;function cn(n){this._+=n[0];for(let t=1,s=n.length;t<s;++t)this._+=arguments[t]+n[t]}function pn(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return cn;const s=10**t;return function(e){this._+=e[0];for(let o=1,l=e.length;o<l;++o)this._+=Math.round(arguments[o]*s)/s+e[o]}}class yn{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?cn:pn(t)}moveTo(t,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+s}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,s){this._append`L${this._x1=+t},${this._y1=+s}`}quadraticCurveTo(t,s,e,o){this._append`Q${+t},${+s},${this._x1=+e},${this._y1=+o}`}bezierCurveTo(t,s,e,o,l,$){this._append`C${+t},${+s},${+e},${+o},${this._x1=+l},${this._y1=+$}`}arcTo(t,s,e,o,l){if(t=+t,s=+s,e=+e,o=+o,l=+l,l<0)throw new Error(`negative radius: ${l}`);let $=this._x1,h=this._y1,_=e-t,u=o-s,i=$-t,y=h-s,r=i*i+y*y;if(this._x1===null)this._append`M${this._x1=t},${this._y1=s}`;else if(r>Z)if(!(Math.abs(y*_-u*i)>Z)||!l)this._append`L${this._x1=t},${this._y1=s}`;else{let f=e-$,d=o-h,g=_*_+u*u,q=f*f+d*d,p=Math.sqrt(g),v=Math.sqrt(r),x=l*Math.tan((rn-Math.acos((g+r-q)/(2*p*v)))/2),M=x/v,T=x/p;Math.abs(M-1)>Z&&this._append`L${t+M*i},${s+M*y}`,this._append`A${l},${l},0,0,${+(y*f>i*d)},${this._x1=t+T*_},${this._y1=s+T*u}`}}arc(t,s,e,o,l,$){if(t=+t,s=+s,e=+e,$=!!$,e<0)throw new Error(`negative radius: ${e}`);let h=e*Math.cos(o),_=e*Math.sin(o),u=t+h,i=s+_,y=1^$,r=$?o-l:l-o;this._x1===null?this._append`M${u},${i}`:(Math.abs(this._x1-u)>Z||Math.abs(this._y1-i)>Z)&&this._append`L${u},${i}`,e&&(r<0&&(r=r%an+an),r>fn?this._append`A${e},${e},0,1,${y},${t-h},${s-_}A${e},${e},0,1,${y},${this._x1=u},${this._y1=i}`:r>Z&&this._append`A${e},${e},0,${+(r>=rn)},${y},${this._x1=t+e*Math.cos(l)},${this._y1=s+e*Math.sin(l)}`)}rect(t,s,e,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+s}h${e=+e}v${+o}h${-e}Z`}toString(){return this._}}function C(n){return function(){return n}}const on=Math.abs,m=Math.atan2,S=Math.cos,dn=Math.max,sn=Math.min,E=Math.sin,O=Math.sqrt,A=1e-12,j=Math.PI,N=j/2,$n=2*j;function gn(n){return n>1?0:n<-1?j:Math.acos(n)}function ln(n){return n>=1?N:n<=-1?-N:Math.asin(n)}function _n(n){let t=3;return n.digits=function(s){if(!arguments.length)return t;if(s==null)t=null;else{const e=Math.floor(s);if(!(e>=0))throw new RangeError(`invalid digits: ${s}`);t=e}return n},()=>new yn(t)}function xn(n){return n.innerRadius}function mn(n){return n.outerRadius}function vn(n){return n.startAngle}function Mn(n){return n.endAngle}function An(n){return n&&n.padAngle}function Tn(n,t,s,e,o,l,$,h){var _=s-n,u=e-t,i=$-o,y=h-l,r=y*_-i*u;if(!(r*r<A))return r=(i*(t-l)-y*(n-o))/r,[n+r*_,t+r*u]}function K(n,t,s,e,o,l,$){var h=n-s,_=t-e,u=($?l:-l)/O(h*h+_*_),i=u*_,y=-u*h,r=n+i,f=t+y,d=s+i,g=e+y,q=(r+d)/2,p=(f+g)/2,v=d-r,x=g-f,M=v*v+x*x,T=o-l,w=r*g-d*f,L=(x<0?-1:1)*O(dn(0,T*T*M-w*w)),X=(w*x-v*L)/M,Y=(-w*v-x*L)/M,P=(w*x+v*L)/M,R=(-w*v+x*L)/M,k=X-q,a=Y-p,c=P-q,I=R-p;return k*k+a*a>c*c+I*I&&(X=P,Y=R),{cx:X,cy:Y,x01:-i,y01:-y,x11:X*(o/T-1),y11:Y*(o/T-1)}}function Rn(){var n=xn,t=mn,s=C(0),e=null,o=vn,l=Mn,$=An,h=null,_=_n(u);function u(){var i,y,r=+n.apply(this,arguments),f=+t.apply(this,arguments),d=o.apply(this,arguments)-N,g=l.apply(this,arguments)-N,q=on(g-d),p=g>d;if(h||(h=i=_()),f<r&&(y=f,f=r,r=y),!(f>A))h.moveTo(0,0);else if(q>$n-A)h.moveTo(f*S(d),f*E(d)),h.arc(0,0,f,d,g,!p),r>A&&(h.moveTo(r*S(g),r*E(g)),h.arc(0,0,r,g,d,p));else{var v=d,x=g,M=d,T=g,w=q,L=q,X=$.apply(this,arguments)/2,Y=X>A&&(e?+e.apply(this,arguments):O(r*r+f*f)),P=sn(on(f-r)/2,+s.apply(this,arguments)),R=P,k=P,a,c;if(Y>A){var I=ln(Y/r*E(X)),B=ln(Y/f*E(X));(w-=I*2)>A?(I*=p?1:-1,M+=I,T-=I):(w=0,M=T=(d+g)/2),(L-=B*2)>A?(B*=p?1:-1,v+=B,x-=B):(L=0,v=x=(d+g)/2)}var z=f*S(v),D=f*E(v),F=r*S(T),G=r*E(T);if(P>A){var H=f*S(x),J=f*E(x),U=r*S(M),V=r*E(M),b;if(q<j)if(b=Tn(z,D,U,V,H,J,F,G)){var W=z-b[0],nn=D-b[1],tn=H-b[0],en=J-b[1],hn=1/E(gn((W*tn+nn*en)/(O(W*W+nn*nn)*O(tn*tn+en*en)))/2),un=O(b[0]*b[0]+b[1]*b[1]);R=sn(P,(r-un)/(hn-1)),k=sn(P,(f-un)/(hn+1))}else R=k=0}L>A?k>A?(a=K(U,V,z,D,f,k,p),c=K(H,J,F,G,f,k,p),h.moveTo(a.cx+a.x01,a.cy+a.y01),k<P?h.arc(a.cx,a.cy,k,m(a.y01,a.x01),m(c.y01,c.x01),!p):(h.arc(a.cx,a.cy,k,m(a.y01,a.x01),m(a.y11,a.x11),!p),h.arc(0,0,f,m(a.cy+a.y11,a.cx+a.x11),m(c.cy+c.y11,c.cx+c.x11),!p),h.arc(c.cx,c.cy,k,m(c.y11,c.x11),m(c.y01,c.x01),!p))):(h.moveTo(z,D),h.arc(0,0,f,v,x,!p)):h.moveTo(z,D),!(r>A)||!(w>A)?h.lineTo(F,G):R>A?(a=K(F,G,H,J,r,-R,p),c=K(z,D,U,V,r,-R,p),h.lineTo(a.cx+a.x01,a.cy+a.y01),R<P?h.arc(a.cx,a.cy,R,m(a.y01,a.x01),m(c.y01,c.x01),!p):(h.arc(a.cx,a.cy,R,m(a.y01,a.x01),m(a.y11,a.x11),!p),h.arc(0,0,r,m(a.cy+a.y11,a.cx+a.x11),m(c.cy+c.y11,c.cx+c.x11),p),h.arc(c.cx,c.cy,R,m(c.y11,c.x11),m(c.y01,c.x01),!p))):h.arc(0,0,r,T,M,p)}if(h.closePath(),i)return h=null,i+""||null}return u.centroid=function(){var i=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,y=(+o.apply(this,arguments)+ +l.apply(this,arguments))/2-j/2;return[S(y)*i,E(y)*i]},u.innerRadius=function(i){return arguments.length?(n=typeof i=="function"?i:C(+i),u):n},u.outerRadius=function(i){return arguments.length?(t=typeof i=="function"?i:C(+i),u):t},u.cornerRadius=function(i){return arguments.length?(s=typeof i=="function"?i:C(+i),u):s},u.padRadius=function(i){return arguments.length?(e=i==null?null:typeof i=="function"?i:C(+i),u):e},u.startAngle=function(i){return arguments.length?(o=typeof i=="function"?i:C(+i),u):o},u.endAngle=function(i){return arguments.length?(l=typeof i=="function"?i:C(+i),u):l},u.padAngle=function(i){return arguments.length?($=typeof i=="function"?i:C(+i),u):$},u.context=function(i){return arguments.length?(h=i??null,u):h},u}function Q(n,t,s){this.k=n,this.x=t,this.y=s}Q.prototype={constructor:Q,scale:function(n){return n===1?this:new Q(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new Q(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Q(1,0,0);Q.prototype;export{Rn as a};