window.smoothScroll = function (target) {
    var scrollContainer = target;

    for (let i = 1; scrollContainer.scrollTop == 0; i++) {
        if (scrollContainer) {
            scrollContainer = scrollContainer.parentNode;
        } else {
            return
        }
        scrollContainer.scrollTop += i
    }

    var targetY = 0;

    if (target !== scrollContainer) {
        targetY += target.offsetTop;
    }

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
