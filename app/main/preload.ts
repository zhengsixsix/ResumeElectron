const customTitlebar = require('custom-electron-titlebar')

window.addEventListener('DOMContentLoaded', () => {
    console.log(customTitlebar);

    // Title bar implemenation
    const titlebar = new customTitlebar.Titlebar({
        backgroundColor: '#27292d',
        itemBGColor:'#ffffff'
    });
    titlebar.updateTitle('Resume builder');
});