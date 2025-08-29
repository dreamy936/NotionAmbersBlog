// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '24fc0bb163cf80c1b9efc8ef7edaca0c',

  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo',
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'dark',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Amber',
  BIO: process.env.NEXT_PUBLIC_BIO || 'GrowithAmber💪',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://ambersblog-9mqixbzjy-amber-s-pj.vercel.app',

  // ✅ 正确写法：把 favicon 当成 BLOG 的一个字段
  FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || false,

  // 其它拆分配置
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 推荐用反引号避免引号冲突
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    `Hi, Welcome to My Blog, こんにちは、よろしくお願いします~, 哈咯咯🎉`,

  UUID_REDIRECT: process.env.UUID_REDIRECT || false
};

// ✅ 只在文件最后导出
module.exports = BLOG;

