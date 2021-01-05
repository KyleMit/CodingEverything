# 11ties: 11 min ⚡️ talks on 11ty, on 11/11

[Meetup](https://www.meetup.com/JAMstack-Toronto/events/274128808/)

## Speakers

* Raymond Camden [@raymondcamden](https://twitter.com/raymondcamden)
* Nicolas Goutay [@Phacks](https://twitter.com/Phacks)
* Sia Karamalegos [@TheGreenGreek](https://twitter.com/TheGreenGreek)
* Daniel Fascia [@danfascia](https://twitter.com/danfascia)
* Bryan Robinson [@brob](https://twitter.com/brob)

## Data Files - Bryan Robinson

* 11ty JS Data Files
* Global Data
* JavaScript Data File!
* Pagination Object
* [bryanlrobinson.com/11ties](https://bryanlrobinson.com/blog/adapt-client-side-javascript-for-use-in-11ty-eleventy-data-files/)
* filter all meetups on view layer
* `addAllPagesToCollections` - otherwise just get first page of paginated objects
* [create.sanity.io](https://create.sanity.io/)
* [sanity.io/guides](https://www.sanity.io/guides)

## Orbit - Nicolas Goutay

* [orbit.love](https://orbit.love/) - SaaS App
  * [orbit-web](https://github.com/orbit-love/orbit-web)
* architecture
  * Tailwind - Styling
    * Utility first CSS framework
      * Small classes that do one thing and one thing only
  * Alpine.js - Interactivity
    * lightweight JS framework

* TEA-stack

* Code Snippets
  * JSON Payload
  * Curl
  * Powershell

Using Codespaces on Github

### Alpine

* [alpine](https://github.com/alpinejs/alpine)
* [Orbit Blog — Towards a Lightweight Jamstack](https://orbit.love/blog/towards-a-lightweight-jamstack/)

* `x-data="{}"` - adds an alpine component
* ``@click="lang = 'json'` - click directive
* `:class` attribute
* `x-show="lang === 'json'"` - toggle visibility of component based on condition

## Webmentions - Sia  Karamalegos

[WEBMENTIONS + ELEVENTY](https://projects.sia.codes/webmentions-eleventy-talk/#/)

* [IndieWeb](https://indieweb.org/)
* [Bridgy](https://brid.gy/about) - connect to other social media
* [IndieAuth](https://indieauth.com/)
* [Webmention.io](https://webmention.io/)


* Process
  * fetch new web mentions
  * data file save - lastFetched time - only get new ones
  * write to cache file
* fake netlify cron jobs with github actions


## Leveraging 11ty in Healthcare - Daniel Fascia

* Fast, performant, safe
* Healthcare information site
* Broucherware
* [Yorkshire Radiology](https://yorkshireradiology.com/)
* Cognito Forms
* National Health Service - Uses Nunjucks Components
* [Orthanc](https://www.orthanc-server.com/)
  * CMS for medical images
  * Create PDFJS
  * Paperless Electronic Patient Reports
    * Convenient, contemporary, cost effective
* Medical Conference
  * Reinventing the experience
  * Checkoutpage.co
    * Stripe
  * Integromat (Zapier Alternative)
  * Airtable (database)
  * ["Magic Link"](https://magic.link/) to email
    * Webhooks
    * Airtable
    * SendGrid
* Eleventy Starters
  * 11ty-base
  * tai11base

`git clone conf`

## Raymond Camden

* Lead Dev Evangelist for HERE technologies
  * [developer.here.com](http://developer.here.com)
* Co-author of The Jamstack Book
* Slide -> ReadMe
* Tweets -> Blog Content

* Speed up local dev
  * `.eleventyignore` for posts you're not working on - don't check into repo
  * `--quite` to reduce console output
  * netlify - disable form detection - speed up builds if you're not using it


* Joel Varty - learn JAMstack by teaching it
* certified fresh - brian renaldi
  * Gatsby
  * Next
  * Eleventy

