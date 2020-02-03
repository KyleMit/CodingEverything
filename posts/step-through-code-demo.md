---
title: Stepping through a Code Demo
tags: [post, presentation, git]
date: 2014-06-15
postID: 221126685864120473
---


One challenge to delivering coding presentations is the trade-off between: 

* Showing actual **real code** that developers can get their head around 
<li style=" list-style-type: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**VS**</li>
* The **time** it costs to actually write it in front of them (debugging missing commas included).

Here are some of the ways I've seen to side step this issue in previous coding presentations I've attended:

* Start with the full app. Study relevant sections.
* Start with the full app, but mostly commented out.  Uncomment section by section.
* Start with a blank app and a notepad document with all the code you'll eventually want.  Copy and paste code section by section.
* Start with the full app and use Unit Tests to step into relevant code.

Here is one more that I will be trying out:

* Utilize revision control software to have each state of the code base represented by a different commit.  Then step through the commits.

If executed well, I really like this last one.  It avoids having too much information.  Especially if content is new, it can disrupt the noise to signal ratio if attendees are thrown into a world with too much code.  It also helps reduce copy and paste errors that might occur and the overall time it takes to update the code base.  The beautiful thing is that each state of the code base has a known success.  There is never the possibility that you have forgotten to uncomment *that one critical line*.  

You can easily step back through the entire code base to rehearse.  **What's more** - so can participants when they get home.  When have you ever left a coding presentation having been able to re-create every single step performed  by the presenter?

### Stepping Through Commits

Since this option definitely has the highest startup cost, I'll detail some of the items along my learning curve.

I'll preface this by saying that I'm using [**GitHub**][github] as my <abbr title="Revision Control System">RCS</abbr> of choice.

Also, **I've never stepped through each revision in an entire codebase before!**

It's not something that is covered by most of the use cases for revision control.  Of course, it's a perfectly acceptable use, just not one that you're likely to need when developing software.  

The easiest way to change your working copy to a specific version is to use:

<pre><code>git checkout <i>&lt;revision&gt;</i>
</code></pre>

Where *`<revision>`* is anything that [identifies a revision][gitrevisions]

* We can do this with the **SHA** of any particular commit.
* Or we can step back through previous commits by using <code>HEAD~<i>n</i></code> where *n* is the number of commits we want to step back

The problem is what we want to do is step *forward* through revisions.  While the `~1` selects the *parent* of the current revision, there is no native function to select its *child*.

> **Note**: This is partly because of the way that a [Directed Acyclic Graph (DAG)][DAG] works.  Each commit knows who it's parent is, but not which children might be attached to it.
> ![Git History][Git History]
> For example, `[B]` knows it was branched off `[A]`, but does not know who it's child is (in fact has two children!)

Part of this complexity can be avoided as I'm looking to have a relatively straight forward linear revision history.

#### Child Selector

From the [answer to what is the opposite of `git diff HEAD~1`?][child-sha]:

You can checkout the next branch like this:

```bash
git checkout $(git rev-list HEAD..master | tail -n 1)
```

##### In case you're new to Git/Shell, let's break this down a little.

The inner expression [`git rev-list`][git rev-list] will show a list of revisions.  By specifying any two revision id's joined by two periods, we'll get a list of all the SHAs in between them.

So, for the following revision history:

```none
     HEAD
      ↓
 A -- B -- C -- D -- E (master)
```

The command:

```bash
git rev-list HEAD..master
```

Will Return (*with the most recent first*):

```no-highlight
E
D
C
```

Then by using the pipe operator in powershell, we can grab the last value by piping in `| tail -n 1`

So this command:

```bash
git rev-list HEAD..master | tail -n 1
```

Will just return the commit we want:

```none
C
```

In order to make this into a one liner, we'll need to wrap the query so we can pass the output into our checkout command.  We can use the [`$( )` SubExpression operator][PS Operators] to return a vector value, giving us the original equation.

#### Adding an Alias

If we're using this a lot, it might look prettier to [alias the query][git alias]. 
We can add a new command called `child-sha` to our `local` config file like this:
```no-highlight
git config --local alias.child-sha "!git rev-list HEAD..master | tail -n 1"
```

> **Note**: [The exclamation point is important!][Git Alias with Powershell]  Without it, git will only execute git specific commands.  Adding it allows git to use powershell commands as well like `| tail -n 1`

Then we can checkout the next commit like this:


```bash
git checkout $(git child-sha)
```

### Other Considerations

You'll be seeing a lot of this dialog:
![Reload Warning][Reload Warning]

To avoid this, go to: 
Tools > Options > Environment > Documents > Detect when a file is changed
And make sure `Auto-load changes` is checked:
![Auto Load Changes][Auto Load Changes]


#### Conclusion:

That's about it.  I'll add my presentation here when it's finished so you can see a little more concrete of an example.  
Let me know if you give it a shot and have any experiences (good or bad).

[github]: https://github.com/

[DAG]: http://en.wikipedia.org/wiki/Directed_acyclic_graph
[Git History]: https://i.imgur.com/5qfhTx8.png
[Reload Warning]: https://i.imgur.com/9NZGbtB.png
[Auto Load Changes]: https://i.imgur.com/ZHJHXKu.png

[child-sha]: http://stackoverflow.com/a/3557291/1366033
[Git Alias with Powershell]: http://stackoverflow.com/a/24233289/1366033

[PS Operators]: http://ss64.com/ps/syntax-operators.html
[git alias]: https://git.wiki.kernel.org/index.php/Aliases

[gitrevisions]: http://git-scm.com/docs/gitrevisions
[git rev-list]: http://git-scm.com/docs/git-rev-list
