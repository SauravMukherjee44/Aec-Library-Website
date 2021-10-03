## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/SauravMukherjee44/Aec-Library-Website/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Issues and PRs

If you have suggestions for how this project could be improved, or want to report a bug, add a feature, open an issue! We'd love all and any contributions. If you have questions, too, we'd love to hear them.

We'd also love PRs. If you're thinking of a large PR, we advise opening up an issue first to talk about it, though! Look at the links below if you're not sure how to open a PR.

## How to Contribute

- Take a look at the Existing [Issues](https://github.com/SauravMukherjee44/Aec-Library-Website/issues) or create your own Issues!
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this is all about.

## How to make a Pull Request

**1.** Fork the repository by clicking on the <a href="https://github.com/SauravMukherjee44/Aec-Library-Website"><img src="https://img.icons8.com/ios/24/000000/code-fork.png"></a> symbol at the top right corner.

**2.** Clone the forked repository.

```
   cd Desktop
```

```
   git clone https://github.com/your_user_name/Aec-Library-Website.git
```

**3.** Navigate to the project directory and initialize the git.

```
   cd Aec-Library-Website
```

```
   git init
```

**4.** Create a new branch:

```
   git checkout -b YourBranchName
```

**5.** Make changes in source code.

**6.** Stage your changes and make a commit

```
   git add .
```

```
   git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```
   git push origin YourBranchName
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

**9.** If anyone contribute to this repository, then the changes will not reflect in your local repository. For that:

**10.** Setup a reference(remote) to the original repository to get all the changes from the remote.

```
   git remote add upstream https://github.com/SauravMukherjee44/Aec-Library-Website.git
```

**11.** Check the remotes for this repository.

```
   git remote -v
```

**12.** Fetching from the remote repository will bring in its branches and their respective commits.

```
   git fetch upstream
```

**13.** Make sure that you're on your master branch.

```
   git checkout master
```

**14.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.

```
   git merge upstream/master
```

**15.** Or you can club step 12th and 14th together using:-

```
   git pull upstream main
```

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide](https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733). Any linting errors should be shown when running `npm test`.
- Write and update tests.
- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocked you.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
