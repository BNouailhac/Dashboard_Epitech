Project EPITECH Tek3 : Dashboard by
Baptiste NOUAILHAC
Siyam MOHAMED DHOIFFIR

### Tech

Dashboard uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Javascript] - for script
* [css] - for esthetism

### Installation

Dashboard requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start.

```sh
$ npm install -d
```

### Docker

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
docker build -t siyam/node-web-app .
docker-compose up
```
This will create the image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -p 49160:8080-d siyam/node-web-app
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
160.0.0.0:8000
```

### Services

Dashboard is currently extended with the following services.

| Service | API | Use
| ------ | ------ |
| Weather | [http://api.openweathermap.org] | This widget allows you to see the city weather temperature with small description thanks to a city name.
| Google Map | [https://maps.googleapis.com] | This widget allows you to see the map
| Youtube | [https://www.youtube.com/iframe_api] | This widget allow you to watch a video thanks to a youtube video ID
| Movies | [http://www.omdbapi.com?s=] | This widget allows you to see a movie, his poster and his date of creation thanks to a movie name.
| Reddit | [https://www.reddit.com/r/] | This widget allows you to see reddit feed thanks their name.
| Money | [https://api.exchangeratesapi.io/latest?base=] | This widget allow you to see the exchange price between world money.
| Covid | [http://apidashboard.somee.com/api/covid] | This widget allows you to see the actual covid-19 statistique.

### Utilisation

To use the Dashboard will need to create an account and log in with it via the login page.
Login system via Okta.
Then simply select on the page, the widgets you want to use.
It is possible to move them around the screen and add them endlessly.

### Image of the application

![in Dashboard](https://github.com/BNouailhac/Dashboard_Epitech/blob/master/Image_Git/cap.png)
