//import DomUtils from './domUtils';
export default {
    POST:function(url,params,callback){

        const reqParams = Object.assign({},params);
        //DomUtils.appendLoading();
        let req = this.createXMLHttpRequest();
        req.responseType='json';
        req.open('POST', url, true);
        req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        req.onreadystatechange = this.processResponse.bind(req,callback,reqParams);
        req.send(this.getParams(reqParams));
	
    },
    GET:function(url,params,callback){

        const reqParams = Object.assign({},params);
       // DomUtils.appendLoading();
        let req = this.createXMLHttpRequest();
    	req.open('GET', url+'?'+this.getParams(reqParams), true);
    	req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    	req.onreadystatechange = this.processResponse.bind(req,callback,reqParams);
    	req.send(null);
	
    },
    PUT:function(url,params,callback){

       // DomUtils.appendLoading();
        let req = this.createXMLHttpRequest();
    	req.open('PUT', url, true);
    	req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    	req.onreadystatechange = this.processResponse.bind(req,callback,Object.assign({},params));
    	req.send(this.getParams(params));

    },
    DELETE:function(url,params,callback){

       // DomUtils.appendLoading();
        let req = this.createXMLHttpRequest();
    	req.open('DELETE', url, true);
    	req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    	req.onreadystatechange = this.processResponse.bind(req,callback,Object.assign({},params));
    	req.send(this.getParams(params));
	
    },
    createXMLHttpRequest:function(){

        let XMLHttpReq;
        try {

       	 		XMLHttpReq = new ActiveXObject('Msxml2.XMLHTTP');
    		
        }catch(E) {

        	try {

            	XMLHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
        	
        }catch(E) {

            	XMLHttpReq = new XMLHttpRequest();
        	
        }
            return XMLHttpReq ;
   	 	
        }
	
    },
    processResponse:function(callback,params){

		 if (this.readyState == 4 && this.status == 200) {


          return callback.call(null,this.response,params);
 
        }
    },

    getParams:function(json){

        let params = null;
        if(json){

            params='';
            for(let key in json){

                const v = json[key];
                if(v instanceof Array){

                    params += this.array2params(key,v);
				
                }else{

                    params+= key+'='+ this.replaceAllSpecialSymbol(json[key]) +'&';
				
                }
			
            }
		
        }
        return params;
	
    },
    //特殊符号处理
    replaceAllSpecialSymbol:function(params){

        params = params+'';
        //params=params.replace(/\ /g,"%20");
        params=params.replace(/\"/g,'%22');
       // params=params.replace(/\#/g,"%23");
        params=params.replace(/\%/g,'%25');
        params=params.replace(/\&/g,'%26');
        params=params.replace(/\(/g,'%28');
        params=params.replace(/\)/g,'%29');
        params=params.replace(/\+/g,'%2B');
        params=params.replace(/\,/g,'%2C');
        params=params.replace(/\//g,'%2F');
        params=params.replace(/\:/g,'%3A');
        params=params.replace(/\;/g,'%3B');
        params=params.replace(/\</g,'%3C');
        params=params.replace(/\=/g,'%3D');
        params=params.replace(/\>/g,'%3E');
        params=params.replace(/\?/g,'%3F');
        params=params.replace(/\@/g,'%40');
        params=params.replace(/\\/g,'%5C');
        params=params.replace(/\|/g,'%7C');
        return params;
    
    },
    array2params:function(key,valueArray){

        let result = '' ;
        for (let val of valueArray){

            result+=key+'='+this.replaceAllSpecialSymbol(val)+'&' ;
		
        }
        return result;
	
    }
};