/*!
 * PMI_Index v1
 * Copyright 2017/11/16 Dand
 */


var pulse = new Vue({
    el: '#body_div',
    data: {
        brandName: '',
        brandNum: '',
        brandItems: [],
        startNum: 0,
        endNum: 5,
        ChannelRank:[],
        ActiveMedia:[],
        tablesData:[],
        Sentiment_Index_brandName:'',
        Sentiment_Index_brandValue:'',
        Sentiment_Index_List:[],
        Sentiment_Index_List_selected:'上汽通用',
        Brand_Content_List_selected:'上汽通用',
        Sentiment_Index_Value:{
            Brand:{
                value:'',
                name:''
            },
            Neutral:{
                value:'',
                name:''
            },
            Negative:{
                value:'',
                name:''
            },
            Positive:{
                value:'',
                name:''
            }
        },
        SentimentRank:[],
        word_array: [

            { text: "Lorem", weight: 100 },

            { text: "Ipsum", weight: 9, },

            { text: "Dolor", weight: 6, },

            { text: "Sit", weight: 7 },

            { text: "Amet", weight: 5 }

            // ...as many words as you want

        ]
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
        },
        formatPercent: function(value) {
            return value +'%';
        }
    },
    computed: {
        filteredItems: function() {
            return this.brandItems.slice(this.startNum, this.endNum)
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
            $('.sidebar').css('height', height)
            $('.q-mark').hover(function() {
                $(this).siblings('.remark').show()
            }, function() {
                $(this).siblings('.remark').hide()
            })
            //日期选择框初始化和拿数
            // $('#datepicker').dateRangePicker().bind('datepicker-apply', function(event, obj) {
            //     console.log(obj);
            // })

            this.$http.get('http://10.143.103.231:8080/PMII/OnloadChartServlet.do').then(function(data) {
                //Buzz Trend
                this.brandName = data.body['buzz header2'].BrandName;
                this.brandNum = data.body['buzz header2'].Brandvalue;
                this.brandItems = data.body['buzz header2'].OtherValue;
                line('Buzz_Trend_chart',data.body['BuzzChart'].legend,data.body['BuzzChart'].xAxis,data.body['BuzzChart'].series);
            	
                //Media_Channel
                radar('Media_Channel_chart',data.body['MediaDistributionRadarChart'].legend,data.body['MediaDistributionRadarChart'].max,data.body['MediaDistributionRadarChart'].series);
            	this.ChannelRank = data.body.ChannelRank;
            	this.ActiveMedia = data.body.ActiveMedia;


                //Media Sentiment
                // this.Sentiment_Index_brandName = data.body.SentimentIndex.
                this.Sentiment_Index_List = data.body.SentimentIndex.xLayout;

                this.Sentiment_Index_Value.Brand.name = data.body.SentimentIndex.SentimentIndex.name;
                this.Sentiment_Index_Value.Brand.value = data.body.SentimentIndex.SentimentIndex.value;

                this.Sentiment_Index_Value.Neutral.name = data.body.SentimentIndex.Neutral.name;
                this.Sentiment_Index_Value.Neutral.value = data.body.SentimentIndex.Neutral.value;

                this.Sentiment_Index_Value.Negative.name = data.body.SentimentIndex.Negative.name;
                this.Sentiment_Index_Value.Negative.value = data.body.SentimentIndex.Negative.value;

                this.Sentiment_Index_Value.Positive.name = data.body.SentimentIndex.Positive.name;
                this.Sentiment_Index_Value.Positive.value = data.body.SentimentIndex.Positive.value;
                
                this.SentimentRank = data.body.SentimentRank
                pie('Media_Sentiment_chart',data.body.SentimentIndex.legend.data,'abc',data.body.SentimentIndex.series);

                line('Sentiment_Trend_chart',data.body.SentimentTrendChart.legend,data.body.SentimentTrendChart.xAxis,data.body.SentimentTrendChart.series);


            });

            // $.get('http://10.143.103.231:8080/PMII/OnloadChartServlet.do',function(data){
            // 	 console.log(data)
            // })





            // line('Buzz_Trend_chart');
            // line('Sentiment_Trend_chart');
            // line('Product_Concerns_chart');
            // radar('Media_Channel_chart');
            // pie('Media_Sentiment_chart');
            // radar('Product_chart');

            $("#Hot_Words_chart_box").jQCloud(this.word_array);
        },
        nextBuzz: function() {
            $('.Buzz_Trend_slide_per').show();
            if (this.endNum <= this.brandItems.length - 1) {
                this.startNum += 1;
                this.endNum += 1;
            } else {
                alert('没数了')
            }
        },
        perBuzz: function() {
            if (this.startNum >= 1) {
                this.startNum -= 1;
                this.endNum -= 1;
            } else if (this.startNum == 0) {
                this.startNum = 0;
                this.endNum = 5;
                $('.Buzz_Trend_slide_per').hide();
            }
        },

    }
})

window.onresize = function() {
    var width = $("#Buzz_Trend").css('width').replace('px', '');
    $("#Buzz_Trend_slide_ul").css('width', width - 500 + 'px');
    console.log($("#Buzz_Trend_slide_ul").css('width'))

}