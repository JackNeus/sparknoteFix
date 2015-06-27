console.log("Sparknotes is for Studying!");
src = document.documentElement.outerHTML;
var container = document.querySelector('div[id="ad-skin-bg"');
var badPanel = container.querySelector('div[class="col-1-3 last"]');
badPanel.remove();
var badPanels = container.querySelectorAll('div[class="white-background border-blue blog-feature"');
for(var i = 0; i < badPanels.length; i++){
	badPanels.item(i).remove();
}