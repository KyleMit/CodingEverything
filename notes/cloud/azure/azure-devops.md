# Azure Devops

[kylemit.visualstudio.com/](https://kylemit.visualstudio.com/)
[dev.azure.com/kylemit/](https://dev.azure.com/kylemit/)

## Docs

* [Release Notes](https://docs.microsoft.com/en-us/azure/devops/release-notes/2020/sprint-173-update)
* [Choose a process](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/guidance/choose-process?view=azure-devops&tabs=basic-process)
* [Get started as a Stakeholder](https://docs.microsoft.com/en-us/azure/devops/organizations/security/get-started-stakeholder?view=azure-devops&tabs=agile-process)
* [DevOps Starter](https://docs.microsoft.com/en-us/azure/devops-project/)
* [Capability Maturity Model Integration (CMMI) process](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/guidance/cmmi-process?view=azure-devops)
* [Plan and Track Work](https://docs.microsoft.com/en-us/azure/devops/boards/get-started/plan-track-work?view=azure-devops&tabs=agile-process)
* Configure & Customize
  * [About area and iteration (sprint) paths](https://docs.microsoft.com/en-us/azure/devops/organizations/settings/work/add-custom-wit?view=azure-devops)
  * [Customize your work tracking experience](https://docs.microsoft.com/en-us/azure/devops/reference/customize-work?view=azure-devops)
  * [Customize a Workflow](https://docs.microsoft.com/en-us/azure/devops/organizations/settings/work/customize-process-workflow?view=azure-devops)
  * [Show bugs on backlogs and boards](https://docs.microsoft.com/en-us/azure/devops/organizations/settings/show-bugs-on-backlog?view=azure-devops)
* Kanban Board Basics
  * [Kanban basics](https://docs.microsoft.com/en-us/azure/devops/boards/boards/kanban-basics?view=azure-devops)
* Collaborate with Others
  * [Add work item tags to categorize and filter lists and boards](https://docs.microsoft.com/en-us/azure/devops/boards/queries/add-tags-to-work-items?view=azure-devops)
* Sprints & Scrum
  * [Schedule Sprints](https://docs.microsoft.com/en-us/azure/devops/boards/sprints/define-sprints?view=azure-devops)
* Queries & Search
  * [Create and save managed queries](https://docs.microsoft.com/en-us/azure/devops/boards/queries/using-queries?view=azure-devops)
* Security, Access, & Identity
  * [About Permissions & Groups](https://docs.microsoft.com/en-us/azure/devops/organizations/security/about-permissions?view=azure-devops&tabs=preview-page)
  * [Permissions lookup guide for Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/organizations/security/permissions-lookup-guide?view=azure-devops)
  * [Set permissions at the project- or collection-level](https://docs.microsoft.com/en-us/azure/devops/organizations/security/set-project-collection-level-permissions?view=azure-devops&tabs=preview-page)


## Acronyms

* **CMMI** - Capability Maturity Model Integration
* **WITs** - Work Item Types


## Processes

![processes](/assets/notes/azure-devops/processes.png)

[Choose a process](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/guidance/choose-process?view=azure-devops&tabs=basic-process)

* Basic
* Agile
* Scrum
* CMMI

## Layout

[Work item form](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/about-work-items?view=azure-devops&tabs=agile-process#work-item-form)

![work item layout](/assets/notes/azure-devops/work-item-layout.png)

![configure work item layout](/assets/notes/azure-devops/configure-work-item-layout.png)

## SOV Projects

![SOV Orgs](/assets/notes/azure-devops/sov-orgs.png)
![CRM Projects](/assets/notes/azure-devops/crm-projects.png)

* [ ] Customize Workflow
* [ ] Add Custom Fields

## Process Types

* **Scrum** - Backlog Items
* **Agile** - Stories
* **CMMI** - Requirements

### Basic

![work items basic](/assets/notes/azure-devops/work-items-basic.png)

### Agile

![work items agile](/assets/notes/azure-devops/work-items-agile.png)

### Scrum

![work items scrum](/assets/notes/azure-devops/work-items-scrum.png)

### CMMI

![work items cmmi](/assets/notes/azure-devops/work-items-cmmi.png)

## Fields

[Work Item Field Index](https://docs.microsoft.com/en-us/azure/devops/boards/work-items/guidance/work-item-field?view=azure-devops)

```js
let rows = [...document.querySelectorAll(".ms-List-cell")]
let vals = rows.map(el => {
    return {
        name: el.querySelector("[aria-colindex='1']").textContent,
        type: el.querySelector("[aria-colindex='2']").textContent,
        desc: el.querySelector("[aria-colindex='3']").textContent
    }
})
let csv = vals.map(el => `${el.name},${el.type},${el.desc}`).join("\n")
console.table(vals)
```

### Picklist

[Allow Picklist Items to have a specified order](https://developercommunity.visualstudio.com/idea/806292/allow-picklist-items-to-have-a-specified-order.html)

## Plans

[Review team Delivery Plans](https://docs.microsoft.com/en-us/azure/devops/boards/plans/review-team-plans?view=azure-devops)

* Project
* Team
* Backlog


## Overview

### Summary

### Dashboard

### Wiki

[Provisioned wikis vs. published code as a wiki](https://docs.microsoft.com/en-us/azure/devops/project/wiki/provisioned-vs-published-wiki?view=azure-devops)
[About Wikis, READMEs, and Markdown](https://docs.microsoft.com/en-us/azure/devops/project/wiki/about-readme-wiki?view=azure-devops)


## Instant Search

## State

```mermaid
 graph LR;
 a(New)
 b(Active)
 c(Resolved)
 d(Approved)
 e(Closed)
 f(Duplicate)

 a --> b --> c --> d --> e --> f
```


## Marketplace

[Visual Studio Marketplace > ADO](https://marketplace.visualstudio.com/search?term=control%20group%20tab%20page&target=AzureDevOps&category=Azure%20Boards&hosting=cloud&sortBy=Relevance)

## Kanban Board

[Kanban basics](https://docs.microsoft.com/en-us/azure/devops/boards/boards/kanban-basics?view=azure-devops)

[How to Show Blockers on Azure DevOps Taskboards using Tags](https://medium.com/guestline-labs/how-to-show-blockers-on-azure-devops-taskboards-using-tags-cf3e7df26d18)

### Settings

* Cards
  * Fields
    * [x] Disable State (known via column)
* Board
  * Columns
    * [x] New, In Progress, Ready for UAT, Approved, Closed

> The first column is mapped to the initial state used when a work item is created.
> The last column is always mapped to the final state.

## Organization

### Add New User

![add new users](/assets/notes/azure-devops/org-add-new-users.png)

### Manage User

![manage user](/assets/notes/azure-devops/org-manage-user.png)

## API

* [Fields > Get](https://docs.microsoft.com/en-us/rest/api/azure/devops/wit/fields/get?view=azure-devops-rest-6.0)


## Test Plans

* [Add, run, and update inline tests](https://docs.microsoft.com/en-us/azure/devops/boards/boards/add-run-update-tests?view=azure-devops)

## Bulk Import

* [Bulk import or update work items using CSV files](https://docs.microsoft.com/en-us/azure/devops/boards/queries/import-work-items-from-csv?view=azure-devops)
* [Bulk Migrate Work Item Comments, Links and Attachments](https://colinsalmcorner.com/bulk-migrate-work-item-comments-links-and-attachments/)

## Agile VDH (Inherited Process)

### Backlog Levels


* Portfolio
* Requirements
* Iteration
* Other

![backlog levels by item type](/assets/notes/azure-devops/backlog-levels.png)

### Work Item Types

![work item types](/assets/notes/azure-devops/agile-work-item-types.png)

### Issue States

![agile bug states](/assets/notes/azure-devops/agile-bug-states.png)

### Batch Edit

![batch edit](/assets/notes/azure-devops/batch-edit.png)
