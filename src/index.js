/**
 * Created by Alex on 29/01/2017.
 */

//core
import { Knekt } from './lib/Knekt';

//plugins
import { Plugin } from './plugins/demo.js';

//bootstrap
let knekt = new Knekt();
knekt.setConnection('localhost', 8080);
knekt.register([Plugin]);
knekt.listen();

