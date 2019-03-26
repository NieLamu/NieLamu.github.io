#!/bin/bash
echo Your commit message is: $1
cd themes/Hexo-Material-N/
git checkout master
git add .
git commit -m "$1"
git push origin master
cd ../../
npx hexo clean && npx hexo g
npx hexo d -m "$1"
git add .
git commit -m "$1"
git push origin develop
