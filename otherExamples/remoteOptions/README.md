# Using k6 with options in a separated file

With these examples you can execute a k6 script with other options/scenarios than the ones in the original script.

## Original Script
 The original script is in this repo:
 >  options.js

 The script has inside options defined

 ## Separate options file
 You can store dofferent options in a separate file as exemplified in
 >  confFile.json

 ## Setting options from command line
 You can set the different options from the execution command line in two ways:
>   k6 run -c confFile.json Options.js

or

>   k6 run --config confFile.json Options.js

 You can also import and skip the options in the original options.js
