Deployment and test
------------------

Share the dist/ directory utilising any popular web server. To build the latest exploit list:

    wget https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    ./extract.rb > dist/sploits.json

To build the javascript:

    npm install
    gulp

