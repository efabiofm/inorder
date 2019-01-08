 // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'tipoPlato');
        data.addColumn('number', 'cantidadVentas');
        data.addRows([
          ['Platos Fuertes', 23],
          ['Cocteles', 31],
          ['Promociones', 15],
        ]);

        // Set chart options
        var options = {
          'title':'Distribución de Ventas del Día',
          backgroundColor: 'transparent',
          'width':450,
          'height':300,
          is3D: true,
          slices: {
              0:{color: '#4B000F'},
              1:{color: '#FA023C'},
              2:{color: '#413D3D'}
            }   
           
        };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('contenedorGrafico'));
        chart.draw(data, options);
      }
  