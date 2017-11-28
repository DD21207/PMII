function bar(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        color: ['#31859C'],
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
                    fontSize: 16,
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
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
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


function radar(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
            orient: 'vertical',
            left: 'left',
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: 'sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Techology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配（Allocated Budget）'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                }
            ]
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


function pie(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
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



function word(id, title, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));


    option = {
        tooltip: {
            show: true
        },
        series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: [{
                    name: "Sam S Club",
                    value: 10000,
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    }
                },
                {
                    name: "Macys",
                    value: 6181,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Amy Schumer",
                    value: 4386,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Jurassic World",
                    value: 4055,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Charter Communications",
                    value: 2467,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Chick Fil A",
                    value: 2244,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Planet Fitness",
                    value: 1898,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Pitch Perfect",
                    value: 1484,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Express",
                    value: 1112,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Home",
                    value: 965,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Johnny Depp",
                    value: 847,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Lena Dunham",
                    value: 582,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Lewis Hamilton",
                    value: 555,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "KXAN",
                    value: 550,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Mary Ellen Mark",
                    value: 462,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Farrah Abraham",
                    value: 366,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Rita Ora",
                    value: 360,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Serena Williams",
                    value: 282,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "NCAA baseball tournament",
                    value: 273,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Point Break",
                    value: 265,
                    itemStyle: createRandomItemStyle()
                }
            ]
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


function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}