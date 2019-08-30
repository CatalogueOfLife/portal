# Public facing website for Catalogue of Life

The website is build with [Jekyll](https://jekyllrb.com/). If you want to run the project locally, then jekyll has a nice documentation of [how to get started](https://jekyllrb.com/docs/).

It is not necessary to run the project locally to change content. It is possible to simple edit the files through Github's interface.

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
├── about/ # RELEVANT FOR EDITORS - content under the menu item 'about' should be placed here
│   ├── acknowledgements.md # the pages located here will show up under the url '/about/filename' - unless the yml frontmatter defines another url (permalink)
│   └── ...
├── css/ # Styling as provided by the theme
├── data-acces/ # RELEVANT FOR EDITORS - content under the menu item 'data-access' should be placed here
├── documentation/ # Contains a examples for how yml frontmatter and markdown can look. The examples can be seen under /documentation/intro
├── fonts/ # Where fonts are stored. Currently only the icon fonts
├── help/ # RELEVANT FOR EDITORS - content under the menu item 'help' should be placed here
├── images/ # Will be copied verbatim to the public folder. Any image placed here, including subdirectories will be available in your templates
├── javascript/ # Will be copied verbatim to the public folder. To include it you have to add it (probably to /_includes/head or /_includes/footer)
├── nav-pages/ # Navigation pages for higher level menu items. Like '/resources' - it isn't really a page, but a placeholder to navigate to the children of a menu item
├── news/
│   └── news.html # will list all news listed under /_posts
├── resources/ # RELEVANT FOR EDITORS - content under the menu item 'resources' should be placed here
├── root/ # RELEVANT FOR EDITORS - content under the menu item 'about' should be placed here
│   ├── 404.md    # RELEVANT FOR EDITORS - What should the 404 page not found show
│   └── index.md  # RELEVANT FOR EDITORS - front page. There is no markdown here, just a lot of yml for the various content blocks. What images, what caption etc.
├── scripts/ # Jekyll scripts
├── _config.yml # Site configuration
└── ...
```

