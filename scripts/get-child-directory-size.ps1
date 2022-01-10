$dirs = Get-ChildItem -Directory
foreach ($d in $dirs) {
  '{0,15:N0}' -f ((Get-ChildItem $d -File -Recurse -Force | Measure-Object length -sum).sum) + "`t`t$d"
}

$dirs = Get-ChildItem -Directory
$sizes = $dirs | ForEach-Object {
    Return [PSCustomObject]@{
        Name = $_.Name
        Size = [Math]::Round((Get-ChildItem $_ -Recurse -Force | Measure-Object Length -Sum).Sum / 1Mb, 2)

    }
}
$sizes | Sort-Object -Property Size -Descending
