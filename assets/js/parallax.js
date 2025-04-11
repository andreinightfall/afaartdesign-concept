function getOffSet() {
    var _offset = 450;
    var windowHeight = window.innerHeight;

    if (windowHeight > 500) {
        _offset = 400;
    }
    if (windowHeight > 680) {
        _offset = 300
    }
    if (windowHeight > 830) {
        _offset = 210;
    }

    return _offset;
}

function setParallaxPosition($doc, multiplier, $object) {
    var offset = getOffSet();
    var from_top = $doc.scrollTop(),
        bg_css = 'center ' + (multiplier * from_top - offset) + 'px';
    $object.css('background-position', bg_css);
}