Mock DB Server is an express server that keeps an array of objects in memory as opposed to a database. This means that any application, front-end or back-end, can easily experiment with real API calls and receive data shaped the way the developer desires without making an entire service first.

**GETTING STARTED:**

-- You must have *Nodejs* installed on your machine.

Clone this repository and run

```console
npm install
```

to load the express server. It will run on port 8090 and will not block request coming from port 3000.

If this behavior is not desired, feel free to change the ports to whatever best suits your needs.

-- Once the server is installed you can run it with:

```console
node apiProtoypreServer
```

or, if you plan to alter the code on the server, it may be best to also install nodemon with the following command:

```console
npm install -g nodemon
````

after which you can start the application with:

```console
nodemon start
```

and now, you will not need to restart the server as you make changes to its code.

**HOW IT WORKS:**

The data, and its shape, is whatever the developer (aka: **YOU**) wants. The data can be populated via postman or your own web application.

The default data in the mock-database is:

```javascript
[
  {
    id: 1,
    name: 'Unites States of America',
    capital: 'Washington D.C.',
    languages: ['English'],
    flag: '',
  },
  {
    id: 2,
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    flag: '',
  },
]
````

-- The data may, of course, be modified or deleted all together.

To delete the default data, make a post request to the following route:

`localhost:8090/deleteAll/`

This will reset the initial array of objects to `[]` and the reset the Ids to 0;


*Ids should not be included in any posts as Ids are added, as strings, to any object posted.*


-- To retrieve all data in the mock-database use a get request with the following route:

`localhost:8090/`


-- To retrieve a particular object by Id, make a get request with the following route:

`localhost:8090/id` - replacing "id" with the desired Id.


-- To post new data make a post request with to the following route:

`localhost:8090/`


Again, an Id field will be added to your post object. Ids start at 0 and increment by 1 for each new post. Ids are not reused when an object is deleted.


-- To delete a single object by Id, make a post request to the following route:

`localhost:8090/delete/id` - replacing "id" with the desired Id.


-To update or patch an object while keeping its Id the same, make a post request  and supply the appropriate object to the following route:

`localhost:8090/update/id` - replacing "id" with the desired Id.
