
var contextMenuItem = {
    "id": "inzDEX",
    "title": `Caută definiția cuvântului selectat în dicționar.`,
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "inzDEX" && clickData.selectionText){
        var dexUrl = "https://dexonline.ro/definitie/";
        var word = clickData.selectionText;
        chrome.tabs.create({ url: dexUrl+word});
    }
})