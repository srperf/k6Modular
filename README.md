# Modularizing k6 scripts
To avoid confusions while working on performance tests with k6 I like to modularize them.
This gives an easy way to first use modular scripts in a continuous delivery way, without doing BALTs (Big Ass Load Test) which stop or at least slow down the pipeline.
Never use a BALT in a pipeline.

If you use modular scripts which call a single API or test case, you can later re use them in larger load tests. The aforementioned BALT.

Actually Carvana used something like this. Not sure exactly how they did it, but the concept is the same. If you are interested take a look here --> https://k6.io/case-study-carvana/

What I am gonna teach you here is not the ONLY way, the best practice ever to rule them all the best practices. NO. This is just my way and a suggestion.

This works similarly to how LoadRunner organizes scripts.

## Process separation
If you keep all your processes and load test patterns in a single file, things can get messy pretty quick.

In this example you separate one file per each process or API. This makes it easier if you have a team working on many processes at the same time.

You then put in a different file the load test logic, just invoking all the files for each of the processes.

## How to divide them
As you can see here in the example I have the whole performance test kit in a single folder: [k6Execution](./k6Execution/)
There you will find the k6 script that controls the BALT named [mainScenario.js](./k6Execution/mainScenario.js) and a folder with the isolated modular scripts named [processes](./k6Execution/processes/).

Inside of processes you will find a k6 script for each business process or in this case for each API.

## Considerations for it to work
There are a few things you must be careful for this to work.
- The modular scripts should not be running the logic inside the default function.
- The modular script steps must be inside of an export function which you can call in the default function.
- You can run the modular script by itself.
- Import your scripts in the BALT scenario script.
- Create a function for each modular script and call it inside of the function.
- Create your scenarios in the export options and select the load patterns for each modular script inside of the scenario options.

Voila! This should give you some guides on how to run things.

I will be working a bit more on this later but comments, PR's, and issues are welcome!
-Besos, Leandro