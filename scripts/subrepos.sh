#!/bin/bash
trap "echo Exiting...;exit" SIGHUP SIGINT SIGQUIT SIGTERM
subrepos_dir="subRepos"
for name in $(ls -1 ${subrepos_dir});do
    echo 'Sub Repo: ' ${name}
done