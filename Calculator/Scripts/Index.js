var Index = function (e) {
    this.bindEvents();
};
Index.prototype = {
    bindEvents: function () {
        $('#btnCalculate').on('click', $.proxy(this.calculateClick, this));
        
    },
    calculateClick: function (e) {
        e.preventDefault();
        if ($('#form-calculator').valid()) {
            $.ajax({
                type: "POST",
                url: '/api/Calculator',
                data: { Value1: $("#value1").val(), Value2: $("#value2").val(), Value3: $("#value3").val(), Value4: $("#value4").val() },
                success: function (result) {
                    if (result.Status === "Success") {
                        $('#alert-success').html("THE RESULT IS: " + result.Value);
                        $('#alert-error').html("");
                        home.clearFields();
                    } else {
                        $('#alert-error').html(result.Status + ": " + result.Value);
                        $('#alert-success').html("");
                    }
                    
                },
                error: function (request, status, error) {
                    $('#alert').html("Error: " + request.responseJSON.ExceptionMessage);
                }
            });
        }
    },
    clearFields: function() {
        $("#value1").val("");
        $("#value2").val("");
        $("#value3").val("");
        $("#value4").val("");
    }
};
var home = new Index();
