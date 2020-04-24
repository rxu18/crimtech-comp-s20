# Lab 0: Introduction!
Welcome to the Crimson!

## A. Google Form
Please fill out the [Comp check-in form](https://forms.gle/uhyzJKPUyxch74UW7).

## B. Installing Git
Before you start the lab, be sure to fork an assignment. Make sure you are logged into GitHub and refresh the page. There is a button called `fork` on the upper right. Press it :)

1. The native build environment for Crimson is MacOS. Crimson editors have found success with Linux, but Windows runs into trouble later on.
    * Let us know if you have a Windows computer.
2. The Crimson uses GitHub, the website you are on right now. To use GitHub you need to install Git. Open up your terminal and run `git --version`. If the command yields an error, you do not have git installed.
    * MacOS: run `brew install git`. If you run into an issue here, call us over.
        * It is possible you will need to run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` but just call us over :)
    * Linux: run `sudo apt-get install git` or something similar.
3. To work on this lab, you want to clone your repository. If you have not cloned a repository, call us over :)

## C. Committing with Git
Let's make our first commit in this repository. Again, open up your terminal.
0. Use the `cd` command to get to your cloned repository. If you have never used this, call us over :)
1. Go to `lab0-responses.md` and type in `I am <name> and I am comping CrimTech. Woohoo!`
2. Next, run `git status`. You should see a file in red.
3. Run `git add .` then check `git status` again. Now, the file should be green.
4. Run `git commit -m "<message>"`. `<message>` is a sentence that describe what you did. For example, you may choose the message `Edit lab0 responses`.
5. To push the commits to github, run `git push`. Now, if you go back to GitHub, you should see your commit there :).

## D. Installing NodeJS and npm
In the next 2 labs we will be using Node JS, which extends the functionality of JavaScript.
1. In your terminal, run `brew install node`.
2. Next, check the version of node and npm using `node -v` and `npm -v`. Record the versions in `lab0-responses.md`.
3. If something weird happened, all us over.

## E. Miscellaneous tools
1. [VSCode](https://code.visualstudio.com/) is an incredible free code editor. Most of us on CrimTech use it. If you have not used a code editor, install VSCode above and call us over. We will show you why it's incredible.
2. [Docker](https://www.docker.com/) is a software that can build these "mini computers" inside your laptop. It is extremely powerful and CrimTech sues it in our codebase. Install Docker and put the version number in `lab0-responses.md`.
3. [Chrome](https://www.google.com/chrome/) has a very powerful inspect feature that is crucial to web programming, but I'm sure you're using it already.
4. You will need to sign up for Piazza. We will have an email about this. If you are in the Crimson right now, Alex Chin will know how to do it.

## F. Final commit
You are almost done! Let's record all the changes that happened, push it to GitHub and submit the assignment.
1. Run `git add .`, run `git status` to make sure everything is green and run `git commit -m "Submit lab 0."` to save your changes. Then, run `git push` and go back to GitHub.
2. On your GitHub page, you should see a yellow box called `make pull request`. Press it, make a pull request, and you are done!

Congratulations on completing your first lab, and I look forward to seeing you next week.
