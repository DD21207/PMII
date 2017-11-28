function bar(id,legend, x_data, data) {
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


function line(id, legend, x_data, data) {
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
            data: legend
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
            data: x_data
        }],
        yAxis: [{
            type: 'value'
        }],
        series: data
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


function radar(id, legend, x_data, data) {
    var myChart = echarts.init(document.getElementById(id));
    option = {
        tooltip: {},
        legend: {
            data: legend,
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
            indicator:x_data
        },
        series: data
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


function pie(id, legend, x_data, data) {
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
            data: legend
        },
        series: data
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


