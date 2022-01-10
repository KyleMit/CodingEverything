# https://git-scm.com/docs/git-for-each-repo

$dirName = Split-Path -Path ./ -Leaf
$repoProp = "$dirName.repos"

$repos = Get-ChildItem . `
    -Attributes Directory+Hidden `
    -ErrorAction SilentlyContinue `
    -Filter ".git" `
    -Recurse

git config --global --unset-all $repoProp
$repos | ForEach-Object { git config --global --add $repoProp $_.Parent.FullName }

# Example Output
#
# [github]
# 	repos = C:\\Users\\kylemit\\Documents\\code\\github\\2010.vtcodecamp.org
# 	repos = C:\\Users\\kylemit\\Documents\\code\\github\\2011.vtcodecamp.org
