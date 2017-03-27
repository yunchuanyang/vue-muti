<template>
	<el-tabs v-model="taskName" type="card" @tab-click="handleClick">
	    <el-tab-pane label="事物1" name="first">
	    	<mytabpane></mytabpane>
	    </el-tab-pane>
	    <el-tab-pane label="事物2" name="second">事物2</el-tab-pane>
	    <el-tab-pane label="事物3" name="third">事物3</el-tab-pane>
	    <el-tab-pane label="事物4" name="fourth">事物4</el-tab-pane>
	</el-tabs>
</template>
<script>
	import Vue from 'vue'
	import {Tabs, TabPane} from 'element-ui'
	import mytabpane from './mytabpane'
	Vue.use(Tabs)
	Vue.use(TabPane)

	export default {
		data (){
			return {taskName:"first"}			
		},
		methods:{
			handleClick(){

			}
		},
		components:{
			Tabs, TabPane,mytabpane
		}
	}
</script>