
<div align="center">
  <img src="https://img.shields.io/badge/User%20Count-8-blue" alt="102 items">    <img id="last-update-badge" src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-green" alt="Last update: April 24, 2021">    <img src="https://img.shields.io/badge/Libraries-Discord-red" alt="Updated for Node 14.0.0">     <img src="https://img.shields.io/badge/Libraries-Discord--Webhook-red" alt="Updated for Node 14.0.0">    <img src="https://img.shields.io/badge/Last%20Update-4%2F%20May%2F%202021-yellowgreen" alt="Updated for Node 14.0.0">
</div>

## All-about-International-Space-Station-ISS
### All about ISS is a responsive web app build on JS and BootStrap which shows you all sort of live information about International Space Station. Including its longitude, latitude, its position marked on world map which refreshes at every 2 seconds, above which part of the globe ISS is currently moving (city, region and country), how many and all astraunauts names which are on ISS sending critical info to earth right now and much more. You can click on the link given below to acess the web app.

URL = http://all-about-international-space-station-iss.000webhostapp.com/

Use HTTP instead of HTTPS as the NASA's api dosn't communicate over HTTPS 

#### When you visit the page it will look like this for some seconds : 
![GitHub Logo](/components/ss1.png)
#### Its because at that moment of time JS is calculating the speed of the craft and trying to reverse geocode the location recieved from NASA, which sometimes fails too as discussed at the bottom of web page in `Frequently asked questions` coloumn.

#### After few seconds you must be looking at something like this :
![GitHub Logo](/components/ss2.png)
#### By clicking on Locate on globe you will be redirected to the 3D version of world which can also be seen just below this. And by clicking on locate on map you will be redirected to google maps.

#### Here is the interesting part :
![GitHub Logo](/components/ss3.png)
#### What you can see here is a red location mark which shows the live location of the ISS which can be noticed moving every 0.5 seconds, this is purely coded in JS, NO Rest API, this is getting rendered in the real time.

#### When you encounter an error like `Currently, ISS is above a place on Globe that can't be Geocoded.` at that time you can take a look on the 2D map and you will notice it is somewhere at a position like this :
![GitHub Logo](/components/ss4.png)

#### And as you can clearly see ISS is not at some place which can be reverse geocoded into `city`, `state` or `country`.

[UPDATE] : Refresh time is changed from 0.5 sec to 2 secs as there is an inherent uncertainty in the ISS position models that is usually larger than one second. In addition the position is only calculated once per second (the maximum resolution of an integer unix time stamp). So polling more than 1 Hz would be useless except to add unnessisary strain to the servers.
