[![Build Status](https://builds.gbif.org/job/col-portal/badge/icon)](https://builds.gbif.org/job/col-portal/)

# Public facing website for Catalogue of Life

The website is build with [Jekyll](https://jekyllrb.com/). If you want to run the project locally, then jekyll has a nice documentation of [how to get started](https://jekyllrb.com/docs/).

It is not necessary to run the project locally to change content. It is possible to simple edit the files through Github's interface. It takes around 5 minutes for the changes to show on the website.

TODO:
> We need to find a good way to inform editors, when/if their changes is breaking the build (could for example be illegal yaml frontmatter).

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
│   ├── notFound.html # The 404 page template
│   └── post.html     # Individual news stories
├── _posts_/ # RELEVANT FOR EDITORS - the news stories
│   ├── 2013-11-14-my-story.md # individual news story prefixed with the date.
│   └── ...
├── _sass/ # Styling as provided by the theme
│   ├── ...
│   ├── custom.scss # for now where we add custom css, when the themes css is insufficient
│   └── ...
├── _site/ # Jekyll compiles the site to this folder
├── articles/ # RELEVANT FOR EDITORS - this is where all content but news stories go
│   ├── about/ content under the menu item 'about' should be placed here
│   │   ├── acknowledgements.md # the pages located here will show up under the url '/articles/about/filename' - unless the yml frontmatter defines another url using the permalink attribute
│   │   └── ...
│   ├── data/
│   ├── examples/ # just a list of examples articles as a reference for how the frontmatter and markdown is used. Not indexed by search engines, but it is public. Feel free to delete. Can be seen under /articles/documentation/intro
│   ├── help/
│   └── resources/
├── css/ # Styling as provided by the theme
├── fonts/ # Where fonts are stored. Currently only the icon fonts
├── images/ # Will be copied verbatim to the public folder. Any image placed here, including subdirectories will be available in your templates
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
When writing content there are only a few folders that are relevant. And you need to have an understanding of [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [yml](https://www.tutorialspoint.com/yaml/yaml_introduction.htm). For most articles, your don't really have to understand much yaml. We use Markdown to write prose and YML to write structured data that needs special rendering.

```
_data/nav.yml # for editing the menu
_posts/       # for creating news stories
articles/     # for writing articles. By default urls will reflect the folder structure. can be overwritten with permalinks
```

## Writing articles
When editing and adding articles there are 2 templates to choose from: `content` and `default`. If you are not a developer you probably want to use `layout: content`.

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
permalink: /content/acknowledgements # if the url should not inherit from the folder structure, then define what url the page should have.
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
permalink: /content/acknowledgements # if the url should not inherit from the folder structure, then define what url the page should have.
---
You html goes here
```

You might also want to read about [jekyll frontmatter](https://jekyllrb.com/docs/front-matter/)

## Writing news stories
All news stories are located in the `_posts` folder. Filenames are important. You need to name them with `year-month-day-title`. E.g. `2015-04-14-call-for-logo-designer`.

YML frontmatter:

**Simple example**
```
---
layout: post
title:  "Archaea updated" # what should headline be
date:   2015-02-10 08:19:12
categories: Release # how should this news story be categorised in the archive
---
```

**More complex example**
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

## Example pages
To get started there is a couple of [example pages](https://github.com/gbif/col-org/tree/master/articles/examples). When copying them make sure to change the yaml frontmatter. In particular the `noindex` which excludes the page from being indexed by Google and search engines. They are also available on the website at /articles/examples/intro.
