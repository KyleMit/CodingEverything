# Git

## GitHub

* [Github Repo Settings](https://github.com/settings/repositories)
* [Github/Renaming](https://github.com/github/renaming#from-master-to-main)
* [Setting the default branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch)

> Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.


## Precise Commits

[nrwl/**precise-commits**](https://github.com/nrwl/precise-commits)

## Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/)

### Message format

```none
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

1. **`fix`**: a commit of the *type* `fix` patches a bug in your codebase (this correlates with `PATCH` in [semantic versioning](http://semver.org/#summary)).
2. **`feat`**: a commit of the *type* `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semantic versioning).
3. **`BREAKING CHANGE`**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any *type*.
4. *types* other than `fix:` and `feat:` are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends
   * `build`
   * `chore`
   * `ci`
   * `docs`
   * `style`
   * `refactor`
   * `perf`
   * `test`
   * and others.
5. *footers* other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

## Tools

### Serer Side

* Github
* Gitlab
* Bitbucket


#### Bitbucket

* [Search public repositories in Bitbucket?](https://community.atlassian.com/t5/Bitbucket-questions/public-repositories/qaq-p/844415)
  * [bitbucket.org/repo/all](https://bitbucket.org/repo/all)

### Client Side


