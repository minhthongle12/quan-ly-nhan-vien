var danhSachNguoiDung = [];

const promise = layDanhSachNguoiDung();

promise.then(function (result) {
  danhSachNguoiDung = result.data;
  console.log(danhSachNguoiDung);
  renderHTML();
});

// Event
document
  .getElementById("btnThemNguoiDung")
  .addEventListener("click", openThemNguoiDung);

function openThemNguoiDung() {
  document.getElementsByClassName("modal-footer")[0].innerHTML = `
    <button class="btn btn-success" data-dismiss="modal" onclick ="xuLyThemNguoiDung()">Thêm</button> `;
}

// Function
function xuLyThemNguoiDung() {
  const hoTen = document.getElementById("HoTen").value;
  const taiKhoan = document.getElementById("TaiKhoan").value;
  const matKhau = document.getElementById("MatKhau").value;
  const email = document.getElementById("Email").value;
  const soDienThoai = document.getElementById("SoDienThoai").value;
  const loaiNguoiDung = document.getElementById("loaiNguoiDung").value;

  const nguoiDung = new NguoiDung(
    hoTen,
    email,
    taiKhoan,
    matKhau,
    soDienThoai,
    loaiNguoiDung
  );

  themNguoiDung(nguoiDung).then(function (result) {
    xuLyDanhSachNguoiDung();
  });
}

function renderHTML() {
  var htmlContent = "";
  for (var i = 0; i < danhSachNguoiDung.length; i++) {
    var nguoiDung = danhSachNguoiDung[i];
    htmlContent += `
        <tr> 
            <td> ${i + 1} </td>
            <td> ${nguoiDung.taiKhoan} </td>
            <td> ${nguoiDung.matKhau} </td>
            <td> ${nguoiDung.hoTen} </td>
            <td> ${nguoiDung.email} </td>
            <td> ${nguoiDung.soDienThoai} </td>
            <td> ${nguoiDung.loaiNguoiDung} </td>

            <td>
            // để sửa cần API Lấy chi tiết người dùng
                <button  class = "btn btn-success"    data-toggle="modal"
                data-target="#myModal" data-id="${nguoiDung.id}" >Sửa</button>
                <button class = "btn btn-danger" onclick="xuLyXoaNguoiDung(${nguoiDung.id})">Xóa</button>

            </td>
        </tr> `;
  }
  document.getElementById("tblDanhSachNguoiDung").innerHTML = htmlContent;
}

function xuLyDanhSachNguoiDung() {
  layDanhSachNguoiDung().then(function (result) {
    danhSachNguoiDung = result.data;
    renderHTML();
  });
}

function xuLyXoaNguoiDung(id){
    xoaNguoiDung(id).then(function(){
        xuLyDanhSachNguoiDung();
    });
}

// xu li Cập nhật  (sửa)

document.getElementById("tblDanhSachNguoiDung").addEventListener("click", handleClickEdit)

function handleClickEdit(event){
  // event.target: lấy đối tượng khi đc nhấn
  // console.log(event.target);
  // console.log("edit");
  const selected = event.target;
  const id = selected.getAttribute("data-id");
  if(id){
    document.getElementsByClassName("modal-footer")[0].innerHTML = `
    <button class="btn btn-success" data-dismiss="modal"  onclick ="xuLySuaNguoiDung(${id})">Sửa</button> `;

    layThongTinNguoiDung(id).then(function(result){
      const nguoiDung = result.data;
      document.getElementById("HoTen").value = nguoiDung.hoTen;
      document.getElementById("TaiKhoan").value = nguoiDung.taiKhoan;
      document.getElementById("MatKhau").value = nguoiDung.matKhau;
      document.getElementById("Email").value = nguoiDung.email;
      document.getElementById("SoDienThoai").value = nguoiDung.soDienThoai;
      document.getElementById("loaiNguoiDung").value = nguoiDung.loaiNguoiDung;
    })
  }
}

function xuLySuaNguoiDung(id){
  const hoTen = document.getElementById("HoTen").value;
  const taiKhoan = document.getElementById("TaiKhoan").value;
  const matKhau = document.getElementById("MatKhau").value;
  const email = document.getElementById("Email").value;
  const soDienThoai = document.getElementById("SoDienThoai").value;
  const loaiNguoiDung = document.getElementById("loaiNguoiDung").value;

  const nguoiDung = new NguoiDung(
    hoTen,
    email,
    taiKhoan,
    matKhau,
    soDienThoai,
    loaiNguoiDung
  );
  capNhatNguoiDung(id,nguoiDung).then(function(){
    // sau khi cap nhat thanh cong, goi la ham XuLyDanhSachNguoiDung
    xuLyDanhSachNguoiDung();
  })

}

