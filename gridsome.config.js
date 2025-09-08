// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '',// 주석 부분 : uengine6 뒤에 각 리스트의 타이틀을 출력하고 싶을때 사용
  // titleTemplate: 'uengine6 - %s',
  // titleTemplate: 'uengine6',
  icon: {
    favicon: './src/assets/process-gpt-favicon.png',
    touchicon: './src/assets/process-gpt-favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://intro.process-gpt.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/process-gpt/', title: 'Process-GPT' }
      ]
    },
    sidebar: [
      {
        name: 'process-gpt',
        sections: [
          {
            title: '시작하기',
            items: [
              '/process-gpt/',
              '/process-gpt/process-gpt-install/',
            ]
          },
          {
            title: '튜토리얼',
            items: [
              '/process-gpt/tutorial-lv1/',
              '/process-gpt/tutorial-lv2/',
              '/process-gpt/tutorial-lv3/',
              '/process-gpt/tutorial-lv4/',
            ]
          },
          {
            title: '세부기능',
            items: [
              '/process-gpt/user-guide/',
              '/process-gpt/admin-guide/',
              '/process-gpt/process-marketplace/',
              '/process-gpt/simulation/',
              '/process-gpt/multi-agent/',
              '/process-gpt/agent-knowledge/',
              '/process-gpt/a2a-system/',
              '/process-gpt/voice-chat/',
              '/process-gpt/browser-use/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
