<template></template>

<script>
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import '../style/gitalk.styl';

export default {
  computed: {
    pluginConfig() {
      return JSON.parse(pluginConfig);
    },
    data() {
      return {
        root: this.pluginConfig.root,
        maxRetryCount: this.pluginConfig.maxRetryCount,
        defaultCheckMinutes: this.pluginConfig.defaultCheckMinutes,
        ignorePaths: this.pluginConfig.ignorePaths,
      };
    }
  },
  created() {
    this.$nextTick(() => {
      this.root = this.pluginConfig.root;
      this.maxRetryCount = this.pluginConfig.maxRetryCount;
      this.defaultCheckMinutes = this.pluginConfig.defaultCheckMinutes;
      this.ignorePaths = this.pluginConfig.ignorePaths;
    });
  },
  mounted() {
    if (!this.pluginConfig.enable) {
      return;
    }
    this.pluginLog(`The ${this.$gitalkAppName} is mounted 🔌, View more please goto 👉👉👉 ${this.$gitalkAppUrl}`);
    this.$nextTick(() => {
      setTimeout(() => {
        this.initGitalk(this.$route);
      }, 2000);
    });
    this.$router.afterEach((to, from) => {
      this.$nextTick(function() {
        if (to.path !== from.path) {
          this.initGitalk(to);
        }
      });
    });
  },
  methods: {
    initGitalk(route) {
      let pageElem = document.querySelector('.page');
      console.log(this.$gitalkAppName + 'init ⏳📡');
      const shouldIgnore = this.ignorePaths.some(path => path === route.path)
      if (!pageElem) {
        let retryCount = 0;
        // 500毫秒执行一次check(() => 解决setTimeout、setInterval内this调用失效的解决办法)
        // https://blog.csdn.net/aiyawei123/article/details/81867304
        const timerCheckElem = setInterval(() => {
          if (retryCount >= this.maxRetryCount) {
            clearInterval(timerCheckElem);
            return;
          }

          retryCount++;

          if (
            this.pluginConfig.home
            && this.$page.frontmatter
            && this.$page.frontmatter.home
          ) {
            let appElem = document.querySelector('.theme-container');
              
            if (appElem) {
              clearInterval(timerCheckElem);
              this.loadGitalk(route, appElem);
            }
          } else {
            pageElem = document.querySelector('.page');

            if (pageElem) {
              clearInterval(timerCheckElem);
              this.loadGitalk(route, pageElem);
            }
          }
        }, this.defaultCheckMinutes);
      } else {
        if (!shouldIgnore) {
          this.loadGitalk(route, pageElem);
        } else {
          const commentsContainer = document.getElementById(this.root);
          pageElem = document.querySelector('.page');
          this.$nextTick(function() {
            pageElem && commentsContainer && pageElem.removeChild(commentsContainer);
          });
          console.log(`😭😭😭 The path of ${route.path} should ignore`);
          console.log(`😭😭😭 The ignore path ${JSON.stringify(this.ignorePaths)} includes ${route.path}`)
        }
      }
    },

    loadGitalk(to, elem) {
      let commentsContainer = document.getElementById(this.root);
      if (!commentsContainer) {
        commentsContainer = document.createElement('div');
        commentsContainer.id = this.root;
        commentsContainer.classList
          && commentsContainer.classList.add('content');
      } else {
        commentsContainer.innerHTML = '';
      }
      const $page = !!elem ? elem : document.querySelector('.page');

      if ($page) {
        $page.appendChild(commentsContainer);
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {

          if (window && window.document) {
            window.document.title = this.$title;
          }
          
          this.renderGitalk(this.$title || this.$page.title || to.path);
        }
      }
    },
    /**
     * 渲染Gitalk
     * @param {*} gitalkId
     */
    renderGitalk(gitalkId) {
      if (typeof gitalkId === 'string') {
        gitalkId = gitalkId.length > 50 ? gitalkId.substr(0, 50) : gitalkId;
      }

      const gitalk = new Gitalk({
        clientID: this.pluginConfig.gitalk.clientID,
        clientSecret: this.pluginConfig.gitalk.clientSecret,
        repo: this.pluginConfig.gitalk.repo,
        owner: this.pluginConfig.gitalk.owner,
        admin: !!this.pluginConfig.gitalk.admin
          ? this.pluginConfig.gitalk.admin
          : [this.pluginConfig.gitalk.owner],
        id: gitalkId,
        distractionFreeMode: false,
        language: !!this.pluginConfig.gitalk.language
          ? this.pluginConfig.gitalk.language
          : 'zh-CN'
      });

      gitalk.render(this.root);
    },

    pluginLog(str = this.pluginConfig.pluginName) {
      if (this.pluginConfig.log) {
        console.log(str);
      }
    }
  }
};
</script>

<style lang='stylus' scoped></style>
