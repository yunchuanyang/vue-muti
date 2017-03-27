<template>
	<div>
		<div class="filterNameIpt">
			<input type="text" v-model="filterName">
	    </div>
	    	<div class="tabContent">
	    		<el-table
			      v-bind:data="thirdTableData" 
			      style="width: 100%">
			      <el-table-column
			        prop="date"
			        label="日期"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="name"
			        label="姓名"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="地址">
			      </el-table-column>
			    </el-table>
    	</div>
    </div>
</template>

<script>
	import Vue from 'vue'
	import {Table, TableColumn} from 'element-ui'
	import store from './store'
	Vue.use(Table)
	Vue.use(TableColumn)



	export default {
		store,
		data (){
			return {filterName:"", thirdTableData:[]}
		},
		computed:{
			totalData:function(){
				return this.$store.state.totalData;
			}
		},
		watch:{
			/*thirdTableData:function(){
				console.log(store.state.tableData );//this.thirdTableData
			},*/
			filterName:function(){
				this.filter();
				
			},
			totalData:function(){
				this.filterName='';
				this.filter();
			}
		},
		methods:{
		filter:function(){
			var filterName = this.filterName;
			// this.$store.filter(filterName);
			
			var oldData = this.totalData;// this.thirdTotaldata;
			var targetData = [];
			oldData.forEach(function(item, index){
				var date = item.date;
				if(date.indexOf(filterName) > -1){
					targetData.push(item);
				}
			})
			this.thirdTableData = targetData;
		}
	}
	}
</script>
<style scoped>
	.tabContent{
		margin-top:1%;
	}

</style>