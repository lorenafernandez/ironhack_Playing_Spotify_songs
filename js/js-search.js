
$("#js-search").on("click",function(){
	var track =  document.getElementById("title_search").value;

	console.log(track);

	var request = $.get('https://api.spotify.com/v1/search?type=track&query=' + track);
	request.done(handleTrack);
});


function handleTrack (result){
	console.log('WELL DONE!!!', result);
	if (result.tracks.items.length>0){
	$("#sr-only").empty();
	var artist_name = result.tracks.items[0].artists[0].name;
	var title = result.tracks.items[0].album.name;
	var image_url = result.tracks.items[0].album.images[0].url;
	var track = result.tracks.items[0].name;
	var track_url = result.tracks.items[0].preview_url;
	console.log(track_url);
	document.getElementById('author').innerHTML = artist_name;
	document.getElementById('my_title').innerHTML = title;
	$('#artist_image').attr('src', image_url);
	$('#js-player').attr('src', track_url);

	document.getElementById('modal-title').innerHTML = artist_name;
	document.getElementById('modal-body').innerHTML = "Album: " + title;
	document.getElementById('additional-information').innerHTML = "Track :" + track;
}
else {
	document.getElementById('sr-only').innerHTML = "Introduce a valid track name!!!";
};

};

$( "#btn-play" ).click(function() {	
   var clicks = $(this).data('clicks');
   if (clicks){
	  $(this).toggleClass( "playing" );
	  document.getElementById("js-player").pause();
   }
   else
   {
	  $( this ).toggleClass( "disabled" );
  	  document.getElementById("js-player").play();	
	}
	$(this).data("clicks", !clicks);
});


var audio = document.getElementById('js-player');
audio.addEventListener('timeupdate', function (){  
	var currentTime = audio.currentTime;
	$('#seekbar_id').attr('value', currentTime);
});