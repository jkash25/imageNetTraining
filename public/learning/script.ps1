# Get all folders in the current directory
$folders = Get-ChildItem -Directory

foreach ($folder in $folders) {
    $folderName = $folder.Name

    # Create .js, .html, and .css files named after the folder
    New-Item -Path $folder.FullName -Name "$folderName.js" -ItemType File
    New-Item -Path $folder.FullName -Name "$folderName.html" -ItemType File
    New-Item -Path $folder.FullName -Name "$folderName.css" -ItemType File
}