const fs = require('fs');
var chance = require('chance')(123)
const {green, red} = require('chalk');
var toonavatar = require('cartoon-avatar')
var Promise = require('bluebird');

//user define imports
const { db, Student, Campus } = require('./server/db');

var numStudents = 100;

function doTimes (n, fn) {
  var results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

function randPhoto (gender) {
  gender = gender.toLowerCase();
  var id = chance.natural({
    min: 1,
    max: gender === 'female' ? 114 : 129
  });
  return toonavatar.generate_avatar({
    gender: gender,
    id: id});
}

function randStudent () {
  var gender = chance.gender();
  return Student.build({
    firstName: chance.first(),
    lastName:  chance.last(),
    imageUrl: randPhoto(gender),
    email: chance.email(),
    campusId: chance.natural({min: 1, max: 6})
  })
}

function generateStudents (){
  var students = doTimes(numStudents, randStudent);
  return students
}

function createStudents () {
  return Promise.map(generateStudents(), function (student) {
    return student.save();
  });
}
const campuses = [
  { name: 'Arrakis', imageUrl: 'https://orig13.deviantart.net/17b8/f/2010/223/a/6/arrakis_by_akreon.jpg',
    address: '6022 Monument Plaza, District of Columbia'},
  { name: 'Cybertron', imageUrl: 'https://orig13.deviantart.net/a8c4/f/2010/024/0/8/cybertron_planet_by_jjasso.jpg',
    address: '6022 Monument Plaza, District of Columbia'},
  { name: 'Krypton', imageUrl: 'https://3.bp.blogspot.com/-H6DAS9qtrMY/UJ7aPLVJFUI/AAAAAAAAV0U/MgZ5ulfkknc/w1200-h630-p-k-no-nu/Planet+Krypton.jpg',
    address: '6022 Monument Plaza, District of Columbia'},
  { name: 'Pandora', imageUrl: 'https://www.christiedigital.com/img/Press%20Releases/Jake%20Peaceful.jpg',
    address: '6022 Monument Plaza, District of Columbia'},
  { name: 'Lusitania', imageUrl: 'https://orig05.deviantart.net/793a/f/2008/253/2/c/lusitania_by_andreewallin.jpg',
    address: '6022 Monument Plaza, District of Columbia'},
  { name: 'Tatooine', imageUrl: 'https://content.pulse.ea.com/content/legacy/starwars-ea-com/en_US/starwars/battlefront/news-articles/the-star-wars-battlefront-planets--creating-tatooine/_jcr_content/featuredImage/renditions/rendition1.img.jpg',
    address: '6022 Monument Plaza, District of Columbia'}
];

const createCampuses = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )

function seed () {
  return createCampuses()
  .then(() => createStudents())
}

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
