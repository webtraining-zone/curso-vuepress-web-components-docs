# Cards Component

This component allows to display a set of items in a card-based format.

You can also add custom JavaScript code:

``` js{2}
module.exports = {
  title: 'Our Amazing Library is Ready!',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Components', link: '/components/'},
      {text: 'Webtraining', link: 'https://webtraining.zone'},
    ],
    sidebar: {
      '/components/': getComponentsSidebar(),
    },
  },
};

function getComponentsSidebar() {
  return [
    {
      title: 'Components',
      collapsable: false,
      children: [
        // '',
        'Cards',
        'FancyImage',
      ],
    },
  ];
}

```
