var baseBuildDest = 'build';
var bowerDir = "bower_components"
var baseTheme = 'theme';
var assetsSrc ='assets';
var baseContent = 'content';
var markDownExtension = '.md';
var baseFrontMatterConfig = {property: 'page', remove: true};
var baseTemplates = '/templates/';
var htmlRenameExt = '.html';
var mediaSrc = '/media';
var rePostName   = /(\d{4})-(\d{1,2})-(\d{1,2})-(.*)/;
var siteConfig = require('../site.json');

module.exports = {
  clean:{
    src:baseBuildDest+'/',
    read: {read: false}
  },
  prepareTemplate:{
    src:bowerDir+"/"+siteConfig.theme+"/**/*",
    bowerDir: bowerDir,
    dest:baseTheme+"/"
  },
  bower:{
    bowerDir: bowerDir
  },
  assets:{
    src:baseTheme+'/'+assetsSrc+'/**/*',
    dest:baseBuildDest+'/'
  },
  pages:{
    src: baseContent+'/pages/'+'*'+markDownExtension,
    frontMatterConfig:baseFrontMatterConfig,
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'page.html',
    renameExt: htmlRenameExt,
    dest:baseBuildDest
  },
  media:{
    src: baseContent+mediaSrc+'/**/*',
    dest: baseBuildDest+mediaSrc
  },
  posts:{
    rePostName: rePostName,
    src: baseContent+'/posts/'+'*'+markDownExtension,
    frontMatterConfig:baseFrontMatterConfig,
    summarizeSign:'<!--more-->',
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'post.html',
    renameExt: htmlRenameExt,
    dest: baseBuildDest
  },
  index:{
    dummy:'index.html',
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'index.html',
    dest: baseBuildDest+'/'
  },
  archive:{
    baseName:'journal',
    count:10,
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'journal.html',
    dest: baseBuildDest+'/'
  },
  tags:{
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'tag.html',
    dest: baseBuildDest+'/tag'
  },
  rss:{
    dummy:'atom.xml',
    defaultTemplate:'../../'+baseTheme+"/"+baseTemplates+'atom.xml',
    dest: baseBuildDest+'/'
  },
  browserSync: {
    server: {
      baseDir:baseBuildDest
    },
    port: 3000,
    files: [
      baseBuildDest+'/*'
    ]
  },
  watch:{
    assetsSrc:[baseTheme+"/"+assetsSrc+'/**/*'],
    mediaSrc:[baseContent+mediaSrc+'/**/*'],
    rssSrc:[baseTheme+"/"+baseTemplates+'atom.xml'],
    pagesSrc:[baseTheme+"/"+baseTemplates+'page.html',baseContent+'/pages/'+'*'+markDownExtension],
    blogSrc:[baseTheme+"/"+baseTemplates+'index.html',baseTheme+"/"+baseTemplates+'journal.html',baseTheme+"/"+baseTemplates+'post.html',baseTheme+"/"+baseTemplates+'tag.html',baseContent+'/posts/'+'*'+markDownExtension],
    globalTemplatesSrc:[baseTheme+"/"+baseTemplates+'/partials/*.html',baseTheme+"/"+baseTemplates+'default.html']
  },
  applyTemplate:{
    siteConfig:siteConfig,
    templateSrc:"./"+baseTheme+"/"+baseTemplates
  },
  collectPosts:{
    siteConfig:siteConfig
  },
  dummy:{
    siteConfig:siteConfig
  },
  fileName2Date:{
    rePostName: rePostName,
    markDownExtension:markDownExtension
  },
  postsUtil:{
    siteConfig:siteConfig
  },
  tagsUtil:{
    siteConfig:siteConfig
  }
};