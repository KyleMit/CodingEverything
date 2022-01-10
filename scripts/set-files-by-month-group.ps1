
Get-ChildItem * | ForEach-Object {
    $destination = "$($_.DirectoryName)\$( $_.LastWriteTime.Date.ToString('yyyy-MM'))"
    New-Item $destination -ItemType Directory -Force
    Move-Item $_.FullName  $destination
}
