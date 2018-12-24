var faker = require('faker');
var blogModulePrefix = 'blog-';
var homeModulePrefix = 'home-';
var timeLineModulePrefix = 'timeLine-';
var digestModulePrefix = 'digests';
var postModulePrefix = 'post';

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

function generateTimeLine() {
  return [
    {
      category: 0,
      data: [
        {
          timestamp: 1519833600000,
          titles: ['如何使用Redux', '如何使用Java']
        },
        {
          timestamp: 1517414400000,
          titles: ['如何使用Python', '如何使用Js']
        }
      ]
    },
    {
      category: 1,
      data: [
        {
          timestamp: 1519833600000,
          titles: ['如何使用Redux', '如何使用Java']
        },
        {
          timestamp: 1517414400000,
          titles: ['如何使用Python', '如何使用Js']
        }
      ]
    }
  ]
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
      category: 0,
      data: {
        'id': 1,
        'dateBegin': 1519833600000,
        'dateEnd': 1522511999999
      }
    },
    {
      category: 1,
      data: {
        'id': 2,
        'dateBegin': 1517414400000,
        'dateEnd': 1519833599999
      }
    }
  ];
}

function generateDigests() {
  return [
    {
      category: 0,
      digests: [
        {
          'id': 1,
          'title': '如何使用Redux',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '前端'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 0
        },
        {
          'id': 2,
          'title': '如何使用Java',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 0
        },
        {
          'id': 3,
          'title': '如何使用Python',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 0
        },
        {
          'id': 4,
          'title': '如何使用Js',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 0
        }
      ]
    },
    {
      category: 1,
      digests: [
        {
          'id': 5,
          'title': '如何使用Redux',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '前端'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 1
        },
        {
          'id': 6,
          'title': '如何使用Java',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 1
        },
        {
          'id': 7,
          'title': '如何使用Python',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 1
        },
        {
          'id': 8,
          'title': '如何使用Js',
          'digest': '就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。就是教你怎么用呗，然而，你可以自己看文档呀，4不4撒。',
          'tags': ['技术', '语言'],
          'createdAt': 1517414400000,
          'lastModified': 1517414400000,
          'category': 1
        }
      ]
    }
  ]
}

function generatePosts() {
  return [
    {
      'id':1,
      'data':{
        ops: [
          { insert: 'Gandalf', attributes: { bold: true } },
          { insert: ' the ' },
          { insert: 'Grey', attributes: { color: '#cccccc' } }
        ]
      }
    }
  ]
}

function generateApp() {
  return {
    [blogModulePrefix + 'categories']: generateCategories(),
    [blogModulePrefix + 'tags']: generateTags(),
    [digestModulePrefix]: generateDigests(),
    [timeLineModulePrefix + 'data']: generateTimeLine(),
    [postModulePrefix]: generatePosts(),
  }
}


module.exports = generateApp
