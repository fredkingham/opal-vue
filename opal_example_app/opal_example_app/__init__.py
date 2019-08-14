"""
opal_example_app - Our Opal Application
"""
from opal.core import application

class Application(application.OpalApplication):
    javascripts   = [
        'js/opal_example_app/routes.js',
        'js/opal/controllers/discharge.js'
    ]