// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('settings', require('./gridsome.config').settings);
  });

  api.createPages(({ createPage, getCollection }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    
    // getting-started/index.md를 루트 경로로 설정
    const markdownPages = getCollection('MarkdownPage');
    const gettingStartedIndex = markdownPages.findNode({ path: '/getting-started/' });
    
    if (gettingStartedIndex) {
      createPage({
        path: '/',
        component: './src/templates/MarkdownPage.vue',
        context: {
          id: gettingStartedIndex.id
        }
      });
    }
  });
}
