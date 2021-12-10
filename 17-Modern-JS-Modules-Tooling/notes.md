# An overview of modern JS development

Way we build JS apps has changed tremendouly over the last years.

Used to write all our code in one big script. Today code is divided between modules. Great thing about modules is we can include 3rd party packages/modules in our code. All sorts of things shared on Npm, that we can use and include (eg React, jQuery, Leaflet, etc).

NPM stands for Node Package Manager. Originally developed together and with Node.js. But now it's established itself as the place to go to for modern JS development.

Use NPM software on computer to install this software.

Production means app is being used by real users in the real world. But it has to go through the Build process first. There's bundling that joins all modules into one file. Very important. Older browsers don't support modules at all. Also better for performance to send less files to the browser. Beneficial that the bundling step compresses our code.

Next step is Transpiling/polyfilling. Convert modern JS back to ES5 so old browsers can use it. Usually done usuing a tool called Babel.

After these 2 steps, we end up with final JS bundle, ready to be deployed. We don't do these steps ourselves, use a special tool built do to it. Either Webpack or Parcel. Bundlers. Take raw code, and transform into a JS bundle.

All these tools are available on npm.
