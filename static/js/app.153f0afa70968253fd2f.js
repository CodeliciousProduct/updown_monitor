webpackJsonp([0],{Ardk:function(t,e,s){t.exports=s.p+"static/img/codeliciousColor.1bd3c7a.png"},IJSN:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("wiDh"),c=s.n(a),n={data:()=>({checks:[],loading:!0,error:!1,lastPageUpdate:null}),mounted(){this.fetchChecks()},methods:{async getChecks(){return(await window.fetch("https://updown.io/api/checks?api-key="+this.$config.updown_read_key)).json()},async fetchChecks(){try{const t=await this.getChecks();t.length>0&&(this.checks=t.filter(t=>{return!0===t.enabled&&!0===t.published})),this.lastPageUpdate=new Date}catch(t){console.error(t),this.error=t}this.loading=!1},toHumanDate(t){const e=new Date(t);return c()(e)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12 text-center"},[!0===t.loading?s("div",[s("p",{staticClass:"text-muted center-text"},[t._v("\n          Loading, please wait...\n        ")])]):!1!==t.error?s("div",[s("p",{staticClass:"center-text"},[t._v("\n          An error occured "+t._s(t.error.message||t.error)+"\n        ")])]):null===t.checks||0===t.checks.length?s("div",[s("p",{staticClass:"center-text"},[t._v("\n          No checks found\n        ")])]):s("div",[s("hr"),t._v(" "),t._l(t.checks,function(e,i){return s("div",{key:i+"_check"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center justify-content-center main no-gutters text-center"},[s("div",{staticClass:"col-md-1 col-sm-3 align-self-center"},[!1===e.down?s("span",{staticClass:"box up"},[t._v("UP")]):s("span",{staticClass:"box dw"},[t._v("DOWN")])]),t._v(" "),s("div",{staticClass:"col-md-5 col-sm-10 text-left checkTitle"},[s("h5",{staticClass:"card-title"},[t._v("\n                  "+t._s(e.alias||e.url)+"\n                ")]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[s("a",{staticClass:"nolink",attrs:{href:"https://updown.io/"+e.token,target:"_blank"}},[t._v("Last check: "+t._s(t.toHumanDate(e.last_check_at)))])])]),t._v(" "),s("div",{staticClass:"col-md-2",attrs:{id:"uptime"}},[s("div",{staticClass:"uptime"},[s("p",{staticClass:"text-muted desc"},[t._v("\n                    Uptime\n                  ")]),t._v(" "),s("span",[t._v(t._s(e.uptime+"%"))])])]),t._v(" "),s("div",{staticClass:"col-md-1"},[s("a",{staticClass:"morelink",attrs:{href:"https://updown.io/"+e.token,target:"_blank"}},[t._v("Details →")])])])]),t._v(" "),s("hr")])})],2)])])])},staticRenderFns:[]};var o={name:"App",components:{StatusPage:s("VU/8")(n,r,!1,function(t){s("IJSN")},null,null).exports}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12 text-center"},[t._m(0),t._v(" "),s("h3",[t._v(t._s(t.$config.website_name)+" Status Page")])])]),t._v(" "),s("StatusPage"),t._v(" "),s("div",{staticClass:"row text-center footer"},["string"==typeof t.$config.website_url?s("div",{staticClass:"col"},[s("a",{attrs:{href:t.$config.website_url}},[t._v("‹ Home")])]):t._e(),t._v(" "),"string"==typeof t.$config.twitter?s("div",{staticClass:"col"},[s("a",{attrs:{href:"https://twitter.com/"+t.$config.twitter,target:"_blank"}},[s("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMqSURBVGhD7Zg7aBRBGMfX3TvBRrFQFMEHqFiIiDZ2QkC00cqAxCqYQkUQxMInIQRNIaYIiAFRUDGZWS6C2FloYWPlk4AgaqGixaF3N7OJz2z+s/ep590Y93ZnNxbzgz+7uex+r3nszDgWi8VisVhmi9LECpcH+z0mBz0uL7hMnirw2lbHDz16opUwnEN3CeFT89IbIcbkUgQ/4nHxAwmELWLyhceCnfR0nRuVhS6Xp5FsN/2SDBg56jExQH8mpsjEeth5q02gUUxMQWdUi7lc3MZ9gMTfOf7HBWQqGajSc+UAFTlOP7UPry1CQG9ago4jJr4gkY7ITuKegW4VVei34SGnN3Tpv7GBjYsNNuKLyTJapQv3O5DMpWgcJWK0urbZOLraXYcHy+iJf3O9PB+JfG62E09C/rxX44QsJgAD7U/DJFUpJnvitI7Hg11aG21JnE094cDQh1bDdblMPEK1O2eaNtE1DuvejSUmvkcFMwGqf17rpFFMvELV+osjYgO99gskckj7ThwxWSEzBvAnlsNotcXJ38TEe7TULVz70K/34TqgfS6OYIuiMAMC2wOjjbNXPsIHkkJIR5HJTVTdTlT3JLrPV63DjBTNkEbw5RKdg/wkhimS9KAqz/ROspcaYxRGelxeO6BzkoecUnUNhWGAe2EBU+gDnaNMxeQ4RWCQ+vI7WjzmJXwIe8m7YeprpsvQN51jo8KKVxWPPBtmdHJl0ZcbMR3vxSB8og3AmMQV8mqeAgu26J0aFlbKaitMbrMBjvwWx8Yl+sldhmC7iRnssT6A9MIAf4qV9FzyljHqMICJm7pAUkmtdEu1deQlP9S2E/35GrrC6/RrMLzffHqSNwiiAwm91AcYQ9g8eby2m8zlT3S8w8VVBJJ8eY/uBG0nkzmCPuyy2kEMyjupEoAwaTzMZ0zwyVWo+DCCvk/Lk/i7xJnEpMAH9YRaw5GnHOgNXSTSraZFbVDtiMlP0KAzJhaT9dmh6AebEdAQghlHS+nPbpvFZBli6EZd0Rnyfwc+jEhmG1qqx/XlMYyXc6rauPYh6CPqLMvhldVJTiUtFovFYrFYHGcazS5/dDE9KGwAAAAASUVORK5CYII=",width:"30px"}}),t._v("@"+t._s(t.$config.twitter))])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logotop"},[e("img",{attrs:{src:s("Ardk")}})])}]};var d=s("VU/8")(o,l,!1,function(t){s("TouL")},null,null).exports;const u=s("Yr1l");i.a.config.productionTip=!1,i.a.prototype.$config=u,new i.a({el:"#app",components:{App:d},template:"<App/>"})},TouL:function(t,e){},Yr1l:function(t,e){t.exports={updown_read_key:"ro-iVkDsnGa5ucJVdN6E3er",website_name:"Codelicious Service",website_url:"https://github.com/CodeliciousProduct/",twitter:"codeliciousHQ"}}},["NHnr"]);
//# sourceMappingURL=app.153f0afa70968253fd2f.js.map