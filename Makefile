run:
	@echo 'Running server.'
	docker-compose up -d

hosts:
	@echo 'Container hosts.'
	docker-compose run web bash -c 'cat /etc/hosts'

db:
	@echo 'Connecting to database.'
	docker-compose run db bash -c 'mysql -h db -u docker -pdocker docker'