
Test Locally
============

In iTerm:

- `cd` into this folder
- Run `parcel src/**/index.html`
- Navigate to localhost:1234/index.html in your browser
- Edit code



Publish
=======

In iTerm:

- Run `parcel build src/**/index.html --out-dir=docs/ --public-url=/code-projects/` to generate the `docs/` folder - Run `git add .` to stage all changed files
- Run `git commit` to create a commit
- Enter a commit message and save and close the file
- Run `git push` to push to GitHub and update GitHub pages
- Navigate to https://joannabartolome.github.io/code-projects/index.html in your browser

