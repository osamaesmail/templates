"use strict";

// start initializing the data used in the website
var form={
    btn_val:'send',
    disabled:false,
    email:'',
    name:'',
    subject:'',
    message:'',
    response_msg_visible:false,
    response_msg:'',
    response_type:''
};
// end initializing the data used in the website

// start home data
var home={
    second_text_part2:''
};
// end home data

// start vue app component -----------------
var app= new Vue(
    {
        el:'#app',
        data:{
            data:this.data,
            home:this.home,
            form:this.form
        }
    }
);
// end vue app component ---------------------

// start on submitting the form -------------
$('#contact form').on('submit',function (e) {
    e.preventDefault();
    send_msg();
});
// end on submitting the form ---------------


// start methods -----------------------------------------------


// start function send message
function send_msg() {
    form.btn_val='sending...';
    form.disabled=true;

    var form_data={
        email:form.email,
        name:form.name,
        subject:form.subject,
        message:form.message
    };

    axios.post('mail.php',{
        email:form.email,
        name:form.name,
        subject:form.subject,
        message:form.message
    }).then(function (data) {
        set_succes_response();
        reset_form();

    }).catch(function (error) {
        set_error_response();
        console.log(error);
    });

}
// start function send message


// start function success response
function set_succes_response() {
    reset_form();
    form.response_msg_visible=true;
    form.response_msg=data.form.success_msg;
    form.response_type='alert-success';
}
// end function success response

// start function error response
function set_error_response() {
    form.btn_val='send';
    form.disabled=false;
    form.response_msg_visible=true;
    form.response_msg=data.form.error_msg;
    form.response_type='alert-danger';
}
// end function error response

// start function reset form
function reset_form() {
    form.btn_val='send';
    form.disabled=false;
    form.email='';
    form.name='';
    form.subject='';
    form.message='';
}
// end function reset form

// end methods -------------------------------------------------

