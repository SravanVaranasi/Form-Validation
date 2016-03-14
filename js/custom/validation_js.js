$('form').validate({
    rules: {
        fname: {
            minlength: 3,
            maxlength: 15,
            required: true
        },
        lname: {
            minlength: 3,
            maxlength: 15,
            required: true
        },
        email: {
            minlength: 10,
            maxlength: 20,
            required: true
        },
        passport: {
            minlength: 8,
            maxlength: 12,
            required: true
        },
        addressOne: {
            required: true
        },
        depart: {
            required: true
        },
        arrive: {
            required: true
        },
        from: {
            required: true
        },
        to: {
            required: true
        },
        confirmation: {
            minlength: 0,
            maxlength: 10,
            required: true
        },
        airline: {
            minlength: 0,
            required: true
        },

    },
    highlight: function(element) {
        var id_attr = "#" + $(element).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');
    },
    unhighlight: function(element) {
        var id_attr = "#" + $(element).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
    },
    errorElement: 'output',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.length) {
            error.insertAfter(element);
        } else {
            error.insertAfter(element);
        }
    }
});
