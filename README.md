# WgDone

![Maintenance](https://img.shields.io/maintenance/no/2018)
![angular v8](https://img.shields.io/badge/Angular-%23404d59?style=flat&logo=angularjs&logoColor=red)
![firebase](https://img.shields.io/badge/Firebase-%23404d59?style=flat&logo=firebase&logoColor=yellow)
![google auth](https://img.shields.io/badge/Google%20Login-%23404d59?style=flat&logo=google)

A chore tracking app to review which roommate does the most chores (me obviously). Annoy your roommates with caution.

## Screenshots

![screenshot 1](./screenshot1.png)
![screenshot 2](./screenshot2.png)
![screenshot 3](./screenshot3.png)
![screenshot 4](./screenshot4.png)

## Stack

Its running a frontend only PWA, and just requires a firebase storage. All CRUD operations are done directly against the firebase api, via the angularFire sdk.

You only need to setup a collection named `tasks` with a set of tasks.

example:

```json
{
  "tasks": [
    {
      "name": "Staubwischen"
    },
    {
      "name": "Staubsaugen",
      "meta": {
        "type": "select",
        "select_label": "Raum",
        "select_options": ["Wohnzimmer", "Schlafzimmer", "Esszimmer"]
      }
    },
    {
      "name": "Wäsche Waschen",
      "meta": {
        "type": "input"
      }
    }
  ]
}
```

## License

MIT. Do what you want with it.
