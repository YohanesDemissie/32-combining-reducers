#packages
uglifyjs-webpack-plugin : objuscation minification. takes in files like fonts/mp3 etc and adds it into our bucket

url-loader : does the same thing but for smaller files. Provides a URL that's base64 encoded.

jest Mocha: test realm

enzyme: specific assursion library directly working with react and redux


#Day 33 Lab Notes Part 2 -Vinicio
Dispatch updates the Redux Store through requests of functions and store responses indeiractly to dispatch

req, res next ==> store, next, action

redux allowa the dev to control what responses are dipatched once the request is successfully made form the dipatch to the redux store

console.group()
console.info()
console.end()

renderIf : is like a validation method; only rendering if there is content/value and not undefined or null

expenses file holds the Id's

categories holds Id, title and timestamp as a key value pair within an array.

the expense holds the ID

__DISPATCHING__ holds the type, payload, timestamp, title, id_
payload: holds the time stamp, title and
__STATE___ holds expenses and caregories as key value pairs
the expenses hold the unique Id
categories same content as dispatch i think

__NEXT_STATE__
holds expenses and categories as keyvalue pairs
the expenses contain an object ID
categories hold title, id and time stamp in one object
