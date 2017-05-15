#!/usr/bin/env bash
mysql -h db -u $MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE < /tmp/init_shema.sql