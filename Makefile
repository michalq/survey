up:
	@echo 'Running server'
	docker-compose up -d

down:
	@echo 'Stopping server'
	docker-compose down

hosts:
	@echo 'Container hosts.'
	docker-compose run web bash -c 'cat /etc/hosts'

db:
	@echo 'Connecting to database.'
	docker-compose run db bash -c "mysql -h db -u docker -pdocker survey"

migration:
	@echo 'Migration database'
	docker-compose run db bash -c '/tmp/import.sh'