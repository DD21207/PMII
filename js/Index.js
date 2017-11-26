/*!
 * PMI_Index v1
 * Copyright 2017/11/16 Dand
 */


var pulse = new Vue({
    el: '#body_div',
    data: {
        brandName: '上汽通用',
        brandNum: '1345',
        items: [{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'aaa',
        	Value:'1245'
        },{
        	Name:'bbb',
        	Value:'1245'
        }],
        startNum:0,
        endNum:5
    },
    filters: {
        formatNum: function(value) {
            var value = Math.round(value)
            var num = (value || 0).toString(),
                result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return result;
        }
    },
    computed: {
        filteredItems: function () {
        	return this.items.slice(this.startNum, this.endNum)
      	}
    },
    mounted: function() {
        this.$nextTick(function() {
            pulse.load()
        })
    },
    methods: {
        load: function() {
        	var height = $(document).height();
        	$('.sidebar').css('height',height)
            //日期选择框初始化和拿数
            $('#datepicker').dateRangePicker().bind('datepicker-apply', function(event, obj) {
                console.log(obj);
            })
            $('.q-mark').hover(function() {
                $(this).siblings('.remark').show()
            }, function() {
                $(this).siblings('.remark').hide()
            })
            line('Buzz_Trend_chart');
        },
        nextBuzz:function(){
        	$('.Buzz_Trend_slide_per').show();
        	if(this.endNum <= this.items.length-1){
 				this.startNum +=1;
 				this.endNum +=1;
 			}else {
 				alert('没数了')
 			}       
        },
        perBuzz:function(){
 			if(this.startNum >= 1){
 				this.startNum -=1;
 				this.endNum -=1;
 			}else if(this.startNum==0){
 				this.startNum= 0;
 				this.endNum=5;
 				$('.Buzz_Trend_slide_per').hide();
 			}
 			console.log(this.startNum)
        	console.log(this.endNum)             
        },

    }
})

window.onresize = function() {
    var width = $("#Buzz_Trend").css('width').replace('px','');
    		$("#Buzz_Trend_slide_ul").css('width', width - 500 + 'px');
    		console.log($("#Buzz_Trend_slide_ul").css('width'))
    		
}