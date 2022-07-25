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

#### Lint

[commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) - Lint commit messages

```bash
echo "test(card-sprite) fix unit tests" | npx commitlint
```


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


## Client Side Tools

* Gitbash
* Atlassian
* GitKraken
* Tower

## Server Side Tools

* Github
* Gitlab
* Bitbucket


### GitHub

* [Github Repo Settings](https://github.com/settings/repositories)
* [Github/Renaming](https://github.com/github/renaming#from-master-to-main)
* [Setting the default branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch)

> Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require “master” as the default branch name. You can always change the default branch name on individual repositories.

* [Updating a local clone after a branch name changes](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch#updating-a-local-clone-after-a-branch-name-changes)

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
git remote prune origin
```

### Bitbucket

* [Search public repositories in Bitbucket?](https://community.atlassian.com/t5/Bitbucket-questions/public-repositories/qaq-p/844415)
  * [bitbucket.org/repo/all](https://bitbucket.org/repo/all)

## Pre Commit Hooks

* [typicode/**husky**](https://github.com/typicode/husky) - Git hooks made easy 🐶 woof!
* [sapegin/**mrm**](https://github.com/sapegin/mrm) - Codemods for your project config files
* [typicode/**pinst**](https://github.com/typicode/pinst) - dev only postinstall hooks (package.json)
* [okonet/**lint-staged**](https://github.com/okonet/lint-staged) - Run linters on git staged files
* [azz/**pretty-quick**](https://github.com/azz/pretty-quick) - Get Pretty Quick


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

* [How to make Git "forget" about a file that was tracked but is now in .gitignore?](https://stackoverflow.com/q/1274057/1366033)

  ```bash
  git rm -r --cached .
  git add .
  git commit -am "Remove ignored files"
  ```

* [How to remove local (untracked) files from the current Git working tree](https://stackoverflow.com/q/61212/1366033)

  ```bash
  git clean -dfx
  ```

* [How do I get the Git commit count?](https://stackoverflow.com/q/677436/1366033)

```bash
git rev-list --count <revision>
```

* [How do I check out a remote Git branch?](https://stackoverflow.com/q/1783405/1366033)

  ```bash
  git fetch
  git checkout test
  # or
  git checkout -t <name of remote>/test
  ```


* [Delete all branches except master](https://stackoverflow.com/q/10610327/1366033)

  ```bash
  git branch | grep -v "master" | xargs git branch -D
  ```

* [Git command to show which specific files are ignored by .gitignore](https://stackoverflow.com/q/466764/1366033)

  ```bash
  git status --ignored
  git status --ignored --porcelain

  git ls-files --others -i --exclude-standard

  git check-ignore *    # top level match
  git check-ignore -v * # include rule
  git check-ignore **/* # include children


  git check-ignore $(find . -type f -print) # include descendants
  find -type f | git check-ignore --stdin   # include descendants
  ```

  ```bash
  git clean -ndX

  # $ git help clean
  #
  # git-clean - Remove untracked files from the working tree
  # -n, --dry-run - Don't actually remove anything, just show what would be done.
  # -d - Remove untracked directories in addition to untracked files.
  # -X - Remove only files ignored by Git.
  ```

* [How can I view all the git repositories on my machine?](https://stackoverflow.com/q/2020812/1366033)

  ```ps1
  Get-ChildItem . -Attributes Directory+Hidden -ErrorAction SilentlyContinue -Filter ".git" -Recurse
  ```

* [Check if directory is git repository (without having to cd into it)](https://stackoverflow.com/q/39518124/1366033)


  ```bash
  git rev-parse --is-inside-work-tree
  git -C <path> rev-parse
  ```


* [How to get the current branch name in Git?](https://stackoverflow.com/q/6245570/1366033)

  ```bash
  git rev-parse --abbrev-ref HEAD # v1.7
  git symbolic-ref --short HEAD   # v1.8
  git branch --show-current       # v2.22
  ```

* [git ahead/behind info between master and branch?](https://stackoverflow.com/q/20433867/1366033)

  [`rev-list`](https://git-scm.com/docs/git-rev-list) reverse chronological list

  ```bash
  git fetch
  git rev-list --count --left-right HEAD...@{u}
  ```

* reference upstream branch

  [Git Branching - Remote Branches](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)

  > **Upstream shorthand** - You can reference its upstream branch with the `@{upstream}` or `@{u}` shorthand.

* [Number of modified files in git index](https://stackoverflow.com/q/47146064/1366033)

  ```bash
  # count changes
  git diff --stat
  git diff --numstat
  git diff --shortstat

  # list changes
  git status -s -uno
  git diff --name-status

  # by commit
  git whatchanged -1
  git show --stat
  ```

* [How do I turn off the "LF will be replaced by CRLF" warning](https://stackoverflow.com/q/6500880/1366033)

  ```bash
  git config --global core.safecrlf false
  ```

  * [Make Git "LF will be replaced by CRLF" warnings go away](https://stackoverflow.com/q/1598260/1366033)
  * [line endings - With Git, how do I turn off the "LF will be replaced by CRLF" warning](https://stackoverflow.com/q/6500880/1366033)
  * [LF will be replaced by CRLF in git - What is that and is it important?](https://stackoverflow.com/q/5834014/1366033)
  * [linux - git replacing LF with CRLF](https://stackoverflow.com/q/1967370/1366033)

* [How to get default branch name?](https://stackoverflow.com/q/28666357/1366033)

  ```bash
  git rev-parse --abbrev-ref origin/HEAD
  git remote show origin
  git symbolic-ref refs/remotes/origin/HEAD
  git remote set-head origin -a
  ```

* [Get Preferred Default Branch](https://stackoverflow.com/q/65703168/1366033)

  ```bash
  git config --get init.defaultBranch
  ```

* [Make git undo any whitespace-only changes?](https://stackoverflow.com/q/13793241/1366033)

  Also: [Add only non-whitespace changes](https://stackoverflow.com/q/3515597/1366033)

  ```bash
  git diff -U0 -w --no-color | git apply --cached --ignore-whitespace --unidiff-zero -
  ```

* [Change email address in Git](https://stackoverflow.com/q/37805621/1366033)

  ```bash
  # set
  git config --global user.email "kmitofsky@stackoverflow.com"
  git config --global user.name "KyleMit"
  # get
  git config --global --get user.email
  git config --global --get user.name
  ```

* [How to revert files that are stubbornly stuck at "Changed but not committed"?](https://stackoverflow.com/q/6335521/1366033)

  Also: [How do I discard unstaged changes in Git? - Stack Overflow](https://stackoverflow.com/q/52704/1366033)

  ```bash
  git ls-files -m | xargs -i git update-index --assume-unchanged "{}"
  ```

* [How do I undo the most recent local commits in Git?](https://stackoverflow.com/q/927358/1366033)

  ```bash
  git reset --hard HEAD~1
  ```

* [Remove large .pack file created by git](https://stackoverflow.com/q/11050265/1366033)

* [How do I alias commands in git?](https://stackoverflow.com/q/2553786/1366033)

  ```ini
  [alias]
      st = status
      ci = commit -v
  ```

* [Git Alias w/ Multiple Commands](https://stackoverflow.com/q/7534184/1366033)

  ```ini
  [alias] chs = !git checkout $1 && git status
  ```

* [Multi-line alias in .gitconfig?](https://stackoverflow.com/q/59034391/1366033)

  ```ini
  [alias]
    save = "!f() { \
            git status; \
            git add -A; \
            git commit -m "$1"; \
            git push -f; \
            git log -1;  \
          }; \
          f;  \
          unset f"
  ```


