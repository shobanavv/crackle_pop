var initCracklePop = function(){
    var i;
    var msg;
    var cracklePop;
    var out1 = document.getElementById("print-out1");
    var out2 = document.getElementById("print-out2");
    var out3 = document.getElementById("print-out3");
    var out4 = document.getElementById("print-out4");

    cracklePop = function(from,to,outElement) {
        var out = [];
        for(i = from; i <= to; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
               msg = "CracklePop"
            } else if(i % 5 === 0) {
                msg = "Pop";
            } else if (i % 3 === 0) {
                msg = "Crackle";
            } else {
                msg = i;
            }
           out.push(i + " ----  " + msg);
        }
        outElement.innerHTML = out.join('<br />');
    };

    cracklePop(1,25,out1);
    cracklePop(26,50,out2);
    cracklePop(51,75,out3);
    cracklePop(76,100,out4);   
    
};

window.onload = initCracklePop;