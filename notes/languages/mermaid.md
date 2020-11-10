# Mermaid

* [mermaid](https://mermaid-js.github.io/mermaid/#/)


## Alternatives

* [flowchart.js](http://flowchart.js.org/)
* [js-sequence](https://bramp.github.io/js-sequence-diagrams/)
* [platUML](https://plantuml.com/)
* [viz.js](https://github.com/mdaines/viz.js)
* [ditaa](https://github.com/stathissideris/ditaa)

## Types

* [flowchart](https://mermaid-js.github.io/mermaid/#/flowchart)
* [sequence diagram](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)
* [class diagram](https://mermaid-js.github.io/mermaid/#/classDiagram)
* [state diagram](https://mermaid-js.github.io/mermaid/#/stateDiagram)
* [entity relationship diagram](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram)
* [user journey](https://mermaid-js.github.io/mermaid/#/user-journey)
* [gantt](https://mermaid-js.github.io/mermaid/#/gantt)
* [pie](https://mermaid-js.github.io/mermaid/#/pie)


### [Flowchart](https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/flowchart.html)


#### Example


```mermaid
graph LR

    e(VXU)
    v(VITL)
    r{Rhapsody}
    s[(sphinx)]

    e --> v -- HL7 --> r --> s
```

#### Orientation

```mermaid
graph LR
    e(Left) --> v(Right)
```

```mermaid
graph TD
    e(Top) --> v(Down)
```


#### Shapes

```mermaid
graph LR
    a[square]
    b(rounded)
    c([stadium])
    d[[subroutine]]
    e[(database)]
    f((circle))
    g>banner]
    h{rhombus}
    i{{hexagon}}
    j[/parallelogram/]
    k[\parallelogram\]
    l[/trapezoid\]
    m[/trapezoid\]

    subgraph parallelogram
        j --> k
    end
    subgraph trapezoid
       l --> m
    end
    subgraph shape
        g --> h --> i
    end
    subgraph complex
        d --> e --> f
    end
    subgraph basic
        a --> b --> c
    end
```

### Pie

```mermaid
pie
    title looks like pacman
    "Pacman" : 80
    "Mouth" : 20
```

[Mermaid.js Render Graph Based on Text File](https://stackoverflow.com/q/59807347/1366033)
[Force direction within a subgraph #654](https://github.com/mermaid-js/mermaid/issues/654)


## Examples

### Basic Workflow

![Basic Workflow](/assets/notes/markdown-charts/basic-workflow.png)

```mermaid
graph LR

    subgraph sprint backlog
    c(Task)
    end
    subgraph product backlog
    b(Issue)
    end
    subgraph portfolio backlog
    a(Epic)
    end

    a --> b --> c

    style a fill:#ff7b00
    style b fill:#339947,color:white;
    style c fill:#fff200
```

### Agile Workflow

![Agile Workflow](/assets/notes/markdown-charts/agile-workflow.png)

```mermaid
graph LR

    subgraph issue & bug tracking
        e(Issue)
    end
    subgraph backlog
        c(User Story) --> d(Task)
    end
    subgraph portfolio backlog
        a(Epic) --> b(Feature)
    end

    b --> c
    d --> e

    style a fill:#ff7b00
    style b fill:#773b93,color:white;
    style b fill:#009ccc,color:white;
    style d fill:#fff200
    style e fill:#339947,color:white;
```


### Scrum Process Feature

![Scrum Process Feature](/assets/notes/markdown-charts/scrum-process-feature.png)

![Scrum Process Feature SVF](/assets/notes/markdown-charts/scrum-process-feature-export.svg)

```mermaid
graph TD

    a(New)
    b(In Progress)
    c(Done)
    d(Removed)

    *(*) -- new feature --> a
    a -- implementation started --> b
    b -- moved to the backlog --> a
    b -- work finished --> c
    c -- additional work found --> b
    a -- removed from the backlog --> d
    d --> a
```


## Questions

* [Add Title To the Graph](https://github.com/mermaid-js/mermaid/issues/556)

Use Subgraph

```mermaid
graph LR
  subgraph This is my caption
    A --> B
  end
```
