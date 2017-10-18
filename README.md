itportal
======

A simple ticketing system and asset management using Node.js, MongoDB, and Core-UI.



Features
--------

* Create simple tickets based on requirements 
* IT asset management (inventory and assignment)
* Create a directory for the people in the company
* Allow people in the company to update their own data
  * Allow people in the company to trigger a forgotten Office 365 password
  * Allow people to download software packages (vpn)



Installing IT Portal
-----------------

Uptime 3.2 requires Node.js 6+ and MongoDB 2.4. 

To install from GitHub, clone the repository and install dependencies using `npm`:

```sh
$ git clone git://github.com/openduty/itportal.git
$ cd itportal
$ npm install
```

Lastly, start the application with:

```sh
$ npm run dev
```

If you want a production environment:

```sh
$ npm run
```

Configuring
-----------

IT Portal uses configuration files in the /config directory:

```javascript
module.exports = {
    'db':
    {
        'url': 'mongodb://localhost/itportal'
    }
};
```

To modify this configuration, just edit those files to whatever suits you best:

License
-------

The Uptime code is free to use and distribute, under the [MIT license](https://raw.github.com/openduty/itportal/master/LICENSE).

Uptime uses third-party libraries:

* [NodeJS](http://nodejs.org/), licensed under the [MIT License](https://github.com/joyent/node/blob/master/LICENSE#L5-22),
* [Socket.io](http://socket.io/), licensed under the [MIT License](https://github.com/LearnBoost/socket.io/blob/master/Readme.md),
* [MongooseJS](http://mongoosejs.com/), licensed under the [MIT License](https://github.com/LearnBoost/mongoose/blob/master/README.md),
* [jQuery](http://jquery.com/), licensed under the [MIT License](http://jquery.org/license),
* [TwitterBootstrap](http://twitter.github.com/bootstrap/), licensed under the [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0),
* [Favicon](http://www.alexpeattie.com/projects/justvector_icons/), distributed under the [Free Art License](http://artlibre.org/licence/lal/en).

If you like the software, please help improving it by contributing PRs on the [GitHub project](https://github.com/openduty/itportal)!

TODO
----

* Unit tests
* More unit tests
* Get someone with a designer eye and make it beautiful
* Maybe React?
* Add API's
* Send email notifications for the status of the updates
* Create printable Cap Ex and PO's