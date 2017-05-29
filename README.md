Test to use selenium with node and docker

- Go to http://labs.play-with-docker.com/
- Clone this repository 
- cd selenium-node-docker-test
- run docker-compose up -d
- click on the link on top with port 4444 and add /grid/console to the url
- go to the tester directory
- run docker-compose build
- run docker-compose up (test is running against the grid)
- run docker-compose scale tester=10
- go in the grid console url and see that tests are blocked waiting for an available docker instance
- go back to the root folder
- run docker-compose scale chromenode=10
- see in the console that tests are ran in parallel

I used this repo to make a demo, here is my demo script:

# Preparation:

git clone https://github.com/ggstalder/selenium-node-docker-test.git
cd selenium-node-docker-test
docker-compose up -d
cd tester
docker-compose build
docker-compose up
Open grid console url /grid/console

# Demo:

-> Let's see what is currently running
docker ps
-> Go in the grid console url and see the two selenium nodes
docker-compose up
-> The test is runnning against the grid
-> Launching 10 simultaneous tests
docker-compose scale tester=10
-> Go in the grid console url and see that tests are stuck waiting for an available docker instance
cd ..
docker-compose scale chromenode=10
-> Go in the grid console url and see that tests are stuck waiting for an available docker instance

