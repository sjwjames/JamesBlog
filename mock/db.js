var faker = require('faker');
var blogMoudlePrefix = 'blog-';
var homeMoudlePrefix = 'home-';

function generateCategories() {
  return [
    {
      'id': 0,
      'route': '/home',
      'name': 'Home'
    },
    {
      'id': 1,
      'route': '/tech',
      'name': '技术'
    },
    {
      'id': 2,
      'route': '/literal',
      'name': '胡写'
    },
    {
      'id': 3,
      'route': '/trans',
      'name': '搬运'
    }
  ];
}

function generateTags() {
  return [
    {
      'id': 1,
      'category': 1,
      'name': '前端'
    },
    {
      'id': 2,
      'category': 1,
      'name': '后端'
    },
    {
      'id': 3,
      'category': 1,
      'name': '架构'
    },
    {
      'id': 4,
      'category': 1,
      'name': '架构'
    },
    {
      'id': 5,
      'category': 2,
      'name': '随笔'
    },
    {
      'id': 6,
      'category': 2,
      'name': '小说'
    },
    {
      'id': 7,
      'category': 2,
      'name': '日记'
    }
  ];
}

function generateDateArchives() {
  return [
    {
      'id': 1,
      'dateBegin': 1519833600000,
      'dateEnd': 1522511999999
    },
    {
      'id': 2,
      'dateBegin': 1517414400000,
      'dateEnd': 1519833599999
    }
  ];
}

function generateHomeDigests() {
  return [
    {
      'id': 1,
      'title': '如何使用Redux',
      'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
      'tags': ['技术', '前端'],
      'createdAt': 1517414400000,
      'lastModified': 1517414400000
    },
    {
      'id': 2,
      'title': '如何使用Java',
      'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
      'tags': ['技术', '语言'],
      'createdAt': 1517414400000,
      'lastModified': 1517414400000
    },
    {
      'id': 3,
      'title': '如何使用Python',
      'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
      'tags': ['技术', '语言'],
      'createdAt': 1517414400000,
      'lastModified': 1517414400000
    },
    {
      'id': 4,
      'title': '如何使用Js',
      'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
      'tags': ['技术', '语言'],
      'createdAt': 1517414400000,
      'lastModified': 1517414400000
    }
  ];
}

function generateApp() {
  return {
    [blogMoudlePrefix + 'categories']: generateCategories(),
    [blogMoudlePrefix + 'tags']: generateTags(),
    [blogMoudlePrefix + 'date-archives']: generateDateArchives(),
    [homeMoudlePrefix + 'digests']: generateHomeDigests(),
  }
}


module.exports = generateApp
