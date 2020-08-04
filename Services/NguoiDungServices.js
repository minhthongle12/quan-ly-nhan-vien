// viet api lấy ds nguoi dùng

function layDanhSachNguoiDung() {
  return axiosClient({
    method: "GET",
    url: "nguoidung",
  })
//     .then(nhanDanhSachNguoiDung)
//     .catch(function (error) {
//       console.log(error);
//     });
// }
};
// function nhanDanhSachNguoiDung(result) {
//   console.log(result);
// }

function themNguoiDung (nguoiDung){
    return axiosClient({
        method: "POST",
        url: "nguoidung",
        data: nguoiDung,
    })
}

function xoaNguoiDung(id){
    return axiosClient({
        method: "DELETE",
        url: `nguoidung/${id}`,
    })
}

function layThongTinNguoiDung(id){
    return axiosClient({
        method: "GET",
        
        url: `nguoidung/${id}`,
    })
}

function capNhatNguoiDung(id, nguoiDung){
    return axiosClient({
        method: "PUT",
        url: `nguoidung/${id}`,
        data: nguoiDung,
    })
}