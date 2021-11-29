var isNull = function(arg){
    if(arg == null || arg.replace(/ /gi,"") == ""){
        return true;
    }
    return false;
};
var isEmpty = function(arg){
    if(arg == null || arg.replace(/ /gi,"") == ""){
        return true;
    }
    return false;
};
var containsChars = function(arg,chars){
    var inx = 0;
    var argLen = arg.length;
    for(;inx < argLen;inx++){
        if(chars.indexOf(arg.charAt(inx)) != -1){
            return true;
        }
    }
    return false;
};
var containsCharsOnly = function(arg,chars){
    var inx = 0;
    var argLen = arg.length;
    for(;inx < argLen;inx++){
        if(chars.indexOf(arg.charAt(inx)) == -1){
            return false;
        }
    }
    return true;
};
var isAlphabet = function(arg){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(arg,chars);
};
var isUpperCase = function(arg){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(arg,chars);
};
var isLowerCase = function(arg){
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(arg,chars);
};
var isNumber = function(arg){
    var chars = "0123456789";
    return containsCharsOnly(arg,chars);
};
var isChrNumber = function(arg){
    var chars = "+-0123456789";
    return containsCharsOnly(arg,chars);
};
var isAlphaNum = function(arg){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(arg,chars);
};
var isNumDash = function(arg){
    var chars = "-0123456789";
    return containsCharsOnly(arg,chars);
};
var isNumComma = function(arg){
    var chars = ",0123456789";
    return containsCharsOnly(arg,chars);
};
var isNumPeriod = function(arg){
    var chars = ".0123456789";
    return containsCharsOnly(arg,chars);
};
var getNumberOnly = function(obj){
    var val = new String(obj);
    var regex = /[^0-9]/g;
    return val.replace(regex,'');
};
var removeComma = function(arg){
    return arg.replace(/,/gi,"");
};
/**
 * 소수점 자릿수 체크 arg 체크 데이터 posit 소수점 자릿수
 */
