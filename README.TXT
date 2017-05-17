Overview - This App is full stack in JavaScript and has an Activity Record screen with options for entering a new activity, searching for an activity, marking an activity as completed, unchecking the activity completion, or performing activity
 We used two screens to show how navigation is done

  The App was split into two folders

 Backend

- Dependencies:
	- body-parser @ 1.15.2 - responsible for converting body content to js including json
	- express @ 4.14.0 - web framework
	- mongoose @ 4.7.0 - connection with the mongo and will do the document object mapping, validations
	- node-restful @ 0.2.5 - webserver creation
	- pm2 @ 2.1.5 - laucher, tool for application monitoring, will be used after the application has been developed
	- nodemon @ 1.11.0 - similar to PM2, but less robust, we will use for development
	- package.json - 
		"dev": "nodemon",
		"Production": "pm2 start src / loader.js --name all-app"

 - Folder structure:
	-src
		-loader.js - will load the main configuration files
		-config
			-serve.js - part of the configuration relative to express, initialization of the server, allocate a port to it you can publish the webserver
			-database.js - where the connection with the mongo will be configured
			Importantly we replace the promisses of the node so we can avoid the warning message that happens when we use the promisses of the mongoose

*** After setting up these three files it is necessary to initialize the mongo (in the terminal type mongod)

			-route.js - file for configuration of url routes
			-cors.js - here we create a middleware and configure the permissions
		-api
			- todo
				-todo.js - where will be mapped my object to mongo document
				-todoService.js - a standard api will be created for sending commands to the database

*** We use Postman for testing and bank validations - it's a Chrome google plugin, important the mongo and the application must be initialized to work

To initialize the application it is necessary to initialize mongodb and pm2, to do this open the terminal and in the backend folder type (mondod), open another terminal window and also in the backend folder type (npm run production)

 Frontend

 - Dependencies:
	- webpack @ 1.14.0
	- webpack-dev-server @ 1.16.2
	- babel-core @ 6.22.1
	- babel-loader @ 6.2.10
	- babel-plugin-react-html-attrs @ 2.0.0
	- babel-plugin-transform-object-rest-spread @ 6.22.0
	- babel-preset-es2015 @ 6.22.0
	- babel-preset-react @ 6.22.0
	- extract-text-webpack-plugin @ 1.0.1
	- css-loader @ 0.26.1
	- style-loader @ 0.13.1
	- file-loader @ 0.9.0
	- bootstrap @ 3.3.7
	- font-awesome @ 4.7.0
	- react @ 15.4..2
	- react-dom @ 15.4.2
	- react-router @ 3.0.2
	- axios @ 0.15.3 - Responsible for making the http link with backend services