const path = require('path')
const gitalk = require('../../src/index')

module.exports = {
    plugins: [
      [
        gitalk, {
          enable: true,
          log: true,
          home: true,
          gitalk: {
            clientID: 'f0d924a27274378ef2a3',
            clientSecret: '41718ded9b3115824be3e162439ce43f736be645',
            repo: 'https://rain120.github.io/study-notes/',
            owner: 'rain120',
            admin: ['rain120'],
            language: 'zh-CN',
          }
        }
      ],
    ],
    base: '/vuepress-plugin-awesome-gitalk/dist/',
    title: 'Vuepress Plugin with Gitalk',
    head: [
      [
        'mate',
        {
          name: 'Set-Cookie',
          content: 'HttpOnly;Secure;SameSite=None',
        }
      ]
    ],
    dest: 'dist/',
    configureWebpack: {
      resolve: {
          alias: {
            '@images': path.join(__dirname, '..'),
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