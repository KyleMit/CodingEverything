# Git

## Docs

* [`git-init`](https://git-scm.com/docs/git-init)
* [`git-clone`](https://git-scm.com/docs/git-clone)
* [`git-sparse-checkout`](https://www.git-scm.com/docs/git-sparse-checkout)
* [`git-archive`](https://git-scm.com/docs/git-archive)
* [`git commit`](https://git-scm.com/docs/git-commit)
  * `--no-verify` - This option bypasses the pre-commit and commit-msg [githooks](https://git-scm.com/docs/githooks)



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

  Use [`git clean`](https://git-scm.com/docs/git-clean)

  ```bash
  git clean -dfx
  ```
  
  * `-d` - include directories
  * `-f` - force
  * `-x` - include ignored files

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

  Use [`git-rev-parse`](https://git-scm.com/docs/git-rev-parse)

  ```bash
  git rev-parse --abbrev-ref origin/HEAD
  ```

  Use [`git-remote`](https://git-scm.com/docs/git-remote)

  ```bash
  git remote show origin | grep "HEAD branch"
  ```

  Use [`git-symbolic-ref`](https://git-scm.com/docs/git-symbolic-ref)

  ```bash
  git symbolic-ref refs/remotes/origin/HEAD
  ```

  Use [`git-branch --remotes`](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---remotes)

  ```bash
  git branch --remotes --list '*/HEAD'
  ```

* [Get Preferred Default Branch](https://stackoverflow.com/q/65703168/1366033)

  ```bash
  git config --get init.defaultBranch
  ```

* [How can I create a Git repository with the default branch name other than "master"?](https://stackoverflow.com/q/42871542/1366033)

  ```bash
  git config --global init.defaultBranch main
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


* fatal: detected dubious ownership in repository at 'C:/code/StackOverflow'

  This was introduced as a security measure in git v2.35.2 (updated 4/12/2022)

  ```bash
  git config --global --add safe.directory C:/code/StackOverflow
  ```

  * Further Reading
    * [security vulnerability CVE-2022-24765](https://github.blog/2022-04-12-git-security-vulnerability-announced/)
    * [Fatal error "unsafe repository ('/home/repo' is owned by someone else)"](https://stackoverflow.com/q/71901632/1366033)
    * [CVE 2022 24765 - I cannot add the parent directory to *safe.directory* in Git](https://stackoverflow.com/q/71849415/1366033)
    * [git submodule update failed with 'fatal: detected dubious ownership in repository at'](https://stackoverflow.com/q/72978485/1366033)

* [List Git aliases](https://stackoverflow.com/q/7066325/1366033)

  ```bash
  git --list-cmds=alias
  ```

* [How to configure git push to automatically set upstream without -u?](https://stackoverflow.com/q/17847213/1366033)

  ```bash
  git config --global --add --bool push.autoSetupRemote true
  ```

  **See Also**: [Automatically track remote branch with git](https://stackoverflow.com/questions/29422101/automatically-track-remote-branch-with-git)

* [Merge (with squash) all changes from another branch as a single commit](https://stackoverflow.com/q/3697178/1366033)

  ```bash
  git merge --squash <feature branch>
  git commit
  ```

* [Erase git tracking from directory](https://stackoverflow.com/q/4754152/1366033)

  ```bash
  rm -rf .git
  ```

* [Pull new updates from original GitHub repository into forked GitHub repository](https://stackoverflow.com/q/3903817/1366033)

  ```ini
  [remote "upstream"]
    url = git@github.com:StackExchange/Stacks.git
  ```

  ```bash
  git pull upstream main
  ```

* [How do you stash an untracked file?](https://stackoverflow.com/q/835501/1366033)

  ```bash
  git stash --include-untracked # -u
  ```

  ```bash
  git add .
  git stash
  ```

* [How to remove files from git staging area?](https://stackoverflow.com/q/19730565/1366033)

  ```bash
  git restore --staged .
  ```

* [How often should you use git-gc?](https://stackoverflow.com/q/55729/1366033)

  [`git-gc`](https://git-scm.com/docs/git-gc)

  [Git gc](https://www.atlassian.com/git/tutorials/git-gc)

  ```bash
  git count-objects
  git gc
  ```

* [Create a git patch from the uncommitted changes in the current working directory](https://stackoverflow.com/q/5159185/1366033)

  Create patch from uncommited changes

  ```bash
  git diff > mypatch.patch
  ```

  Apply patch

  ```bash
  git apply mypatch.patch
  ```

* [How do I run a code formatter over my source without modifying git history?](https://stackoverflow.com/q/53502654/1366033)

  1. Create a file `.git-blame-ignore-revs`

  2. Add `blame.ignoreRevsFile` to git config

    ```bash
    git config --local blame.ignoreRevsFile .git-blame-ignore-revs
    ```

  To check origin ignore config:

  ```bash
  ❯ git config --show-origin blame.ignoreRevsFile
  # file:.git/config        .git-blame-ignore-revs
  ```

  * [GitHub - Ignore commits in the blame view](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file#ignore-commits-in-the-blame-view)
  * [`git-blame` docs](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)

* [How to get git log without the commit message](https://stackoverflow.com/q/40837225/1366033)

  ```bash
  git log -n 5 --shortstat --oneline --format="%h" 
  ```

  * `%ad` - author date
  * `%an` - author name
  * `%h` - commit hash (short)
  * `%H` - commit hash (full)
  * `%s` - subject
  * `%d` - ref names

* [View git log without merge commits](https://stackoverflow.com/q/35945860/1366033)

  ```bash
  git log --no-merges
  ```

* [See a list of comments of my last N commits](https://stackoverflow.com/q/13542213/1366033)

  ```bash
  git log --oneline -n 5
  ```

* [What does git fsck stand for?](https://stackoverflow.com/q/21151945/1366033)

  **`fsck`** - File System ChecK

* [Git slow](https://stackoverflow.com/questions/4485059/1366033)

  ```bash
  git gc
  ```

  There are too many unreachable loose objects
  
  ```bash
  git prune
  ```

  **See Also**: [Git Status Takes a Long Time to Complete](https://stackoverflow.com/questions/1183769/1366033)


* [Delete all branches except master](https://stackoverflow.com/q/10610327/1366033)

  ```bash
  git branch | grep -v "main" | xargs -r git branch -D
  ```

  ```bash
  git branch --merged | grep -v \* | xargs -r git branch -D
  ```

* [Is it possible to include a file in your .gitconfig](https://stackoverflow.com/q/1557183/1366033)

  Use [`config.includes`](https://git-scm.com/docs/git-config#_includes)

  ```ini
  [include]
      path = /path/to/file
  ```

* [How to modify existing, unpushed commit messages?](https://stackoverflow.com/q/179123/1366033)

  ```bash
  git commit --amend
  ```

  ```bash
  git commit --amend -m "New commit message"
  ```

* [Go back N commits](https://stackoverflow.com/q/16738949/1366033)

  ```bash
  git checkout HEAD~N
  ```

* Show the last commit where a file was deleted

  ```bash
  git log --diff-filter=D -- .\Content\Img\list-1.svg
  ```

* [How can I reset or revert a file to a specific revision?](https://stackoverflow.com/q/215718/1366033)

  ```bash
  git checkout main -- file1/to/restore file2/to/restore
  ```

  See Also: [Reset a modified file to the state in another branch?](https://stackoverflow.com/a/78813246/1366033)

  ```bash
  git restore --source main file1/to/restore
  ```

* Remove a directory of files from tracking

  ```bash
  git rm -r --cached test-svelte-references/wwwroot/lib
  ```

  `-r` recursive
  `--cached` remove from index, but keep in working directory


* How to tell if a file is matched by gitignore

  ```bash
  git check-ignore -v test-svelte-references/wwwroot/lib/bootstrap.bundle.js
  ```

  If it returns nothing, it means gitignore is not matching the file
