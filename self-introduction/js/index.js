
google.load('visualization', '1', {packages:['geochart']});
google.setOnLoadCallback(graphChart);

function graphChart() {
  var data = google.visualization.arrayToDataTable([
    ['都道府県', 'コメント'],
    ['京都', '生まれて約24年間住んでたところ'],
    ['滋賀', '3歳から幼稚園年長まで'],
    ['大分', 'なんか永徳さんがいっぱいいるらしい'],
    ['東京', '母の実家(今は千葉)']
  ]);

  var option = {
    region: 'JP',
    resolution: 'provinces',
    colorAxis: {colors: ['#e7711c', '#4374e0']}
  };

  var graph = new google.visualization.GeoChart(document.getElementById('drawChart'));
  graph.draw(data, option);
}
