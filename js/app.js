$(document).ready(function () {
    console.log('init started...');

    var contactForm = $('#contactForm'), contactFormMsg = $('#contactFormMsg'), contactFormSub = $('#contactFormSub');
    contactFormMsg.hide();
    contactForm.submit(function (event) {
        event.preventDefault();
        contactFormSub.prop('disabled', true);
        contactFormMsg.text('');
        contactFormMsg.hide();
        var url = contactForm.attr("action");
        //console.log(url);
        var data = contactForm.serializeArray();
        //console.log(data);
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json',
            encode: true
        }).done(function (res) {
            //console.log(res);
            contactFormMsg.text('Thank you for contacting Us. We will get back to you within two working days!');
            contactFormMsg.show();
            contactForm.trigger('reset');
            setTimeout(function () {
                contactFormMsg.text('');
                contactFormMsg.hide();
            }, 10000);
        }).fail(function (res) {
            console.log("FATAL:"+res);
            contactFormMsg.text('We are Sorry! Site is having an issue at this moment, Pleae do Call us...');
            contactFormMsg.show();
        }).always(function () {
            contactFormSub.prop('disabled', false);
        });
    });

    console.log('init finished...');
});
