document.addEventListener("DOMContentLoaded", function (event) {
    initData();
});

const initData = function () {
    var e;
    (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function (resp) {
        if (e.readyState === XMLHttpRequest.DONE) {
            if (e.status === 200) {
                // console.log(resp);//kiểm tra đường dẫn
                // console.log(resp.srcElement.response);//kiểm tra xem đã load tất cả những gì có trong json

                let data = JSON.parse(resp.srcElement.response);//JSON.parse dùng để convert string biến JSON thành JavaScript Object.
                let divHtml = '';
                for (let product of data) {
                    divHtml += `<div class="card-deck List--card-deck"> 
							<div class="card List--card-deck--card">
								<img src="${product.img}" alt="" height="230px" width="230px" class="List--card-deck--card__img">
								<div class="card-body List--card-deck--card--card-body">
									<p class="List--card-deck--card__p1">${product.name}</p>
								  	<div class="List--card-deck--card--star">
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
									</div>
                                    <p class="List--card-deck--card__p2">
                                    ${product.describe}
									</p>
									<div class="List--card-deck--card--rate">
										<p class="List--card-deck--card--rate__p3">${product.price} đ</p>
									</div>
									<div class="List--card-deck--card--One">
										<div data-id="${product.id}" onclick="addToCart(this)" class="List--card-deck--card--OneOne">
											<p class="List--card-deck--card--OneOne__p4">mua ngay</p>
										</div>
										<div class="List--card-deck--card--OneTwo">
											<i class="fa fa-search" aria-hidden="true"></i>
										</div>
										<div class="List--card-deck--card--OneThree">
											<i class="fa fa-heart" aria-hidden="true"></i>
										</div>
									</div>
								</div>
							</div>
						</div>`;
                }
                console.log(data)
                document.getElementById('container-product').innerHTML = divHtml;
                // const toJSONresp = JSON.parse(resp.srcElement.response);
                // console.log(typeof toJSONresp);
                // for(var i =0 ; i<=toJSONresp.length;i++){
                //     const toJSONresp = JSON.parse(resp.srcElement.response);
                //     console.log(typeof toJSONresp[i]);
                // }
            }
        }
                //chuyển đổi đối tượng này thành một chuỗi được lưu trữ trong bộ nhớ cục bộ
                // const respObjToString = JSON.stringify(response);//chuyển đối tượng thành 1 chuỗi
                // console.log(typeof respObjToString);

                // localStorage.setItem('product',respObjToString);//kiểm tra giá trị được lưu vào localStorage =)))

                // const toJSONresp = JSON.parse(respObjToString);
                // console.log(typeof toJSONresp);//chuyển chuỗi thành 1 đối tượng

                // console.log(toJSONresp.value);//lấy giá trị của đối tượng

        
    }
    
    e.open('GET', "http://localhost:3000/product", true);
    // e.send(null);
}
function addToCart(btn) {
    let id = btn.getAttribute('data-id');
    console.log(id);
    window.location='file:///C:/Users/LINH/Desktop/GAME%20NOT%20EZ/detail.html?id=' + id;
}

