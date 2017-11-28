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
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'aaa',
            Value: '1245'
        }, {
            Name: 'bbb',
            Value: '1245'
        }],
        startNum: 0,
        endNum: 5,
        tablesData: [{
                Rank: 1,
                Name: 'Mumbai',
                Value: 1075,
                'Value%': '100%'
            },
            {
                Rank: 1,
                Name: 'Mumbai',
                Value: 1075,
                'Value%': '100%'
            },
            {
                Rank: 1,
                Name: 'Mumbai',
                Value: 1075,
                'Value%': '100%'
            },
            {
                Rank: 1,
                Name: 'Mumbai',
                Value: 1075,
                'Value%': '100%'
            },
            {
                Rank: 1,
                Name: 'Mumbai',
                Value: 1075,
                'Value%': '100%'
            }
        ],
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
        }
    },
    computed: {
        filteredItems: function() {
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
            $('.sidebar').css('height', height)
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
            line('Sentiment_Trend_chart');
            line('Product_Concerns_chart');
            radar('Media_Channel_chart');
            pie('Media_Sentiment_chart');
            radar('Product_chart');
            
            $("#Hot_Words_chart_box").jQCloud(this.word_array);
        },
        nextBuzz: function() {
            $('.Buzz_Trend_slide_per').show();
            if (this.endNum <= this.items.length - 1) {
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
            console.log(this.startNum)
            console.log(this.endNum)
        },

    }
})

window.onresize = function() {
    var width = $("#Buzz_Trend").css('width').replace('px', '');
    $("#Buzz_Trend_slide_ul").css('width', width - 500 + 'px');
    console.log($("#Buzz_Trend_slide_ul").css('width'))

}