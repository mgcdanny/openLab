#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/openLab/")

from appFolder import app as application
application.secret_key = '1234'

