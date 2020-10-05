$(function(){

    // 브라우저 구분
			var nowUrl =  window.location.pathname; // 변수에 넣음
  			var userAgent = window.navigator.userAgent;// 브라우저 확인
    		var browser = null;
  			var version = null ;
			
            if (userAgent.indexOf("Trident/7") > -1) {
            browser = "IE11";
            } else if (userAgent.indexOf("Trident/6") > -1) {
            browser = "IE10";
            } else if (userAgent.indexOf("Trident/5") > -1) {
            browser = "IE9";
            } else if (userAgent.indexOf("Trident/4") > -1) {
            browser = "IE8";
            } else if (userAgent.indexOf("edge") > -1) {
            browser = "IEEDGE";
            } else if (userAgent.indexOf("Whale") > -1) { // 네이버 WHALE
            browser = "WHALE";
            version = userAgent.split("Whale/")[1].toString().split(" ")[0].toString();
            } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) { // 오페라
            if (userAgent.indexOf("Opera") > -1) {
            browser = "OPERA";
            version = userAgent.split("Opera/")[1].toString().split(" ")[0].toString();
            } else if (userAgent.indexOf("OPR") > -1) {
            browser = "OPERA";
            version = userAgent.split("OPR/")[1].toString().split(" ")[0].toString();
            }
            } else if (userAgent.indexOf("Firefox") > -1) { // 파이어폭스
            browser = "FIREFOX";
            version = userAgent.split("Firefox/")[1].toString().split(" ")[0].toString();
            } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1) { // 사파리
            browser = "SAFARI";
            version = userAgent.split("Safari/")[1].toString().split(" ")[0].toString();
            } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            browser = "SAMSUNG";
            version = userAgent.split("SamsungBrowser/")[1].toString().split(" ")[0].toString();
            } else if (userAgent.indexOf("Chrome") > -1) { // 크롬
            browser = "CHROME";
            version = userAgent.split("Chrome/")[1].toString().split(" ")[0].toString();
            } else {
            browser = "UNKNOWN";
            version = null;
            }
    sessionStorage.setItem("userAgent", browser); 
// 브라우저 구분 끝

    // 피씨 모바일 구분    
    var filter = "win16|win32|win64|mac";
    var device = null;
    
    if(navigator.platform){
     
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
     device = "Mobile"
    }else{
     device = "PC"
    }
    sessionStorage.setItem("디바이스",device);
    }

    // 피씨 모바일 구분 끝
      
	sessionStorage.setItem("유입리퍼럴", window.location.search);  // 유입 리퍼럴
    sessionStorage.setItem('상품명',product_name); // 상품명
    
    
    // 접속과 동시에 담기는 기본 값
    $('.btn_detail ').click(function(){
        sessionStorage.setItem('장바구니 이동', 'true')
    	sessionStorage.setItem("디노코드값", window.location.search); 
        sessionStorage.setItem('상품명',product_name)
        sessionStorage.setItem('가격', product_price)
        //     sessionStorage.setItem({'장바구니 이동':'true'},{"dino코드": window.location.search},{'상품명':product_name},{'가격':product_price})
    })
 // 장바구니 클릭시 세션 스토리지에 저장
    
    
   
    
});