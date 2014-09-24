# Resin.io -- Dummy app

## How it works

Runs forever, suitable for keeping the app container running.

## How to use

To use this demo project, first clone this repo on your local machine. Then go to your
Resin dashboard and create an application or use one that you've already created. You
have to add the resin remote to your local git repo in order to `git push resin master`.

To do that, copy the remote and issue the following command in the folder containing this
repo:

```bash
git remote add resin git@git.resin.io:username/test.git
```

You should be able to `git push resin master` to your devices!

**Note**: If you used an already existing application that you've previously pushed other code
to you will have to do `git push --force resin master` the first time to delete the previous
commits.
