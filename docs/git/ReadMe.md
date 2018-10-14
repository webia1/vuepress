# Git

[[toc]]

## Setting Username and Email

```shell
git config --global user.name We Bia
git config --global user.email "we.bia@gmail.com"
```

## Ignore Files & Directories

Create a file named `.gitignore` in the root directory:

```shell
# This is a sample .gitignore file
folder/file.txt
generated/
*.backup
# All *.backup files as given above
# with the exception below
!someException.backup
```

## Add/Commit related

### Correct Last Commit Message

```shell
git commit --amend
```

### Removing ignored files from remote repository

```shell
git rm -r --cached .
git add .
git commit -am "Removed ignored files"
git push
```

### Undo / Reset

#### Back to last commit

```shell
git reset --hard
```

#### Change to a certain commit

```shell
git reset --hard  commithash
```

#### Drop Local Changes and Change to a Branch

```shell
git checkout --force someBranch
```

#### Undo Add

```shell
git rm --cached .     // undo add
```

## Blame

`git blame` shows what revision and author
last modified each line of a file

```shell
git blame folder/filename.extension
```

## Branch

### Create Branch from Commit-Hash

```shell
git branch desiredBranchName commithash
```

### Show Branch Name

```shell
git status
cat .git/HEAD
git branch | grep '\*'
git branch --contains HEAD
git symbolic-ref --short HEAD
git name-rev --name-only HEAD
git rev-parse --abbrev-ref HEAD
git branch | sed -n '/\* /s///p'
basename $(git symbolic-ref HEAD)
git branch | awk '/^\*/{print $2}'
git symbolic-ref HEAD | cut -d/ -f3-
git rev-parse --symbolic-full-name --abbrev-ref @{u}
```

### Rename Local Branch

```shell
git branch -m newName // on current branch
git branch -m oldName newName
```

### Delete Local Branch

```shell
git branch -D branchName
git branch -d branchName
```

### Delete Remote Branch

```shell
git push origin --delete branchName
git push origin :branchName
```

## Configuration Related

### Alias

Example: Setting `git today`

```shell
git config --global alias.today \
  'log --since=7am --oneline'
```

Or short status message

```shell
git config --global alias.s 'status --short'
```

### Set autocrlf to false

```shell
git config --global core.autocrlf false
```

### Show all config files

```shell
git config --list --show-origin
```

### Show system config files

```shell
git config --list --system --show-origin
```

### Show local config

```shell
git config --list --local
```

### Show Config Locations

```shell
git config --list --show-origin |
  awk '{print $1}' |
    uniq
```

### Store Git Credentials on Mac

```shell
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=3600'
```

### Set MacOs KeyChain as Git credential store

```shell
git config --global credential.helper osxkeychain
```

## Diff

### Diff between commits

```shell
git diff --stat commit1 commit2
```

### List changed files `--name-only` on a branch

```shell
git diff master --name-only
```

### What kind of differences `--name-status`

```shell
git diff --name-status
```

### Overview (Statistic) `--stat`

```shell
git diff master --stat
```

### Short Statistic `--shortstat`

```shell
git diff master --shortstat
```

## Log

### Show Commit Hashes and Titles

```shell
git log --pretty="%h %s"
```

### Show all changes made by a certain user

#### Short Version

```shell
git log --no-merges \
        --author="authorname" \
        --name-only \
        --pretty=format:"" | sort -u
```

#### Long Version

```shell
git log --pretty="%H" --author="authorname" |
    while read commit_hash
    do
        git show --oneline --name-only $commit_hash |
          tail -n+2
    done | sort | uniq
```

### Show Top List of Committers

```shell
git shortlog -sn // top list
git shortlog -sne // with Email Addresses
git shortlog -sn --no-merges  // top list ohne merges
```

### Miscellaneous

```shell
git log --oneline
git log --graph
git log --graph --oneline --decorate
git log --summary -M90% | grep -e "^ rename"
git log --follow a-modified-file.txt
git config diff.renames true  // Rename Detection = true
```

## Merge

### List of Merge Tools

```shell
git mergetool --tool-help   // list of merge tools
```

### Abort if Conflicts (1)

```shell
git merge --no-commit branch2
git merge --abort
```

### Abort if Conflicts (2)

```shell
git format-patch \
  $(git merge-base branch1 branch2)..branch2 --stdout |
    git apply --check -
```

### Cancel/Reset Merge

```shell
git reset --merge
```

### Merge: Overwrite

```shell
git merge -X theirs source_branch_name
```

### Merge without checkout

```shell
git fetch . dev:master // from dev -> into -> master
```

### Log Merges

```shell
git log --merges
```

## Remote Repository

### Add & Connect

```shell
git remote add origin <https://to-remote/repo.git>
git branch --set-upstream-to=origin/master master
```

### Set Upstream & Push

```shell
git push --set-upstream origin desired_branch_name
git push -u origin desired_branch_name
```

### Fatal: refusing to merge unrelated histories

```shell
git pull origin master --allow-unrelated-histories
```

## Stash

```shell
git stash
git stash --include-untracked
git stash pop
git stash list
git stash pop stash@{1}
```

## Tag

```shell
git tag -a v0.1.0 -m "My Message"
git push origin v0.1.0
git push --tags // or push all tags
```

## Miscellaneous

### Check Integrity

```shell
git fsck
```

### Update Index

```shell
git update-index --assume-unchanged
```
