# CSS and JS management by GULP

You only need to touch gulp if:
- you want to simply regenerate sites css and js, that are managed by gulp.
- you want to edit/add css or global js script

If you want to add custom js, add it as a seperate js file and include it on a page manually. It shouldn't be governed by gulp, because gulp will concatenate all scripts into one, single file, which is going to be globally accessible across the whole site.

## Setup

If you already have `node`, `npm` or `gulp-cli`, skip the appropriate step:

1. Install `node`: https://nodejs.org/en/

2. Usually `node` installer also installs `npm`, verify that by command in your system console (*If you just installed node, you might need to close and open your console*):
```
npm -v
```

If no errors are thrown, then npm is installed.

Otherwise, you have to install it (this installs it globally on your system):
```
npm install npm@latest -g
```

3. Install gulp cli (this installs it globally on your system):
```
npm install --global gulp-cli
```

4. Copy the `assets` folder into your current project, then navigate to it and install npm packages from package.json (this installs them only for this current project):
```
cd my_project_name/assets
npm install
```

## Workflow

In order to do initial css and js generation, run:
```
gulp
```

Only edit files that are in `src` folder.
Afterwards it stays in watch mode. If you save a `.scss` or `.js` file in directories that gulp is watching, gulp will generate appropriate css and js files.

To exit watch mode, press <kbd>CTRL</kbd>+<kbd>X</kbd>

## About GULP

CSS and JS are being managed by GULP, it does following:
- concatenates files (less files means less HTTP requests to server, saves bandwidth).
- minifies files (smaller file size means less data needs to be sent from server to client, saves latency)
- compiles SASS files into resulting css file(s)

One could make an argument ".. but I need my vendor files only on a specific page, not on all pages".
Yes, this way a user visiting some random page will be forced to download vendor js, but that will happen only *once*, because vendor js are updated very rarely and they will stay in cache.
This way, we remove the hastle of managing which vendor scripts should be included at what page, it's simply easier to manage files.