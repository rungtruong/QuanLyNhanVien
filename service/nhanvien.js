function NhanVienService() {
    // service lay nhan vien
    this.layDSNV = function () {
        var url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien';
        return axios({
            method: 'GET',
            url: url,
        })
    }
    // service them nhan vien
    this.themDSNV = function (nhanVienMoi) {
        var url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien';
        return axios({
            method: 'POST',
            url: url,
            data: nhanVienMoi,
        })
    }


    this.capnhatDSNV = function (nhanVienCapNhat) {
        var url = `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${nhanVienCapNhat.MaNV}`;
        return axios({
            method: 'PUT',
            url: url,
            data: nhanVienCapNhat,
        })
    }

    this.xoaDSNV = function (id) {
        var url = `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${id.MaNV}`;
        return axios({
            method: 'DELETE',
            url: url,
        })
    }

}