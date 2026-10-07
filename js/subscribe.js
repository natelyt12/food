// Chờ toàn bộ trang web tải xong rồi mới chạy mã JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Lấy thẻ form từ trang HTML
    var form = document.getElementById("subscribeForm");

    // Bắt sự kiện khi người dùng bấm nút "Đăng Ký Ngay"
    form.addEventListener("submit", function (event) {
        // Ngăn chặn trình duyệt tự động tải lại trang
        event.preventDefault();

        // Lấy giá trị người dùng nhập và xóa khoảng trắng thừa ở hai đầu
        var fullname = document.getElementById("fullname").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();

        // ---------------------------------------------------------------------
        // 1. KIỂM TRA HỌ VÀ TÊN
        // ---------------------------------------------------------------------
        // - Không được để trống
        if (fullname === "") {
            alert("Vui lòng nhập họ và tên của bạn!");
            document.getElementById("fullname").focus();
            return;
        }

        // - Kiểm tra độ dài tối thiểu (ít nhất 2 ký tự)
        if (fullname.length < 2) {
            alert("Họ và tên quá ngắn! Vui lòng nhập tối thiểu 2 ký tự.");
            document.getElementById("fullname").focus();
            return;
        }

        // - Kiểm tra độ dài tối đa (không vượt quá 50 ký tự)
        if (fullname.length > 50) {
            alert("Họ và tên quá dài! Vui lòng nhập tối đa 50 ký tự.");
            document.getElementById("fullname").focus();
            return;
        }

        // - Họ và tên không được chứa chữ số
        var numberPattern = /[0-9]/;
        if (numberPattern.test(fullname)) {
            alert("Họ và tên không hợp lệ (không được chứa chữ số)!");
            document.getElementById("fullname").focus();
            return;
        }

        // ---------------------------------------------------------------------
        // 2. KIỂM TRA EMAIL (BẮT BUỘC @GMAIL.COM VÀ GIỚI HẠN ĐỘ DÀI)
        // ---------------------------------------------------------------------
        // - Không được để trống
        if (email === "") {
            alert("Vui lòng nhập địa chỉ email của bạn!");
            document.getElementById("email").focus();
            return;
        }

        // - Kiểm tra độ dài tối đa (không vượt quá 50 ký tự)
        if (email.length > 50) {
            alert("Địa chỉ email quá dài! Vui lòng nhập tối đa 50 ký tự.");
            document.getElementById("email").focus();
            return;
        }

        // - Bắt buộc phải kết thúc bằng @gmail.com
        var emailLower = email.toLowerCase();
        if (!emailLower.endsWith("@gmail.com")) {
            alert("Email không hợp lệ! Vui lòng sử dụng địa chỉ Gmail (phải có đuôi @gmail.com).");
            document.getElementById("email").focus();
            return;
        }

        // - Kiểm tra định dạng Gmail hợp lệ (tên trước @ phải từ 3 ký tự, chỉ gồm chữ, số, dấu chấm)
        var gmailPattern = /^[a-z0-9](\.?[a-z0-9]){2,}@gmail\.com$/i;
        if (!gmailPattern.test(email)) {
            alert("Địa chỉ Gmail không đúng định dạng (ví dụ: nguyenvanan@gmail.com)!");
            document.getElementById("email").focus();
            return;
        }

        // ---------------------------------------------------------------------
        // 3. KIỂM TRA SỐ ĐIỆN THOẠI (CHUẨN 10 SỐ ĐẦU SỐ VIỆT NAM)
        // ---------------------------------------------------------------------
        // - Không được để trống
        if (phone === "") {
            alert("Vui lòng nhập số điện thoại của bạn!");
            document.getElementById("phone").focus();
            return;
        }

        // - Kiểm tra nếu nhập quá 10 chữ số
        if (phone.length > 10) {
            alert("Số điện thoại quá dài! Số điện thoại Việt Nam chỉ gồm đúng 10 chữ số.");
            document.getElementById("phone").focus();
            return;
        }

        // - Chuẩn số điện thoại di động VN: đúng 10 số, bắt đầu bằng 03, 05, 07, 08, 09
        var phonePattern = /^(03|05|07|08|09)[0-9]{8}$/;
        if (!phonePattern.test(phone)) {
            alert("Số điện thoại không hợp lệ!\nSố điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng đầu số di động Việt Nam (03, 05, 07, 08, 09).");
            document.getElementById("phone").focus();
            return;
        }

        // ---------------------------------------------------------------------
        // 4. KHI TẤT CẢ THÔNG TIN ĐỀU HỢP LỆ
        // ---------------------------------------------------------------------
        alert("Bạn đã đăng ký theo dõi thành công!\n\nThông tin ẩm thực mới nhất sẽ được gửi đến hòm thư: " + email);

        // Xóa trắng form sau khi gửi thành công
        form.reset();
    });

});
