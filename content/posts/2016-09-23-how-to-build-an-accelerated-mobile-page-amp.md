---
title: How to build an Accelerated Mobile Page (AMP)?
date: 2016-09-23T21:39:07
type: post
slug: /how-to-build-an-accelerated-mobile-page-amp/
cover: /images/featured/AMP-Project-logo.png
category: ['Web development']
tags: ['AMP']
author: jmtalarn
---

## What is an AMP page?

An AMP page is a page built specifically to <strong>render fast</strong> as <a href="http://blog.jmtalarn.com/the-undervalued-static-web-sites/" target="\_blank">static content</a> with the resulting save of time and bytes to the final client. To achieve the goal these page are using the three following techniques:

<!--more-->

<ul>
<li><strong>AMP HTML</strong> Basically is HTML with extended properties. In some cases adding attributes and in others replacing the existing ones to get advantage of new capabilities.</li>
<li><strong>AMP JS</strong> This is a javascript library with the mission to arrange all the page information and optimize it to load fast with a list of <a href="http://blog.jmtalarn.com/how-to-build-an-accelerated-mobile-page-amp/#ampperformancepractices">performance practices</a>.</li>
<li><strong>Google AMP Cache</strong> Is a <a href="https://en.wikipedia.org/wiki/Content_delivery_network">Content Delivery Network</a> (CDN) acting as a proxy where all the AMP documents are precached in order to provide them all automatically optimized, serving all resources, like images and js, from the same origin with the <a href="https://en.wikipedia.org/wiki/HTTP/2">HTTP 2.0</a> advantages.</li>
</ul>
<h3 id="ampperformancepractices">AMP performance practices</h3>
<ul>
<li><strong>Allow only asynchronous scripts</strong> to avoiding delays in page rendering and block during the DOM construction.</li>
<li><strong>Size all resources statically</strong> All the resource sizes are sized statically to avoid style recalculations. Only one request is needed to get the document layout and fonts.</li>
<li><strong>Don’t let extension mechanisms block rendering</strong> All scripts that require additional HTTP request will be sandboxed with an amp-iframe to don't block the page rendering.</li>
<li><strong>Keep all third-party JavaScript out of the critical path</strong> using asynchronous script loading</li>
<li><strong>All CSS must be inline and size-bound</strong> Minified and write it all on the <head> of the <html ⚡> document.</li>
<li><strong>Font triggering must be efficient</strong> by being all javascript load asynchronously and the stylesheets being inline there isn't any HTTP request to load the fonts will block the browser.</li>
<li><strong>Minimize style recalculations</strong> Any style recalculations is made till the entire page layout is loaded because the DOM is all read before it's written.</li>
<li><strong>Only run GPU-accelerated animations</strong> The css animations, transitions and opacities are made by the GPU dedicated.</li>
<li><strong>Prioritize resource loading</strong> The most currently important resources are loaded first.</li>
<li><strong>Load pages in an instant</strong> Prerendering thanks to the <a href="http://www.w3.org/TR/resource-hints/#dfn-preconnect">preconnect API</a> helping the page to be rendered before the user takes the action to navigate.</li>
<li><strong>Help make AMP faster</strong> The AMP project leads you to <a href="https://www.ampproject.org/docs/support/contribute.html">contribute</a> to this opensourced project.</li>
</ul>
<p>The Google AMP Cache is a proxy-based content delivery network for delivering all valid AMP documents. It fetches AMP HTML pages, caches them, and improves page performance automatically. When using the Google AMP Cache, the document, all JS files and all images load from the same origin that is using HTTP 2.0 for maximum efficiency.</p>
<p>More information about it: <a href="https://www.ampproject.org/">https://www.ampproject.org/</a></p>
<h3 id="howitlooksthestructureofanampdocument">How it looks the structure of an AMP document</h3>
<p>This is an example of an html AMP page.<br />
<img src="../images/amphtml_sample.png" alt="How to build an Accelerated Mobile Page (AMP)?" /></p>
<h3 id="howtobuildanampdocument">How to build an AMP document</h3>
<p>Basically you should build a page with the following structure and you have an AMP ready page to be distributed.</p>

```html
<!DOCTYPE html>
<html ⚡>
  <head>
    <meta charset="utf-8" />
    <link rel="canonical" href="https://www.example.com/url/hello-world.html" />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <style amp-boilerplate>
      body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      }
      @-webkit-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-moz-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-ms-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-o-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
    </style>
    <noscript
      ><style amp-boilerplate>
        body {
          -webkit-animation: none;
          -moz-animation: none;
          -ms-animation: none;
          animation: none;
        }
      </style></noscript
    >
    <script async src="https://cdn.ampproject.org/v0.js"></script>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

<p>And you also have to link your non AMP document with a link rel tag on the head of your <em>normal</em> document.</p>

```html
<link
  rel="amphtml"
  href="https://www.example.com/url/to/amp/hello-world.html"
/>
```

<p>You can check a complete AMP HTML tags specification on the Github project page <a href="https://github.com/ampproject/amphtml/blob/master/spec/amp-html-format.md">https://github.com/ampproject/amphtml/blob/master/spec/amp-html-format.md</a></p>
<h4 id="wordpressusersandampdocuments">Wordpress users and AMP documents</h4>
<p><img src="../images/banner-1544x500.png" alt="How to build an Accelerated Mobile Page (AMP)?" /><br />
If you are using a Wordpress content management solution you have a plugin (as usual) that solves the problem to generate all the AMP versions of your content.<br />
<a href="https://wordpress.org/plugins/amp/">https://wordpress.org/plugins/amp/</a></p>
<h2 id="whatdoesthinkgoogleafterall">What does think Google after all?</h2>
<p><img src="../images/AMP-alert---Google-Search.png" alt="How to build an Accelerated Mobile Page (AMP)?" /></p>
<p class="warning">All the SEO people should be aware if it alters the results and an AMP version of a page raises your Google ranks or not.</p>
<p>Google is offering from mobile searches the AMP version of an HTML page if it is indexed highlighting the result with the featured lightning.</p>
<p><img src="../images/2016-09-23-09_12_49-Clipboard.png" alt="How to build an Accelerated Mobile Page (AMP)?" /></p>
<h2 id="whatithinkaboutit">What I think about it?</h2>
<p>The strategy is similar that the provided for the <a href="http://www.opera.com/mobile">Opera Mini</a> for cellular phones. The Opera Mini browser acted as a proxy to deliver small, fast and optimized versions of the requested pages provided from Opera servers. The AMP project is a tool to delegate the responsibility to the content providers and freeing the intermediary of the task.</p>

<p>IMHO, I think Google is forcing with this technology the web developers to provide simpler webs instead of bloated ones that you can find over there. For sure Google knows, and lives for it, that ads are for many webs their economic sustenance and provides all the tools to deliver optimized and necessary ads fast and small sized.</p>
