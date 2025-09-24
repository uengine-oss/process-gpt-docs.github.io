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
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.process-gpt.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/getting-started/', title: 'Process-GPT' }
      ]
    },
    sidebar: {
      ko: [
        {
          name: 'getting-started',
          sections: [
            {
              title: '시작하기',
              items: [
                'getting-started/',
                'getting-started/process-gpt-install/',
              ]
            },
            {
              title: '튜토리얼',
              items: [
                'tutorial/tutorial-lv1/',
                'tutorial/tutorial-lv2/',
                'tutorial/tutorial-lv3/',
                'tutorial/tutorial-lv4/',
                'tutorial/tutorial-lv5/',
              ]
            },
            {
              title: '세부기능',
              items: [
                'advanced-features/user-guide/',
                'advanced-features/admin-guide/',
                'advanced-features/process-marketplace/',
                'advanced-features/simulation/',
                'advanced-features/multi-agent/',
                'advanced-features/agent-knowledge/',
                'advanced-features/a2a-system/',
                'advanced-features/voice-chat/',
                'advanced-features/browser-use/',
                'advanced-features/feedback-system/',
                'advanced-features/multi-instance/',
              ]
            }
          ]
        }
      ],
      en: [
        {
          name: 'getting-started',
          sections: [
            {
              title: 'Getting Started',
              items: [
                'getting-started/',
                'getting-started/process-gpt-install/',
              ]
            }
          ]
        }
      ],
      jp: [
        {
          name: 'getting-started',
          sections: [
            {
              title: '始める',
              items: [
                'getting-started/',
                'getting-started/process-gpt-install/',
              ]
            }
          ]
        }
      ]
    }
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
