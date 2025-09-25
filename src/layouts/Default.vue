<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">

      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <LayoutHeader />
      </header>

      <main class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">

        <aside
          v-if="hasSidebar"
          class="sidebar flex-1 w-1/6"
          :class="{ 'open': sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-8 bg-ui-background">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{'pl-0 lg:pl-12 lg:w-5/6': hasSidebar}"
        >
          <slot />
        </div>

      </main>

    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white" @click="sidebarOpen = ! sidebarOpen">
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "@/components/LayoutHeader";
import { MenuIcon, XIcon } from 'vue-feather-icons';

// gridsome.config.js에서 설정 직접 import
const gridsomeConfig = require('../../gridsome.config.js');
const siteSettings = gridsomeConfig.settings;

export default {
  components: {
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
    }
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    }
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    },
    async detectUserLocationAndRedirect() {
      const currentPath = this.$route.path;
      const currentLanguage = this.getCurrentLanguage(currentPath);

      // localStorage에서 사용자가 설정한 언어 확인
      const userPreferredLanguage = this.getUserPreferredLanguage();
      if (userPreferredLanguage) {
        // 사용자 설정 언어와 현재 언어가 다르면 변경
        if (currentLanguage !== userPreferredLanguage) {
          const newPath = this.buildNewPath(currentPath, currentLanguage, userPreferredLanguage);
          if (newPath !== currentPath) {
            this.$router.push(newPath);
          }
        }
        return; // 사용자 설정이 있으면 IP 기반 감지 건너뛰기
      }

      try {
        // 여러 IP API를 순차적으로 시도
        let countryCode = null;
        
        // 첫 번째 API 시도
        try {
          const response1 = await fetch('https://ipapi.co/json/');
          const data1 = await response1.json();
          countryCode = data1.country_code;
        } catch (e) {
          // 첫 번째 API 실패 시 조용히 처리
        }
        
        // 첫 번째 API가 실패했거나 한국이 아닌 경우 두 번째 API 시도
        if (!countryCode || countryCode !== 'KR') {
          try {
            const response2 = await fetch('https://api.country.is/');
            const data2 = await response2.json();
            if (data2.country) {
              countryCode = data2.country;
            }
          } catch (e) {
            // 두 번째 API 실패 시 조용히 처리
          }
        }
        
        if (countryCode) {
          console.log('최종 감지된 국가 코드:', countryCode);
          
          const targetLanguage = this.getLanguageByCountry(countryCode);
          console.log('IP 기반 언어 설정:', targetLanguage);
          
          if (currentLanguage !== targetLanguage) {
            const newPath = this.buildNewPath(currentPath, currentLanguage, targetLanguage);
            if (newPath !== currentPath) {
              this.$router.push(newPath);
            }
          }
        }
        
      } catch (error) {
        // API 실패 시에는 현재 언어 유지
      }
    },
    getCurrentLanguage(path) {
      // 직접 import한 설정 사용
      const sidebarSettings = siteSettings.sidebar || {};
      
      // 설정된 모든 언어에 대해 경로 확인
      for (const langCode of Object.keys(sidebarSettings)) {
        if (path.startsWith(`/${langCode}/`)) {
          return langCode;
        }
      }
      
      // 기본 언어 반환
      const defaultLang = siteSettings.defaultLanguage || 'ko';
      return defaultLang;
    },
    buildNewPath(currentPath, currentLang, targetLang) {
      const langPattern = `/${currentLang}/`;
      const targetPattern = `/${targetLang}/`;
      
      if (currentPath.startsWith(langPattern)) {
        const newPath = currentPath.replace(langPattern, targetPattern);
        return newPath;
      }
      
      // 언어 경로가 없는 경우 기본 페이지로 이동
      const defaultPath = `/${targetLang}/getting-started/`;
      return defaultPath;
    },
    getUserPreferredLanguage() {
      // localStorage에서 사용자 설정 언어 가져오기
      if (typeof window !== 'undefined') {
        return localStorage.getItem('preferredLanguage');
      }
      return null;
    },
    getLanguageByCountry(countryCode) {
      // 직접 import한 설정 사용
      const sidebarSettings = siteSettings.sidebar || {};
      
      // 각 언어의 지원 국가 코드 확인
      for (const [langCode, langConfig] of Object.entries(sidebarSettings)) {
        if (langConfig.meta && langConfig.meta.countries && langConfig.meta.countries.includes(countryCode)) {
          return langCode;
        }
      }
      
      // 매칭되지 않으면 fallback 언어 사용
      const fallbackLang = siteSettings.fallbackLanguage || 'en';
      return fallbackLang;
    }
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + 'px',
        height: `calc(100vh - ${this.headerHeight}px)`
      }
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    }
  },
  mounted() {
    this.setHeaderHeight();
    this.detectUserLocationAndRedirect();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: process.env.SITE_URL + '/logo.jpg',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-ui-background: theme('colors.white');
  --color-ui-typo: theme('colors.gray.700');
  --color-ui-sidebar: theme('colors.gray.200');
  --color-ui-border: theme('colors.gray.300');
  --color-ui-primary: theme('colors.indigo.600');
}

html[lights-out] {
  --color-ui-background: theme('colors.gray.900');
  --color-ui-typo: theme('colors.gray.100');
  --color-ui-sidebar: theme('colors.gray.800');
  --color-ui-border: theme('colors.gray.800');
  --color-ui-primary: theme('colors.indigo.500');

  pre[class*="language-"],
  code[class*="language-"] {
    @apply bg-ui-border;
  }
}

* {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
  @apply leading-snug font-black mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white) { @apply text-ui-typo }

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply -mt-12 pt-20;
  }
    
  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

code {
  @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
}

pre[class*="language-"] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*="language-"] {
    @apply border-none leading-relaxed;
  }
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

table {
  @apply text-left mb-6;

  td, th {
    @apply py-3 px-4;
    &:first-child {
      @apply pl-0;
    }
    &:last-child {
      @apply pr-0;
    }
  }

  tr {
    @apply border-b border-ui-border;
    &:last-child {
      @apply border-b-0;
    }
  }
}

.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}
</style>
