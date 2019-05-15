function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu("ArtMenu")
    .addItem("Scan Files", "scanFiles")
    .addToUi();
}
