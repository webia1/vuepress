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

## Alias

Example: Setting `git today`

```shell
git config --global alias.today \
  'log --since=7am --oneline'
```

## Configuration Paths

### All Config Files

```shell
git config --list --show-origin
```

### System Config Files

```shell
git config --list --system --show-origin
```

### Show Local Config

```shell
git config --list --local
```

### Show Locations

```shell
git config --list --show-origin |
  awk '{print $1}' |
    uniq
```

## Branch

### Show Name

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

## Update Index

```shell
git update-index --assume-unchanged
```

## Log

### Log Commit Hashes and Titles

```shell
git log --pretty="%h %s"
```

### Log all changes made by a certain user

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
