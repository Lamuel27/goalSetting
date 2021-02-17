$(document).ready(function () {
    var volumeChart;

    var customerValue = document.getElementById('customerValue');
    var revGoal = document.getElementById('revGoal');
    
    function calculateRoi() {
    var var1 = document.getElementById('avgSwitch');

    var avgSwitch = revGoal.value / customerValue.value / 12;

    var1.innerHTML= avgSwitch.toFixed();

    return false;
    }
    

    volumeChart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'bar',
            backgroundColor: 'none',
            borderColor: '#e5e5e5',
            borderRadius: 0,
            borderWidth: 0,
            marginBottom: 20,
            marginTop: -36,
            spacingLeft: 10,
            spacingRight: 10,
            spacingTop: 0
        },
        title: {
            text: ''
        },
        xAxis: {
            allowDecimals: true,
            gridLineWidth: '0',
            lineWidth: '0',
            min: 0,
            tickLength: '0',
            tickWidth: '1',
            labels: {
                enabled: false
            },
            title: {
                enabled: true,
                text: ''
            }
        },
        yAxis: {
            allowDecimals: true,
            lineWidth: '0',
            max: 236250,
            min: 0,
            tickWidth: '1',
            title: {
                enabled: true,
                text: ''
            },
            plotLines: [{
                color: '#000000',
                dashStyle: 'ShortDash',
                value: 236250,
                width: 4,
                zIndex: 4,
                label: {
                    text: 'Goal: $236,250.00',
                    rotation: 0,
                    textAlign: 'right',
                    verticalAlign: 'bottom',
                    x: -8,
                    y: -12,
                    style: {
                        color: '#000000',
                        fontSize: '12px'
                    }
                }
            }]
        },
        plotOptions: {
            series: {
                allowPointSelect: false,
                animation: true,
                connectEnds: true,
                connectNulls: false,
                enableMouseTracking: true,
                id: 'j_idt332',
                selected: false,
                shadow: false,
                showCheckbox: false,
                showInLegend: true,
                stacking: 'normal',
                stickyTracking: true,
                visible: true
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            layout: 'horizontal',
            enabled: false,
            floating: true,
            reversed: true,
            shadow: true
        },
        exporting: {
            enableImages: true,
            enabled: false
        },
        tooltip: {
            animation: true,
            enabled: true,
            followPointer: true,
            followTouchMove: false,
            footerFormat: false,
            formatter: function () {
                return this.series.name + ': ' + formatCurrency(this.y);
            },
            shadow: true,
            shared: false,
            useHTML: false,
            valueDecimals: 0
        },
        series: [{
            type: 'column',
            enableMouseTracking: true,
            name: 'Remaining',
            data: [{
                y: 118420.000000,
                color: '#9d2314'
            }]
        }, {
            type: 'column',
            enableMouseTracking: true,
            name: 'Total Volume',
            data: [{
                y: 117830,
                color: '#85c441'
            }]
        }, ]
    });


var formatCurrency = function (val, symbol) {
    var digits = parseFloat(val).toFixed(2).split('.');
    digits[0] = digits[0].split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
    return ((symbol == null ? '$' : symbol) + digits.join('.'));
};

var formatCurrency = function (val, symbol) {
    var digits = parseFloat(val).toFixed(2).split('.');
    digits[0] = digits[0].split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
    return ((symbol == null ? '$' : symbol) + digits.join('.'));
};

FDLIC = {};
FDLIC.Charts = {
    destroyOverlappedDataLabels: function (chart) {
        var lastPoint = 0;
        $.each(chart.series, function (i, series) {
            $.each(series.points.reverse(), function (j, point) {
                if ((point.plotY - lastPoint) < point.dataLabel.width) {
                    point.dataLabel.destroy();
                }

                lastPoint = point.plotY;
            });
        });
    }
};

$('.roiAnalizerContainer').on('click','#ctaCalculate',function(){
    e.preventDefault();
    calculateRoi();
 });
});