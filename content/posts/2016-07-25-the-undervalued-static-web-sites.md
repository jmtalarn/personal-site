---
title: The undervalued static web sites
date: 2016-07-25T15:38:25
type: post
slug: /the-undervalued-static-web-sites/
cover: /images/featured/Captura-de-pantalla-de-2016-07-08-13-00-25.png
category: ['Web development']
tags: ['static web sites']
author: jmtalarn
---

When you are going to build a new web site, most of times you go through it thinking about the technology you'll use to build it. Maybe you want to be on the cutting edge and you'll use the latest or rarest content management system like Ghost or maybe you'll use a wide extended system and full of available plugins (I've a mention about these later) like Wordpress.
<!--more-->

<p>But only a few times we think about what we really want and what we really need. <br />
Sometimes you're creating a new site that the content will not be much updated. The reason to choose one technology or another could be a client requirement but some of them also need external help to add or update the content, and many many times, his issues will be about changing themes or layouts and the professional help is a must. <br />
This don't apply to everybody, but I'm sure that sometimes is like this.</p>
<p>You need to install a bunch of plugins to get what you really want, and maybe is useful for people without the technology knowledge but sometimes, this plugin will be an additional load for your site.</p>
<p>I don't mean to not use plugins, because some of them give you a lot of added value (the most actually useful are paid). But some other times the functionality could be added with a few lines of html or javascript and this amount of plugins are adding a lot of server backend computing.</p>
<h2 id="advantagesofastaticwebsite">Advantages of a static web site.</h2>
<p>A CMS needs to process the http request, then query the data to the database or external APIs and finally return all the stuff passing through the filters and plugins you could have installed. In the other hand, the static site only takes care of the first part of this sequence. A static site will respond to an http request with his static resources and sometimes will use calls to externals APIS. <br />
After that, both send the information to the browser or http client and will be processed in the client to show what was required. Both kind of sites could take advantatge of the benefits of serving external assets from CDN repositories but ...</p>
<p>Finally this is translated in two important factors for the users expectations: <strong>security and speed</strong>. With a static site there is no need about managing security and user permissions, what is served from the server are static resources and there is no need to protect it if you are building a public site.</p>
<h2 id="howtobuildstaticwebsite">How to build static web site.</h2>
<p>Building a static site isn't about time travel and use technology of 10 years ago. <br />
You can be in the wave of newer technologies like <strong>Node.js</strong>, <strong>Grunt</strong>, <strong>Gulp</strong>, <strong>Sass</strong>, <strong>Handlebars</strong> and all the mess of <strong>npm</strong> and <strong>bower</strong> packages ... and build fantastic static web sites and getting fun at the same time. <br />
There are many options out there, but I tell which one <br />
I use. A framework that provides all together all the technologies I need: <strong>Zurb Foundation</strong> in the 6th version. <br />
You can refer to the <a href="http://foundation.zurb.com/">documentation</a> to see all options and possibilities to install and use the framework but I will provide a quick use guide</p>
<h2 id="spanidfoundation6forsitesquickuseguidefoundation6forsitesquickuseguidespan"><span id="foundation-6-for-sites-quick-use-guide">Foundation 6 for sites: quick use guide</span></h2>
<h3 id="prerequisites">Pre-requisites</h3>
<ol>
<li>You have to install <strong><em>Node.js</em></strong> v0.12 or above. Refer to Node.js  documentation for your OS <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></li>
<li>Once you have installed Node.js you have to install <em>gulp</em> and <em>bower</em> globally executing with sudo if you are in Linux environment  <code>sudo npm install -g gulp bower</code></li>
<li>Git installed is also a requirement <a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a></li>
</ol>
<h3 id="buildthesitetemplate">Build the site template</h3>
<ol>
<li>Install the <em>foundation-cli</em> globally that will help you through the process to create a new site each time you need it (also with sudo if you are in Linux environment) <code>sudo npm install -g foundation-cli</code>  </li>
<li>Create a working folder to set as your project development folder. Open a command line there or change to the working directory.  </li>
<li>Execute the command <code>foundation new</code> to generate a new site with the cli in the working directory.  </li>
<li>The assistant will ask you for 3 questions:
<ol>
<li>The type of project you're building that is <em>A web site</em> and this will use the <em>Foundation for Sites</em> framework,</li>
<li>the project name, </li>
<li>and the template to generate the site skeleton.<br />
I suggest to use the ZURB Template to use a set of tools that make the site development easier to structure content and modularize the components. These tools are basically the <a href="http://handlebarsjs.com/">Handlebars</a> template system, that allows you to structure the HTML in a set of source files and the <a href="http://sass-lang.com/">Sass</a> compiler to generate a resultant css from the source files with the help of some functions to manipulate the css generated and a modularized style of components.  </li>
</ol>
</li>
</ol>

