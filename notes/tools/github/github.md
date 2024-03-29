# Github


## Github Developer Program

[GitHub Developer Program](https://docs.github.com/en/developers/overview/github-developer-program)
[Guides](https://docs.github.com/en/rest/guides)

37d356baa1326f03e7c629bbd63c413ac39bc29f


## Github Pages & Jekyll

[Setting up a GitHub Pages site with Jekyll](https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll)

> Jekyll supports Markdown and Liquid, a templating language that loads dynamic content on your site. For more information, see Jekyll.

## Custom ReadMes

* [GitHub auto README with ruby, github-actions and dev.to API](https://dev.to/pashagray/github-auto-readme-with-ruby-github-actions-and-dev-to-api-1leo)
* [How to Automate Your GitHub Profile README](https://www.freecodecamp.org/news/go-automate-your-github-profile-readme/)
* [Example - sujeet-agrahari](https://github.com/sujeet-agrahari/sujeet-agrahari/blob/master/README.md)

## Searching Issues & Pull Requests

* [Understanding the search syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
* [Searching issues and pull requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)


## Configuration

### Example

**`_config.yml`**:

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

### Themes

[Supported Themes Demo](https://jsfiddle.net/KyleMit/75gLker1/show)
[Pages Themes Repo](https://github.com/pages-themes)

## Topics

[Covid-19](https://github.com/topics/covid-19)
[jekyll-theme](https://github.com/topics/jekyll-theme?o=desc&s=stars)


## Gist

[gist.github.com](https://gist.github.com/)
[KyleMit Gists](https://gist.github.com/KyleMit)


## Blocks

<https://blocks.githubnext.com/>

## Questions

* [How to change tab size on GitHub?](https://stackoverflow.com/q/8833953/1366033)

  * You can append `?ts=2` or `?ts=4` to the URL to change the tab-size.

  * Add stylish extension

  ```css
  * { tab-size: 4 }
  ```

* [How to I get Github to notify me of review requests?](https://stackoverflow.com/q/62421084/1366033)

  Settings > Notifications > Pull Request Reviews

* [Publicizing or hiding organization membership](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership)

  My Orgs > Org > People > Me > Public

* [How do I find the default branch for a repository](https://stackoverflow.com/q/16500461/1366033)

  ```bash
  gh repo list <Your_Name> --json nameWithOwner,defaultBranchRef
  ```

* [Renaming a branch in GitHub](https://stackoverflow.com/a/71180144/1366033)

  ```bash
  gh api "repos/{owner}/{repo}/branches/{branch}/rename" -f new_name={newBranch}
  ```


* [How to ignore whitespace in github when comparing?](https://stackoverflow.com/q/37007300/1366033)

  * [Allow users to set "Hide whitespace changes" by default](https://github.com/github/feedback/discussions/5486)

* [Search repository by topic name](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories#search-by-repository-name-description-or-contents-of-the-readme-file)

  `jquery in:topics` - matches repositories labeled with "jquery" as a topic

* [Permalinks to Code](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet)

  1. Copy Permalink
  2. Paste whole URL within same repo

* [GitHub: filter for issues that are either assigned to somebody or somebody is mentioned](https://stackoverflow.com/q/70665771/1366033)

  Use [`involves:user`](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests#search-by-a-user-thats-involved-in-an-issue-or-pull-request)

* [Find PRs where user is a reviewer](https://stackoverflow.com/q/41506891/1366033)

  * `reviewed-by:KyleMit`
  * `review-requested:KyleMit`

  **See Also**: [Filter pull request reviews and review requests](https://github.blog/2017-01-23-filter-pull-request-reviews-and-review-requests/)

  