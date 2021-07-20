﻿      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"쿠키"},
        headers:{Authorization: "KakaoAK 983b7bfac20f212b8113aa0ba8306b75"}
      })
        .done(function( msg ) {

            console.log( msg );
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                var str = msg.documents[i].title;
                var str2 = str.substring(0,10);
	   var salep = parseInt(((msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price)*100)
	   var str3 = msg.documents[i].price.toLocaleString()
	   var str4 = msg.documents[i].sale_price.toLocaleString()	  

                 $("#subapi3 > div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                 $("#subapi3 > div").eq(i).append("<h5>"+str2+"..."+"</h3>");
                 $("#subapi3 > div").eq(i).append("<h6>"+str3+"원"+"</h6>");
                 $("#subapi3 > div").eq(i).append("<span class='saleprice'>"+str4+"</span>"+"원");

            }

        });
