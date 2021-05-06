/*var username = prompt('what is your name')
if (username === 'mohd') {document.write('hello mohd')}
else if (username === 'alex'){alert('hello alex')}
else if (username === 'sarah') {console.log('hello sarah')}
else {alert ('hello user')}

var book = prompt('pick a book')
if (book === 'book1') {document.write('<img "src="book1.jpg>"')}
else if (book === 'book2'){document.write('<img src="book2.jpg"')}
else {alert('not inserted in our database')}*/

var userBookfav = prompt('what is your favorite book?' )

while(userBookfav !=== 'book1' && userBookfav !=== 'book2'){
  userBookfav = prompt('try again')
}
var bookCount = prompt ('how many book do you want us to display?')
var image = ''
for(var i=0; i< bookCount; i++) {
  if (userBookfav === 'book1'){
    document.write('<img src="book1.jpg"')
  }
  else if(userBookfav === 'book2'){
    image = image + '<img src="book2.jpg"'
  }
}