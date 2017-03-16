function sendRequest(url, method, param = null) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() || new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open(method, url);
        xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
                if(xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
        xhr.send(param);

    });

    return promise;

}
export default sendRequest;



// @@@原始的方法 在文件里没使用没有使用
function ajax(opt = {}) {
    opt.method = opt.method.toUpperCase() || 'GET';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    let xhr = null;
    if(XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    let param = [];
    for(let key in opt.data) {
        param.push(`${key}=${opt.data[key]}`);
    }
    let postData = params.join('&');

    if(opt.method.toUpperCase() === 'GET') {
        xhr.open(opt.method, `${opt.url}?postData`, opt.async);
        xhr.send(null);
    } else if(opt.method.toUpperCase() === 'POST') {
        xhr.open(opt.method, opt.url, opt.async);
        xhr.send(postData);
    }

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
        if(xhr.readyState === 4 && xhr.status === 200) {
            opt.success(xhr.responseText);
        }
    }
}