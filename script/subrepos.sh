#!/bin/bash
trap "echo Exiting...;exit" SIGHUP SIGINT SIGQUIT SIGTERM
subrepos_dir="subRepos"
for name in $(ls -1 ${subrepos_dir});do
    echo 'Sub Repo: ' ${name}
    cp source/_posts/${name}.md ${subrepos_dir}/${name}/README.md
    cd ${subrepos_dir}/${name}/
    git add .
    git commit -m "$1"
    git push
    cd ../../
done