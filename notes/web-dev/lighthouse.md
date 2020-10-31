# Lighthouse

## Links

* [Github](https://github.com/GoogleChrome/lighthouse)
* [Measure](https://web.dev/measure/)
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [Lighthouse Viewer](https://googlechrome.github.io/lighthouse-ci/viewer/)
* [Lighthouse CLI](https://www.npmjs.com/package/lighthouse#using-the-node-cli)
* [Chrome UX - CrUX](https://web.dev/chrome-ux-report-data-studio-dashboard/)
* [Web Vitals](https://web.dev/vitals/)

### Docs

* [Node ReadMe](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#testing-on-a-mobile-device)
* [Architecture](https://github.com/GoogleChrome/lighthouse/blob/master/docs/architecture.md)

## Alternatives

* [Tracy - What Tools Do You Use Measure and Improve A11y?](https://twitter.com/ladyleet/status/1258148658714992645)

* [Web Hint](https://webhint.io/)
* [Speedlify](https://www.zachleat.com/web/speedlify/)
* [WebPageTest - Website Performance and Optimization Test](https://www.webpagetest.org/)
* [GTMetrix | Website Speed and Performance Optimization](https://gtmetrix.com/)
* [Website Speed Test | Pingdom Tools](https://tools.pingdom.com/)
* [Yellow Lab Tools](https://yellowlab.tools/)
* [WAVE - Web Accessibility Evaluation Tool](https://wave.webaim.org/)
* [aXe](https://www.deque.com/axe/)
  * HtmlCodeSniffer
  * pa11y
* [Colorable](https://colorable.jxnblk.com/)
* [SiteSpeed.io](https://www.sitespeed.io/)
* [Every Web Performance Test Tool | swyx.io](https://www.swyx.io/webperf-tests/)
* [Think With Google](https://www.thinkwithgoogle.com/feature/testmysite/)
* [Mozilla Observatory](https://observatory.mozilla.org/)
* [Lighthouse Metrics](https://lighthouse-metrics.com/)
  * [lighthouse-metrics/github-actions](https://github.com/lighthouse-metrics/github-actions)

## Lighthouse Integrations

[Lighthouse Integrations in Web Perf services](https://github.com/GoogleChrome/lighthouse#lighthouse-integrations-in-web-perf-services)

## Customize

* [configuration](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)
* [plugins](https://github.com/GoogleChrome/lighthouse/blob/master/docs/plugins.md)
* [new-audits](https://github.com/GoogleChrome/lighthouse/blob/master/docs/new-audits.md)

### Stack Packs

* [Prototyping Stack Packs for Lighthouse](https://developers.google.com/web/updates/2019/01/lighthouse-platform-packs)
* [Lighthouse Stack Packs](https://github.com/GoogleChrome/lighthouse-stack-packs)
* [core(stack-packs) PR](https://github.com/GoogleChrome/lighthouse/pull/9797)
* [Contributing to Stack Packs](https://github.com/GoogleChrome/lighthouse-stack-packs/blob/master/CONTRIBUTING.md)

## Web Vitals

[GoogleChrome/**web-vitals**](https://github.com/GoogleChrome/web-vitals) - Essential metrics for a healthy site.

## Version History

* [What's New in Lighthouse 6.0](https://web.dev/lighthouse-whats-new-6.0/)

## Metrics

* **FCP** - First Contentful Paint
* **LCP** - Largest Contentful Paint
* **CLS** - Cumulative Layout Shift
* **TBT** - Total Blocking Time
* **TTI** - Time to Interactive

[Worst Possible Desktop Perf w/ 100](https://googlechrome.github.io/lighthouse/scorecalc/#FCP=520&SI=670&LCP=580&TTI=1320&TBT=60&CLS=0.01&FMP=997&FCI=997&device=desktop&version=6)
[Worst Possible Mobile Perf w/ 100](https://googlechrome.github.io/lighthouse/scorecalc/#FCP=1310&SI=1750&LCP=1420&TTI=1830&TBT=130&CLS=0.02&FMP=997&FCI=997&device=mobile&version=6)

## Web Perf Stats

* [WPO Stats](https://wpostats.com/)
* [PWA Stats](https://www.pwastats.com/)

## Lighthouse Viewer


[Report was created with an earlier version of Lighthouse (3.2.0)](https://github.com/GoogleChrome/lighthouse/issues/7250)

[GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse)

**Generator**
https://googlechrome.github.io/lighthouse/viewer/?psiurl=

**Generator Args**
https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://github.directory/&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo

**Viewer**
https://googlechrome.github.io/lighthouse/viewer/?gist=1e4b949b32a4e35ddc8a9b570d8e4b2c

https://googlechrome.github.io/lighthouse/viewer/?gist=142af6838482417af741d966e7804346

**Gists**
https://gist.github.com/developit/142af6838482417af741d966e7804346
https://gist.github.com/KyleMit/1e4b949b32a4e35ddc8a9b570d8e4b2c


## CLI

[Using the Node CLI](https://github.com/GoogleChrome/lighthouse#using-the-node-cli)

## Performance Score

| Audit                                                                  | Weight |
| ---------------------------------------------------------------------- | ------ |
| [First Contentful Paint](https://web.dev/first-contentful-paint/)      | 15%    |
| [Speed Index](https://web.dev/speed-index/)                            | 15%    |
| [Largest Contentful Paint](https://web.dev/lcp/)                       | 25%    |
| [Time to Interactive](https://web.dev/interactive/)                    | 15%    |
| [Total Blocking Time](https://web.dev/lighthouse-total-blocking-time/) | 25%    |
| [Cumulative Layout Shift](https://web.dev/cls/)                        | 5%     |


## Audits

[Performance Audits](https://web.dev/lighthouse-performance/)
[Accessibility Audits](https://web.dev/lighthouse-accessibility/)
[Best Practice Audits](https://web.dev/lighthouse-best-practices/)
[SEO Audits](https://web.dev/lighthouse-seo/)

### Performance Audits


#### [Metrics](https://web.dev/lighthouse-performance/#metrics)

* [First Contentful Paint](https://web.dev/first-contentful-paint/)
* [First Meaningful Paint](https://web.dev/first-meaningful-paint/)
* [Speed Index](https://web.dev/speed-index/)
* [First CPU Idle](https://web.dev/first-cpu-idle/)
* [Time to Interactive](https://web.dev/interactive/)
* [Max Potential First Input Delay](https://web.dev/lighthouse-max-potential-fid/)
* [Total Blocking Time](https://web.dev/lighthouse-total-blocking-time/)
* [Largest Contentful Paint](https://web.dev/lighthouse-largest-contentful-paint/)

#### [Opportunities](https://web.dev/lighthouse-performance/#opportunities)


* [Eliminate render-blocking resources](https://web.dev/render-blocking-resources/)
* [Properly size images](https://web.dev/uses-responsive-images/)
* [Defer offscreen images](https://web.dev/offscreen-images/)
* [Minify CSS](https://web.dev/unminified-css/)
* [Minify JavaScript](https://web.dev/unminified-javascript/)
* [Remove unused CSS](https://web.dev/unused-css-rules/)
* [Efficiently encode images](https://web.dev/uses-optimized-images/)
* [Serve images in next-gen formats](https://web.dev/uses-webp-images/)
* [Enable text compression](https://web.dev/uses-text-compression/)
* [Preconnect to required origins](https://web.dev/uses-rel-preconnect/)
* [Reduce server response times (TTFB)](https://web.dev/time-to-first-byte/)
* [Avoid multiple page redirects](https://web.dev/redirects/)
* [Preload key requests](https://web.dev/uses-rel-preload/)
* [Use video formats for animated content](https://web.dev/efficient-animated-content/)
* [Reduce the impact of third-party code](https://web.dev/third-party-summary/)
* [Avoid non-composited animations](https://web.dev/non-composited-animations/)

#### [Diagnostics](https://web.dev/lighthouse-performance/#diagnostics)


* [Avoid enormous network payloads](https://web.dev/total-byte-weight/)
* [Serve static assets with an efficient cache policy](https://web.dev/uses-long-cache-ttl/)
* [Avoid an excessive DOM size](https://web.dev/dom-size/)
* [Avoid chaining critical requests](https://web.dev/critical-request-chains/)
* [User Timing marks and measures](https://web.dev/user-timings/)
* [Reduce JavaScript execution time](https://web.dev/bootup-time/)
* [Minimize main thread work](https://web.dev/mainthread-work-breakdown/)
* [Ensure text remains visible during webfont load](https://web.dev/font-display/)
* [Keep request counts low and transfer sizes small](https://web.dev/resource-summary/)

### Accessibility Audits

#### [Audit scoring](https://web.dev/lighthouse-accessibility/#audit-scoring)


* [Lighthouse accessibility scoring](https://web.dev/accessibility-scoring/)


#### [Navigation](https://web.dev/lighthouse-accessibility/#navigation)


* [`[accesskey]` values are not unique](https://web.dev/accesskeys/)
* [The page does not contain a heading, skip link, or landmark region](https://web.dev/bypass/)
* [`[id]` attributes on active, focusable elements are not unique](https://web.dev/duplicate-id-active/)
* [Heading elements are not in a sequentially-descending order](https://web.dev/heading-order/)
* [Some elements have a `[tabindex]` value greater than `0`](https://web.dev/tabindex/)

#### [ARIA](https://web.dev/lighthouse-accessibility/#aria)


* [`[aria-*]` attributes do not match their roles](https://web.dev/aria-allowed-attr/)
* [`[aria-hidden="true"]` is present on the document `<body>`](https://web.dev/aria-hidden-body/)
* [`[aria-hidden="true"]` elements contain focusable descendants](https://web.dev/aria-hidden-focus/)
* [ARIA input fields do not have accessible names](https://web.dev/aria-input-field-name/)
* [`[role]`s do not have all required `[aria-*]` attributes](https://web.dev/aria-required-attr/)
* [Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children](https://web.dev/aria-required-children/)
* [`[role]`s are not contained by their required parent element](https://web.dev/aria-required-parent/)
* [`[role]` values are not valid](https://web.dev/aria-roles/)
* [ARIA toggle fields do not have accessible names](https://web.dev/aria-toggle-field-name/)
* [`[aria-*]` attributes do not have valid values](https://web.dev/aria-valid-attr-value/)
* [`[aria-*]` attributes are not valid or misspelled](https://web.dev/aria-valid-attr/)
* [ARIA IDs are not unique](https://web.dev/duplicate-id-aria/)

#### [Names and labels](https://web.dev/lighthouse-accessibility/#names-and-labels)

* [Buttons do not have an accessible name](https://web.dev/button-name/)
* [Document doesn't have a `<title>` element](https://web.dev/document-title/)
* [Form fields have multiple labels](https://web.dev/form-field-multiple-labels/)
* [`<frame>` or `<iframe>` elements do not have a title](https://web.dev/frame-title/)
* [Image elements do not have `[alt]` attributes](https://web.dev/image-alt/)
* [`<input type="image">` elements do not have `[alt]` text](https://web.dev/input-image-alt/)
* [Form elements do not have associated labels](https://web.dev/label/)
* [Links do not have a discernible name](https://web.dev/link-name/)
* [`<object>` elements do not have `[alt]` text](https://web.dev/object-alt/)

#### [Contrast](https://web.dev/lighthouse-accessibility/#contrast)

* [Background and foreground colors do not have a sufficient contrast ratio](https://web.dev/color-contrast/)

#### [Tables and lists](https://web.dev/lighthouse-accessibility/#tables-and-lists)

* [`<dl>`s do not contain only properly ordered `<dt>` and `<dd>` groups, `<script>`, or `<template>` elements](https://web.dev/definition-list/)
* [Definition list items are not wrapped in `<dl>` elements](https://web.dev/dlitem/)
* [Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`)](https://web.dev/list/)
* [List items (`<li>`) are not contained within `<ul>` or `<ol>` parent elements](https://web.dev/listitem/)
* [Presentational `<table>` elements do not avoid using `<th>`, `<caption>`, or the `[summary]` attribute](https://web.dev/layout-table/)
* [Cells in a `<table>` element that use the `[headers]` attribute refer to an element ID not found within the same table](https://web.dev/td-headers-attr/)
* [`<th>` elements and elements with `[role="columnheader"/"rowheader"]` do not have data cells they describe](https://web.dev/th-has-data-cells/)

#### [Best practices](https://web.dev/lighthouse-accessibility/#best-practices)


* [The document uses `<meta http-equiv="refresh">`](https://web.dev/meta-refresh/)
* [`[user-scalable="no"]` is used in the `<meta name="viewport">` element or the `[maximum-scale]` attribute is less than `5`](https://web.dev/meta-viewport/)

#### [Audio and video](https://web.dev/lighthouse-accessibility/#audio-and-video)


* [`<audio>` elements are missing a `<track>` element with `[kind="captions"]`](https://web.dev/audio-caption/)
* [`<video>` elements do not contain a `<track>` element with `[kind="captions"]`](https://web.dev/video-caption/)
* [`<video>` elements do not contain a `<track>` element with `[kind="description"]`](https://web.dev/video-description/)

#### [Internationalization and localization](https://web.dev/lighthouse-accessibility/#internationalization-and-localization)


* [`<html>` element does not have a `[lang]` attribute](https://web.dev/html-has-lang/)
* [`<html>` element does not have a valid value for its `[lang]` attribute](https://web.dev/html-lang-valid/)
* [`[lang]` attributes do not have a valid value](https://web.dev/valid-lang/)

#### [Additional items to manually check](https://web.dev/lighthouse-accessibility/#additional-items-to-manually-check)


* [The page has a logical tab order](https://web.dev/logical-tab-order/)
* [Interactive controls are keyboard focusable](https://web.dev/focusable-controls/)
* [Interactive elements indicate their purpose and state](https://web.dev/interactive-element-affordance/)
* [The user's focus is directed to new content added to the page](https://web.dev/managed-focus/)
* [User focus is not accidentally trapped in a region](https://web.dev/focus-traps/)
* [Custom controls have associated labels](https://web.dev/custom-controls-labels/)
* [Custom controls have ARIA roles](https://web.dev/custom-control-roles/)
* [Visual order on the page follows DOM order](https://web.dev/visual-order-follows-dom/)
* [Offscreen content is hidden from assistive technology](https://web.dev/offscreen-content-hidden/)
* [HTML5 landmark elements are used to improve navigation](https://web.dev/use-landmarks/)

### Best Practice Audits

#### [General best practices](https://web.dev/lighthouse-best-practices/#general-best-practices)


* [Page lacks the HTML doctype, thus triggering quirks mode](https://web.dev/doctype/)
* [Browser errors were logged to the console](https://web.dev/errors-in-console/)
* [Displays images with incorrect aspect ratio](https://web.dev/image-aspect-ratio/)

#### [Make your page fast](https://web.dev/lighthouse-best-practices/#make-your-page-fast)


* [Does not use HTTP/2 for all of its resources](https://web.dev/uses-http2/)
* [Uses document.write()](https://web.dev/no-document-write/)
* [Does not use passive listeners to improve scrolling performance](https://web.dev/uses-passive-event-listeners/)

#### [Make your page secure](https://web.dev/lighthouse-best-practices/#make-your-page-secure)


* [Does not use HTTPS](https://web.dev/is-on-https/)
* [Links to cross-origin destinations are unsafe](https://web.dev/external-anchors-use-rel-noopener/)
* [Includes front-end JavaScript libraries with known security vulnerabilities](https://web.dev/no-vulnerable-libraries/)

#### [Create a good user experience](https://web.dev/lighthouse-best-practices/#create-a-good-user-experience)


* [Requests the geolocation permission on page load](https://web.dev/geolocation-on-start/)
* [Requests the notification permission on page load](https://web.dev/notification-on-start/)
* [Prevents users from pasting into password fields](https://web.dev/password-inputs-can-be-pasted-into/)

#### [Avoid deprecated technologies](https://web.dev/lighthouse-best-practices/#avoid-deprecated-technologies)


* [Uses Application Cache](https://web.dev/appcache-manifest/)
* [Uses deprecated APIs](https://web.dev/deprecations/)

#### [Diagnostic audits](https://web.dev/lighthouse-best-practices/#diagnostic-audits)


* [Detected JavaScript libraries](https://web.dev/js-libraries/)

### SEO Audits


#### [Make sure search engines understand your content](https://web.dev/lighthouse-seo/#make-sure-search-engines-understand-your-content)


* [Document doesn't have a `<title>` element](https://web.dev/document-title/)
* [Document does not have a meta description](https://web.dev/meta-description/)
* [Links do not have descriptive text](https://web.dev/link-text/)
* [Document doesn't have a valid `hreflang`](https://web.dev/hreflang/)
* [Document does not have a valid `rel=canonical`](https://web.dev/canonical/)

#### [Make sure search engines can crawl and index your page](https://web.dev/lighthouse-seo/#make-sure-search-engines-can-crawl-and-index-your-page)


* [Page has unsuccessful HTTP status code](https://web.dev/http-status-code/)
* [Page is blocked from indexing](https://web.dev/is-crawable/)
* [`robots.txt` is not valid](https://web.dev/robots-txt/)
* [Document uses plugins](https://web.dev/plugins/)

#### [Make your page mobile-friendly](https://web.dev/lighthouse-seo/#make-your-page-mobile-friendly)


* [Does not have a `<meta name="viewport">` tag with `width` or `initial-scale`](https://web.dev/viewport/)
* [Document doesn't use legible font sizes](https://web.dev/font-size/)
* [Tap targets are not sized appropriately](https://web.dev/tap-targets/)

#### [Things to check manually](https://web.dev/lighthouse-seo/#things-to-check-manually)


* [Structured data is valid](https://web.dev/structured-data/)
