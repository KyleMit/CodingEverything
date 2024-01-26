# Github CLI


## Links

* [cli.github.com](https://cli.github.com)
* [github/hub](https://github.com/github/hub)
* [cli/cli](https://github.com/cli/cli)


## Installation

[Installation on Windows](https://github.com/cli/cli#windows)

## Questions

* [GitHub CLI vs hub](https://github.com/cli/cli/blob/trunk/docs/gh-vs-hub.md)

  ```bash
  gh repo clone github/hub
  git clone git@github.com:github/hub.git
  ```

* [`gh pr view --comments` should show all comments](https://github.com/cli/cli/issues/5788)

  **Workaround**: [List review comments on a pull request](https://docs.github.com/en/rest/pulls/comments?apiVersion=2022-11-28#list-review-comments-on-a-pull-request)

  ```bash
  gh api \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    /repos/OWNER/REPO/pulls/PULL_NUMBER/comments
  ```
