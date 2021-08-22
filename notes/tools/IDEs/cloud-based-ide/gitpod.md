# GitPod


## Alternatives

* [Github Codespaces](https://github.com/features/codespaces)
* [Github 1s](https://github.com/conwnet/github1s)

## Getting Started


[Getting Started](https://www.gitpod.io/docs/getting-started)

Prefix the entire URL with `gitpod.io/#`
Example: `gitpod.io/#https://github.com/gitpod-io/website`

[`.gitpod.yml` Reference](https://www.gitpod.io/docs/references/gitpod-yml)

```yml
# Learn more about this file at https://www.gitpod.io/docs/references/gitpod-yml
tasks:
  - init: npm install
    command: npm run dev
ports:
  - port: 3000
    onOpen: open-preview
github:
  prebuilds:
    # enable for the default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: true
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: true
    # add a check to pull requests (defaults to true)
    addCheck: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
    addComment: false
    # add a "Review in Gitpod" button to the pull request's description (defaults to false)
    addBadge: true
```
