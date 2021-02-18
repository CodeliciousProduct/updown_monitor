# Updown Status Page

## How it works

Fetches updown.io's API via the read only key and populates the page
<br>
Page is written in Vue.js for fun

## Build Setup (only for development)

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm start

# check vue and js syntax
npm run lint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

`Cloned from [here](https://github.com/nya1/updown-status-page), then stripped down to only what I needed.`

## Deploy To GitHub Pages

1. Main branch, run the terminal command: `npm run build`

2. Change the name of your `dist` folder to `docs`

3. In your newly created `docs` folder, go to the index.html and remove the `/` or `./` at the beginning of every script and link tag’s `src` attribute

4. Go to your repository’s settings - not every time

5. Scroll to the Github Pages settings - not every time

6. Change your `Source` in your Github Pages settings from `gh-pages branch` to `master branch/docs folder`

7. Now, you can push the main branch to github, and it will be hosted by Github Pages

8. If you make changes, to have it detected by Github Pages, you’ll need to delete your docs folder, and follow the instructions from step 0 - 3 then push to the `main` branch
