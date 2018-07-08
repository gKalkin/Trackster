var Trackster = {};

const API_Key = "b1065b2c652b55899ce83bc24f3943b2"

$(document).ready(function() {
  $('#search-btn').click(function() {
    Trackster.searchTracksByTitle($("#search-input").val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  for(var index = 0; index < tracks.length; index++) {
    console.log(tracks[index]);
    var track_html = '<div class="row track">' +
      '<div class="col-xs-1 col-xs-offset-1 play-btn">' +
      '<a href="' + tracks[index].url + '"><i class="fa fa-play-circle-o fa-2x"></i></a></div>' +
      '<div class="col-xs-2 track-info">' + tracks[index].name + '</div>' +
      '<div class="col-xs-2 track-info">Test</div><div class="col-xs-2 track-info">Test</div>' +
      '<div class="col-xs-2 track-info">' +
      '<img src="https://images-na.ssl-images-amazon.com/images/I/61wPDPwiBSL._SS500.jpg" alt="" ' +
      'height="64" width="64"></div>' +
      '<div class="col-xs-2 track-info">Test</div></div>';

      $('#track-list').append(track_html)
    }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_Key + "&format=json",
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  })
};
