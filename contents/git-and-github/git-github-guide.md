---
title: 'A beginners guide to Git and Github'
subtitle: 'Git and GitHub remains vital in software engineering. This blog aims to provide the basics of it.'
date: '2020-01-25'
keywords: 'git, github, version control, collaboration'
---

Git and GitHub are important for software engineers/developers. To understand Git and GitHub, we have to understand version control first.

**Version Control** simply means how we can switch between the versions of code. With version control, we can break the code at some instance and if necessary switch back to the instance when the code was running fine. This can also be useful if you have a client who complains a lot and asks you to make a lot of changes all the time.

### What is Git?

**Git** is a distributed version control system created by **Linus Torvalds**. With the help of git, we can control the version of the code. It is the most popular version control tool that exists. <a href='https://git-scm.com/' target='_blank'>Read more</a> about git on the official website.

### What is GitHub?

**GitHub** is a tool that works well with git. With GitHub, we can collaborate in teams in a project. Simply, GitHub is a website or a cloud platform that helps us to host Git repositories.

---

## Some common Git Terminologies

**Repository** is the most commonly referred term in Git. It simply means a project directory.

**Commit** is another term that is used while using Git. When we hit `ctrl + s` or `cmd + s`(on Mac), the file gets saved to the file system. But if we commit the code, it gets saved to the git history.

**Push** simply refers to uploading the current local changes to the server (i.e. GitHub in our case).

**Pull** refers to downloading the changes that exist, from the cloud to our local machine.

**Clone** means duplicating a repository that exists on the server to our local machine.

---

## Some git commands

### Initialize an empty git repository

To initliaze a git repository, navigate to your project directory and run the following command on your terminal or shell.

```shell
git init
```

### Stage files to commit

After making a change to project files, if we wish to commit the changes, we have to move the unstaged/untracked files to the staging area. To do so, we add the necessary files to commit.

```shell
git add <filename>
# OR to add all files at once
git add .
```

### Commit the changes

Commit allows us to register the changes into git history.

```shell
git commit -m 'commit message'
```

### Connecting to a repository that exists on the cloud

To connect our local repository with the repository that exists on the cloud, we have to use the following command.

```shell
git remote add origin <link to the repository>
```

### Pushing changes to the GitHub repository

If we want to push/upload the local changes into the cloud, we have to use the following command.

```shell
git push origin <branch name>
```

### Pulling the latest changes that exist on the cloud to a local machine

If we want to pull or download the changes that exist on the cloud, we have to pull it into our local machine.

```shell
git pull origin <branch name>
```

---

## Branching

Branching is one of the most important concepts in git. We generally create branches to isolate a feature from the rest of the code. For example, we might have a code running fine on a production environment. We might want to add a new feature. In this case, we cannot risk the code running in the production environment to stop working. This is when we create branches. We can then work on a new feature, complete the feature, test it and then merge with the code in production.

To switch branch that already exists in the repository,

```shell
git checkout <branch name>
```

If the branch doesn't exist yet,

```shell
git checkout -b <branch name>
```

### view the list of the branches

```shell
git branch -a
```

### merge some branch with the current branch

```shell
git merge <branch name>
```

for example, you're on master branch, you want to merge it with a branch called dev, you'd navigate to master branch and then do the following,

```shell
git merge dev
```

### view the commits history

To see the commit history, use the following command

```shell
git log
```

To exit the log, press Q.

### Navigating to a specific commit

Sometimes we might have to refer to a commit if things break. To do so, we need a commit identifier. When we do `git log`, we get to see all the commits that we've made including an id like `e2123ndsadsadzoqm23`. To switch into a specific commit, we simply use the following command

```shell
git checkout <commit id>

# example
git checkout e2123ndsadsadzoqm23
```

### Reverting changes to a specific commit

Sometimes we might have to revert our changes to a specific commit. To do so, we need a commit ID (explained above). To revert to specific commit, use the following command

```shell
git reset --hard <commit id>

# example
git reset --hard e2123ndsadsadzoqm23
```

## Conclusion

Thanks for reading this content. I want to make it a series and in the next one, I'll be talking about collaboration with GitHub among teams. I additionally will also be covering about deploying our static websites using GitHub and netlify. If you don't want to miss those contents, subscribe to my newsletter by entering your email below.
