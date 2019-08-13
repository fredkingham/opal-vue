A Vanilla Django Vue Boostrap app

Based on the excellent
https://medium.com/@rodrigosmaniotto/integrating-django-and-vuejs-with-vue-cli-3-and-webpack-loader-145c3b98501a

Except without material design (because I'm not a fan, other preferences are available).

And with bootstrap (because I'm lazy).

To run 
```
cd frontend
npm run serve
```

Then run

```
./manage.py runserver
```


so the theory is

Every panel has a component.
These are loaded somehow dynamically but at the moment are just declared.

so we have
patient list
patient detail

as 2 different components?
how are we dealing with dates?
how are we dealing with the frontend model?

frontend model looks like...


we keep the schema as is, we keep all end points
we keep the field translator and item.makeCopy



patient:
  demographics:
episode
  diagnosis:

1.
