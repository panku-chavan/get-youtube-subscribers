# get-youtube-subscribers

This is a node,express app to getting details of youtube subscribers.

##

## There are four API endpoints in this app

1 - "/ "

2 - "/subscribers "

3 - "/subscribers/names "

4 - "/subscribers/:id "

##

### 1 - "/ " default route.

when app start this default route will render index.html file.

e.g. ==> http://localhost:300/

### 2 - "/subscribers "  route.

When user go to this route it will returns an array of object. It will response with an array of subscribers object.

e.g. ==>  http://localhost:300/subscribers

### 3 - "/subscribers/names " route

When user go to this route it will returns an array of object. It will response with an array of object with only Subscribers name and Subscribers Channel.

e.g. ==> http://localhost:300/subscribers/names

### 4 -"/subscribers/:id " route

When user go to this route it will returns an object of subscriber. It will response with a subscriber object with given id, ans also response with status code 400. If user enter wrong id or enter nothing it will give response with error messege.

e.g ==> http://subscribers/id

if user enter wrong id, messege will be { messege : "Sorry....! You enter wrong ID, No such subscriber found in this ID."}

