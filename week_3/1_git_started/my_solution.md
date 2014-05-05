## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add

this command adds the changed that you've made to your repo.  It stages the changes you have made, but does not commit them to the remote repo.

#### branch
a branch allows you to create a unique area to work on your project where you can add and commit changes without affecting the master repo.  Once you have made the changes you want, you can merge the branch with the master.

#### checkout
git checkout can be used for files, commits, and branches. on commits/file it allows you to access a old version of your project without altering its (master) current state.  

#### clone
this copies a working remote repo onto your local machine

#### commit
this confirmes the changes that you have previously added are the ones you want to save.  You then use push to move them to the remote repo.

#### fetch
this command will fetch all branches and commits from a remote repository.  This is what you will need when you want to grab changes others have made to a branch you both may be working on.


#### log
allows us to look through the history of commits for our directory

#### merge
merges changes from a branch to the master repo.

#### pull
does the work of git fetch and git merge in one command.  pulls the upstream changes into your local repo.


#### push
send the commits from your local repo to the remote repo.  Makes your changes public.

#### reset
deletes the most recent version/commits of your repo  and changes back to last commit.  Should not be done on a public repo that many people are working on. different from revert in that it it will actually change the remote repo, where as revert allows you to delete past commits, but keep the master repo as is.

#### rm
removes file from gits tracking, it will not remove the file from your local machine/hard drive.

#### status
status lets us view our staging area (git add files) and working directory.


## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Reflection


Ity was a great move adding this git exercise for us.  I had been using git from the terminal to try and get a better feel for it, but anytime I was in doubt I would head to the APP. Going back over the commands and thinking about the workflow of a git project helped me clarify a couple of things that remained unclear.  I will now hopefully only use the cli going forward and force myself to be comfortable without a gui.