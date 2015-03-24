var baseTheme = 'themes/';
var assetsSrc ='assets';
var baseBuildDest = 'build';
var baseContent = 'content';
var markDownExtension = '.md';
var baseFrontMatterConfig = {property: 'page', remove: true};
var baseTemplates = '/templates/';
var htmlRenameExt = '.html';
var mediaSrc = '/media';
var rePostName   = /(\d{4})-(\d{1,2})-(\d{1,2})-(.*)/;
var siteConfig = require('../site.json');

module.exports = {
  assets:{
    src:baseTheme+'/'+siteConfig.theme+'/'+assetsSrc+'/**/*',
    dest:baseBuildDest+'/'
  },
  pages:{
    src: baseContent+'/pages/'+'*'+markDownExtension,
    frontMatterConfig:baseFrontMatterConfig,
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'page.html',
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
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'post.html',
    renameExt: htmlRenameExt,
    dest: baseBuildDest
  },
  index:{
    dummy:'index.html',
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'index.html',
    dest: baseBuildDest+'/'
  },
  archive:{
    baseName:'journal',
    count:10,
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'journal.html',
    dest: baseBuildDest+'/'
  },
  tags:{
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'tag.html',
    dest: baseBuildDest+'/tag'
  },
  rss:{
    dummy:'atom.xml',
    defaultTemplate:'../../'+baseTheme+siteConfig.theme+baseTemplates+'atom.xml',
    dest: baseBuildDest+'/'
  },
  clean:{
    src:baseBuildDest+'/',
    read: {read: false}
  },
  watch:{
    assetsSrc:[baseTheme+siteConfig.theme+'/'+assetsSrc+'/**/*'],
    mediaSrc:[baseContent+mediaSrc+'/**/*'],
    pagesSrc:[baseTheme+siteConfig.theme+baseTemplates+'page.html',baseContent+'/pages/'+'*'+markDownExtension],
    blogSrc:[baseTheme+siteConfig.theme+baseTemplates+'post.html', baseTheme+siteConfig.theme+baseTemplates+'index.html',baseTheme+siteConfig.theme+baseTemplates+'journal.html',baseContent+'/posts/'+'*'+markDownExtension],
    partialsSrc:[baseTheme+siteConfig.theme+baseTemplates+'/partials/*.html']
  },
  applyTemplate:{
    siteConfig:siteConfig,
    templateSrc:"./"+baseTheme+siteConfig.theme+baseTemplates
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