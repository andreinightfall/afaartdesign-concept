(function() {
  var path = '../libs/jquery/jquery.js';
  var match = location.search.match(/[?&]jquery=([^&]+)/);
  if (match) {
    var version = encodeURIComponent(match[1]); // Sanitize input
    path = 'https://code.jquery.com/jquery-' + version + '.js';
  }

  var script = document.createElement('script');
  script.src = path;
  script.async = false; // Make sure it's blocking like document.write was
  document.head.appendChild(script);
})();