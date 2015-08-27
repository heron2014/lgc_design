//$(function() {
//    $('#datetimepicker4').datepicker({
//        pickTime: false
//    });
//});


(function () {
    "use strict";

    $( document ).ready(function() {
        console.log( "ready!" );
        var d = new Date();
        $('.js_year').text(d.getFullYear());

        $('#datetimepicker4').datepicker();
        //$('#datetimepicker4').datetimepicker({
        //    pickTime: false
        //});
    });

})();
