function doGet() {
    var page = HtmlService.createTemplateFromFile('page').evaluate();
    page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    page.setSandboxMode(HtmlService.SandboxMode.IFRAME).addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return page;
}
function loadData() {
  var data;
   return data
};

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}