"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()

  $('div #cars').empty();
  fetchJSON();
  fetchJSON();
  $('button.btn').click(function (e) {
    fetchJSON();
  });
});
