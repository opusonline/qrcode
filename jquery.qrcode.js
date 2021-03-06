/*!------------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//	http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//	http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//-----------------------------------------------------------------------*/
var qrcode=function(){var n=function(B,r){var J=236;var I=17;var v=B;var x=i[r];var t=null;var E=0;var p=null;var z=[];var F={};var C=function(L,K){E=v*4+17;t=function(P){var N=new Array(P);for(var O=0;O<P;O+=1){N[O]=new Array(P);for(var M=0;M<P;M+=1){N[O][M]=null}}return N}(E);y(0,0);y(E-7,0);y(0,E-7);A();q();H(L,K);if(v>=7){w(L)}if(p==null){p=s(v,x,z)}D(p,K)};var y=function(M,K){for(var L=-1;L<=7;L+=1){if(M+L<=-1||E<=M+L){continue}for(var N=-1;N<=7;N+=1){if(K+N<=-1||E<=K+N){continue}if((0<=L&&L<=6&&(N==0||N==6))||(0<=N&&N<=6&&(L==0||L==6))||(2<=L&&L<=4&&2<=N&&N<=4)){t[M+L][K+N]=true}else{t[M+L][K+N]=false}}}};var u=function(){var N=0;var M=0;for(var L=0;L<8;L+=1){C(true,L);var K=h.getLostPoint(F);if(L==0||N>K){N=K;M=L}}return M};var q=function(){for(var K=8;K<E-8;K+=1){if(t[K][6]!=null){continue}t[K][6]=(K%2==0)}for(var L=8;L<E-8;L+=1){if(t[6][L]!=null){continue}t[6][L]=(L%2==0)}};var A=function(){var Q=h.getPatternPosition(v);for(var M=0;M<Q.length;M+=1){for(var L=0;L<Q.length;L+=1){var O=Q[M];var K=Q[L];if(t[O][K]!=null){continue}for(var N=-2;N<=2;N+=1){for(var P=-2;P<=2;P+=1){if(N==-2||N==2||P==-2||P==2||(N==0&&P==0)){t[O+N][K+P]=true}else{t[O+N][K+P]=false}}}}}};var w=function(N){var M=h.getBCHTypeNumber(v);for(var L=0;L<18;L+=1){var K=(!N&&((M>>L)&1)==1);t[Math.floor(L/3)][L%3+E-8-3]=K}for(var L=0;L<18;L+=1){var K=(!N&&((M>>L)&1)==1);t[L%3+E-8-3][Math.floor(L/3)]=K}};var H=function(P,O){var N=(x<<3)|O;var M=h.getBCHTypeInfo(N);for(var L=0;L<15;L+=1){var K=(!P&&((M>>L)&1)==1);if(L<6){t[L][8]=K}else{if(L<8){t[L+1][8]=K}else{t[E-15+L][8]=K}}}for(var L=0;L<15;L+=1){var K=(!P&&((M>>L)&1)==1);if(L<8){t[8][E-L-1]=K}else{if(L<9){t[8][15-L-1+1]=K}else{t[8][15-L-1]=K}}}t[E-8][8]=(!P)};var D=function(P,L){var N=-1;var U=E-1;var O=7;var K=0;var S=h.getMaskFunction(L);for(var M=E-1;M>0;M-=2){if(M==6){M-=1}while(true){for(var R=0;R<2;R+=1){if(t[U][M-R]==null){var Q=false;if(K<P.length){Q=(((P[K]>>>O)&1)==1)}var T=S(U,M-R);if(T){Q=!Q}t[U][M-R]=Q;O-=1;if(O==-1){K+=1;O=7}}}U+=N;if(U<0||E<=U){U-=N;N=-N;break}}}};var G=function(U,X){var M=0;var aa=0;var Y=0;var L=new Array(X.length);var P=new Array(X.length);for(var S=0;S<X.length;S+=1){var T=X[S].dataCount;var K=X[S].totalCount-T;aa=Math.max(aa,T);Y=Math.max(Y,K);L[S]=new Array(T);for(var V=0;V<L[S].length;V+=1){L[S][V]=255&U.getBuffer()[V+M]}M+=T;var Q=h.getErrorCorrectPolynomial(K);var Z=e(L[S],Q.getLength()-1);var N=Z.mod(Q);P[S]=new Array(Q.getLength()-1);for(var V=0;V<P[S].length;V+=1){var R=V+N.getLength()-P[S].length;P[S][V]=(R>=0)?N.get(R):0}}var W=0;for(var V=0;V<X.length;V+=1){W+=X[V].totalCount}var ab=new Array(W);var O=0;for(var V=0;V<aa;V+=1){for(var S=0;S<X.length;S+=1){if(V<L[S].length){ab[O]=L[S][V];O+=1}}}for(var V=0;V<Y;V+=1){for(var S=0;S<X.length;S+=1){if(V<P[S].length){ab[O]=P[S][V];O+=1}}}return ab};var s=function(R,Q,N){var L=g.getRSBlocks(R,Q);var K=f();for(var M=0;M<N.length;M+=1){var P=N[M];K.put(P.getMode(),4);K.put(P.getLength(),h.getLengthInBits(P.getMode(),R));P.write(K)}var O=0;for(var M=0;M<L.length;M+=1){O+=L[M].dataCount}if(K.getLengthInBits()>O*8){throw new Error("code length overflow. ("+K.getLengthInBits()+">"+O*8+")")}if(K.getLengthInBits()+4<=O*8){K.put(0,4)}while(K.getLengthInBits()%8!=0){K.putBit(false)}while(true){if(K.getLengthInBits()>=O*8){break}K.put(J,8);if(K.getLengthInBits()>=O*8){break}K.put(I,8)}return G(K,L)};F.addData=function(L){var K=m(L);z.push(K);p=null};F.isDark=function(L,K){if(L<0||E<=L||K<0||E<=K){throw new Error(L+","+K)}return t[L][K]};F.getModuleCount=function(){return E};F.make=function(){C(false,u())};F.createTableTag=function(O,M){O=O||2;M=(typeof M=="undefined")?O*4:M;var K="";K+='<table style="';K+=" border-width: 0px; border-style: none;";K+=" border-collapse: collapse;";K+=" padding: 0px; margin: "+M+"px;";K+='">';K+="<tbody>";for(var L=0;L<F.getModuleCount();L+=1){K+="<tr>";for(var N=0;N<F.getModuleCount();N+=1){K+='<td style="';K+=" border-width: 0px; border-style: none;";K+=" border-collapse: collapse;";K+=" padding: 0px; margin: 0px;";K+=" width: "+O+"px;";K+=" height: "+O+"px;";K+=" background-color: ";K+=F.isDark(L,N)?"#000000":"#ffffff";K+=";";K+='"/>'}K+="</tr>"}K+="</tbody>";K+="</table>";return K};F.createImgTag=function(O,N){O=O||2;N=(typeof N=="undefined")?O*4:N;var M=F.getModuleCount()*O+N*2;var L=N;var K=M-N;return d(M,M,function(P,S){if(L<=P&&P<K&&L<=S&&S<K){var R=Math.floor((P-L)/O);var Q=Math.floor((S-L)/O);return F.isDark(Q,R)?0:1}else{return 1}})};return F};n.stringToBytes=function(r){var p=[];for(var q=0;q<r.length;q+=1){var t=r.charCodeAt(q);p.push(t&255)}return p};n.createStringToBytes=function(s,r){var q=function(){var D=a(s);var t=function(){var v=D.read();if(v==-1){throw new Error()}return v};var w=0;var x={};while(true){var B=D.read();if(B==-1){break}var A=t();var z=t();var y=t();var u=String.fromCharCode((B<<8)|A);var C=(z<<8)|y;x[u]=C;w+=1}if(w!=r){throw new Error(w+" != "+r)}return x}();var p="?".charCodeAt(0);return function(w){var u=[];for(var v=0;v<w.length;v+=1){var x=w.charCodeAt(v);if(x<128){u.push(x)}else{var t=q[w.charAt(v)];if(typeof t=="number"){if((t&255)==t){u.push(t)}else{u.push(t>>>8);u.push(t&255)}}else{u.push(p)}}}return u}};var j={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var i={L:1,M:0,Q:3,H:2};var c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var h=function(){var s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];var p=(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0);var u=(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0);var r=(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1);var t={};var q=function(v){var w=0;while(v!=0){w+=1;v>>>=1}return w};t.getBCHTypeInfo=function(v){var w=v<<10;while(q(w)-q(p)>=0){w^=(p<<(q(w)-q(p)))}return((v<<10)|w)^r};t.getBCHTypeNumber=function(v){var w=v<<12;while(q(w)-q(u)>=0){w^=(u<<(q(w)-q(u)))}return(v<<12)|w};t.getPatternPosition=function(v){return s[v-1]};t.getMaskFunction=function(v){switch(v){case c.PATTERN000:return function(x,w){return(x+w)%2==0};case c.PATTERN001:return function(x,w){return x%2==0};case c.PATTERN010:return function(x,w){return w%3==0};case c.PATTERN011:return function(x,w){return(x+w)%3==0};case c.PATTERN100:return function(x,w){return(Math.floor(x/2)+Math.floor(w/3))%2==0};case c.PATTERN101:return function(x,w){return(x*w)%2+(x*w)%3==0};case c.PATTERN110:return function(x,w){return((x*w)%2+(x*w)%3)%2==0};case c.PATTERN111:return function(x,w){return((x*w)%3+(x+w)%2)%2==0};default:throw new Error("bad maskPattern:"+v)}};t.getErrorCorrectPolynomial=function(w){var v=e([1],0);for(var x=0;x<w;x+=1){v=v.multiply(e([1,o.gexp(x)],0))}return v};t.getLengthInBits=function(w,v){if(1<=v&&v<10){switch(w){case j.MODE_NUMBER:return 10;case j.MODE_ALPHA_NUM:return 9;case j.MODE_8BIT_BYTE:return 8;case j.MODE_KANJI:return 8;default:throw new Error("mode:"+w)}}else{if(v<27){switch(w){case j.MODE_NUMBER:return 12;case j.MODE_ALPHA_NUM:return 11;case j.MODE_8BIT_BYTE:return 16;case j.MODE_KANJI:return 10;default:throw new Error("mode:"+w)}}else{if(v<41){switch(w){case j.MODE_NUMBER:return 14;case j.MODE_ALPHA_NUM:return 13;case j.MODE_8BIT_BYTE:return 16;case j.MODE_KANJI:return 12;default:throw new Error("mode:"+w)}}else{throw new Error("type:"+v)}}}};t.getLostPoint=function(E){var x=E.getModuleCount();var y=0;for(var G=0;G<x;G+=1){for(var w=0;w<x;w+=1){var D=0;var C=E.isDark(G,w);for(var v=-1;v<=1;v+=1){if(G+v<0||x<=G+v){continue}for(var B=-1;B<=1;B+=1){if(w+B<0||x<=w+B){continue}if(v==0&&B==0){continue}if(C==E.isDark(G+v,w+B)){D+=1}}}if(D>5){y+=(3+D-5)}}}for(var G=0;G<x-1;G+=1){for(var w=0;w<x-1;w+=1){var z=0;if(E.isDark(G,w)){z+=1}if(E.isDark(G+1,w)){z+=1}if(E.isDark(G,w+1)){z+=1}if(E.isDark(G+1,w+1)){z+=1}if(z==0||z==4){y+=3}}}for(var G=0;G<x;G+=1){for(var w=0;w<x-6;w+=1){if(E.isDark(G,w)&&!E.isDark(G,w+1)&&E.isDark(G,w+2)&&E.isDark(G,w+3)&&E.isDark(G,w+4)&&!E.isDark(G,w+5)&&E.isDark(G,w+6)){y+=40}}}for(var w=0;w<x;w+=1){for(var G=0;G<x-6;G+=1){if(E.isDark(G,w)&&!E.isDark(G+1,w)&&E.isDark(G+2,w)&&E.isDark(G+3,w)&&E.isDark(G+4,w)&&!E.isDark(G+5,w)&&E.isDark(G+6,w)){y+=40}}}var F=0;for(var w=0;w<x;w+=1){for(var G=0;G<x;G+=1){if(E.isDark(G,w)){F+=1}}}var A=Math.abs(100*F/x/x-50)/5;y+=A*10;return y};return t}();var o=function(){var p=new Array(256);var r=new Array(256);for(var q=0;q<8;q+=1){p[q]=1<<q}for(var q=8;q<256;q+=1){p[q]=p[q-4]^p[q-5]^p[q-6]^p[q-8]}for(var q=0;q<255;q+=1){r[p[q]]=q}var s={};s.glog=function(t){if(t<1){throw new Error("glog("+t+")")}return r[t]};s.gexp=function(t){while(t<0){t+=255}while(t>=256){t-=255}return p[t]};return s}();function e(q,p){if(typeof q.length=="undefined"){throw new Error(q.length+"/"+p)}var r=function(){var v=0;while(v<q.length&&q[v]==0){v+=1}var u=new Array(q.length-v+p);for(var t=0;t<q.length-v;t+=1){u[t]=q[t+v]}return u}();var s={};s.get=function(t){return r[t]};s.getLength=function(){return r.length};s.multiply=function(w){var u=new Array(s.getLength()+w.getLength()-1);for(var v=0;v<s.getLength();v+=1){for(var t=0;t<w.getLength();t+=1){u[v+t]^=o.gexp(o.glog(s.get(v))+o.glog(w.get(t)))}}return e(u,0)};s.mod=function(w){if(s.getLength()-w.getLength()<0){return s}var v=o.glog(s.get(0))-o.glog(w.get(0));var t=new Array(s.getLength());for(var u=0;u<s.getLength();u+=1){t[u]=s.get(u)}for(var u=0;u<w.getLength();u+=1){t[u]^=o.gexp(o.glog(w.get(u))+v)}return e(t,0).mod(w)};return s}var g=function(){var q=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16]];var p=function(t,u){var v={};v.totalCount=t;v.dataCount=u;return v};var s={};var r=function(u,t){switch(t){case i.L:return q[(u-1)*4+0];case i.M:return q[(u-1)*4+1];case i.Q:return q[(u-1)*4+2];case i.H:return q[(u-1)*4+3];default:return undefined}};s.getRSBlocks=function(v,B){var u=r(v,B);if(typeof u=="undefined"){throw new Error("bad rs block @ typeNumber:"+v+"/errorCorrectLevel:"+B)}var t=u.length/3;var z=[];for(var x=0;x<t;x+=1){var y=u[x*3+0];var C=u[x*3+1];var A=u[x*3+2];for(var w=0;w<y;w+=1){z.push(p(C,A))}}return z};return s}();var f=function(){var p=[];var r=0;var q={};q.getBuffer=function(){return p};q.get=function(s){var t=Math.floor(s/8);return((p[t]>>>(7-s%8))&1)==1};q.put=function(s,u){for(var t=0;t<u;t+=1){q.putBit(((s>>>(u-t-1))&1)==1)}};q.getLengthInBits=function(){return r};q.putBit=function(t){var s=Math.floor(r/8);if(p.length<=s){p.push(0)}if(t){p[s]|=(128>>>(r%8))}r+=1};return q};var m=function(s){var r=j.MODE_8BIT_BYTE;var p=s;var q=n.stringToBytes(s);var t={};t.getMode=function(){return r};t.getLength=function(u){return q.length};t.write=function(u){for(var v=0;v<q.length;v+=1){u.put(q[v],8)}};return t};var k=function(){var p=[];var q={};q.writeByte=function(r){p.push(r&255)};q.writeShort=function(r){q.writeByte(r);q.writeByte(r>>>8)};q.writeBytes=function(s,u,r){u=u||0;r=r||s.length;for(var t=0;t<r;t+=1){q.writeByte(s[t+u])}};q.writeString=function(t){for(var r=0;r<t.length;r+=1){q.writeByte(t.charCodeAt(r))}};q.toByteArray=function(){return p};q.toString=function(){var t="";t+="[";for(var r=0;r<p.length;r+=1){if(r>0){t+=","}t+=p[r]}t+="]";return t};return q};var b=function(){var q=0;var t=0;var v=0;var p="";var u={};var s=function(w){p+=String.fromCharCode(r(w&63))};var r=function(w){if(w<0){}else{if(w<26){return 65+w}else{if(w<52){return 97+(w-26)}else{if(w<62){return 48+(w-52)}else{if(w==62){return 43}else{if(w==63){return 47}}}}}}throw new Error("n:"+w)};u.writeByte=function(w){q=(q<<8)|(w&255);t+=8;v+=1;while(t>=6){s(q>>>(t-6));t-=6}};u.flush=function(){if(t>0){s(q<<(6-t));q=0;t=0}if(v%3!=0){var x=3-v%3;for(var w=0;w<x;w+=1){p+="="}}};u.toString=function(){return p};return u};var a=function(t){var v=t;var p=0;var q=0;var r=0;var u={};u.read=function(){while(r<8){if(p>=v.length){if(r==0){return -1}throw new Error("unexpected end of file./"+r)}var x=v.charAt(p);p+=1;if(x=="="){r=0;return -1}else{if(x.match(/^\s$/)){continue}}q=(q<<6)|s(x.charCodeAt(0));r+=6}var w=(q>>>(r-8))&255;r-=8;return w};var s=function(w){if(65<=w&&w<=90){return w-65}else{if(97<=w&&w<=122){return w-97+26}else{if(48<=w&&w<=57){return w-48+52}else{if(w==43){return 62}else{if(w==47){return 63}else{throw new Error("c:"+w)}}}}}};return u};var l=function(p,w){var s=p;var t=w;var q=new Array(p*w);var u={};u.setPixel=function(z,B,A){q[B*s+z]=A};u.write=function(z){z.writeString("GIF87a");z.writeShort(s);z.writeShort(t);z.writeByte(128);z.writeByte(0);z.writeByte(0);z.writeByte(0);z.writeByte(0);z.writeByte(0);z.writeByte(255);z.writeByte(255);z.writeByte(255);z.writeString(",");z.writeShort(0);z.writeShort(0);z.writeShort(s);z.writeShort(t);z.writeByte(0);var A=2;var y=r(A);z.writeByte(A);var B=0;while(y.length-B>255){z.writeByte(255);z.writeBytes(y,B,255);B+=255}z.writeByte(y.length-B);z.writeBytes(y,B,y.length-B);z.writeByte(0);z.writeString(";")};var v=function(z){var A=z;var B=0;var y=0;var C={};C.write=function(E,D){if((E>>>D)!=0){throw new Error("length over")}while(B+D>=8){A.writeByte(255&((E<<B)|y));D-=(8-B);E>>>=(8-B);y=0;B=0}y=(E<<B)|y;B=B+D};C.flush=function(){if(B>0){A.writeByte(y)}};return C};var r=function(z){var D=1<<z;var B=(1<<z)+1;var F=z+1;var H=x();for(var C=0;C<D;C+=1){H.add(String.fromCharCode(C))}H.add(String.fromCharCode(D));H.add(String.fromCharCode(B));var A=k();var y=v(A);y.write(D,F);var G=0;var I=String.fromCharCode(q[G]);G+=1;while(G<q.length){var E=String.fromCharCode(q[G]);G+=1;if(H.contains(I+E)){I=I+E}else{y.write(H.indexOf(I),F);if(H.size()<4095){if(H.size()==(1<<F)){F+=1}H.add(I+E)}I=E}}y.write(H.indexOf(I),F);y.write(B,F);y.flush();return A.toByteArray()};var x=function(){var z={};var y=0;var A={};A.add=function(B){if(A.contains(B)){throw new Error("dup key:"+B)}z[B]=y;y+=1};A.size=function(){return y};A.indexOf=function(B){return z[B]};A.contains=function(B){return typeof z[B]!="undefined"};return A};return u};var d=function(p,B,v,t){var s=l(p,B);for(var w=0;w<B;w+=1){for(var A=0;A<p;A+=1){s.setPixel(A,w,v(A,w))}}var z=k();s.write(z);var u=b();var C=z.toByteArray();for(var r=0;r<C.length;r+=1){u.writeByte(C[r])}u.flush();var q="";q+="<img";q+='\u0020src="';q+="data:image/gif;base64,";q+=u;q+='"';q+='\u0020width="';q+=p;q+='"';q+='\u0020height="';q+=B;q+='"';if(t){q+='\u0020alt="';q+=t;q+='"'}q+="/>";return q};return n}();

