# TinyMCE editor

Use TinyMCE editor v4 (with jQuery) for your meteor app.

```
$ meteor add ........

```

```
tinymce.init({
  selector: 'textarea',
  skin_url: '/packages/your_skin_folder/skins/lightgray',
});
```

Caution: Default `skin_url` must be defined on init. If you want use a custom skin, you can simply modify it.

