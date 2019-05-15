# Scans google drive directories and dumps them to Google spreadsheet

## Use cases

1. You need a downloadable links for the files you serve from Google Drive
2. You create a feed that needs file names of links
3. Whatever other reason to have a list of files with IDs and downloadable links from you Google Drive.

## Here is how it works

[Demo](https://github.com/artemkovalyov/google-script/blob/master/scan-gdrive-directory-and-output-to-gspreadsheet/demo.gif)

## How to use it

1. Ad this script to your spreadsheet and create `onOpen()` even for same function
2. Update the script with spreadsheet link, sheet name, folder ID. Look for text in capital letters.
3. Give the permission as Google requires.
4. Re-open your spreadsheet to see the new menu appear after it fully loads.
5. Use the relevant menu option to get your folder liste.

Mind that not every file can have downloadable link.
