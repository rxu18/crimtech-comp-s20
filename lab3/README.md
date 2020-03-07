# Lab 3: Crimson Deep Dive
Over spring break we will add you all to the `harvard-crimson` organization. Then, you should be able to access [the crimsononline repo](https://github.com/harvard-crimson/crimsononline) You will need to read some of the code, make responses and make edits to the Wiki page.

## A. Making sure you can see the repo
If you can't, let Zuzanna and I know.

## B. Crimsononline at a glance
* How many branches does the repo have?
* How many commits does it have?
* What languages is crimsononline written in?
* In the `crimsononline/` folder, which folders are there? Pick 5 of the folders and write about what you think they are about.
* Check out the `Wiki` page. What wiki pages are under `Projects`?
Put your answers in `lab3-responses.md`.

## C. Setting up the repo
Follow the instruction for setting up a local development server [here](https://github.com/harvard-crimson/crimsononline/wiki/Setting-up-a-Local-Development-Server). This step is difficult and can take a while to do. If you encounter a bug, please send a message on Slack or email Zuzanna and I. A few notes to help you:
* Do *not* skip over the step called `install postgres`.
* Many of these steps take a while. The first time you load the website will take up to a minute.
* If, when you open up `localhost:3000` you see a long list of the same error message, try to see if [this post](https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate) applies.

If everything worked, you should be able to open `localhost:3000` and see the Crimson. Woohoo!

## D. Crimson Wiki
Make your own page on Crimson Wiki. Put `[Tech-Comp]` and your name in the title.

Then, write at least 500 words of documentations about either a pull request, a commit or a folder. You can work in teams of 1 or 2. Make sure you don't overlap with another group.

Inside your documentation, you should explain
1. what the commit/PR/folder does, along with pictures. If you are working with a folder, try changing some of the files inside the folder. For example, change the CSS color to magenta, or add "Hello World" into the code. See where they pop up!
2. How the commit accomplished this. This step is best done after discussing with the person who made the commit/PR. If you are working with a folder, check who made the most recent edits to the folder. If you need help, Zuzanna and Rick knows quite a bit about the codebase.

### If you are writing about a PR or a commit
Check out any PR after #443. You should find a PR of moderate size, with around 50-100 changes and edits. Any larger and the project can be too big, and any smaller I doubt you can write 500 words about it.

In the past, the Crimson has used a service called `fabricator` instead of GitHub. As a result, many of the large edits are commits onto master instead of pull requests. The commit `git log --shortstat` can tell you the size of a commit along with who made the change. For any commit made in the past year, the editor has not graduated. So, someone can explain to you what it does!

### If you are writing about a folder
For the frontend, consider items in `frontend/src/pages`, such as `article-layouts` and `landing-pages`. The `Article.tsx` file is large enough to make a project on its own! `frontend/src/components` is another good one.

For the backend, each folder in `crimsononline` makes for a good project.

You can find the people who most recently committed to a project and ask them about what the folder is about. Nenya Edjah and Teddy Liu, the tech chairs in the past two years, can be a good sources. Let me know if you need to be in touch with them.

## Congraulations!
This is the end of the Crimson comp. If you have finished, congratulations -- in a couple of weeks, we will induct you to be a member of CrimTech.

So, what's next? Well, as you see the code base is massive. There are a lot of features inside that we haven't covered. For example, what is a DOM breakpoint? How do we detect that you are using AdBlocker? How did we get the styling to be so clean? (Rick worked on the last one) There are many more features, and always more to work on.

Zuzanna and I look forward to working with you in the future. Welcome to the club.