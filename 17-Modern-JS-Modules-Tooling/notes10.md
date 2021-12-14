# Configuring Babel and Polyfilling

Parcel automatically uses Babel to transpile our code. Can configure babel how we want to. But that's a ton of work.

Babel works with plug ins and presets that can both be converted.

A plug in is a specific JS feature we want to transpile/convert. Say we want to convert arrow functions to ES5, and leave everything else as is. Doesn't make sense. Want to transpile it all at once. Babel uses presets. A preset is a bunch of plugins bundled together. Parcel uses presets and preset by default.
