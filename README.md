# Knekt-Server
![Build status]
(https://api.travis-ci.org/goKnekt/Knekt-Server.svg)

## Overview
The server component of Knekt is the central hub for all it's client applications, it's here they get configuration options
from, where they make requests & where they receive information from.

It was built from the ground up to be modular & extendable and because of this it has a Hapi.js style plugin system which
can be used to add functionality for smart devices.

###Plugins
Each Plugin consists of at least one file which exports an ES6 class, this class takes a Knekt instance in it's constructor
and returns nothing. It also has two variables, an attributes property & a settings property, these are standard javascript
objects that describe your plugin and specify required settings etc.

Below is an example of a bare bones plugin

```{javascript}
export class Plugin {
    
    constructor(Knekt) {
        this.registerRoutes(Knekt);
    }
    
    properties = {
        'name': 'My Plugin',
        'author': 'Alex Catchpole',
        'website': 'http://knekt.co',
        'repo': 'https://github.com/goKnekt/Knekt-Server'
    };
    
    settings = {
      'apiKey': {
          'placeholder': 'Please enter your API key',
          'optional': false,
          'type': 'string',
          'regex': '/^[a-zA-Z]+$/'
      }
    };

    registerRoutes(Knekt) {
        knekt.addRoute({
            method: 'GET',
            path:'/my-plugin/hello',
            handler: function (request, reply) {
                return reply('hello world');
            }
        });
    }
}
```

This class is then registered with Knekt by passing the class to the ```register([plugins])``` function of Knekt like so.

```{javascript}
import { Plugin } from './plugin';

let knekt = new Knekt();
knekt.register([Plugin]);
```
