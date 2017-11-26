function bar(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        title: {
            text: title,
            x: 'center',
        },
        color:['#31859C'],
        xAxis: [{
            type: 'category',
            data: x_data
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'Contributed',
            type: 'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    distance: 5,
                    fontSize:16,
                    formatter: function(data) {
                        var value = Math.round(data.value)
                        var num = (value || 0).toString(),
                            result = '';
                        while (num.length > 3) {
                            result = ',' + num.slice(-3) + result;
                            num = num.slice(0, num.length - 3);
                        }
                        if (num) { result = num + result; }
                        return result;
                    },

                }
            },
            data: data,
        }]
    };

    myChart.setOption(option);

    window.onload = res();

    function res() {
        myChart.resize();

        // myChartF.resize();
    }

    window.onresize = function() {
        myChart.resize();

    }
}

function line(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


    myChart.setOption(option);

    window.onload = res();

    function res() {
        myChart.resize();

        // myChartF.resize();
    }

    window.onresize = function() {
        myChart.resize();

    }
}