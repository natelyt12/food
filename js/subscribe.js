// =============================================================================
// XỬ LÝ FORM "ĐĂNG KÝ THEO DÕI" BẰNG ALERT THÔNG BÁO (DỄ HIỂU CHO NGƯỜI MỚI HỌC)
// =============================================================================

// Chờ trang web tải xong rồi mới chạy
document.addEventListener("DOMContentLoaded", function () {

    // Lấy thẻ form từ trang HTML
    var form = document.getElementById("subscribeForm");

    // Bắt sự kiện khi người dùng bấm nút "Đăng Ký Ngay"
    form.addEventListener("submit", function (event) {
        // Ngăn trình duyệt tự load lại trang
        event.preventDefault();

        // Lấy giá trị người dùng nhập vào
        var fullname = document.getElementById("fullname").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();

        // 1. Kiểm tra họ và tên
        if (fullname === "") {
            alert("Vui lòng nhập họ và tên của bạn!");
            document.getElementById("fullname").focus();
            return;
        }

        // 2. Kiểm tra email
        if (email === "") {
            alert("Vui lòng nhập địa chỉ email!");
            document.getElementById("email").focus();
            return;
        }
        // Email phải chứa ký tự @ và dấu .
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Email không hợp lệ (ví dụ: tenban@gmail.com)!");
            document.getElementById("email").focus();
            return;
        }

        // 3. Kiểm tra số điện thoại
        if (phone === "") {
            alert("Vui lòng nhập số điện thoại!");
            document.getElementById("phone").focus();
            return;
        }
        // Kiểm tra số điện thoại: đúng 10 số và bắt đầu bằng số 0
        if (phone.length !== 10 || phone.charAt(0) !== "0" || isNaN(phone)) {
            alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số và bắt đầu bằng số 0.");
            document.getElementById("phone").focus();
            return;
        }

        // 4. Nếu tất cả đều đúng -> Báo thành công bằng alert
        alert("Bạn đã đăng ký theo dõi thành công!\nThông tin ẩm thực mới nhất sẽ được gửi đến email: " + email);

        // Xóa sạch dữ liệu đã nhập trên form
        form.reset();
    });

});
