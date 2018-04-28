Mock Server is an express server that has keeps an array of objects in memory as opposed to a database and, consequently, data does not persist when the server is restarted.

Mock Server was created for proto-typing any front end application that needs to hit an API but the API has not been created yet.

GETTING STARTED:

Clone the repository and run

  $npm install

to load the express server. It will run on port 8090 and listens to will not block request from port 3000.

If this behavior is not desired, feel free to change the ports to whatever suites your prototype best.

HOW IT WORKS:

The shape of the data is up to the devoloper and the data can be populated through postman or the developers front end.

The default data in the mock-database is:

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

-- The data may, of course be modified, but to deleted it all together make a post request to the following route:

localhost:8090/deleteAll/

which will reset the initial array of objects to [] and the initial id to 0;

Ids should not be included in any posts as Ids are added to any object posted.

-- To retrieve all data in the mock-database use a get request with the following route:

localhost:8090/

-- To retrieve a particular object by id, make a get request with the following route:

localhost:8090/id - replacing "id" with the desired id.

-- To post new data make a post request with to the following route:

localhost:8090/

Again, an id field will be added to your post object. Id's start at 0 and increment by 1 for each new post. Ids are not reused when an object is deleted.

-- To delete a single object by id, make a post request to the following route:

localhost:8090/delete/idlocalhost:8090/

-To update or patch an object while keeping its id the same, make a post request to the following route:

localhost:8090/update/id - replacing "id" with the desired id.
