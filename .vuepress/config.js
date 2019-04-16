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
  head: [
    [
      'script', {
      src: 'https://unpkg.com/@alex-arriaga/stencil-webtraining-components@0.0.2/dist/webtraining-components-demo.js',
    },
    ],
  ],
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
        'CountriesFinder',
      ],
    },
  ];
}
