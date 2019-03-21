document.addEventListener("DOMContentLoaded", function (event) {
    initData();
});

const initData = function () {
    var e;
    (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function (resp) {
        if (e.readyState === XMLHttpRequest.DONE) {
            if (e.status === 200) {
                let data = JSON.parse(resp.srcElement.response);
                let divHtml = '';
                for (let baggoods of data) {
                    divHtml += `
                    <div class="card-group BagGoods_Content2--card-group--Two">
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <img src="${baggoods.img}" width="171px" height="180px" alt="" class="BagGoods_Content2--card-group--Two--card--card-body--img">
                            </div>
                        </div>
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <p class="BagGoods_Content2--card-group--Two--card--card-body__p1">${baggoods.name_of_product}</p>
                            </div>
                        </div>
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <p class="BagGoods_Content2--card-group--Two--card--card-body__p2">${baggoods.pricee}</p>
                            </div>
                        </div>
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <span class="BagGoods_Content2--card-group--Two--card--card-body--span">
                                    <p class="BagGoods_Content2--card-group--Two--card--card-body__p3">${baggoods.number}</p>
                                </span>
                            </div>
                        </div>
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <p class="BagGoods_Content2--card-group--Two--card--card-body__p4">${baggoods.into_money}</p>
                            </div>
                        </div>
                        <div class="card BagGoods_Content2--card-group--Two--card">
                            <div class="card-body BagGoods_Content2--card-group--Two--card--card-body">
                                <p class="BagGoods_Content2--card-group--Two--card--card-body__p5">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </p>	
                            </div>
                        </div>
                    </div>
                    `;
                }

                // console.log(data);   
                document.getElementById('content--card--group--Two').innerHTML = divHtml;

                //cú pháp đẩy dữ liệu từ json-server lên local
                // Storing data:
                for(var i=0;i<=data.length;i++){
                    let data = JSON.parse(resp.srcElement.response);
                    // console.log(typeof data[i]);
                }
                // const datatoString = JSON.stringify(data);
                // console.log(typeof datatoString);
                // localStorage.setItem('value-product',datatoString);

                
                // Retrieving data:
                var value = localStorage.getItem('value-product');
                // Dòng này lấy json trong localstorage. Lấy lên nó sẽ có dạng json
                
                let object = JSON.parse(value);
                // Dòng này là parse từ json sang object

              

                console.log(object);


                var totalPrice = 0;
                for (let i = 0; i < object.length; i++) {
                    totalPrice += object[i].pricee * object[i].number // price mới đúng :3
                }
                // console.log(totalPrice);
                document.getElementsByClassName('BagGoods_Content3--Two--TwoOneTwo')[0].innerHTML = totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });


                var vat = 0; 
                for (let i=0 ;i<object.length;i++){
                    vat = totalPrice/10;
                }
                // console.log(vat);
                document.getElementsByClassName('BagGoods_Content3--Two--TwoTwoTwo')[0].innerHTML = vat.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

                var printvalue = 0;
                printvalue = totalPrice + vat;
                document.getElementsByClassName('BagGoods_Content3--Two--TwoThreeTwo')[0].innerHTML = printvalue.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });



            }

        }
        
    }
    e.open('GET',"http://localhost:3000/baggoods",true);
    e.send(null);
}

