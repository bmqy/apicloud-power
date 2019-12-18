// ==UserScript==
// @name         Apicloud增强
// @namespace    https://www.bmqy.net/
// @version      1.2
// @description  Apicloud功能进行增强。
// @icon         data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxRUEwQzhFMzEwMTExRTRCM0M1OTdBNURFRDhEQzI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxRUEwQzhGMzEwMTExRTRCM0M1OTdBNURFRDhEQzI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFFQTBDOEMzMTAxMTFFNEIzQzU5N0E1REVEOERDMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFFQTBDOEQzMTAxMTFFNEIzQzU5N0E1REVEOERDMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5tkuXkAAAChklEQVR42mLsWsdAI8DEwDBq9KjReAALQRXMTOxCvOo8HJKszNx//v34+uPl+y+3fv35TKHRjCYqhdaaDWwsvMii//7/uXB/xqEr5b//fiPPaEYv44XacrEQzufvjz9+e8DOKiDKp8PEyGKklCMtZLnyiPPP3x9JNtpGqwli7ptPV3ZfyHry9jBEnJ9L0Ulvgoqkn7iAsafxgg0nAkmOxnefbwL9++rD+WWHbODmAsHHb/fXnwi49ngJkK0qGSAr4kCsq1mYOZUlfMT49VlZeJ6+Pfr771drzUZMbf/+/4UwnHT77r3a8fbT1TvPN/768wWn0ZKCZv7ma3g5ZYlPYWIChkAEZHz/9WbrmZj7L3diMZqLXSzUeicwooDsn78/4IkfCOBgEwKmnP///wEVA9mcbCIB5usX7jN89+UmutEaMhFgc/9vPRMHCUr8IMB8napU4JvPVxfs1QOGIdC7wMA0VM7ZezEXPRqB4QskgT4ixlwudlEFcXcg48X7U0Dy7ost15+sADKkBM2xphBGcPz8JmguIyOzu+EcVmYuIPvSg7kQwb//fkKksBj97vN1IKkk7qUo7onHXAlBk3CbvcB0DWRfebTw2bvjIMcKWWjJxgAZLz+cRbgAXoHxcEqnuN6CuOXD13tYSwlgOPBwSEHYj17vY2flZ2RkYWXhFuRWBhr179/vRQdMXn+8hB6NX74/XX/C389sFQeroAC3Eh6HAxP7mdt9x2405Xi/AZoOEQQm6h3nkuHmorgaVs6xCXArAxMTsKBAM/E/w/+/f3/8+PXu0/fHkJCVFrYGKvv//++P3x8+fL375+93fLnx779fb8GBTgwAZtfRCmzU6MFoNECAAQBgEv+dbhtgEgAAAABJRU5ErkJggg==
// @author       bmqy
// @match        *.apicloud.com/*
// @require      https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @require      https://cdn.bootcss.com/js-cookie/2.2.1/js.cookie.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle('#apicloudPowerTips{margin:10px 0;}#apicloudPowerTips span{color:red;}');
    const ApicloudPower = {
        init: function(){
            ApicloudPower._bindLocationCheck();
            ApicloudPower._getCurAppPKG();
            //ApicloudPower._bindPackType();
            ApicloudPower._bindBtnPack();
            //ApicloudPower._addBtnSetVerIos();
            //console.log(GM_getValue('ApicloudPowerStore'));
        },
        rendTimer: null,
        curApp: {},
        localstoreKey: function(){
            return 'ApicloudPowerStore'+ ApicloudPower._getCurAppId();
        },
        localstore: function(){
            return GM_getValue(ApicloudPower.localstoreKey) ? GM_getValue(ApicloudPower.localstoreKey) :{}
        },
        curPlatform: 0,
        curPackType: 0,
        aPlatform: ['未选择', 'IOS', 'Android', '双版'],
        aPackType: ['测试', '正式'],
        _api: {
            a: '//www.apicloud.com/getAllAppByUser',
            b: '//www.apicloud.com/getPKG',
            c: '//www.apicloud.com/getAppCat?appId=A6018892487029'
        },
        _bindLocationCheck: function(){
            setInterval(function(){
                ApicloudPower.localstore.location = (GM_getValue(ApicloudPower.localstoreKey) && GM_getValue(ApicloudPower.localstoreKey).location) ? GM_getValue(ApicloudPower.localstoreKey).location :'';
                let location = window.location.href;
                if(ApicloudPower.localstore.location != location){
                    //console.log(ApicloudPower.localstore, 'updateStrore local: '+ location);
                    ApicloudPower.localstore.location = location;
                    GM_setValue(ApicloudPower.localstoreKey, ApicloudPower.localstore);
                    ApicloudPower._bindPageRended();
                }
            }, 500);
        },
        _bindPageRended:function(){
            let rended = true;
            $('.mainWrap').on('DOMNodeInserted',function(){
                rended = false;
                if(!ApicloudPower.rendTimer){
                    ApicloudPower.rendTimer = setTimeout(function(){
                        rended = true;
                        if(rended){
                            ApicloudPower.init();
                            clearTimeout(ApicloudPower.rendTimer);
                            ApicloudPower.rendTimer = null;
                        }
                    }, 500);
                }
            });
        },
        _getCurAppId: function(){
            this.curApp.id = Cookies.get('curAppId') ? Cookies.get('curAppId') : '';
            return this.curApp.id;
        },
        _getAllApp: function(){

        },
        _getCurAppPKG: function(){
            let appid = ApicloudPower._getCurAppId();
            if(appid == ''){
                return false;
            }
            $.ajax({
                url: ApicloudPower._api.b,
                type: 'get',
                data: {
                    appId: appid
                },
                success: function(res){
                    ApicloudPower.curApp = res.body;
                    ApicloudPower._bindPlatformCheck();
                },
                error: function(err){
                    console.log(err);
                }
            });
        },
        _getSmartVerIos: function(){
            return (GM_getValue(ApicloudPower.localstoreKey) && GM_getValue(ApicloudPower.localstoreKey).pkgVerIos) ? GM_getValue(ApicloudPower.localstoreKey).pkgVerIos: ApicloudPower.curApp.pkgVer;
        },
        _getSmartVerAnd: function(){
            return (GM_getValue(ApicloudPower.localstoreKey) && GM_getValue(ApicloudPower.localstoreKey).pkgVerAnd) ? GM_getValue(ApicloudPower.localstoreKey).pkgVerAnd: ApicloudPower.curApp.pkgVer;
        },
        _smartVer: function(){
            if(ApicloudPower.curPlatform == 1){
                return ApicloudPower._getSmartVerIos();
            } else if(ApicloudPower.curPlatform == 2) {
                return ApicloudPower._getSmartVerAnd();
            } else {
                return ApicloudPower.curApp.pkgVer;
            }
        },
        _fixVerIosCode: function(){
            if(ApicloudPower.curApp.buildVersion && (ApicloudPower.curPlatform==1 || ApicloudPower.curPlatform==3)){
                let arr = ApicloudPower.curApp.buildVersion.split('.');
                for(let i=0; i<arr.length; i++){
                    if(i == arr.length-1){
                        arr[i]++;
                        if(arr[i] > 99){
                            arr[i-1]++;
                        }
                        if(arr[i-1] > 99){
                            arr[i-2]++;
                        }
                        if(arr[i-1] > 99){
                            arr[i-1] = 0;
                        }
                        if(arr[i] > 99){
                            arr[i] = 0;
                        }
                    }
                }
                return arr.join('.');
            } else {
                return ApicloudPower.curApp.buildVersion;
            }
        },
        _fixVerAndCode: function(){
            if(ApicloudPower.curApp.verCode && ApicloudPower.curPlatform == 1){
                return ApicloudPower.curApp.verCode - 1;
            } else {
                return ApicloudPower.curApp.verCode;
            }
        },
        _setSmartVer: function(){
            let $ver = $('#ver-area');
            let $ver1 = $ver.find('input[name=version1]');
            let $ver2 = $ver.find('input[name=version2]');
            let $ver3 = $ver.find('input[name=version3]');

            let arr = [];
            arr.push($ver1.val(), $ver2.val(), $ver3.val());

            ApicloudPower.localstore.pkgVerAnd = ApicloudPower.curApp.pkgVer;
            if(ApicloudPower.curPlatform == 1){
                ApicloudPower.localstore.pkgVerIos = arr.join('.');
            } else if(ApicloudPower.curPlatform == 2){
                ApicloudPower.localstore.pkgVerAnd = arr.join('.');
            } else {
                ApicloudPower.localstore.pkgVerIos = ApicloudPower.curApp.pkgVer;
            }
            //console.log(ApicloudPower.localstore, 'updateStrore change:'+ ApicloudPower.localstore.pkgVerAnd);
            GM_setValue(ApicloudPower.localstoreKey, ApicloudPower.localstore);
        },
        _buildVerPower: function(){
            let $ver = $('#ver-area');
            let $ver1 = $ver.find('input[name=version1]');
            let $ver2 = $ver.find('input[name=version2]');
            let $ver3 = $ver.find('input[name=version3]');
            let $verIosCode = $ver.find('#ios-ver-code');
            let $verAndCode = $ver.find('#and-ver-code');

            let arr = ApicloudPower._smartVer().split('.');
            $ver1.val(arr[0]);
            $ver2.val(arr[1]);
            $ver3.val(arr[2]);
            $verIosCode.val(ApicloudPower._fixVerIosCode());
            $verAndCode.val(ApicloudPower._fixVerAndCode());
        },
        _showTips: function(){
            var $wrap = $('#pack-btn .col-sm-10');
            $('#apicloudPowerTips').remove();
            let msg = '【'+ GM_info.script.name +'】提示您正在编译：<span>'+ ApicloudPower.aPlatform[ApicloudPower.curPlatform];
            /*if(ApicloudPower.curPlatform > 0){
                msg += ApicloudPower.aPackType[ApicloudPower.curPackType];
            }*/
            msg += '版本</span>';
            var $tips = $('<div id="apicloudPowerTips"></div>').html(msg);
            $wrap.append($tips);
        },
        _bindPlatformCheck: function(){
            let $platform = $('#platform-area');
            let $platformIos = $platform.find('#iosCheck');
            let $platformAnd = $platform.find('#androidCheck');
            $platform.on('click', function(){
                if($platformIos.attr('checked') && !$platformAnd.attr('checked')){
                    ApicloudPower.curPlatform = 1;
                } else if($platformAnd.attr('checked') && !$platformIos.attr('checked')){
                    ApicloudPower.curPlatform = 2;
                } else if($platformAnd.attr('checked') && $platformIos.attr('checked')){
                    ApicloudPower.curPlatform = 3;
                } else {
                    ApicloudPower.curPlatform = 0;
                }
                ApicloudPower._buildVerPower();
                ApicloudPower._showTips();
            });
        },
        _bindPackType: function(){
            let $packType = $('#pack-type');
            let $packTypeTest = $('#testPackType');
            let $packTypeOffic = $('#officPackType');
            $packType.on('click', function(){
                ApicloudPower.curPackType = ($packTypeOffic.is(':checked') && !$packTypeTest.is(':checked')) ? 1 : 0 ;
                console.log($packTypeTest.is(':checked'), $packTypeOffic.is(':checked'));
                ApicloudPower._showTips();
            });
        },
        _bindBtnPack: function(){
            let $btnPack = $('#pack-btn button');
            $btnPack.off("click").on('click', function(){
                ApicloudPower._setSmartVer();
            });
        }
    }
    ApicloudPower.init();
})();
