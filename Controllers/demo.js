

// params callback là 1 function 
function tinhTien (callback){
    console.log("1+2=3");
    callback();
}

function alert(){
    console.log("DONE");
}

// c1
tinhTien(alert);
// c2 
tinhTien(function(){
    console.log("DONE C2");
});

// bất đồng bộ

function getUser(callback){
    let user="";
    // làm giả api
    setTimeout(function(){
        user = "Thong";
        callback(user);
    },5000);
}
getUser(function(user){
    console.log(user);
});
// gq bat dong bo = promise
function promiseA(){
return new Promise(function (resolve,reject){
    setTimeout(function(){
        // thanh cong gọi resolve
        resolve('hello');
        // that bai goi reject
        // reject('error');
    },2000);
});
}

function promiseB(text){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            // thanh cong gọi resolve
            resolve(text + 'cybersoft');
            // that bai goi reject
            // reject('error');
        },2000);
    });
}

promiseA().then(function (result){
    return promiseB(result);
}).then(function(result){
    console.log(result);
})

function layDanhSachNguoiDung1(){
    return new Promise(function(resolve,reject) {
        const request = new XMLHttpRequest();
        request.open("GET", "https://5f1ec6f557e3290016863a86.mockapi.io/api/v1/nguoidung")
        request.send();

        request.onreadystatechange = function (){
            if(this.readyState === 4 & this.status == 200){
                resolve(request.response);
            }
        }
    })
}

layDanhSachNguoiDung1().then(function(result){
    console.log(result);
})

// tinh dien tich tam giac 
function cong(a,b,callback){
    setTimeout(function(){
        callback(a+b);
    },1000)
}
function nhan(a,b,callback){
    setTimeout(function(){
        callback(a*b);
    },1000)
}
function chia(a,b,callback){
    setTimeout(function(){
        callback(a/b);
    },1000)
}
function tinhDienTich(a,b,h,callback){
    cong(a,b,function(result1){
        nhan(result1,h,function(result2){
            chia(result2,2,function(result3){
                callback(result3);
            })
        })
    })
}
 tinhDienTich(5,3,6, function(result){
     console.log("Dien tich callback", result);
 });

//  tinh dien tich dùng promise
function congPromise(a,b){
    return new Promise(function(resolve,reject){
        resolve(a+b);
    })
}
function nhanPromise(a,b){
    return new Promise(function(resolve,reject){
        resolve(a*b);
    })
}
function chiaPromise(a,b){
    return new Promise(function(resolve,reject){
        resolve(a/b);
    })
}

function tinhDienTichPromis(a,b,h){
    return congPromise(a,b).then(function(result1){
        return nhanPromise(result1,h);
    }).then(function(result2){
        return chiaPromise(result2,2);

    }).then(function(result3){
        return result3;
    })
}

tinhDienTichPromis(4,3,7).then(function(result){
    console.log(result);
})