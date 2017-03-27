<template>
	<div class="content col-md-10">
        <div class="row">
            <div class="col-md-6">
        		<input type="text" class="form-control" v-model="queryName" v-on:keyup.enter="queryAct">
        	</div>
        	<div class="queryBtn col-md-4">
        		<button class="queryBtn" v-on:click="queryAct">查询</button>
        	</div>
        </div> 
        <div class="tb-head ">
        	<mytbhead></mytbhead>
        </div>
	 </div>
</template>

<script type="text/javascript">
import Vue from 'vue';
import mytbhead from './mytbhead'
import store from './store'
export default{
	components:{mytbhead},
	data () {
		return {
			queryName:''
		}
	},
	store,
	methods:{
		queryAct (){
			var data = [
			                					{'date':'123ed', 'name':'eee', 'address':'qededf'},
			               					{'date':'abc', 'name':'eee', 'address':'qededf'}
			                 				];
			this.$store.commit('update',data);
		}
	}
}
	
</script>

<style type="text/css" scoped>
	 	.tb-head{
	 		margin-top:1%;
	 	}
	 	.queryBtn{
			top:3px;
	 	}
	 	.queryBtn{
	 		vertical-align: bottom;
	 	}

</style>