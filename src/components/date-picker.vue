<template>
	<div class="row">
        <label for="" class="col-sm-2 control-label">
            开始时间
        </label>
        <div class="col-sm-3">
            <el-date-picker
		      v-model="startDate"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="starPickerOptions">
		    </el-date-picker>
        </div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div class="col-sm-3 datepick-right">
            <el-date-picker
		      v-model="endDate"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="endPickerOptions">
		    </el-date-picker>
        </div>
     </div>
</template>
<script>
import Vue from 'vue'
import {DatePicker} from 'element-ui'
import _ from 'lodash'
Vue.use(DatePicker);
export default {
    data() {
      return {
        starPickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 3600 * 1000 * 24 * 14;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        endPickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 3600 * 1000 * 24 * 14;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        startDate: '',
        endDate: '',
      };
    },
    watch:{
      startDate() {
        this.endPickerOptions.disabledDate = (time)=>{
          if(_.trim(this.startDate)==''){
                return time.getTime() < Date.now() - 3600 * 1000 * 24 * 14;
          }else{
                return time.getTime() < new Date(_.trim(this.startDate));
          }
        }
        this.checkDate();
      },
      endDate(){
        this.checkDate();
      }
    },
    methods:{
      checkDate(){
        if(_.trim(this.startDate)!=''&& _.trim(this.endDate)!=''){
          if(new Date(this.startDate) > new Date(this.endDate)){
            this.endDate = '';
          }
        }
        this.$emit('date-change',{startDate:this.startDate,endDate:this.endDate});
      }
    }
  };
</script>
<style scoped>
	.datepick-right{
		padding-left: 0px;
	}
	span{
		display: inline-block;
	    float: left;
	    margin-top: 8px;
	    margin-left: 10px;
	}
</style>