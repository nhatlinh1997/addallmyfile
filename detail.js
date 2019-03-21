document.addEventListener('DOMContentLoaded',function(){
    var queryDict = {}
    location.search.substr(1).split("&").forEach(function (item)
    {
        queryDict[item.split("=")[0]] = item.split("=")[1]
    })
    let id = queryDict.id;
    initDetail(id);
});

const initDetail = function (id){
    var e;
    (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function (resp) {
        if (e.readyState === XMLHttpRequest.DONE) {
            if (e.status === 200) {
                const r = JSON.parse(resp.srcElement.response);
                const product = r[0];
                let div = `
                <div class="container Detail-content--Two--container">
                    <div class="row Detail-content--Two--container--row">
                        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 Detail-content--Two--container--displaycolOne">
                            <div class="Detail-content--Two--container--displaycolOne--rwoOneimg"><img src="${product.img}" width="437px" height="360px" /></div>
                            <div class="Detail-content--Two--container--displaycolOne--rwoTwoimg"><img src="img/Green Shop/PSD/spx2/spx2-1.png" height="77px" width="77px" /><img src="img/Green Shop/PSD/spx2/spx2-5.png" height="77px" width="77px" /><img src="img/Green Shop/PSD/spx2/spx2-7.png" height="77px" width="77px" /><img src="img/Green Shop/PSD/spx2/spx2-12.png"
                                    height="77px" width="77px" /><img src="img/Green Shop/PSD/spx2/spx2-14.png" height="77px" width="77px" /></div>
                        </div>
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 Detail-content--Two--container--displaycolTwo">
                            <p class="Detail-content--Two--container--displaycolTwo__p1">${product.name}</p>
                            <div class="Detail-content--Two--container--displaycolTwo--star"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></div>
                            <div
                                class="Detail-content--Two--container--displaycolTwo--rate">
                                <p class="Detail-content--Two--container--displaycolTwo--rate__p1">${product.price} đ</p>
                                <p class="Detail-content--Two--container--displaycolTwo--rate__p2">${product.promotion} đ</p>
                        </div>
                        <hr class="Detail-content--Two--container--displaycolTwo__hr" />
                        <p class="Detail-content--Two--container--displaycolTwo__p2">${product.describe}</p>
                        <hr class="Detail-content--Two--container--displaycolTwo__hr" />
                        <div class="Detail-content--Two--container--displaycolTwo--Three">
                            <p class="Detail-content--Two--container--displaycolTwo--Three__p">Số lượng</p>
                            <div class="Detail-content--Two--container--displaycolTwo--Three--One">-</div>
                            <div class="Detail-content--Two--container--displaycolTwo--Three--Two">1</div>
                            <div class="Detail-content--Two--container--displaycolTwo--Three--Three">+</div>
                        </div>
                        <hr class="Detail-content--Two--container--displaycolTwo__hr" />
                        <div class="Detail-content--Two--container--displaycolTwo--Four">
                            <p data-id="${product.id}" onclick="addToCart(this)" class="Detail-content--Two--container--displaycolTwo--Four__p">mua ngay</p><i class="fa fa-search" aria-hidden="true"></i><i class="fa fa-heart" aria-hidden="true"></i></div><img src="img/Green Shop/PSD/support1_detail.png" alt="abc" />
                        </div>
                    </div>
                 </div>
                `;
            document.getElementsByClassName('Detail-content--Two')[0].innerHTML = div;
           }
        }   
    }   
    e.open('GET','http://localhost:3000/product?id='+id,true);
    e.send(null);
}
function addToCart(btn) {
    let id = btn.getAttribute('data-id');
    console.log(id);
    window.location='file:///C:/Users/LINH/Desktop/GAME%20NOT%20EZ/baggoods.html?id=' + id;
}
