var faker = require('faker');
var blogMoudlePrefix = 'blog-';

function generateCategories() {
  return [
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
      'route': '/transfer',
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

function generateApp() {
  return {
    [blogMoudlePrefix + 'categories']: generateCategories(),
    [blogMoudlePrefix + 'tags']: generateTags(),
    [blogMoudlePrefix + 'date-archives']: generateDateArchives(),
  }
}


module.exports = generateApp
