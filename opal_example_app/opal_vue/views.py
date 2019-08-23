from django.shortcuts import render

# Create your views here.


class SomeDiagnsisChange(object):
    url = "/pathway/episode/<pk>/diagnosis/"
    template_name = "/some_template/blahblah.html"

    def get_template(self, *args, **kwargs):
        pass

    def get_initial_data(self, url_kwargs=None, user=None):
        return Diagnosis.objects.filter(episode_id=self.pk)

    def save_data(self, some_data, url_kwargs=None, user=None):
        """
        Nothing is deleted...
        """
        for diagnosis in some_data:
            diagnosis["episode_id"] = self.pk
        Diagnosis.bulk_update_from_dicts(some_data)

    @classmethod
    def construct(cls, request):
        instance = cls()
        instance.request = request
        return instance


class PathwayTemplateView():
    def dispatch(self, *args, **kwargs):
        self.pathway
        pass


    def get_context_data(self, *args, **kwargs):
        pass