var isVaildDecimalPnt = function(arg,posit){
    var i = 0;
    var flag = true;
    if(arg != ""){
        flag = isNumPeriod(arg);
        if(!flag){
            alert("숫자만 입력하세요");
            return false;
        }
    }else{
        alert("숫자를 입력하세요");
        return false;
    }
    /** . 포함되어 있다면 검사 */
    if(arg.indexOf(".") != -1){
        var arg_length = arg.substring(arg.indexOf(".") + 1);
        if(arg_length.length > Number(posit)){
            alert("소수점 " + posit + "자리까지만 입력하세요!");
            return false;
        }
    }
    return true;
};
var isValidFormat = function(arg,format){
    if(arg.search(format) != -1){
        return true;
    }
    return false;
};
var isValidEmail = function(arg){
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(arg,format);
};
var validateEmail = function(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};
var isValidPhone = function(arg){
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(arg,format);
};
var hasCheckedRadio = function(input){
    var inx = 0;
    var inputLen = input.length;
    if(inputLen > 1){
        for(;inx < inputLen;inx++){
            if(input[inx].checked){
                return true;
            }
        }
    }else{
        if(input.checked){
            return true;
        }
    }
    return false;
};
var hasCheckedBox = function(input){
    return hasCheckedRadio(input);
};
var getByteLength = function(arg){
    var inx = 0;
    var argLen = arg.length;
    var byteLen = 0;
    for(;inx < argLen;inx++){
        var oneChar = escape(arg.charAt(inx));
        if(oneChar.length == 1){
            byteLen++;
        }else if(oneChar.indexOf("%u") != -1){
            byteLen += 2;
        }else if(oneChar.indexOf("%") != -1){
            byteLen += oneChar.length / 3;
        }
    }
    return byteLength;
};
var charByteSize = function(ch){
    if(ch == null || ch.length == 0){
        return 0;
    }
    var charCode = ch.charCodeAt(0);
    if(charCode <= 0x00007F){
        return 1;
    }else if(charCode <= 0x0007FF){
        return 2;
    }else if(charCode <= 0x00FFFF){
        return 3;
    }else{
        return 4;
    }
};
var stringByteSize = function(str){
    var size = 0;
    var i = 0;
    var strLen = str.length;
    if(str == null || strLen == 0){
        return 0;
    }
    for(;i < strLen;i++){
        size += charByteSize(str.charAt(i));
    }
    return size;
};
var chkPaswd = function(ObjUserID,ObjUserPassWord,objUserPassWordRe){
    if(ObjUserPassWord.length < 6 || ObjUserPassWord.length > 15){
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~15자리로 입력해주세요.");
        return false;
    }
    if(ObjUserID.indexOf(ObjUserPassWord) > -1){
        alert("비밀번호에 아이디를 사용할 수 없습니다.");
        return false;
    }
    if(ObjUserPassWord != objUserPassWordRe){
        alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
        return false;
    }
    /* if(!ObjUserPassWord.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) */
    if(!ObjUserPassWord.match(/([a-zA-Z0-9])/)){
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~15자리로 입력해주세요.");
        return false;
    }
    /** 비밀번호 동일문자3, 연속된 문자열 확인 */
    var sameChar = 0;
    var SamePass_1 = 0;
    var SamePass_2 = 0;
    var chr_pass_0;
    var chr_pass_1;
    var chr_pass_2;
    var i = 0;
    var ObjUserPassWord_len = ObjUserPassWord.length;
    console.log("ObjUserPassWord_len1====",chr_pass_0,chr_pass_1 );
    for(;i < ObjUserPassWord_len;i++){
        chr_pass_0 = ObjUserPassWord.charAt(i);
        chr_pass_1 = ObjUserPassWord.charAt(i + 1);
        
        console.log("ObjUserPassWord_len2====",chr_pass_0,chr_pass_1 );
        
        if(chr_pass_0 == chr_pass_1){
            sameChar = sameChar + 1;
        }
        chr_pass_2 = ObjUserPassWord.charAt(i + 2);
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1){
            SamePass_1 = SamePass_1 + 1;
        }
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1){
            SamePass_2 = SamePass_2 + 1;
        }
    }
    if(sameChar > 1){
        alert("동일문자를 3번 이상 사용할 수 없습니다.");
        return false;
    }
    if(SamePass_1 > 1 || SamePass_2 > 1){
        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
        return false;
    }
    return true;
};
var chkPaswd2 = function(ObjUserPassWord,objUserPassWordRe){
    if(ObjUserPassWord.length < 6 || ObjUserPassWord.length > 15){
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~15자리로 입력해주세요.");
        return false;
    }
    if(ObjUserPassWord != objUserPassWordRe){
        alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
        return false;
    }
    if(!ObjUserPassWord.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~15자리로 입력해주세요.");
        return false;
    }
    var SamePass_0 = 0;
    var SamePass_1 = 0;
    var SamePass_2 = 0;
    var chr_pass_0;
    var chr_pass_1;
    var chr_pass_2;
    for(var i = 0;i < ObjUserPassWord.length;i++){
        chr_pass_0 = ObjUserPassWord.charAt(i);
        chr_pass_1 = ObjUserPassWord.charAt(i + 1);
        if(chr_pass_0 == chr_pass_1){
            SamePass_0 = SamePass_0 + 1;
        }
        chr_pass_2 = ObjUserPassWord.charAt(i + 2);
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1){
            SamePass_1 = SamePass_1 + 1;
        }
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1){
            SamePass_2 = SamePass_2 + 1;
        }
    }
    if(SamePass_0 > 1){
        alert("동일문자를 3번 이상 사용할 수 없습니다.");
        return false;
    }
    if(SamePass_1 > 1 || SamePass_2 > 1){
        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
        return false;
    }
    return true;
};
var timeCountDown = function(timeToExpiration){
    remain = timeToExpiration - 1;
    if(remain >= -1){
        day = Math.floor(timeToExpiration / (3600 * 24));
        mod = timeToExpiration % (24 * 3600);
        hour = Math.floor(mod / 3600);
        mod = mod % 3600;
        min = Math.floor(mod / 60);
        sec = mod % 60;
        count = " " + min + "분 " + sec + "초";
        $("#timer").text(count);
        if(remain == -1){
            alert("승인유효시간이 초과되었습니다!");
            $("#timer").text(" 0분 0초");
            $("#timer").hide();
            $("#dvBtnAuth").hide();
            $("#dvBtnReAuth").show();
            SMS_MSG_CODE = "1";
        }else{
            setTimeout("timeCountDown(remain)",1000);
        }
    }
};
var getCloseWindowState = function(){
    var retVal = "";
    if(self.screenTop > 9000){
        retVal = "1";
    }else if(document.readyState == "complete"){
        retVal = "2";
    }else if(document.readyState == "loading"){
        retVal = "3";
    }else{
        retVal = "4";
    }
    return retVal;
};
/** Java StringBuffer 역활 */
StringBuffer = function(){
    this.buffer = new Array();
};
StringBuffer.prototype.append = function(str){
    this.buffer[this.buffer.length] = str;
};
StringBuffer.prototype.ToString = function(){
    return this.buffer.join("");
};
var callAjax = function(methodType,asyncType,urlPath,dataReceiveType,sendContentType,sendData,errorFunc,successFunc){
    try{
        $.ajax({
            type : methodType,
            url : urlPath,
            async : asyncType,
            timeout : "5000", // 150000
            cache : false,
            contentType : "application/x-www-form-urlencoded; charset=utf-8",
            dataType : dataReceiveType,
            data : (sendData != "") ? ((sendContentType == "json" || sendContentType == "application/json") ? JSON.parse(sendData) : sendData) : "",
            error : errorFunc,
            success : successFunc
        });
    }catch(e){
        alert("에러코드 : " + e.code + "\r\n 에러내용 : " + e.message);
    }
};
var jsonAjax = function(methodType,asyncType,urlPath,dataReceiveType,sendContentType,sendData,successFunc){
    try{
        $.ajax({
            type : methodType,
            url : urlPath,
            async : asyncType,
            timeout : "5000", // 150000
            cache : false,
            contentType : "application/x-www-form-urlencoded; charset=utf-8",
            dataType : dataReceiveType,
            data : (sendData != "") ? ((sendContentType == "json" || sendContentType == "application/json") ? JSON.parse(sendData) : sendData) : "",
            error : function(error){
                alert("error : " + error + " \n 요청처리를 실패하였습니다.");
            },
            success : successFunc
        });
    }catch(e){
        alert("에러코드 : " + e.code + "\r\n 에러내용 : " + e.message);
    }
};
var fileChk = function(fileNm,fielType,fileSize){
    var argFileType = new Array("jpg|jpeg","png|gif|jpg|jpeg","txt|pdf|hwp|doc|docx|xls|xlsx|ppt|pptx","png|gif|jpg|jpeg|txt|pdf|hwp|doc|docx|xls|xlsx|ppt|pptx");
    var fileDefaultSize = 1024 * 1024;
    var IMG_FORMAT = "\.(" + argFileType[parseInt(fielType)] + ")$";
    var fielSize = Math.round(fileNm.fileSize);
    if(!(new RegExp(IMG_FORMAT,"i")).test(fileNm)){
        alert("파일확장자를 확인해 주세요");
        return false;
    }else if(fielSize > (fileDefaultSize * parseInt(fileSize))){
        alert("첨부파일 사이즈는 " + fileSize + "MB 이내로 등록 가능합니다.");
        return false;
    }
};
var commify = function(n){
    var reg = /(^[+-]?\d+)(\d{3})/;
    n += '';
    while(reg.test(n)){
        n = n.replace(reg,'$1' + ',' + '$2');
    }
    return n;
};
/**
 * 쿠키설정
 */