/*!
 * jquery qrcode plugin
 * Copyright 2012, Stefan Benicke (opusonline.at)
 * Dual licensed under the MIT or GPL Version 3 licenses.
 *
 * qrcode errorCorrectLevel:
 * Level L	Approx. 7% of codewords can be restored.
 * Level M	Approx. 15% of codewords can be restored.
 * Level Q	Approx. 25% of codewords can be restored.
 * Level H	Approx. 30% of codewords can be restored.
 * Default L. (Use higher level only if parts are realy destructed)
 *  
 * qrcode version:
 * Higher the version number, more data can be stored (max 976-2192 bits, depends on error correction level).
 * Default 1. (See http://www.denso-wave.com/qrcode/vertable1-e.html)
 */
(function($) {
		
	var defaults = {
		size: 200,
		margin: 10,
		type: 'text', // 'url', 'email', 'tel', 'sms'
		fitSize: true,
		render: 'canvas', // 'svg', 'div'
		bgColor: '#fff',
		fgColor: '#000',
		version: 1, // 1 - 10
		errorCorrectLevel: 'L' // 'L', 'M', 'Q', 'H'
	},
	
	width = 'width',
	height = 'height',
	px = 'px',
	d = document,
	
	createFunctions = {
		div: function(size, margin, bgColor, fgColor) {
			var self = this,
			moduleCount = self.getModuleCount(),
			cellSize = size / moduleCount,
			total = size + margin * 2,
			
			element = d.createElement('div');
			element.style.width = total + px;
			element.style.height = total + px;
			element.style.display = 'inline-block';
			element.style.position = 'relative';
			element.style.backgroundColor = bgColor;
			
			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount; col++) {
					if ( ! self.isDark(row, col)) continue;
					var x = col * cellSize + margin,
					y = row * cellSize + margin,
					rect = d.createElement('div');
					rect.style.width = cellSize + px;
					rect.style.height = cellSize + px;
					rect.style.position = 'absolute';
					rect.style.left = x + px;
					rect.style.top = y + px;
					rect.style.backgroundColor = fgColor;
					element.appendChild(rect);
				}
			}
			return element;
		},

		canvas: function(size, margin, bgColor, fgColor) {
			var self = this,
			moduleCount = self.getModuleCount(),
			cellSize = size / moduleCount,
			
			canvas = d.createElement('canvas');
			if ( ! (canvas.getContext && canvas.getContext('2d'))) {
				return createFunctions.div.call(self, size, margin, bgColor, fgColor);
			}
			var total = size + margin * 2,
			ctx	= canvas.getContext('2d');
			canvas.width = total;
			canvas.height = total;
			ctx.fillStyle = bgColor;
			ctx.fillRect(0, 0, total, total);
			ctx.fillStyle = fgColor;
			
			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount; col++) {
					if ( ! self.isDark(row, col)) continue;
					var x = col * cellSize + margin,
					y = row * cellSize + margin;
					ctx.fillRect(x, y, cellSize, cellSize);
				}
			}
			return canvas;
		},

		svg: function(size, margin, bgColor, fgColor) {
			var self = this,
			moduleCount = self.getModuleCount(),
			cellSize = size / moduleCount,
			
			ns = 'http://www.w3.org/2000/svg';
			if ( ! (d.createElementNS && d.createElementNS(ns, 'svg').createSVGRect)) {
				return createFunctions.div.call(self, size, margin, bgColor, fgColor);
			}
			var svg = d.createElementNS(ns, 'svg'),
			total = size + margin * 2;
			svg.setAttribute(width, total);
			svg.setAttribute(height, total);
			svg.style.backgroundColor = bgColor;
			
			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount; col++) {
					if ( ! self.isDark(row, col)) continue;
					var x = col * cellSize + margin,
					y = row * cellSize + margin,
					rect = d.createElementNS(ns, 'rect');
					rect.setAttribute('x', x);
					rect.setAttribute('y', y);
					rect.setAttribute(width, cellSize);
					rect.setAttribute(height, cellSize);
					rect.setAttribute('fill', fgColor);
					rect.setAttribute('stroke', 'none');
					svg.appendChild(rect);
				}
			}
			return svg;
		}
	};
	
	$.fn.qrcode = function(options) {
		
		if (typeof options == 'string') {
			options	= { text: options };
			if (arguments[1] && typeof arguments[1] == 'string') {
				options.type = arguments[1];
			}
		}
		if (options.type == 'url') {
			options.text = 'http://' + options.text.replace(/^http:\/\//i, '');
		}
		else if (options.type == 'email') {
			options.text = 'mailto:' + options.text.replace(/^mailto:/i, '');
		}
		else if (options.type == 'tel') {
			options.text = 'tel:' + options.text.replace(/^tel:/i, '');
		}
		else if (options.type == 'sms') {
			// TODO: add text like SMSTO:012345:TEXT
			options.text = 'smsto:' + options.text.replace(/^smsto:/i, '');
		}
		// utf-8 encode
		options.text = unescape(encodeURIComponent(options.text));
			
		options = $.extend({}, defaults, options);
		
		var create = function() {
			
			var me = this;
			var qr;
			try {
				qr = qrcode(options.version, options.errorCorrectLevel);
				qr.addData(options.text);
				qr.make();
			} catch (err) {
				// automatically increment version if it is too small
				if (options.version < 40) {
					options.version++;
					create.call(me);
					return;
				} else {
					throw err;
				}
			}
			
			if ( ! createFunctions[options.render]) {
				options.render = 'div';
			}
			if (options.fitSize) {
				var modules = qr.getModuleCount();
				options.size = Math.round(options.size / modules) * modules;
			}
			
			var element = createFunctions[options.render].call(qr, options.size, Number(options.margin), options.bgColor, options.fgColor);
			me.innerHTML = '';
			me.appendChild(element);
		};
		
		return this.each(create);
	};
	
})(jQuery);
