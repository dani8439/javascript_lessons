# Deploying Forkify to a Live Server

Need to run the build command on Forkify so that it will contain code for deployment.

Delete the `dist` and `parcel_cache` folders to get a fresh start.

build command isn't complete in package.json. If on parcel 2 version, specify build as:

`"build": "parcel build index.html --dist-dir ./dist"` Stands for distribution directory. Need to specify which folder we want to be created.

Need to change: ` "main": "index.html",` to ` "default": "index.html".

then run npm run build. After it's finished. Added an `.htmlnanorc` file to work around error. Filled with:

```
{
    "minifySvg": false
}
```

Then build works fine. Once we have the dist folder, ready to go to netlify and deploy it. Netlify is free, lets us deploy static applications. (Html, CSS, and JS files as well as some images. No database or serverside at all. Only works for frontend apps.)

Can also use surge. It's also free.

Go to our folder, drag and drop our dist folder because that's what we want to deploy, and that's it!

Go in to change site name. Change to `forkify-dani1`

It's been deployed to an https, secure, and a CDN.

Added to work around error in package.json:

```
  "browserslist": [
    "defaults",
    "not IE 11",
    "maintained node versions"
  ],
```

## Continuous Integration -

Linking the github to the netlify, so that whenever there's a change, it changes online. Don't think I can do that as the repo is in a folder and not it's own repo.

Can tell netlify to run the build command whenever there's a change in our repository, because we deployed the dist folder. Copy the build command from package.json, and put that on Netlify as build command, as we want master branch.

Publish directory is the `dist` folder. Where the code will live after the build command is executed.

Doesn't always run smoothly, but netlify builds all the assets, etc. And the build command is understood.
