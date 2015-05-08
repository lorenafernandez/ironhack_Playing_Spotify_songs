#Playing Spotify songs

=============================================

## Iteration #1: Song search
--------------------------------------------

1. Make a page with a search form.
2. When user searches, search the Spotify API for songs matching the search term.
3. Use the first song in the results.
4. Update the player HTML with the song and artist info.

## Iteration #2: Audio playback 
--------------------------------------------

1. When the user searches, add the song's preview to the `<audio>` tag's `src`.
2. When the user clicks the play button, select the `<audio>` tag with jQuery and trigger playback.
3. Update the play button's appearance by adding the `playing` class.
4. When the user clicks again, trigger a pause on the audio element.
5. When pausing remove the play button's `playing` class.
6. Once your click event is set up, remove the `disabled` class from the play button.

## Iteration #3: Progress bar 
--------------------------------------------

1. Make the artist name a button or link.
2. When a user clicks the artist name, make a request to the Spotify API to get the artist's information. Show a Bootstrap modal containing the artist's information.
