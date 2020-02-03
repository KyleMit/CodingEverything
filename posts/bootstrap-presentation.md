---
title: Pulling Your Website Up By Your Twitter Bootstraps
tags: [post, Bootstrap, Presentation, BOSCC]
date: 2014-06-20
postID: 426646617745277276
---

### Hello Boston Code Camp!

Here are some resources to supplement my talk on Bootstrap 3 talk titled:
[Pulling Your Website Up By Your Twitter Bootstraps](https://www.bostoncodecamp.com/CC21/Sessions/Details/7177)

Here are some powerpoint slides:
<script async class="speakerdeck-embed" data-id="656b2740daa50131c6a17202678817e0" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
<br/>

Here is a working version of the website from the presentation:
http://kylemitofsky.com/BootstrapPresentation/

The entire code sample was published to GitHub here:
https://github.com/KyleMit/BootstrapPresentation

You can get Bootstrap here (and also read their *great* documentation):
http://getbootstrap.com/

You can style Bootstrap here:
http://bootswatch.com/

I'm really excited that every step of the demo can is actually a commit into the GitHub repository.  I wrote an article about [using using revision control to demo live coding changes](http://www.codingeverything.com/2014/06/StepThroughCodeDemo.html), but here's the meat of it.  If you fork the repository on github and open it up it powershell, then you can step through every commit with these commands:

```bash
git config --local alias.child-sha "!git rev-list HEAD..master | tail -n 1"
git config --local alias.initial-commit "!git rev-list --all | tail -n 1"

git checkout master
git checkout $(git initial-commit)
git checkout $(git child-sha)
```
