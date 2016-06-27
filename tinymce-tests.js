// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tinymce.js.
import { name as packageName } from "meteor/tinymce";

// Write your tests here!
// Here is an example.
Tinytest.add('tinymce - example', function (test) {
  test.equal(packageName, "tinymce");
});