```bash
? What are you building today? (Use arrow keys)
❯ A website (Foundation for Sites)
  A web app (Foundation for Apps)
  An email (Foundation for Emails)
```

```bash
? What's the project called? (no spaces) myproject
```

```bash
? Which template would you like to use?
  Basic Template: includes a Sass compiler
❯ ZURB Template: includes Handlebars templates and Sass/JS compilers
```

<p>Finally we got a message thanking you to use the framework</p>

```bash
            .
           /|     ,
      , /|/  \/| /|       Thanks for using ZURB Foundation for Sites!
     /|/       |/ |       -------------------------------------------
 |___|            |___|   Let's set up a new project.
 \___|  ^^   ^^   |___/   It shouldn't take more than a minute.
     | -[O]--[O]- |
     |    ___,    |
     |    ...     |
      \_ _ _ _ _ /


Downloading the project template...
Done downloading!

Installing dependencies...
```

<p>And after the downloaded dependencies required to build the project it will show something like </p>

```bash
You're all set!

 ✓ New project folder created.
 ✓ Node modules installed.
 ✓ Bower components installed.

Now run foundation watch while inside the myproject folder.
```

<h3 id="whatwegotandwhatiseachofthesefolders">What we got, and what is each of these folders?</h3>

```bash
.
├── bower_components
│   ├── foundation-sites
│   ├── jquery
│   ├── motion-ui
│   └── what-input
│ 
├── bower.json
├── CHANGELOG.md
├── config.yml
├── etc
├── gulpfile.babel.js
├── node_modules
│ 
├── package.json
├── readme.md
└── src
    ├── assets
    │   ├── img
    │   ├── js
    │   │   └── app.js
    │   └── scss
    │       ├── app.scss
    │       ├── components
    │       └── _settings.scss
    ├── data
    ├── layouts
    │   └── default.html
    ├── pages
    │   └── index.html
    ├── partials
    └── styleguide
        ├── index.md
        └── template.html
```

<ul>
<li><strong>bower_components</strong> and <strong>bower.json</strong> You should install your bower dependencies in the root directory of your project. Here you can install things like <a href="http://fontawesome.io/" target="\_blank">Font-Awesome</a>, <a href="http://momentjs.com/" target="\_blank">Moment</a> or <a href="https://d3js.org/" target="\_blank">D3</a> In the *bowercomponents* folder there are the basic dependencies of the Zurb Foundation framework like <a href="https://jquery.com/" target="\_blank">jQUery</a> </li>
<li><strong>node_modules</strong> folder contain the <strong>Node.js</strong> dependencies of the framework needed to generate the final files and folders to distribute as the site and <strong>package.json</strong> is the definition for <em>Node.js</em> packages for the current site. </li>
<li><strong>gulpfile.babel.js</strong> is the definition of the <a href="http://gulpjs.com/" target="\_blank">gulp</a> taks running the project. These tasks will use the configuration from the YAML file <strong>config.yml</strong> </li>
<li><strong>readme.md</strong> A basic definition of how the project and the foundation cli rules.</li>
<li><strong>src</strong> folder content are the fundamental elements of your site. Here is where you'll change things and generate the content of your website.
<ul>
<li><strong>assets</strong></p>
<ul>
<li> <strong>js</strong> Any javascript file you want to include in your final code goes here </li>
<li> <strong>img</strong> The folder to contain the image resources of your project</li>
<li> <strong>scss</strong> It's containing the source files for all your custom styles as sass source files. </li>
</ul>
</li>
<li><strong>layouts</strong> containing <strong>default.html</strong> which is the template for the general layout of the project in the Handlebars flavour</li>
<li><strong>partials</strong> Any piece of html (Handlebars) you reuse in many pages could go here in order to be accessible for any page.</li>
<li><strong>pages</strong> Each one of the pages in your site. Here you can set the folder and section structure you prefer. Also in Handlebars format.</li>
<li><strong>styleguide</strong> Is a content example using the defined styles as a showcase of the basic html components</li>
</ul>
</li>
</ul>

<h3 id="runningit">Running it</h3>

<blockquote>
<p>Run, change and review the result.</p>
</blockquote>

<p>You can run your project in a live server. This means that it will start a web server and will be listening to the changes in your project files like scss source files or html templates. <br />
This is the command <code>foundation watch</code> <br />
Once you have a statisfactory result you can generate the final files to upload to your production web server. These are the same content than the generated during the development but optimized to get a higher performance in the real life and use. <br />
The command <code>foundation build</code> generates a <strong>dist</strong> folder containing the final result of your project.</p>
<h3 id="updatingit">Updating it</h3>
<p>You can run <code>npm update -g foundation-cli</code> to update the Foundation client.</p>
<p>Or if you want to update the package dependencies like the bower dependencies in your project you can run the command <code>foundation update</code></p>
