const path = require('path')
const gitalk = require('../../src/index')

module.exports = {
    plugins: [
      [
        gitalk, {
          enable: true,
          log: true,
          home: false,
          gitalk: {
            clientID: 'e743112631c04b57abf7',
            clientSecret: '2363ef1edc6b74a4675b9563b745b603ce6b943c',
            repo: 'vuepress-plugin-awesome-gitalk',
            owner: 'Rain120',
            admin: ['Rain120'],
            language: 'zh-CN',
            // facebook-like distraction free mode
            distractionFreeMode: true,
          }
        }
      ],
    ],
    base: '/vuepress-plugin-awesome-gitalk/dist/',
    title: 'Vuepress Plugin with Gitalk',
    description: 'Vuepress Plugin with Gitalk',
    head: [
      [
        'mate',
        {
          name: 'Set-Cookie',
          content: 'HttpOnly;Secure;SameSite=None',
        }
      ],
      ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    dest: 'dist/',
    configureWebpack: {
      resolve: {
          alias: {
            '@images': path.join(__dirname, '../../'),
          }
      }
    },
    themeConfig: {
      nav: [
        {
          text: 'Github',
          link: 'https://github.com/Rain120',
          target: '_blank',
        },
        {
          text: 'Repo',
          link: 'https://github.com/Rain120/vuepress-plugin-awesome-gitalk',
          target: '_blank',
        }
      ],
      search: true,
      sidebar: 'auto',
    },
  }