var setCoki = function(arg,val){
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 365); // 365일
    document.cookie = arg + "=" + escape(val) + "; path=/; expires=" + expdate.toGMTString();
};
/**
 * 쿠키추출
 */
var getCokiVal = function(arg){
    var coki = "";
    var search = arg + "=";
    if(document.cookie.length > 0){ // 쿠키가 설정되어 있다면
        offset = document.cookie.indexOf(search);
        /** 쿠키가 존재하면 * */
        if(offset != -1){
            offset += search.length;
            end = document.cookie.indexOf(";",offset); // set index of
            // beginning of
            // value
            if(end == -1){ // 쿠키 값의 마지막 위치 인덱스 번호 설정
                end = document.cookie.length;
            }
            coki = unescape(document.cookie.substring(offset,end));
        }
    }
    coki = (coki != "" && (coki.replace(/(^\s*)|(\s*$)/gi,"") != "")) ? coki : "";
    return coki;
};
var fileSizeCalc = function(fielSize){
    var tmpFileSize = 0;
    if(parseInt(fielSize) > (1024 * 1024)){
        tmpFileSize = Math.round((parseInt(fielSize) / (1024 * 1024)),1) + "MB";
    }else if(parseInt(fielSize) > 1024){
        tmpFileSize = Math.round((parseInt(fielSize) / 1024),1) + "KB";
    }else{
        tmpFileSize = parseInt(fielSize) + "Byte";
    }
    return tmpFileSize;
};
/**
 * 파일 다운로드
 * 
 * @param arg_sn
 * @param arg_ty
 * @param arg_gbn
 */
