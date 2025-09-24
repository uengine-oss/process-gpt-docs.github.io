<template>
  <div class="py-2 border-t-2 border-ui-primary">
    <div class="container">

      <div class="flex items-center justify-between -mx-2 sm:-mx-4">
        <div class="flex flex-col items-center px-2 sm:px-4 sm:flex-row flex-shrink-0">
          <!-- Process-GPT 페이지에서는 클릭 불가능한 로고 -->
          <g-link
            to="/"
            class="flex items-center"
            title="Home"
          >
          <div class="flex items-center">
            <g-image style="width:200px;" src="./logo-dark.svg"></g-image>
          </div>
        </g-link>
          <!-- 일반 페이지에서는 클릭 가능한 로고 -->
          <!--  -->

          <!-- <div v-if="settings.nav.links.length > 0" class="hidden ml-2 mr-5 sm:block sm:ml-8">
            <g-link
              v-for="link in settings.nav.links"
              :key="link.path"
              :to="link.path"
              class="block p-1 font-medium nav-link text-ui-typo hover:text-ui-primary"
            >
              {{ link.title }}
            </g-link>
          </div> -->
        </div>

        <div class="flex-1 px-2 sm:px-4 min-w-0">
          <ClientOnly>
            <Search />
          </ClientOnly>
        </div>

        <div class="flex items-center justify-end px-2 sm:px-4 flex-shrink-0">

          <a v-if="settings.web" :href="settings.web" class="hidden ml-3 sm:block" target="_blank" rel="noopener noreferrer" title="Website" name="Website">
            <GlobeIcon size="1.5x" />
          </a>

          <a v-if="settings.twitter" :href="settings.twitter" class="hidden ml-3 sm:block" target="_blank" rel="noopener noreferrer" title="Twitter" name="Twitter">
            <TwitterIcon size="1.5x" />
          </a>

          <a v-if="settings.github" :href="settings.github" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Github" name="Github">
            <GithubIcon size="1.5x" />
          </a>

          <!-- 언어 선택 셀렉트 박스 -->
          <select 
            class="ml-3 px-3 py-2 border border-ui-border rounded bg-ui-background text-ui-typo focus:outline-none focus:ring-2 focus:ring-ui-primary"
            :value="currentLanguage"
            @change="changeLanguage($event.target.value)"
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>

          <button class="main-top-btn ml-3 px-4 py-2 bg-ui-primary text-white rounded hover:bg-opacity-80 transition-all flex items-center justify-center"
            @click="openTrainingLink"
          >
            {{ getTrainingButtonText() }}
          </button>

          <ToggleDarkMode class="ml-2 sm:ml-8">
            <template slot="default" slot-scope="{ dark }">
              <MoonIcon v-if="dark" size="1.5x" />
              <SunIcon v-else size="1.5x" />
            </template>
          </ToggleDarkMode>

        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from '@/components/Logo';
import { SunIcon, MoonIcon, GlobeIcon, GithubIcon, TwitterIcon } from "vue-feather-icons";

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    GlobeIcon,
    GithubIcon,
    TwitterIcon
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
    isProcessGptPage() {
      // 현재 경로가 Process-GPT 페이지인지 확인
      return this.$route && this.$route.path && this.$route.path.startsWith('/process-gpt/');
    },
    currentLanguage() {
      // 현재 페이지 경로를 기반으로 언어 감지
      const path = this.$route ? this.$route.path : '/';
      if (path.startsWith('/en/')) return 'en';
      if (path.startsWith('/jp/')) return 'jp';
      return 'ko';
    }
  },

  methods: {
    openTrainingLink() {
      window.open('https://www.uengine.org/contents/educationaiagent.html', '_blank');
    },
    getTrainingButtonText() {
      switch (this.currentLanguage) {
        case 'en':
          return 'Apply for Training';
        case 'jp':
          return '研修申込';
        default:
          return '교육 신청';
      }
    },
    changeLanguage(newLanguage) {
      // 각 언어별 기본 페이지로 이동
      let newPath = '';
      
      switch (newLanguage) {
        case 'en':
          newPath = '/en/getting-started/';
          break;
        case 'jp':
          newPath = '/jp/getting-started/';
          break;
        default:
          newPath = '/ko/getting-started/';
          break;
      }
      
      // 현재 경로와 다른 경우에만 라우팅
      if (newPath !== this.$route.path) {
        this.$router.push(newPath);
      }
    }
  }
};
</script>

<style lang="scss">
header {
  svg:not(.feather-search) {
    &:hover {
      @apply text-ui-primary;
    }
  }
}

.nav-link {
  &.active {
    @apply text-ui-primary font-bold border-ui-primary;
  }
}
</style>
