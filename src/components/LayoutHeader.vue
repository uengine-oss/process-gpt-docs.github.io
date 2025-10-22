<template>
  <div class="py-2 border-t-2 border-ui-primary">
    <div class="container">

      <!-- 데스크톱 레이아웃 (768px 이상) -->
      <div class="hidden md:flex items-center justify-between -mx-2 sm:-mx-4">
        <div class="flex flex-col items-center px-2 sm:px-4 sm:flex-row flex-shrink-0">
          <!-- Process-GPT 페이지에서는 클릭 불가능한 로고 -->
          <g-link
            to="/"
            class="flex items-center"
            title="Home"
          >
          <div class="flex items-center">
            <g-image v-if="!isDarkMode" style="width:200px;" src="./logo-dark.svg"></g-image>
            <g-image v-else style="width:200px;" src="./logo-white.png"></g-image>
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

        <div class="flex items-center justify-end flex-shrink-0">

          <a v-if="settings.web" :href="settings.web" class="hidden ml-3 sm:block" target="_blank" rel="noopener noreferrer" title="Website" name="Website">
            <GlobeIcon size="1.5x" />
          </a>

          <a v-if="settings.twitter" :href="settings.twitter" class="hidden ml-3 sm:block" target="_blank" rel="noopener noreferrer" title="Twitter" name="Twitter">
            <TwitterIcon size="1.5x" />
          </a>

          <a v-if="settings.github" :href="settings.github" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Github" name="Github">
            <GithubIcon size="1.5x" />
          </a>

          <!-- 커스텀 언어 선택 드롭다운 -->
          <div class="relative ml-2 inline-block" @click.stop>
            <button
              :class="[
                'appearance-none px-2 py-2 pr-8 rounded-full border hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-opacity-50 transition-all duration-200 cursor-pointer whitespace-nowrap text-center flex items-center justify-center',
                isDarkMode ? 'text-white bg-gray-800 border-gray-600 hover:bg-gray-700' : 'text-black bg-white border-gray-300 hover:bg-gray-50'
              ]"
              style="width: auto; min-width: fit-content; font-size: 14px;"
              @click="toggleDropdown"
            >
              <span>{{ getCurrentLanguageDisplay() }}</span>
            </button>
            
            <!-- 커스텀 드롭다운 화살표 -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg :class="['w-4 h-4', isDarkMode ? 'text-white' : 'text-black']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            
            <!-- 드롭다운 메뉴 -->
            <div 
              v-show="isDropdownOpen" 
              :class="[
                'absolute top-full left-0 mt-1 border rounded-lg shadow-lg z-50 min-w-full layout-header-dropdown-menu',
                isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-ui-border'
              ]"
              @click.stop
            >
              <div
                v-for="lang in languages"
                :key="lang.code"
                :class="[
                  'px-2 py-2 cursor-pointer flex',
                  isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-ui-sidebar'
                ]"
                style="font-size: 14px;"
                @click="selectLanguage(lang.code)"
              >{{ lang.flag }} {{ lang.label }}
              </div>
            </div>
          </div>

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

      <!-- 모바일 레이아웃 (768px 이하) -->
      <div class="md:hidden">
        <!-- 첫 번째 줄: 로고 / 서치창 / 다크모드 -->
        <div class="flex items-center justify-between mb-2">
          <div class="flex-shrink-0">
            <g-link to="/" class="flex items-center" title="Home">
              <div class="flex items-center">
                <g-image v-if="!isDarkMode" style="width:150px;" src="./logo-dark.svg"></g-image>
                <g-image v-else style="width:150px;" src="./logo-white.png"></g-image>
              </div>
            </g-link>
          </div>

          <div class="flex-1 px-3 min-w-0">
            <ClientOnly>
              <Search />
            </ClientOnly>
          </div>

          <div class="flex-shrink-0">
            <ToggleDarkMode>
              <template slot="default" slot-scope="{ dark }">
                <MoonIcon v-if="dark" size="1.5x" />
                <SunIcon v-else size="1.5x" />
              </template>
            </ToggleDarkMode>
          </div>
        </div>

        <!-- 두 번째 줄: 우측 끝에 언어선택 + 교육신청 -->
        <div class="flex items-center justify-end gap-2">
          <!-- 커스텀 언어 선택 드롭다운 -->
          <div class="relative inline-block" @click.stop>
            <button
              :class="[
                'appearance-none px-2 py-2 pr-8 rounded-full border hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-opacity-50 transition-all duration-200 cursor-pointer whitespace-nowrap text-center flex items-center justify-center',
                isDarkMode ? 'text-white bg-gray-800 border-gray-600 hover:bg-gray-700' : 'text-black bg-white border-gray-300 hover:bg-gray-50'
              ]"
              style="width: auto; min-width: fit-content; font-size: 14px;"
              @click="toggleDropdown"
            >
              <span>{{ getCurrentLanguageDisplay() }}</span>
            </button>
            
            <!-- 커스텀 드롭다운 화살표 -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg :class="['w-4 h-4', isDarkMode ? 'text-white' : 'text-black']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            
            <!-- 드롭다운 메뉴 -->
            <div 
              v-show="isDropdownOpen" 
              :class="[
                'absolute top-full left-0 mt-1 border rounded-lg shadow-lg z-50 min-w-full',
                isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-ui-border'
              ]"
              @click.stop
            >
              <div
                v-for="lang in languages"
                :key="lang.code"
                :class="[
                  'px-3 py-2 cursor-pointer flex items-center justify-center',
                  isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-ui-sidebar'
                ]"
                style="font-size: 14px;"
                @click="selectLanguage(lang.code)"
              >
                {{ lang.flag }} {{ lang.label }}
              </div>
            </div>
          </div>

          <button class="main-top-btn px-3 py-2 bg-ui-primary text-white rounded hover:bg-opacity-80 transition-all flex items-center justify-center text-sm"
            @click="openTrainingLink"
          >
            {{ getTrainingButtonText() }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// gridsome.config.js에서 설정 직접 import
const gridsomeConfig = require('../../gridsome.config.js');
const siteSettings = gridsomeConfig.settings;
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

  data() {
    return {
      isDropdownOpen: false,
      isDarkMode: false
    };
  },

  computed: {
    settings() {
      return siteSettings;
    },
    isProcessGptPage() {
      // 현재 경로가 Process-GPT 페이지인지 확인
      return this.$route && this.$route.path && this.$route.path.startsWith('/process-gpt/');
    },
    currentLanguage() {
      // 현재 페이지 경로를 기반으로 언어 감지
      const path = this.$route ? this.$route.path : '/';
      const sidebarSettings = siteSettings.sidebar || {};
      
      // 설정된 모든 언어에 대해 경로 확인
      for (const langCode of Object.keys(sidebarSettings)) {
        if (path.startsWith(`/${langCode}/`)) {
          return langCode;
        }
      }
      
      // 기본 언어 반환
      return siteSettings.defaultLanguage || 'ko';
    },
    languages() {
      // sidebar 설정에서 언어 메타데이터 가져오기
      const sidebarSettings = this.settings.sidebar || {};
      return Object.values(sidebarSettings).map(lang => lang.meta).filter(Boolean);
    }
  },

  methods: {
    openTrainingLink() {
      window.open('https://www.uengine.org/contents/educationaiagent.html', '_blank');
    },
    getTrainingButtonText() {
      const sidebarSettings = this.settings.sidebar || {};
      const currentLangSettings = sidebarSettings[this.currentLanguage];
      return currentLangSettings && currentLangSettings.meta ? currentLangSettings.meta.educationButtonText : '교육 신청';
    },
    changeLanguage(newLanguage) {
      // 사용자 설정 언어를 localStorage에 저장
      this.setUserPreferredLanguage(newLanguage);
      
      // sidebar 설정에서 언어별 기본 경로 가져오기
      const sidebarSettings = this.settings.sidebar || {};
      const currentLangSettings = sidebarSettings[newLanguage];
      const newPath = currentLangSettings && currentLangSettings.meta ? 
        currentLangSettings.meta.defaultPath : `/${newLanguage}/getting-started/`;
      
      // 현재 경로와 다른 경우에만 라우팅
      if (newPath !== this.$route.path) {
        this.$router.push(newPath);
      }
    },
    setUserPreferredLanguage(language) {
      // localStorage에 사용자 설정 언어 저장
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', language);
        console.log('사용자 언어 설정 저장됨:', language);
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectLanguage(langCode) {
      this.isDropdownOpen = false;
      this.changeLanguage(langCode);
    },
    getCurrentLanguageDisplay() {
      const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
      return currentLang ? `${currentLang.flag} ${currentLang.label}` : '🌐 Language';
    },
    checkDarkMode() {
      // HTML 요소에 lights-out 속성이 있는지 확인
      this.isDarkMode = document.documentElement.hasAttribute('lights-out');
    },
    setupDarkModeObserver() {
      // MutationObserver를 사용하여 다크 모드 변경을 감지
      const observer = new MutationObserver(() => {
        this.checkDarkMode();
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lights-out']
      });
    }
  },

  mounted() {
    // 초기 다크 모드 상태 확인
    this.checkDarkMode();
    // 다크 모드 변경 감지를 위한 옵저버 설정
    this.setupDarkModeObserver();
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
