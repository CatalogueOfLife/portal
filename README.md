[![Build Status](https://builds.gbif.org/job/col-portal/badge/icon)](https://builds.gbif.org/job/col-portal/)

# Public facing website for Catalogue of Life

The website is build with [Jekyll](https://jekyllrb.com/). 
If you want to run the project locally, then jekyll has a nice documentation of [how to get started](https://jekyllrb.com/docs/).
`bundle install` and `bundle exec jekyll serve` should do the trick. Include `--draft` to also show draft posts. To build for prod set the jekyll environment appropriately:
`JEKYLL_ENV=prod bundle exec jekyll build`. For dev add the additional configs: `bundle exec jekyll serve --config _config.yml,_config_dev.yml`

It is not necessary to run the project locally to change content. 
It is possible to simple edit the files through Github's interface. 
It takes around 5 minutes for the changes to show on the website.


## Site structure
```
├── _data/ # This folder contains data object that can be reused throughout the site. Most notably the navigation
│   ├── nav.yml # RELEVANT FOR EDITORS - menu names, urls, children etc.
├── _includes/ # templates for parts of a page
│   ├── footer.html
│   ├── head.html
│   └── ...
├── _layouts/ # Page level templates
│   ├── archive.html  # For exploring all news
│   ├── content.html  # Primary template used by content editors - It will process markdown
│   ├── default.html  # Templates used if you need complete freedom, but still want to inherit header and footer. Content is plain html
│   ├── navPage.html  # Used for top level intermediate pages. Like '/resources' - it isn't really a page, but a placeholder to navigate to the children of a menu item
│   ├── news.html     # Latest news
│   └── post.html     # Individual news stories
├── _posts/ # RELEVANT FOR EDITORS - the news stories
│   ├── 2013-11-14-my-story.md # individual news story prefixed with the date.
│   └── ...
├── _sass/ # Styling as provided by the theme
│   ├── ...
│   ├── custom.scss # for now where we add custom css, when the themes css is insufficient
│   └── ...
├── _site/ # Jekyll compiles the site to this folder
├── articles/ # RELEVANT FOR EDITORS - this is where all content but news stories go
│   ├── about/ content under the menu item 'about' should be placed here
│   │   ├── {filename}.md # the pages located here will show up under the url '/articles/about/{filename}' - unless the yml frontmatter defines another url using the permalink attribute
│   │   └── ...
│   ├── building/ # content under the menu item 'building' should be placed here
│   ├── data/     # pages that use the portal-components to render dynamic pages using the checklistbank API
│   ├── howto/    # content under the menu item 'howto' should be placed here
│   └── tools/    # content under the menu item 'tools' should be placed here
├── css/ # Styling as provided by the theme
├── fonts/ # Where fonts are stored. Currently only the icon fonts
├── images/ # Will be copied verbatim to the public folder. Any image placed here, including subdirectories will be available in your templates
│   ├── species/  images of species shown in the banner of articles should go here. 1800px width, sRGB and 80% jpeg
├── javascript/ # Will be copied verbatim to the public folder. To include it you have to add it (probably to /_includes/head or /_includes/footer)
├── nav-pages/ # Navigation pages for higher level menu items. Like '/resources' - it isn't really a page, but a placeholder to navigate to the children of a menu item
├── news/
│   └── news.html # will list all news listed under /_posts
├── root/ # RELEVANT FOR EDITORS - content under the menu item 'about' should be placed here
│   ├── 404.md    # RELEVANT FOR EDITORS - What should the 404 page not found show
│   └── index.md  # RELEVANT FOR EDITORS - front page. There is no markdown here, just a lot of yml for the various content blocks. What images, what caption etc.
├── scripts/ # Jekyll scripts
├── _config.yml # Site configuration
└── ...
```

## Content editors
When writing content there are only a few folders that are relevant. 
And you need to have an understanding of [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [yml](https://www.tutorialspoint.com/yaml/yaml_introduction.htm). 
For most articles, your don't really have to understand much yaml. 
We use Markdown to write prose and YML to write structured data that needs special rendering.

```
_data/nav.yml # for editing the menu
_posts/       # for creating news stories
articles/     # for writing articles. By default urls will reflect the folder structure. can be overwritten with permalinks
```

### Working with Github
Simple changes like a typo in a word can be corrected through the github website, but all other changes should really be done locally with a text editor and then committed to github.
For this some basic knowledge of working with git is required, see resources below.

Theree are many text editors you can use, e.g. [SublimeText](https://www.sublimetext.com/), [Notepad++](https://notepad-plus-plus.org/), [UltraEdit](https://www.ultraedit.com/), 
[TextMate](https://macromates.com/), [Vim](https://www.vim.org/download.php), [BBEdit](https://www.barebones.com/products/bbedit/) and many more.
If you do not yet have any favorite we recommend [Visual Studio Code](https://code.visualstudio.com/) which runs on Mac & Windows, has [git integration](https://code.visualstudio.com/docs/sourcecontrol/overview)
and syntax highlighting for many formats including Markdown and [TextTree](https://marketplace.visualstudio.com/items?itemName=GBIF.texttree&ssr=false#review-details).

First checkout the github repo locally using the terminal:
> git clone git@github.com:CatalogueOfLife/portal.git

To work on the development brach do this:
> cd portal
> git checkout dev

Now you can work in your editor of choice and later commit changes back to github via the terminal. This will give you an overview of the changed files
> git status

This will add new files not yet included in the project
> git add \_posts/2025-12-24-merry-christmas.md

This will commit changed files to github
> git commit -am "Leave a comment here what you have done. E.g. Updated the governance pages to describe the taxonomy group"
> git push

Some git introductions if you have never used it before:
 - [Introduction to Git for Technical Writers](https://benbarksdale.netlify.app/docs/guides/introduction-to-git-for-technical-writers/)
 - [Git with VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview)
 - [A layman’s introduction to Git](https://webtuu.com/blog/04/a-laymans-introduction-to-git)


## Writing articles
When editing and adding articles there are 2 templates to choose from: `content` and `default`. 
If you are not a developer you probably want to use `layout: content`.

**layout: content**

`content` assumes that the content is markdown. The yml frontmatter looks like this
```
---
layout: content
title: Acknowledgements # what should headline be
tagline: Labore est quasi omnis ducimus # What is the tag line shown below the headline
section_id: about # where does this belong in the menu (this is used to highlight the menu item)
imageUrl: 'https://via.placeholder.com/550x250' # Instead of a grey background behind the headline an image is shown
imageCaption: 'Maecenas scelerisque, [orci](/documentation/intro) a interdum pharetra' # what caption should the image have
published: true # is this just a draft or should it be build - defaults to true
permalink: /about/acknowledgements # if the url should not inherit from the folder structure, then define what url the page should have.
toc: true # should it have a table of contents - default false
noindex: false # Should this page be indexed by robots?
---
You markdown content goes here
```

**layout: default**

`default` assumes that the content is html. The yml frontmatter looks like this
```
---
layout: default
section_id: about # where does this belong in the menu (this is used to highlight the menu item)
published: true # is this just a draft or should it be build - defaults to true
permalink: /about/acknowledgements # if the url should not inherit from the folder structure, then define what url the page should have.
noindex: false # Should this page be indexed by robots?
seo_ssi: true # Turn off SEO plugin and use apache server side includes instead to inject data from the API for taxa and datasets
---
You html goes here
```

You might also want to read about [jekyll frontmatter](https://jekyllrb.com/docs/front-matter/)

### Images
Images configured in the head of an article should be placed in the `/images/species` 
folder with a width of 1800px and stored as a jpeg with an 80% compression and an sRGB profile.


## Writing news stories
All news stories are located in the `_posts` folder. Filenames are important. 
You need to name them with `year-month-day-title`. E.g. `2015-04-14-call-for-logo-designer`.

YML frontmatter:

**Simple example**
```
---
layout: post
title:  "Archaea updated" # what should headline be
categories: Release # how should this news story be categorised in the archive
---
```

**Release example**
```
---
layout: post
title:  monthly release June 2021
author: "Markus Döring"
excerpt: Monthly release June 2021 of the Catalogue of Life
categories: Release
---

What's new in this edition (June 2021)?


#### 4 new checklists

 * [WoRMS Actiniaria](/data/dataset/1176)
 * [WoRMS Nematoda, Nemys](/data/dataset/2302)
 * [WoRMS Brachiopoda](/data/dataset/2299)
 * [WoRMS Euphausiacea](/data/dataset/2301)


#### 5 checklists have been updated

 * [WoRMS Actiniaria](/data/dataset/1176)
 * [WoRMS Amphipoda](/data/dataset/1202)
 * [WoRMS Antipatharia](/data/dataset/1194)
 * [WoRMS Appendicularia](/data/dataset/1178)
 * [WoRMS Ascidiacea](/data/dataset/1186)
```


**More complex frontmatter**
```
---
layout: post
title:  Designers come forward
date:   2015-04-14 10:52:12
excerpt:
  Iste neque doloribus dolor quis ad sit dolores dolor sit perferendis. nemo in rerum ducimus possimus aspernatur quas est. dolorem eaque vel id quasi voluptatem eligendi rerum et quo ut. fuga qui ea voluptates sunt # a short desciption to show in search results
categories: ["Awards", "Communication"]
images: # optional can be one or more
  - images/@stock/blog-3.jpg
  - images/@stock/blog-2.jpg
author: "John 'the Moth' Moon" # optional
---
```


## Images with caption
Below is a markdown custom figure. This isn't generic markdown, but specific for the site. It will render as an image with a caption
```
{% include image.html url="https://via.placeholder.com/550x250" alt="Alt text goes here" description="My cat, Robert Downey Jr." %}
```

## Worth considering when changing the navigation

* The menu has a fixed breakpoint. If you add many menu items it will overflow on some device sizes. You should test this when adding more menu items.

## Icons
Icons are font awesome and can be browsed at https://fontawesome.com/icons?d=gallery&m=free

