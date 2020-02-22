<h3 align="center">
  <a href="https://github.com/Rain120/vuepress-plugin-awesome-gitalk">Vuepress Plugin Awesome Gitalk</a>
  <img src='@images/shotscreen/talk.png' alt='talk' width='100%' height='30%' />
</h3>

<div align="center">

[![GitHub watchers](https://img.shields.io/github/watchers/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/watchers)
[![STAR](https://img.shields.io/github/stars/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/stargazers) [![FORK](https://img.shields.io/github/forks/rain120/vuepress-plugin-awesome-gitalk?style=social)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/network/members)

[![npm download](https://img.shields.io/npm/dt/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk) [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vuepress-plugin-awesome-gitalk/badge)](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk)
[![ISSUES](https://img.shields.io/github/issues/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/issues) [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/pulls) [![COMMIT](https://img.shields.io/github/last-commit/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/commits/master) ![LANGUAGES](https://img.shields.io/github/languages/top/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-awesome-gitalk?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk)
<!-- [![VERSION](https://img.shields.io/github/package-json/v/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/blob/master/package.json) -->

</div>

## 😚 Welcome

Welcome to the vuepress plugin with gitalk.

## 🎮 TL;DR

⌨️ How to use it, 👇

## 🔨 Usage

### Npm

```md
npm install vuepress-plugin-awesome-gitalk --save

// or

yarn add vuepress-plugin-awesome-gitalk
```

`Setting with your account`

![gitalk-setting-1.png](@images/shotscreen/gitalk-setting-1.png)

![gitalk-setting-2.png](@images/shotscreen/gitalk-setting-2.png)

`.vuepress/config.js`

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-awesome-gitalk', {
        enable: true,
        log: true,
        home: true,
        gitalk: {
          clientID: 'your clientID',
          clientSecret: 'your clientSecret',
          repo: 'your repo',
          owner: 'your owner',
          admin: ['your admin'],
          language: 'zh-CN',
        }
      }
    ],
  ]
}
```

<!-- ### CDN

```md
<script src="https://cdn.jsdelivr.net/npm/vuepress-plugin-awesome-gitalk@0.0.2/lib/vuepress-plugin-awesome-gitalk.min.js"></script>
``` -->

## 🤝 Contributing
[![PR](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square&logo=appveyor)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/pulls)

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/pulls) or as a GitHub [issue](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/issues).

## 🔗 Links

[Docs & Demo](https://rain120.github.io/vuepress-plugin-awesome-gitalk/dist/index.html)

[NPM Package](https://www.npmjs.com/package/vuepress-plugin-awesome-gitalk)

[CDN Package](https://www.jsdelivr.com/package/npm/vuepress-plugin-awesome-gitalk)

## 👨‍🏭 Author

> Front-End development engineer, technology stack: React + Typescript + Mobx, also used Vue + Vuex for a while

- [Github](https://github.com/Rain120)
- [知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)
- [掘金](https://juejin.im/user/57c616496be3ff00584f54db)

#### 📝 License

[![LICENSE](https://img.shields.io/github/license/rain120/vuepress-plugin-awesome-gitalk?style=flat-square)](https://github.com/Rain120/vuepress-plugin-awesome-gitalk/blob/master/LICENSE)

Copyright © 2020-present [Rain120](https://github.com/Rain120).

