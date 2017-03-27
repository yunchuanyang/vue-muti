import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
	state:{
		totalData:[]
	},
	mutations:{
		update:function(state,data){
			state.totalData = data;
		}

	}
});

export default store;