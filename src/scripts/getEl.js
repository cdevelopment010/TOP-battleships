function getElLoc( el ) {
    const rect = el.getBoundingClientRect(); 
    return {
        left: rect.left + window.scrollX, 
        right: rect.right - window.scrollX, 
        top: rect.top + window.scrollY, 
        bottom: rect.bottom - window.scrollY
    }
}

module.exports = getElLoc; 