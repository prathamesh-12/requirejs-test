# requirejs-test
Getting Started : Simple RequireJS application

1) Download require.js file from http://requirejs.org/docs/download.html 

2) Include the file in index.html as below
  
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Require JS</title>
    </head>
    <body>
    	<script type="text/javascript" src="require.js" data-main="config"></script>
    	
    </body> 
    </html>
    
3) Need to add "data-main=config.js/config" attribute to <script>, which would load config.js file as soon as require.js loads.

4) Sample config.js file is as follows

    //config file fr require js application

    requirejs.config({
    	baseUrl : 'js',
    
    	paths : {
    		jquery :  'jquery.min',
    		angular : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min'
    	}
    });
    
    
  
  
  

