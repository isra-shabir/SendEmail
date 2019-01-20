/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var startCol = 1; // First col of data to process
  var numRows = 4; // Number of rows to process
  var numCols = 3; // Number of cols to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, numCols);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0]; // First column
    var subject = row[1]; // Second column
    var message = row[2]; // Third column

    MailApp.sendEmail(emailAddress, subject, message);
  }
}
