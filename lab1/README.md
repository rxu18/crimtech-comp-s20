# Lab 1: The Force Awakens
In this lab, we will teach you how to use some HTML, CSS and Javascript. We recommend you finish A-C by 2/21 and D-E by 2/28.

## A. Setting up the Upstream
To see the lab in your forked repository, you need to `pull` from what's known as the `upstream`. To set this up, run the command `git remote add upstream git@github.com:rxu18/crimtech-comp-s20.git`. This makes Git know that Rick's repository exists.

Next, run `git pull upstream master`. This fetches all the data for lab 1 and puts them on your computer.

## B. Welcome to Programming in Javascript
Welcome to programming! Javascript is a widely popular language used for web scripting. While it is possible to run Javascript code like you would Java or C code, we usually run the code in the web. Type your code in `test.html` and any responses in `lab1-responses.md`. *Throughout this entire section, Google is your friend*.
1. Open up `test.html` in the browser. You should see a blank page. Now, right click and choose `inspect`. You should see the message `Try typing the command console.log("Hello World!");` in the console.
2. Type that command into the console. What do you see? (If this is your first program, congratulations. You can now call yourself a CS God.)
3. In a programming, we can declare variables. Declare a variable `x`, set it equal to `42`, and `console.log` it.
4. We can also add and subtract variables. Add `378` to `x` and then `console.log` it.
5. Declare another variable `y` and set it equal to your favorite string. Try adding `x` and `y` then logging the output.
6. Try outputing `y.includes("hello")` and `y.repeat(10)`. What do the two functions do?
7. We can declare functions in Javascript! Declare a function `square` that can take in a variable `i` and outputs `i*i`. Then, log `square(5)`.
    * What happens when you call `square(2.5)`? Or `square("hello")`?
    * What happens when you change the variable `i` to `x`?
8. Next, we will introduce the two of the most important concepts in programming: `if`-statements and loops. Change the function `square` so that if the input is not a number, the function returns `-1` instead. You may find googling "if statements" and "javascript find type of variable" helpful.
9. Construct a function `numberString`, that on input `i` a positive whole number, output the string `123...i`. For example, `numberString(10)="12345678910"`. 
    * Your function should not crash when `i` is not a positive whole number. Add some `if`-statements to check!

That was a lot. Give yourself a pat on the back for completing them!

## C. HTML Header
In this section we will be editing the `<head>` section of `yoda.html`. Note that starting this section we are giving you more freedom and somewhat less guidance. As you get deeper into CS, this trend will continue. **Google is your friend:**

> What separates an amateur and professional coder? Amateur coders believe code = algorithm + data structure. Professionals know that code = Google + reading. - Some coding website

1. Add a title to the page. 
2. Add a favicon. Notice that there is a file named `favicon.ico` in the `img/` folder. Link this to the page using the code `<link rel='shortcut icon' type='image/png' href='img/favicon.ico'>`. (Do you understand what the code does?)

After this, your tab should look like this: ![Tab Image](https://raw.githubusercontent.com/rxu18/crimtech-comp-s20/master/lab1/mdimg_/i2.JPG)"Logo Title Text 1")

## D. HTML Body
It is late so I'll write the rest of this later :)

## E. Javascript
