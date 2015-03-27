var baseBuildDest = 'build';
var bowerDir = "bower_components"
var baseTheme = "theme"
var actualThemeDest = baseTheme+'/actualTheme';
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
    src:[baseBuildDest+'/',actualThemeDest+"/"],
    read: {read: false}
  },
  themeBowerJson:{
    baseBowerJson: baseTheme+"/basefile/bower.json",
    actualTheme:siteConfig.theme,
    bowerThemeDest:baseTheme
  },
  bower:{
    bowerDir: bowerDir
  },
  mergeTheme:{
    src:bowerDir+"/"+siteConfig.theme+"/**/*",
    bowerDir: "theme/"+bowerDir,
    dest:actualThemeDest+"/"
  },
  assets:{
    src:actualThemeDest+'/'+assetsSrc+'/**/*',
    dest:baseBuildDest+'/'
  },
  pages:{
    src: baseContent+'/pages/'+'*'+markDownExtension,
    frontMatterConfig:baseFrontMatterConfig,
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'page.html',
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
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'post.html',
    renameExt: htmlRenameExt,
    dest: baseBuildDest
  },
  index:{
    dummy:'index.html',
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'index.html',
    dest: baseBuildDest+'/'
  },
  archive:{
    baseName:'journal',
    count:10,
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'journal.html',
    dest: baseBuildDest+'/'
  },
  tags:{
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'tag.html',
    dest: baseBuildDest+'/tag'
  },
  rss:{
    dummy:'atom.xml',
    defaultTemplate:'../../'+actualThemeDest+"/"+baseTemplates+'atom.xml',
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
    assetsSrc:[actualThemeDest+"/"+assetsSrc+'/**/*'],
    mediaSrc:[baseContent+mediaSrc+'/**/*'],
    rssSrc:[actualThemeDest+"/"+baseTemplates+'atom.xml'],
    pagesSrc:[actualThemeDest+"/"+baseTemplates+'page.html',baseContent+'/pages/'+'*'+markDownExtension],
    blogSrc:[actualThemeDest+"/"+baseTemplates+'index.html',actualThemeDest+"/"+baseTemplates+'journal.html',actualThemeDest+"/"+baseTemplates+'post.html',actualThemeDest+"/"+baseTemplates+'tag.html',baseContent+'/posts/'+'*'+markDownExtension],
    globalTemplatesSrc:[actualThemeDest+"/"+baseTemplates+'/partials/*.html',actualThemeDest+"/"+baseTemplates+'default.html']
  },
  applyTemplate:{
    siteConfig:siteConfig,
    templateSrc:"./"+actualThemeDest+"/"+baseTemplates
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