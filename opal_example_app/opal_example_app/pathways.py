from opal.core.pathway import Pathway
from opal_example_app import models


class AddPatient(Pathway):
    display_name = "Add Patient"
    slug = "add_patient"

    steps = [
        models.Demographics,
        models.Diagnosis
    ]