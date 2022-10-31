//"use strict";
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;
        var $ = function(id) {
            return document.getElementById(id);
        };
        var calculateTotal = function(tax, sale) {
      var total = (tax / sale);
      total = total.toFixed(1);
      return total;
    };
    var processEntries = function() {
            var tax = parseFloat($("tax").value);
            var sale = parseFloat($("sale").value);

            if (isNaN(tax) || isNaN(sale)) {
                alert("Both entries must be numeric");
            } else if (tax <= 0 || sale <= 0) {
            } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
                alert(getErrorMsgTax("tax"));
                focusAndSelect("#tax");
            } else {
                $("total").value = (sale + calculateTax(sale, tax)).toFixed(2); 
               //$("total").value = calculateTotal(tax, sale);
                $("tax").focus();
            }
        };
        const calculateTax = (subtotal, taxRate) => {
            const taxAmount = subtotal * taxRate/100; 
            return taxAmount; 
        };
    window.onload = function() {
            $("calculate").onclick = processEntries;
        };

