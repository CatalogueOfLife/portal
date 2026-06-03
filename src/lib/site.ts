// Static site-wide configuration (was the top of _config.yml).
export const site = {
  url: 'https://www.catalogueoflife.org',
  title: 'COL',
  email: 'feedback@catalogueoflife.org',
  description: 'The Catalogue of Life',
  facebook_username: 'CatalogueOfLife',
  linkedin_username: 'catalogue-of-life',
  logo: '/images/logos/col_square_logo.jpg',
  defaultImageUrl: '/images/default-bg.jpg',
  defaultImageCaption:
    '[A description](https://www.some.org/where) would go here ([CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/))',
} as const;
