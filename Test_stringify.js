const student = {
    name : 'linh',
    age : 22,
    isActive : true
}

//chuyển đổi đối tượng này thành một chuỗi được lưu trữ trong bộ nhớ cục bộ
const studentObjToString = JSON.stringify(student);//chuyển đối tượng thành 1 chuỗi
console.log(typeof studentObjToString);

// localStorage.setItem('student',studentObjToString);//thử lưu giá trị vào localStorage =)))

const toJSONstudent = JSON.parse(studentObjToString);
console.log(typeof toJSONstudent);//chuyển chuỗi thành 1 đối tượng

console.log(toJSONstudent.age);//lấy giá trị của đối tượng