var fn_fileDown = function(arg_sn,arg_ty,arg_gbn){
    window.open("/cmmn/fileDown.do?sn=" + arg_sn + "&cntnts_ty=" + arg_ty + "&cntnts_gbn=" + arg_gbn);
};
/**
 * 비밀번호 체크 이병운 추가
 * 
 * @param ObjUserPassWord
 * @param objUserPassWordRe 생성자 : 이병운 생성일자 : 2018-01-05
 */
var gfn_chkPaswd_new = function(ObjUserPassWord,objUserPassWordRe){

    var tk = "`~!@#$%^&*()_+-=[]{};:\'\"\\<>?,./";
    var val_num ="0123456789"; 
    var val_Low ="abcdefghijklmnopqrstuvwxyz";
    var val_UPP ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var val_con0 ="~!@#$%^&*()_+";
    var val_con1 = "`1234567890-=";
    var val_con2 ="QWERTYUIOP{}|";
    var val_con3 ="ASDFGHJKL:\"";
    var val_con4 ="ZXCVBNM<>?"; 
    var val_con5 ="qwertyuiop[]\\"; 
    var val_con6 ="asdfghjkl\;\'";  
    var val_con7 ="zxcvbnm,./"; 

    var ifPw = new Array(
            val_num
            , val_Low
            , val_UPP
            , val_con0
            , val_con1
            , val_con2
            , val_con3
            , val_con4
            , val_con5
            , val_con6
            , val_con7
        );
    
    // 비밀번호는 문자, 숫자, 특수문자의 조합으로10 자리 이상
    if(ObjUserPassWord.length < 10){
        return "04";
    }
    // 입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다
    if(ObjUserPassWord != objUserPassWordRe){
        return "06";
    }
    // 비밀번호는 문자, 숫자, 특수문자의 조합으로 10자리 이상
    if(!ObjUserPassWord.match(/([a-zA-Z0-9])/)){
        return "04";
    }else if(!ObjUserPassWord.match(/([a-z])/))// 소문자
    {
        return "04";
    }else if(!ObjUserPassWord.match(/([A-Z])/)) // 대문자
    {
        return "04";
    }else if(!ObjUserPassWord.match(/([0-9])/)) // 숫자
    {
        return "04";
    }else if(!ObjUserPassWord.match(/([!@#$%^&+=])/)) // 특수 문자
    {
        return "04";
    }
    var SamePass_0 = 0;
    var SamePass_1 = 0;
    var SamePass_2 = 0;
    var chr_pass_0;
    var chr_pass_1;
    var chr_pass_2;
    var i = 0
    var objLenth = ObjUserPassWord.length;

    var pw1 = ObjUserPassWord;
    // 같거나 연속된 문자 3자리
    for (var i =0 ; i < pw1.length - 2 ; i++ ){
        var sss= pw1.charAt(i)+pw1.charAt(i+1) + pw1.charAt(i+2);
        if ( ( pw1.charAt(i) == pw1.charAt(i +1 ) ) && ( pw1.charAt(i) == pw1.charAt(i + 2) ) ) {
            return "07";
        }
        for ( var j = 0 ; j < ifPw.length ; j ++){
            if ( ifPw[j].indexOf(sss) != -1 ){
                return "08";
            }
        }
        
    };
    return "00";
};
/**
 * 체크박스 input id 로 체크 값 가져오기
 * 
 * @param ckId 체크박스 input id 생성자 : 이병운 생성일자 : 2018-01-05
 */
var gfn_checkedBoxTf = function(ckId){
    var returnTf = false;
    if($("#" + ckId).is(":checked")){
        returnTf = true;
    }
    return returnTf;
};
/**
 * 체크박스 y / n 으로 설정할때 사용
 * 
 * @param id checkbox id
 * @param tf checkbox 에 true false 설정 생성자 : 이병운 생성일자 : 2018-01-05
 */
var gfn_checkedTrueFalse = function(id,tf){
    $("#" + id).prop("checked",tf);
}
/**
 * 페이지 이동
 * 
 * @param arg
 */
var fn_move = function(arg){
    $('#moveForm').attr("action",arg);
    $('#moveForm').submit();
};
/**
 * space 체크
 */
var fn_checkSpace = function(str){
    if(str.search(/\s/) != -1){
        return true;
    }else{
        return false;
    }
};
/**
 * 이메일 유효성 정규식검사
 */
var fn_checkEmail = function(str,id){
    // 이메일 유효성 정규식검사
    var regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if(!regExp.test(str)){
        $("#" + id).focus();
        return false;
    }else if(!str.match(regExp)){
        $("#" + id).focus();
        return false;
    }else{
        return true;
    }
};
/**
 * 이메일 유효성 정규식검사
 */
var fn_winPop = function(url,id,height,width){
    var popupX = (window.screen.width / 2) - (200 / 2) - 300;
    var popupY = (window.screen.height / 2) - (300 / 2) - 200;
    window.open(url,id,'height=' + height + ', width=' + width + ',  resizable=no, status=no, left=' + popupX + ', top=' + popupY + ', screenX=' + popupX + ', screenY= ' + popupY);
};
/**
 * Timer 인증번호 확인 카운트다운
 */
var timer;
var countdown = function(elementId,seconds,inputId,timeOutGbn){
    var element,endTime,hours,mins,msLeft,time;
    clearInterval(timer);
    function updateTimer(){
        msLeft = endTime - (+new Date);
        if(msLeft < 0){
            // 타임 아웃일때 구분값 넣기
            $("#" + inputId).val(timeOutGbn);
            // console.log('done');
        }else{
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + ('0' + mins).slice(-2) : mins) + ':' + ('0' + time.getUTCSeconds()).slice(-2);
            timer = setTimeout(updateTimer,time.getUTCMilliseconds());
        }
    }
    element = document.getElementById(elementId);
    endTime = (+new Date) + 1000 * seconds;
    updateTimer();
}
/**
 * ajaxForm 한글깨짐 인코등
 */
URI = function(str){
    rnVal = "";
    var fileNm = str.replace(/\+/g,' ');
    returnVal = decodeURIComponent(fileNm);
    return returnVal;
};
/**
 * NULL TO String return !!
 * 
 * @param {string} str
 * @returns {string} str
 * @description : NULL TO String return
 */
var gf_getNullToString = function(str){
    if(str == null || str == "undefined" || str == "null" || str == "NULL" || str == "")
        return "";
    else
        return str;
};
/**
 * NULL TO Number return !!
 * 
 * @param {string} str
 * @returns {string} str
 * @description : NULL TO String return
 */
var gf_getNullToNumber = function(str){
    if(isNaN(str) || str == '0' || str == null || str == "undefined" || str == "null" || str == "NULL" || str == "")
        return 0;
    else
        return commafy(str);
};
/**
 * 숫자를 컴마 적용시켜 반환합니다.
 * 
 * @returns {string} str
 * @description : NULL TO String return
 */
var commafy = function(n){
    var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
    n += ''; // 숫자를 문자열로 변환
    while(reg.test(n))
        n = n.replace(reg,'$1' + ',' + '$2');
    return n;
};

/**
 * 특수문자 제거 
 * 
 * @param obj
 * @param arg1
 * @return
 */
var specialCharRemove = function(obj) {
    var val = obj.value;
    var pattern = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi;   // 특수문자 제거
    //var pattern = /[^(0-9)]/gi;   // 숫자이외는 제거
    if(pattern.test(val)){
        obj.value = val.replace(pattern,"");
    }
}

/**
 * 핸도폰 유효설검사  
 * 
 * @param obj
 * @param arg1
 * @return
 */
var isValidPhoneNew = function(arg){

    var bool = false;
    // 기존 번호에서 - 를 삭제합니다.
    var trans_num = arg.replace(/-/gi,'');
  
    // 입력값이 있을때만 실행합니다.
    if(trans_num != null && trans_num != '')
    {
        // 총 핸드폰 자리수는 11글자이거나, 10자여야 합니다.
        if(trans_num.length==11 || trans_num.length==10) 
        {   
            // 유효성 체크
            var regExp_ctn = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
            if(regExp_ctn.test(trans_num))
            {
                bool  = true;
            }
            else
            {
                bool  = false;
            }
        }
        else 
        {
            bool  = false;
        }
    }
    
    return bool;
};


/**
 * 소수점 자리 제거 및 색상변경
 * 소수점 사용제거 class 변경
 * @param arg  : 숫자 
 * @param  lenNum: 표현하고 싶은 소수점 자리수 
 * @return
 */
var bntMarkNum = function(arg, lenNum){
    arg = ToFloat(arg, lenNum);
    return arg;
};
var ToFloat = function(number, floatlen){
    number = fn_parseFloat(number).toFixed(8);

    var numbIdx = number.search(/(0+$)/);

    var testIndx = "1"
    for(var ii =1 ; ii <=floatlen; ii++){
        testIndx+="0";
    }
    
    var numSub = Math.floor(number*testIndx) / testIndx;
    var strNumberSub = fn_parseFloat(numSub).toFixed(floatlen);
    var strNumber = strNumberSub.toString(); // Number(number).toFixed(floatlen);
    
    var tmp = number + "";
    var subNum = 0;
    var number2 = 0;
    number2 = strNumber.search(/(0+$)/);
    
    
    
    if(number2 < 0 ){
        subNum = "";
    }else{
        subNum = strNumber.substring(number2,strNumber.length);
    }
    
    number = gf_getNullToNumber( strNumber.replace(/(0+$)/,""));
    number += "<span class ='decimal'>" + subNum + "</span>";
    return number;
};




/**
 * 주문현황만 사용
 * 소수점 자리 제거 및 색상변경
 * 소수점 사용제거 class 변경
 * @param arg  : 숫자 
 * @param  lenNum: 표현하고 싶은 소수점 자리수 
 * @return
 */
var bntMarkNumMy = function(arg, lenNum){
    arg = ToFloatMy(arg, lenNum);
    return arg;
};
var ToFloatMy = function(number, floatlen){
    number = fn_parseFloat(number).toFixed(8);

    var numbIdx = number.search(/(0+$)/);

    var testIndx = "1"
    for(var ii =1 ; ii <=floatlen; ii++){
        testIndx+="0";
    }
    
    var numSub = Math.floor(number*testIndx) / testIndx;
    var strNumberSub = fn_parseFloat(numSub).toFixed(floatlen);
    var strNumber = strNumberSub.toString(); // Number(number).toFixed(floatlen);
    
    var tmp = number + "";
    var subNum = 0;
    var number2 = 0;
    number2 = strNumber.search(/(0+$)/);
    if(strNumber=="0.0000" ){
            //console.log("11");
            subNum = strNumber.substring(number2,strNumber.length);
            number = "<span class ='decimal'>" + "0.0000"+ "</span>";
    }else{
        if(number2 < 0 ){
            subNum = "";
        }else{
            subNum = strNumber.substring(number2,strNumber.length);
        }
        
        number = gf_getNullToNumber(strNumber.replace(/(0+$)/,""));
        number += "<span class ='decimal'>" + subNum + "</span>";        
    }
    
    
    return number;
};

/**
 * 콤마 제거 후에 계산 
 * @param n  : 콤마 포함  
 * @return
 */
var fn_parseFloat = function(n){
    if(n == null || n == "undefined" || n == "null" || n == "NULL" || n == ""){
        return 0;
    }else{
        var str = 0;
        if(isNaN(n) == true){
            str = parseFloat(n.replace(/,/gi,""));
        }else{
            str = parseFloat(n);
        }
        
        if(isNaN(str) || str == '0' || str == null || str == "undefined" || str == "null" || str == "NULL" || str == ""){
            return 0;
        }else{
            return str;
        }
    }
};

var tradeCallAjax = function(methodType,asyncType,urlPath,dataReceiveType,sendContentType,sendData,errorFunc,successFunc){
    try{
        $.ajax({
            type : methodType,
            url : urlPath,
            async : asyncType,
            timeout : "5000", // 150000
            cache : false,
            contentType : "application/x-www-form-urlencoded; charset=utf-8",
            dataType : dataReceiveType,
            data : (sendData != "") ? ((sendContentType == "json" || sendContentType == "application/json") ? JSON.parse(sendData) : sendData) : "",
            error : errorFunc,
            success : successFunc
        });
    }catch(e){
        alert("에러코드 : " + e.code + "\r\n 에러내용 : " + e.message);
    }
};

