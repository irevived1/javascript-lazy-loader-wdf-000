"use strict";

// this is the base API url
window.page = 1;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  $('div #cars').append("<div class=\"row\"></div>");
  var tmp = $('#cars div.row:last-child');
  var l = carsJSON.length
  $.each(carsJSON,function (index,car) {
    // var a1 = ("<h2>"+carsJSON[(l+index)%l].Make+"</h2>");
    // var a2 = ("<p><strong>Model:</strong> "+carsJSON[(l+index)%l].Model+"</p>");
    // var a3 = ("<p><strong>Year:</strong> "+carsJSON[(l+index)%l].Year+"</p>");
    var a1 = ("<h2>"+car.Make+"</h2>");
    var a2 = ("<p><strong>Model:</strong> "+car.Model+"</p>");
    var a3 = ("<p><strong>Year:</strong> "+car.Year+"</p>");
    tmp.append("<div class=\"col-md-4 car\">" + a1 + a2 + a3 + "</div>");
    // var tmp2 = $('#cars div.row:last-child div.col-md-4:last-child');
  });

  // debugger;
  return ("<div class=\"row\">"+$('div #cars div.row:last-child').html()+"</div>");
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  formatCars(carsJSON);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + window.page++ + '/3';

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function (cars) {
      addCarsToDOM(cars);
    },
    error: function (error) {
      $('body').text("failed to load some stuff:" + error)
    }
  });
}
