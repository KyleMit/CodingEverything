# Git

## Docs

* [`git-clone` Documentation](https://git-scm.com/docs/git-clone)
* [`git-sparse-checkout` Documentation](https://www.git-scm.com/docs/git-sparse-checkout)
* [`git-archive` Documentation](https://git-scm.com/docs/git-archive)

### [Commit](https://git-scm.com/docs/git-commit)


`--no-verify` - This option bypasses the pre-commit and commit-msg [githooks](https://git-scm.com/docs/githooks)



## Patterns & Practices

### Precise Commits

[nrwl/**precise-commits**](https://github.com/nrwl/precise-commits)

### Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/)

#### Message format

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


#### GitHub

* [Github Repo Settings](https://github.com/settings/repositories)
* [Github/Renaming](https://github.com/github/renaming#from-master-to-main)
* [Setting the default branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch)

> Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.


#### Bitbucket

* [Search public repositories in Bitbucket?](https://community.atlassian.com/t5/Bitbucket-questions/public-repositories/qaq-p/844415)
  * [bitbucket.org/repo/all](https://bitbucket.org/repo/all)

## Pre Commit Hooks

* [typicode/**husky**](https://github.com/typicode/husky) - Git hooks made easy 🐶 woof!
* [sapegin/**mrm**](https://github.com/sapegin/mrm) - Codemods for your project config files
* [typicode/**pinst**](https://github.com/typicode/pinst) - dev only postinstall hooks (package.json)
* [okonet/**lint-staged**](https://github.com/okonet/lint-staged) - Run linters on git staged files
* [azz/**pretty-quick**](https://github.com/azz/pretty-quick) - Get Pretty Quick

### Client Side


## Questions

* [Making a Git push from a detached head](https://stackoverflow.com/a/40929378/1366033)

  ```bash
  git push origin HEAD:name-of-your-branch
  ```

* [Why do I need to explicitly push a new branch?](https://stackoverflow.com/q/17096311/1366033)

  ```bash
  git config --global push.default current
  git push -u
  ```

* [What is `git clone --depth 1`?](https://linuxhint.com/git-shallow-clone-and-clone-depth)

  Shallow clone with [`--depth`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt) argument

* [How to list branches that contain a given commit?](https://stackoverflow.com/q/1419623/1366033)

  ```bash
  git branch --contains <commit>
  ```

* [How do I update a GitHub forked repository?](https://stackoverflow.com/q/7244321/1366033)

  ```bash
  git remote -v                   # list current remotes
  git remote add upstream <base>  # add upstream remote
  ```

  **See Also**: [How can I keep my fork in sync without adding a separate remote?](https://stackoverflow.com/q/20984802/1366033)


* [How do I download a tarball from GitHub using cURL?](https://stackoverflow.com/q/5746325/1366033)

  ```bash
  curl -L https://api.github.com/repos/graphql/graphql-js/tarball | tar xzf
  curl -L https://api.github.com/repos/graphql/graphql-js/tarball > gql.tar.gz
  curl -L https://api.github.com/repos/graphql/graphql-js/tarball -O gql.tar.gz
  ```

* Clone Subdirectory

  * [Cloning only a subdirectory with git](https://stackoverflow.com/q/11834386/1366033)
  * [How do I clone a subdirectory only of a Git repository?](https://stackoverflow.com/q/600079/1366033)
  * [Bring your monorepo down to size with sparse-checkout - The GitHub Blog](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)

* [Git Clone - Just the files, please?](https://stackoverflow.com/q/3946538/1366033)
