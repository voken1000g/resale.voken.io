(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{891:function(t,e,n){"use strict";n.r(e);var r=n(25),c=n.n(r),o={name:"stat--account",middleware:["web3","voken","vokenEarlyBirdSale","comm0"],layout:"white",validate:function(t){var e=t.params;return c.a.utils.isAddress(e.account)},computed:{granted:function(){return this.$store.state.comm0.isProxy||this.$store.state.voken.account.isAgent}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("stat-account",{staticClass:"bg-indigo-50"}),t._v(" "),t.granted?n("stat-account-referrals"):t._e(),t._v(" "),t.granted?n("stat-account-early-bird-rewards",{staticClass:"bg-indigo-50"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StatAccount:n(271).default,StatAccountReferrals:n(273).default,StatAccountEarlyBirdRewards:n(272).default})}}]);