function scanFiles() {
  // Enter URL of spreadsheet and destination sheet name
  var spreadsheetUrl = "LINK TO YOUR SPREADSHEET HERE";
  var sheetName = "YOUR SHEET'S NAME HERE";
  var sheet = getSheet(spreadsheetUrl, sheetName);

  // Set up names of the columns
  var columnNames = ["id", "name", "link"];

  // ID of the Google Drive folder containing files
  var sourceFolderId = "TAKE FOLDER ID FORM GOOGLE SHEET URL";
  var folder = DriveApp.getFolderById(sourceFolderId);

  var fileDetails = [];

  fileDetails.push(["Folder", folder.getName(), ""]);

  // recursively scan Google Drive Directory
  fileDetails = fileDetails.concat(printFolders(folder, []));

  Logger.log(fileDetails);

  // output the data to spreadsheet
  writeToSheet(sheet, columnNames, fileDetails);

  SpreadsheetApp.getUi().alert("All files are imported");
}

// recursive Directory scanning function
function printFolders(folder, fileList) {
  var folders = folder.getFolders();

  while (folders.hasNext()) {
    var currFolder = folders.next();
    fileList = printFolders(currFolder, fileList);
  }

  return fileList.concat(getFilesFromFolder(folder));
}

// getting the files list from folder with ID, Name and downloadable URL
function getFilesFromFolder(folder) {
  var files = [];
  var folderName = folder.getName();
  var fileIterator = folder.getFiles();
  files.push(["Folder", folderName, ""]);
  while (fileIterator.hasNext()) {
    var file = fileIterator.next();
    files.push([
      file.getId(),
      file.getName(),
      file.getDownloadUrl().replace("&gd=true", "")
    ]);
  }

  return files;
}

function getSheet(spreadsheetUrl, sheetName) {
  var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
  var sheet = ss.getSheetByName(sheetName);
  return sheet;
}

function writeToSheet(sheet, headers, data) {
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.clearContent();
  headerRange.setValues([headers]);
  var dataRange = sheet.getRange(1, 1, data.length, headers.length);
  dataRange.setValues(data);
  return sheet;
}
