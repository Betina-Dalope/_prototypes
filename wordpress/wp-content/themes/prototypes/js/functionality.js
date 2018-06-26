/*
 * Betina's R&D Prototypes
 * @Description - Main Javascript file
 ***********************************************/

(function ($, window, document, undefined) {

$(function() {

  var smoothStateOptions = {
    prefetch: true,
    onBefore: function($currentTarget, $container) {
      // `$currentTarget` is the a tag or whatever that triggered page change
      // `$container` is a `jQuery Object` of the the current smoothState container
      console.log("before")
    },
    onStart: {
      // How long this animation takes in milliseconds
      duration: 400,
      // A function that dictates the animations that take place
      render: function ($container) {
        console.log("start");
        $("#page-transition").addClass("start");
      }
    },
    onReady: {
      // does not occur until onStart is finished
      // How long this animation takes in milliseconds
      duration: 1000,

      // `$container` is a `jQuery Object` of the the current smoothState container
      // `$newContent` is a `jQuery Object` of the HTML that should replace the existing container's HTML.
      render: function ($container, $newContent) {
        // Update the HTML on the page
        console.log("ready - inject content")
        $container.html($newContent);
        $("#page-transition").addClass("stop");
      }
    },
    onAfter: function($container, $newContent) {
      // does not occur until onReady is finished
      console.log("after");
      $("#page-transition").removeClass("stop").removeClass("start");
    }
  }
  $('#content').smoothState(smoothStateOptions).data('smoothState');

});

})(jQuery, this, this.document);
