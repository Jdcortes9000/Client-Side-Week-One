'use strict';

(function (module2) {
    c.log("main module running");
    c.log(module2.publicVar);
    module2.doPost(function(data){
    c.log(data);
    })
   
})(window.app2|| window.app2 =={})
