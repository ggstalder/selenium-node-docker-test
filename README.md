Test to use selenium with node and docker

- Go to http://labs.play-with-docker.com/
- Copy everything in one instance (manually)
- run docker-compose build at the root
- run docker-compose start
- click on the link on top with port 4444 and add /grid/console to the url
- go to the tester directory
- run docker-compose build
- run docker-compose up (test is running against the grid)
- run docker-compose scale tester=20
- go in the grid console url and see that tests are blocked waiting for an available docker instance
- go back to the root folder
- run docker-compose scale chromenode=20
- see in the console that tests are ran in parallel
