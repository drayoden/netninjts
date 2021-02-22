### learning typescript
net ninja - youtube May, 2020 -- https://github.com/iamshaunjp/typescript-tutorial
* extends JS, browsers do not understand TS natively -- it must be compiled (TSC)
* install: `sudo npm install -g typescript` -- '-g' install globally
* compile: `tsc <input.ts> <output.js>`  -- can also use input file only and output defaults to same name.
* automatic compile: `tsc <input.ts> -w` -- watch the input file and recompile on each save
* type checking is only done at compile time, not realtime in the browser
* create a TS config file: `tsc --init` -- creates a tsconfig.json file, use /public, /src folders, etc.
    * 'outDir' and 'rootDir' set accordingly.
    * watch all TS files in 'rootDir' -- `tsc -w` -- create the JS file in 'outDir'
    * prevent TS files created in the root from being compiled and created in 'outDir' -- see 'include' at bottom of tsconfig.json.
    * tsconfig.json - set 'target' to 'es6' and it will compile correctly, tried an arrow function.
* tut9 - type aliases
    * string | number:
    ```javascript
    type strNum = string | number;
    connst logDetails = (uid: strNum, item: string) => {}
    ```
    * object with a name:
    ```javascript
    type oWname = {name: string, uid: strNum};
    const greet = (user: oWname) => {}
    ```
* tut10 - function types -- type of args and return
    ```javascript
    // ex1
    let greet: (a: string, b: string) => void;
    greet = (name: string, greeting: string ) => {
        console.log(`${name} says ${greeting}`);
    }

    // ex2
    let calc: (a: number, b: number, c: string) => number;
    calc = (n1: number, n2: number, action: string) => {
        if (action === 'add') {
            return n1 + n2;
        }
    }

    ```

* tut 11 - finance logger app
* tuts 12 & 13 - all notes are in app.js
* tut14 - modules - only modern browsers work
    * tsconfig.json - `target` -> `es6`, `module` -> `es2015`
    * index.html - in <script> add `type="module"`
    * created `/src/classes/invoices.ts` - move the Invoices class to invoices.ts.
    * could use webpack - bundles multiple 'modules'/JS files into one file
* tut15 - interfaces
* tut16 - interfaces with classes, created /src/interfaces/HasFormatter.ts - imported into Invoices.ts
* tut17 - render class to send the output to container
* 
 




