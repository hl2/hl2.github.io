var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '315',
        videoId: 'E0Hgz7FIazI',
        events: {
            'onReady': onPlayerReady
        },
        playerVars: {
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          // color: 'white',
        },
    });
}

function onPlayerReady(event) {
    // event.target.playVideo();
    // setTimeout(stopVideo, 6000);
}

// function stopVideo() {
//   player.stopVideo();
// }
