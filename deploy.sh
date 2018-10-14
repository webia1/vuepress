#!/usr/bin/env sh

# abort on errors
set -e

# delete dist
rm -rf docs/.vuepress/dist

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/webia1/webia1.github.io.git
git push -u origin master -f

cd -
rm -rf docs/.vuepress/dist