(function(){
	/**
	*  Module MyApp
	*
	* Description
	*/
	var app=angular.module('MyApp', ['moduletemplate','ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/dashboard.html',
				controller: function(){
					// Rentabilite chart
					$(function () {
		                $('#rentabilite').highcharts({
		                    chart: {
		                        type: 'bar'
		                    },
		                    title: {
		                        text: 'Rentabilité'
		                    },
		                    subtitle: {
		                        text: 'Source: SAgraphic Accounting'
		                    },
		                    xAxis: {
		                        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
		                        title: {
		                            text: null
		                        }
		                    },
		                    yAxis: {
		                        min: 0,
		                        title: {
		                            text: 'Population (millions)',
		                            align: 'high'
		                        },
		                        labels: {
		                            overflow: 'justify'
		                        }
		                    },
		                    tooltip: {
		                        valueSuffix: ' millions'
		                    },
		                    plotOptions: {
		                        bar: {
		                            dataLabels: {
		                                enabled: true
		                            }
		                        }
		                    },
		                    legend: {
		                        layout: 'vertical',
		                        align: 'right',
		                        verticalAlign: 'top',
		                        x: -40,
		                        y: 100,
		                        floating: true,
		                        borderWidth: 1,
		                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
		                        shadow: true
		                    },
		                    credits: {
		                        enabled: false
		                    },
		                    series: [{
		                        name: 'Year 1800',
		                        data: [107, 31, 635, 203, 2]
		                    }, {
		                        name: 'Year 1900',
		                        data: [133, 156, 947, 408, 6]
		                    }, {
		                        name: 'Year 2008',
		                        data: [973, 914, 4054, 732, 34]
		                    }]
		                });
		            });

					//Chifre d'Affaires chart
					$(function () {
		                $('#chifra').highcharts({
		                    chart: {
		                        plotBackgroundColor: null,
		                        plotBorderWidth: 1,//null,
		                        plotShadow: false
		                    },
		                    title: {
		                        text: 'Chiffre d\' Affaires'
		                    },
		                    tooltip: {
		                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		                    },
		                    plotOptions: {
		                        pie: {
		                            allowPointSelect: true,
		                            cursor: 'pointer',
		                            dataLabels: {
		                                enabled: true,
		                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                                style: {
		                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                                }
		                            }
		                        }
		                    },
		                    series: [{
		                        type: 'pie',
		                        name: 'Browser share',
		                        data: [
		                            ['Firefox',   45.0],
		                            ['IE',       26.8],
		                            {
		                                name: 'Chrome',
		                                y: 12.8,
		                                sliced: true,
		                                selected: true
		                            },
		                            ['Safari',    8.5],
		                            ['Opera',     6.2],
		                            ['Others',   0.7]
		                        ]
		                    }]
		                });
		            });


					/* Widget close */

					$('.wclose').click(function(e){
					  e.preventDefault();
					  var $wbox = $(this).parent().parent().parent();
					  $wbox.hide(100);
					});

					/* Widget minimize */

					$('.wminimize').click(function(e){
						e.preventDefault();
						var $wcontent = $(this).parent().parent().next('.widget-content');
						if($wcontent.is(':visible')) 
						{
						  $(this).children('i').removeClass('fa fa-chevron-up');
						  $(this).children('i').addClass('fa fa-chevron-down');
						}
						else 
						{
						  $(this).children('i').removeClass('fa fa-chevron-down');
						  $(this).children('i').addClass('fa fa-chevron-up');
						}            
						$wcontent.toggle(500);
					}); 
				}
			})
	});

})();