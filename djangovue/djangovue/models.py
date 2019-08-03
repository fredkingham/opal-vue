from django.db import models


class Demographics(models.Model):
    SEX_CHOICES = (
        ("Male", "Male",),
        ("Female", "Female",),
        ("Other", "Other",),
    )
    hospital_number = models.CharField(max_length=255, blank=True)
    nhs_number = models.CharField(max_length=255, blank=True, null=True, verbose_name="NHS Number")
    surname = models.CharField(max_length=255, blank=True)
    first_name = models.CharField(max_length=255, blank=True)
    date_of_birth = models.DateField(
        null=True, blank=True, verbose_name="Date of Birth"
    )
    ethnicity = ForeignKeyOrFreeText(Ethnicity)
    sex = models.CharField(max_length=255, blank=True, choices=SEX_CHOICES)