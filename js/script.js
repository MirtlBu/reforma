$(function() {
    console.log('init');

    jQuery.validator.setDefaults({
        debug: true,
        success: 'valid'
    });

    jQuery.validator.addMethod("yourname", function (name, element) {
        return this.optional(element) || name.length > 2 &&
              name.match(/^[- а-яА-ЯёЁa-zA-Z]+$/);
    });

    jQuery.validator.addMethod("phone", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
              phone_number.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    });

    var forms = $('.form');

    setValidation(forms);

    function setValidation(elemsCollection) {
        Array.prototype.forEach.call(elemsCollection, function(v, i) {
            $(v).validate({
                errorElement: 'span',
                rules: {
                    yourname: {
                        required: true,
                        yourname: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        phone: true
                    }
                },
                messages: {
                    yourname: {
                        required: 'Пожалуйста, введите имя',
                        yourname: 'Пожалуйста, введите правильное имя.'
                    },
                    email: {
                        required: 'Пожалуйста, введите email',
                        email: 'Пожалуйста, введите правильный email, типа ivanov@mail.com'
                    },
                    phone: {
                        required: 'Пожалуйста, введите номер телефона',
                        phone: 'Пожалуйста, введите правильный номер телефона.'
                    }
                },
                errorPlacement: function(error, element) {
                    // $('.welcome').height('auto');
                    error.appendTo(element.parent('.label'));
                },
                submitHandler: function(form) {
                    $(form).ajaxSubmit();
                    $('.form').addClass('form--invisible');
                    $('.thanks').addClass('thanks--active');
                }
            });
        });
    }

    // var height = $('.welcome').height(),
    //     features = $('.features__items');

    // $(window).scroll(function () {
    //     if( $(window).scrollTop() > height/1.5){
    //       features.addClass('features__items--visible');
    //     }
    //     else {
    //         features.removeClass('features__items--visible');
    //     }
    // });

})