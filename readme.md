###

Functionality
endpoint:
http://localhost:3000/convert?fileName=palmtunnel&width=200&height=200

-Resizes images to specified width and height
-If a image has been resized before for the same width and height, then the file from the thumb folder is read and sent back.

Unit Testing
/tests/ folder has the spec files
#Using beforeEach to delete the file in the thumbs folder
#two tests implemented
-Test "convertImage" function to see if it resizes and outputs file in the thumb directory
-Test the end-point using supertest to call the endpoint and see if the output file is created

Code Quality
es-lint: # Using "extends": "eslint:recommended" that covers a lot of es-lint rules # turned "no-undef":"off" to not have to create global declarations

prettier: # used to auto format code on save

# Comments on top of functions explaining what the function does

# Added Async/Await where necessary

# Added try/catch where needed

github:
https://github.com/amankjain/FullStackNodeJS

Scripts: npm run
"build": "npx tsc",
"start": "npm run build && nodemon src/index.ts",
"test": "npm run build && npm run jasmine",
"prettier": "prettier --config .prettierrc \"./**/\*.ts\" --write",
"lint": "eslint \"**/\*.ts\" --ignore-pattern node_modules/"
