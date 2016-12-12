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
            contactFormMsg.text('Thanks, We will get back you soon.');
            contactFormMsg.show();
            contactForm.trigger('reset');
            setTimeout(function () {
                contactFormMsg.text('');
                contactFormMsg.hide();
            }, 10000);
        }).fail(function (res) {
            console.log(res);
            contactFormMsg.text('Submit failed...');
            contactFormMsg.show();
        }).always(function () {
            contactFormSub.prop('disabled', false);
        });
    });

    console.log('init finished...');
});
