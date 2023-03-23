/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/* TypeScript Getting Started
==============================


TypeScript Compiler
---------------------
TypeScript is transpiled into JavaScript using a compiler.

TypeScript being converted into JavaScript means it runs 
anywhere that JavaScript runs!


Installing the Compiler
------------------------
  > TypeScript has an official compiler which can be installed 
    through npm.

  > Within your npm project, run the following command to install 
    the compiler:  --> npm install typescript --save-dev

  > The compiler is installed in the node_modules directory 
    and can be run with: --> npx tsc.

  > Which should give you an output similar to: 
        Version 4.5.5
        tsc: The TypeScript Compiler - Version 4.5.5



Configuring the compiler
-------------------------
By default the TypeScript compiler will print a help message 
when run in an empty project.

The compiler can be configured using a 'tsconfig.json' file.

You can ask TypeScript to create a 'tsconfig.json' with the 
recommended settings using this cmd : --> npx tsc --init

Which should give you an output similar to:
Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json

Here is an example of more things you could add to the 
tsconfig.json file:

{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}

You can open the file in an editor to add those options. 
This will configure the TypeScript compiler to transpile 
TypeScript files located in the src/ directory of your 
project, into JavaScript files in the build/ directory.

This is one way to quickly get started with TypeScript, 
there are many other options available such as a 
create-react-app template, a node starter project, 
and a webpack plugin. */
