"use strict";(self.webpackChunkpwa=self.webpackChunkpwa||[]).push([[488],{4488:(vt,A,s)=>{s.r(A),s.d(A,{EventModule:()=>C});var m=s(6895),u=s(9299),I=s(2516),t=s(4650),w=s(6256),Q=s(2289),L=s(2729),$=s(1481),F=s(5604),x=s(5754),p=s(782),d=s(8377),T=s(4850),y=s(2362),g=s(7084),Z=s(9818),N=s(3238),b=s(7392);function Y(a,n){1&a&&t._UZ(0,"mat-progress-bar",8)}function H(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.todayEvents.showFullList=!i.todayEvents.showFullList)}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.todayEvents.showFullList?"\u1ea8n b\u1edbt":"Xem th\xeam"," ")}}const O=function(a){return{"position-absolute":a}},D=function(a,n,e,o,i,r){return{transform:a,color:n,background:e,width:o,zIndex:i,opacity:r}};function B(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",17),t.NdJ("click",function(){const i=t.CHM(e),r=i.$implicit,l=i.index,c=t.oxw(2);return t.KtG(c.viewEvent(r,l))}),t.TgZ(1,"div",18)(2,"div",19)(3,"button",20)(4,"mat-icon"),t._uU(5,"notifications"),t.qZA()(),t._uU(6," Nh\u1eadn th\xf4ng b\xe1o "),t.qZA(),t.TgZ(7,"div",21),t._uU(8),t.qZA(),t.TgZ(9,"div",22),t._uU(10),t.qZA(),t.TgZ(11,"div",23),t._uU(12),t.qZA()()()}if(2&a){const e=n.$implicit,o=n.index,i=t.oxw(2);t.Q6J("ngClass",t.VKq(6,O,!i.todayEvents.showFullList&&0!==o))("ngStyle",t.HTZ(8,D,"translateY("+(i.todayEvents.showFullList?"":.5*o+"rem")+")",e.color||"rgba(0, 0, 0, 0.87)",e.backgroundColor,i.todayEvents.showFullList?"":100-5*o+"%",i.todayEvents.showFullList?"":i.todayEvents.event.length-o,i.todayEvents.showFullList?"":100-5*o<100?"0."+(100-5*o-30):1)),t.xp6(8),t.Oqu(null==e?null:e.name),t.xp6(2),t.AsE("",null==e?null:e.startTime,"-",null==e?null:e.endTime,""),t.xp6(2),t.Oqu(null==e?null:e.location)}}const G=function(a){return{marginTop:a}};function j(a,n){if(1&a&&(t.TgZ(0,"div",9)(1,"div",10)(2,"h1",11),t._uU(3,"H\xd4M NAY"),t.qZA(),t.YNc(4,H,2,1,"button",12),t.qZA(),t.TgZ(5,"div",13),t.YNc(6,B,13,15,"div",14),t.qZA(),t._UZ(7,"mat-divider",15),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.todayEvents.event.length>1),t.xp6(2),t.Q6J("ngForOf",e.todayEvents.event),t.xp6(1),t.Q6J("ngStyle",t.VKq(3,G,.75*e.todayEvents.event.length+"rem"))}}function z(a,n){if(1&a&&(t.TgZ(0,"mat-grid-tile")(1,"mat-card",29)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"p"),t._uU(9),t.qZA()()()()),2&a){const e=n.$implicit;t.xp6(1),t.Q6J("routerLink",null==e?null:e.key),t.xp6(3),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null==e?null:e.key),t.xp6(3),t.Oqu(null==e?null:e.description)}}function P(a,n){1&a&&(t.TgZ(0,"mat-grid-tile")(1,"mat-card",29)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"+ Th\xeam m\u1edbi"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Th\xeam m\u1edbi s\u1ef1 ki\u1ec7n"),t.qZA()()()()),2&a&&(t.xp6(1),t.Q6J("routerLink","them-moi"))}function V(a,n){if(1&a&&(t.TgZ(0,"mat-tab",3,4)(2,"mat-accordion",24)(3,"mat-expansion-panel",25)(4,"mat-expansion-panel-header")(5,"mat-panel-title"),t._uU(6," S\u1ef1 ki\u1ec7n"),t.qZA()(),t.TgZ(7,"mat-grid-list",26),t.YNc(8,z,10,4,"mat-grid-tile",27),t.YNc(9,P,7,1,"mat-grid-tile",28),t.qZA()()()()),2&a){const e=t.oxw();t.Q6J("label","C\xc0I \u0110\u1eb6T"),t.xp6(3),t.Q6J("expanded",!0),t.xp6(4),t.Q6J("cols",e.cols),t.xp6(1),t.Q6J("ngForOf",e.eventList),t.xp6(1),t.Q6J("ngIf",e.contentEditable)}}class h{constructor(n,e,o,i,r,l,c){this.router=n,this.route=e,this.authService=o,this.breakpointObserver=i,this.eventService=r,this.titleSerVice=l,this.commonService=c,this.selectedIndex=0,this.isLoading=!1,this.cols=1,this.eventList=this.eventService.eventList,this.happeningEvents={event:[],showFullList:!1},this.upcomingEvents={event:[],showFullList:!1},this.todayEvents={event:[],showFullList:!1},this.time=this.commonService.time}ngOnInit(){this.route.queryParams.subscribe(n=>{this.selectedIndex=n.t?parseInt(n.t):this.authService.contentEditable?3:0}),this.titleSerVice.setTitle(`S\u1ef1 ki\u1ec7n | ${I.s.page.name}`),this.breakpointObserver.observe(["(max-width: 600px)"]).subscribe(n=>{this.cols=n.matches?2:6}),this.contentEditable=this.authService.contentEditable,this.getEvents()}selectedTabChange(n){this.router.navigate([],{relativeTo:this.route,queryParams:{t:n.index},queryParamsHandling:"merge"})}getEvents(){console.log(this.time),this.getHappeningTuThoiEvents(),this.getTodayTuThoiEvents()}getHappeningTuThoiEvents(){switch(this.happeningEvents.event=[],this.time?.commonTime?.current?.key){case"ty-2301":case"meo-0507":case"ngo-1113":case"dau-1719":this.happeningEvents.event=[this.eventList.find(n=>"cung-tu-thoi"===n.key)?.event?.find(n=>1==n?.time?.length&&n?.time.find(e=>e===this.time?.commonTime?.current?.key))],this.happeningEvents.event[0].startTime=`${this.happeningEvents.event[0]?.time[0].split("-")[1]?.slice(0,2)}:00`,this.happeningEvents.event[0].endTime=`${this.happeningEvents.event[0]?.time[0].split("-")[1]?.slice(2,4)}:00`}}getTodayTuThoiEvents(){this.todayEvents.event=[],this.todayEvents.event=this.eventList.find(n=>"cung-tu-thoi"===n.key)?.event?.filter(n=>"cung-tu-thoi"!==n.key),this.todayEvents.event.forEach(n=>{switch(n.startTime=`${n?.time[0].split("-")[1]?.slice(0,2)}:00`,n.endTime=`${n?.time[0].split("-")[1]?.slice(2,4)}:00`,n.location="all"===n?.locationType[0]?"\u0110i\u1ec7n th\u1edd \u0110\u1ee9c Ch\xed T\xf4n":"",n?.time[0]){case"ty-2301":n.color="#ffffff",n.backgroundColor="linear-gradient(#221f23, #19386d)";break;case"meo-0507":n.backgroundColor="linear-gradient(#f1a2c4, #f9f2ec)";break;case"ngo-1113":n.backgroundColor="linear-gradient(#daf4d7, #07b4ff)";break;case"dau-1719":n.color="#ffffff",n.backgroundColor="linear-gradient(#b87059, #7a019e)";break;default:n.backgroundColor="black",n.color="white"}}),this.todayEvents.event=this.todayEvents?.event?.filter(n=>new Date(`${(new Date).getFullYear()}-${(new Date).getMonth()+1}-${(new Date).getDate()} ${n.endTime}:00`)>new Date)}viewEvent(n,e){!this.todayEvents.showFullList&&(!n&&!e||n&&0!==e)?this.todayEvents.showFullList=!this.todayEvents.showFullList:console.log(n)}static#t=this.\u0275fac=function(e){return new(e||h)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(w.e),t.Y36(Q.Yg),t.Y36(L.P),t.Y36($.Dx),t.Y36(F.v))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-event-list"]],decls:8,vars:5,consts:[[1,"event-list-container"],["mode","indeterminate",4,"ngIf"],[3,"selectedIndex","selectedTabChange"],[3,"label"],["tabGroup",""],[1,"main-event-list"],["class","event-group happenning-event",4,"ngIf"],[3,"label",4,"ngIf"],["mode","indeterminate"],[1,"event-group","happenning-event"],[1,"event-group-header","d-flex","justify-content-between","align-items-center"],[1,"event-group-title"],["mat-button","","class","event-group-action",3,"click",4,"ngIf"],[1,"event-group-list","d-flex","flex-column","align-items-center"],["class","event-card d-flex",3,"ngClass","ngStyle","click",4,"ngFor","ngForOf"],[3,"ngStyle"],["mat-button","",1,"event-group-action",3,"click"],[1,"event-card","d-flex",3,"ngClass","ngStyle","click"],[1,"event-information"],[1,"notification-subscribe"],["mat-icon-button","","aria-label","B\u1eadt/T\u1eaft th\xf4ng b\xe1o",1,"notification-subscribe-btn"],[1,"event-name"],[1,"event-time"],[1,"event-location"],["multi",""],[3,"expanded"],["rowHeight","1:1",3,"cols"],[4,"ngFor","ngForOf"],[4,"ngIf"],["matRipple","",1,"h-100","w-100",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Y,1,0,"mat-progress-bar",1),t.TgZ(2,"mat-tab-group",2),t.NdJ("selectedTabChange",function(r){return o.selectedTabChange(r)}),t.TgZ(3,"mat-tab",3,4)(5,"div",5),t.YNc(6,j,8,5,"div",6),t.qZA()(),t.YNc(7,V,10,5,"mat-tab",7),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("selectedIndex",o.selectedIndex),t.xp6(1),t.Q6J("label","S\u1ef0 KI\u1ec6N"),t.xp6(3),t.Q6J("ngIf",o.todayEvents.event.length>0),t.xp6(1),t.Q6J("ngIf",o.contentEditable))},dependencies:[m.mk,m.sg,m.O5,m.PC,u.rH,x.SK,x.R7,p.Il,p.DX,d.S$,d.u7,d.Qi,d.mi,d._K,T.d,y.eI,g.pp,g.ib,g.yz,g.yK,Z.eB,N.wG,b.Hw],styles:[".event-list-container .mat-grid-tile-content{padding:.5rem!important}  .event-list-container .mat-card{cursor:pointer}  .event-list-container .mat-tab-body-content{padding:.5rem}  .event-list-container .mat-tab-body-wrapper{flex:1}  .event-list-container .mat-tab-group{flex:1;height:100%;overflow:hidden;background-color:#fff}  .event-list-container .main-event-list .event-group{padding-bottom:2rem}  .event-list-container .main-event-list .event-group .event-group-header{margin:1rem 0;color:#000000de}  .event-list-container .main-event-list .event-group .event-group-header .event-group-action{text-decoration:underline}  .event-list-container .main-event-list .event-group .event-group-list{position:relative}  .event-list-container .main-event-list .event-group .event-group-list .event-card{border-radius:1rem;padding:1rem;color:#fff;margin-bottom:1rem;width:100%;position:relative;transition:all 1s;cursor:pointer}  .event-list-container .main-event-list .event-group .event-group-list .event-card.position-absolute{position:absolute;top:0}  .event-list-container .main-event-list .event-group .event-group-list .event-card .notification-subscribe-btn{background:rgba(255,255,255,.5);margin-bottom:.5rem}  .event-list-container .main-event-list .event-group .event-group-list .event-card .event-name{margin-bottom:.5rem}  .event-list-container .main-event-list .event-group .event-group-list .event-card .event-time{font-size:30px;font-weight:700;margin-bottom:.5rem}  .event-list-container .main-event-list .event-group .event-group-list .event-card .event-location{font-weight:300}"]})}class S{}var X=s(5001),R=s(7671),W=s(5484),v=s(4006),k=s(8455),U=s(9203),M=s(9982),q=s(6289),tt=s(4363),J=s(8256);function et(a,n){1&a&&t._UZ(0,"mat-progress-bar",3)}function nt(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onSave())}),t._uU(1," L\u01b0u "),t.qZA()}2&a&&t.Q6J("color","primary")}function it(a,n){if(1&a&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",e.name," ")}}function ot(a,n){if(1&a&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",e.name," ")}}function at(a,n){if(1&a&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",e.name," ")}}function rt(a,n){if(1&a&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",e.name," ")}}function lt(a,n){if(1&a&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",e.name," ")}}function st(a,n){if(1&a&&(t.TgZ(0,"mat-list-option",24),t._uU(1),t._UZ(2,"mat-divider"),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function ct(a,n){if(1&a&&(t.TgZ(0,"mat-list-option",24),t._uU(1),t._UZ(2,"mat-divider"),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",null==e?null:e.key),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function dt(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card",20)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"div",11)(6,"div",12)(7,"mat-form-field",13)(8,"mat-label"),t._uU(9,"T\xean s\u1ef1 ki\u1ec7n"),t.qZA(),t.TgZ(10,"input",21),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.name=i)})("input",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onChangeEventName(r))}),t.qZA()(),t.TgZ(11,"div",22)(12,"mat-radio-group",23),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.dateType=i)}),t.TgZ(13,"mat-radio-button",24)(14,"mat-label"),t._uU(15,"\xc2m l\u1ecbch"),t.qZA()(),t.TgZ(16,"mat-radio-button",24)(17,"mat-label"),t._uU(18,"D\u01b0\u01a1ng l\u1ecbch"),t.qZA()()(),t.TgZ(19,"mat-form-field",13)(20,"mat-label"),t._uU(21,"N\u0103m"),t.qZA(),t.TgZ(22,"input",25),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.year=i)}),t.qZA(),t.TgZ(23,"mat-select",26),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.year=i)}),t.YNc(24,it,2,2,"mat-option",27),t.qZA()(),t.TgZ(25,"mat-form-field",13)(26,"mat-label"),t._uU(27,"Th\xe1ng"),t.qZA(),t.TgZ(28,"mat-select",28),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.month=i)}),t.YNc(29,ot,2,2,"mat-option",27),t.qZA()(),t.TgZ(30,"mat-form-field",13)(31,"mat-label"),t._uU(32,"Ng\xe0y"),t.qZA(),t.TgZ(33,"mat-select",28),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.selectedDate=i)}),t.YNc(34,at,2,2,"mat-option",27),t.qZA()()(),t.TgZ(35,"mat-form-field",13)(36,"mat-label"),t._uU(37,"Th\u1eddi gian"),t.qZA(),t.TgZ(38,"mat-select",29),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.time=i)})("selectionChange",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onChangeCommonTime(r))}),t.YNc(39,rt,2,2,"mat-option",27),t.qZA()(),t.TgZ(40,"mat-form-field",13)(41,"mat-label"),t._uU(42,"\u0110\u1ecba \u0111i\u1ec3m"),t.qZA(),t.TgZ(43,"mat-select",29),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.locationType=i)})("selectionChange",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onChangeCommonLocationTypeValue(r))}),t.YNc(44,lt,2,2,"mat-option",27),t.qZA()()()(),t._UZ(45,"mat-divider"),t.TgZ(46,"div",11)(47,"mat-grid-list",30)(48,"mat-grid-tile",31)(49,"mat-card",32)(50,"mat-card-header")(51,"mat-card-title"),t._uU(52,"NGU\u1ed2N"),t.qZA()(),t.TgZ(53,"mat-card-content",33),t._UZ(54,"mat-divider"),t.TgZ(55,"mat-selection-list",34,35),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.kinh=i)})("selectionChange",function(){const r=t.CHM(e).$implicit,l=t.MAs(56),c=t.MAs(66),_=t.oxw(2);return t.KtG(_.onChangeSelectedKinhOption("stock",r,l,c))}),t.YNc(57,st,3,2,"mat-list-option",27),t.qZA()()()(),t.TgZ(58,"mat-grid-tile",31)(59,"mat-card",32)(60,"mat-card-header")(61,"mat-card-title"),t._uU(62),t.qZA()(),t.TgZ(63,"mat-card-content",33),t._UZ(64,"mat-divider"),t.TgZ(65,"mat-selection-list",34,36),t.NdJ("ngModelChange",function(i){const l=t.CHM(e).$implicit;return t.KtG(l.kinh=i)})("selectionChange",function(){const r=t.CHM(e).$implicit,l=t.MAs(56),c=t.MAs(66),_=t.oxw(2);return t.KtG(_.onChangeSelectedKinhOption("filter",r,l,c))}),t.YNc(67,ct,3,2,"mat-list-option",27),t.qZA()()()()()()(),t.TgZ(68,"mat-card-actions",37)(69,"button",38)(70,"mat-icon"),t._uU(71,"delete"),t.qZA(),t._uU(72," X\xf3a "),t.qZA(),t.TgZ(73,"button",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onAddNewEvent(r))}),t.TgZ(74,"mat-icon"),t._uU(75,"add"),t.qZA(),t._uU(76," TH\xcaM S\u1ef0 KI\u1ec6N M\u1edaI "),t.qZA()()()}if(2&a){const e=n.$implicit,o=t.oxw(2);t.xp6(3),t.AsE("S\u1ef1 ki\u1ec7n ",e.name," (",e.key,")"),t.xp6(4),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.name),t.xp6(2),t.Q6J("ngModel",e.dateType),t.xp6(1),t.Q6J("value","lunar"),t.xp6(3),t.Q6J("value","solar"),t.xp6(3),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.year)("autocomplete","off"),t.xp6(1),t.Q6J("multiple",!0)("ngModel",e.year),t.xp6(1),t.Q6J("ngForOf",null==o.commonDates?null:o.commonDates.year),t.xp6(1),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.month),t.xp6(1),t.Q6J("ngForOf",null==o.commonDates?null:o.commonDates.month),t.xp6(1),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.selectedDate),t.xp6(1),t.Q6J("ngForOf",null==o.commonDates?null:o.commonDates.date),t.xp6(1),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.time)("multiple",!0),t.xp6(1),t.Q6J("ngForOf",o.commonTimes),t.xp6(1),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.locationType)("multiple",!0),t.xp6(1),t.Q6J("ngForOf",o.commonLocationTypes),t.xp6(3),t.Q6J("cols",2)("rowHeight","2:1"),t.xp6(8),t.Q6J("ngModel",e.kinh),t.xp6(2),t.Q6J("ngForOf",o.kinhList),t.xp6(5),t.hij("Danh s\xe1ch kinh: ",null==e?null:e.name,""),t.xp6(3),t.Q6J("ngModel",e.kinh),t.xp6(2),t.Q6J("ngForOf",e.kinhList),t.xp6(1),t.Q6J("align","end"),t.xp6(1),t.Q6J("color","warn"),t.xp6(4),t.Q6J("color","primary")}}function mt(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div")(5,"h1"),t._uU(6),t.qZA()(),t.TgZ(7,"div"),t.YNc(8,nt,2,1,"button",8),t.TgZ(9,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onBack())}),t._uU(10,"Tho\xe1t"),t.qZA()()(),t._UZ(11,"mat-divider"),t.qZA(),t.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"mat-form-field",13)(16,"mat-label"),t._uU(17,"T\xean s\u1ef1 ki\u1ec7n"),t.qZA(),t.TgZ(18,"input",14),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.currentEvent.name=i)})("change",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onChangeName())}),t.qZA()(),t.TgZ(19,"mat-form-field",13)(20,"mat-label"),t._uU(21,"Key/Slug"),t.qZA(),t.TgZ(22,"input",15),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.currentEvent.key=i)}),t.qZA()()()(),t.TgZ(23,"div",11)(24,"mat-form-field",13)(25,"mat-label"),t._uU(26,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(27,"textarea",16),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.currentEvent.description=i)}),t.qZA()()(),t._UZ(28,"mat-divider"),t.TgZ(29,"div",17),t.YNc(30,dt,77,37,"mat-card",18),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(6),t.hij("S\u1ef1 ki\u1ec7n - ",e.currentEvent.name,""),t.xp6(2),t.Q6J("ngIf",e.contentEditable),t.xp6(7),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.currentEvent.name),t.xp6(1),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.currentEvent.key)("disabled","them-moi"!==e.eventKey),t.xp6(2),t.Q6J("appearance","fill"),t.xp6(3),t.Q6J("ngModel",e.currentEvent.description),t.xp6(3),t.Q6J("ngForOf",e.currentEvent.event)}}class f{constructor(n,e,o,i,r,l,c,_,gt){this.route=n,this._snackBar=e,this.breakpointObserver=o,this.authService=i,this.location=r,this.eventService=l,this.kinhService=c,this.caodaionEditorService=_,this.commonService=gt,this.currentEvent=new S,this.contentEditable=!1,this.isLoading=!1,this.isShowBackButton=!1,this.horizontalPosition="center",this.verticalPosition="bottom",this.eventList=this.eventService.eventList,this.kinhList=this.kinhService.kinhList,this.commonTimes=this.commonService.commonTimes,this.commonDates=this.commonService.commonDates,this.commonLocationTypes=this.commonService.commonLocationTypes}ngOnInit(){this.route.params.subscribe(n=>{this.eventKey=n.eventKey}),this.breakpointObserver.observe(["(max-width: 600px)"]).subscribe(n=>{n.matches?(this.contentEditable=!1,this.isShowBackButton=!1,localStorage.setItem("currentLayout",JSON.stringify({isHideToolbar:!0,isHideBottomNavBar:!0}))):(this.contentEditable=this.authService.contentEditable,this.isShowBackButton=!0,localStorage.setItem("currentLayout",JSON.stringify({isHideToolbar:!1,isHideBottomNavBar:!1})))}),this.getEvent()}getEvent(){let n=this.eventList.find(e=>e.key===this.eventKey);if(this.currentEvent=n||new S,this.currentEvent.event&&0!==this.currentEvent.event.length)this.currentEvent.event.forEach(e=>{e.selectedDate=e.date.split("-")[2],e.month=e.date.split("-")[1],e.year=[e.date.split("-")[0]],e.kinhList=[],e.kinh.forEach(o=>{let i=this.kinhList?.find(r=>r.key===o);e.kinhList.push(i)})});else{this.currentEvent.event=[];const e=new K;this.currentEvent.event.push(e)}}onChangeSelectedKinhOption(n,e,o,i){e.kinhList=[],"stock"===n&&o.selectedOptions.selected&&o.selectedOptions.selected.forEach(r=>{let l=this.kinhList?.find(c=>c.key===r.value);e.kinhList.push(l)}),"filter"===n&&i.selectedOptions.selected&&i.selectedOptions.selected.forEach(r=>{let l=this.kinhList?.find(c=>c.key===r.value);e.kinhList.push(l)}),e.kinh=e.kinhList.map(r=>r.key)}onChangeCommonTime(n){n.time=this.commonService.getCommonTimeValue(n.time)}onChangeCommonLocationTypeValue(n){n.locationType=this.commonService.getCommonLocationTypeValue(n.locationType)}onAddNewEvent(n){const e=new K;n?n.name&&n.time&&n.locationType&&n.kinh&&0!==n.kinh.length?this.currentEvent.event.push(e):console.log(n):this.currentEvent.event.push(e)}onChangeName(){this.currentEvent.key=this.currentEvent.name?this.getSlug(this.currentEvent.name):""}onChangeEventName(n){n.key=n.name?this.getSlug(n.name):""}getSlug(n){return this.caodaionEditorService.generatedSlug(n)}onSave(){let n=[];"them-moi"===this.eventKey&&this.eventList.push(this.currentEvent),this.eventList.forEach(e=>{let o=[];o=e.event.map(i=>({key:i.key,name:i.name,dateType:i.dateType,date:i.year&&i.month&&i.selectedDate?`${i.year}-${i.month}-${i.selectedDate}`:i.date,time:i.time,locationType:i.locationType,kinh:i.kinh})),n.push({name:e.name,description:e.description,key:e.key,event:o})}),console.log({data:n})}onBack(){this.location.back()}static#t=this.\u0275fac=function(e){return new(e||f)(t.Y36(u.gz),t.Y36(X.pl),t.Y36(Q.Yg),t.Y36(w.e),t.Y36(m.Ye),t.Y36(L.P),t.Y36(R.c),t.Y36(W.TB),t.Y36(F.v))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-event-content"]],decls:3,vars:2,consts:[[1,"wrapper-container","event-content-container"],["mode","indeterminate",4,"ngIf"],["class","wrapper-container event-container-wrapper",4,"ngIf"],["mode","indeterminate"],[1,"wrapper-container","event-container-wrapper"],[1,"flex-1","wrapper-container","event-container"],[1,"top-pannel"],[1,"top-pannel-content","d-flex","justify-content-between"],["mat-flat-button","",3,"color","click",4,"ngIf"],["mat-stroked-button","",3,"click"],[1,"flex-1","event-content-form"],[1,"form-group"],[1,"d-flex"],[1,"w-100",3,"appearance"],["type","text","matInput","",3,"ngModel","ngModelChange","change"],["type","text","matInput","",3,"ngModel","disabled","ngModelChange"],["rows","3","matInput","",3,"ngModel","ngModelChange"],[1,"form-group","event-form-group"],["class","event-details",4,"ngFor","ngForOf"],["mat-flat-button","",3,"color","click"],[1,"event-details"],["type","text","matInput","","required","",3,"ngModel","ngModelChange","input"],[1,"w-100","d-flex"],[3,"ngModel","ngModelChange"],[3,"value"],["matInput","",3,"ngModel","autocomplete","ngModelChange"],["required","",3,"multiple","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["required","",3,"ngModel","ngModelChange"],["required","",3,"ngModel","multiple","ngModelChange","selectionChange"],[3,"cols","rowHeight"],[1,"kinh-list-wrapper"],[1,"w-100","h-100","wrapper-container"],[1,"flex-1","kinh-list","w-100","h-100"],[3,"ngModel","ngModelChange","selectionChange"],["stock",""],["filter",""],[3,"align"],["mat-button","",3,"color"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,et,1,0,"mat-progress-bar",1),t.YNc(2,mt,31,10,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",o.currentEvent))},dependencies:[m.sg,m.O5,p.Il,p.DX,d.S$,d.u7,d.Qi,d.mi,d.Fx,T.d,y.eI,Z.eB,b.Hw,v.Fj,v.JJ,v.Q7,v.On,k.v_,k.$V,U.k0,M.kh,M.O$,q.x8,tt.CK,J.OY,J.vy],styles:[".event-content-container{background-color:#fff}  .event-content-container .top-pannel-content button{margin-left:1rem}  .event-content-container .form-group{padding:1rem}  .event-content-container .form-group mat-card{margin-bottom:1rem}  .event-content-container .form-group mat-card .kinh-list{overflow:auto}  .event-content-container .kinh-list-wrapper .mat-grid-tile-content{padding:.5rem}  .event-content-container .event-content-form{overflow:auto}"]})}class K{constructor(){this.dateType="lunar"}}const ut=[{path:"",children:[{path:"",component:h},{path:":eventKey",component:f}]}];class E{static#t=this.\u0275fac=function(e){return new(e||E)};static#e=this.\u0275mod=t.oAB({type:E});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(ut),u.Bz]})}var pt=s(4546);class C{static#t=this.\u0275fac=function(e){return new(e||C)};static#e=this.\u0275mod=t.oAB({type:C});static#n=this.\u0275inj=t.cJS({imports:[m.ez,E,x.Nn,p.N6,d.IF,T.t,y.jc,pt.O,g.To,Z.yu,N.si,b.Ps,v.u5,k.wp,U.x4,M.gR,q.uw,J.Xo]})}}}]);