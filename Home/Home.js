// Thêm sự kiện cho tất cả các mục collapsible
document.querySelectorAll('.collapsible, .collapsible-profile').forEach(collapsible => {
    collapsible.addEventListener('click', function () {
        const submenu = this.nextElementSibling; // Tìm submenu liền kề
        const toggleIcon = this.querySelector('.menu-toggle'); // Biểu tượng toggle

        // Hiển thị hoặc ẩn submenu
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            toggleIcon.textContent = '▼';
        } else {
            submenu.style.display = 'block';
            toggleIcon.textContent = '▲';
        }
    });
});
// Hiển thị modal
function openAddStudentModal() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('addStudentModal').style.display = 'block';
}

// Đóng modal
function closeAddStudentModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('addStudentModal').style.display = 'none';
}

// Hàm thêm sinh viên
function addStudent() {
    const msv = document.getElementById("modalMSV").value;
    const name = document.getElementById('modalName').value;
    const dob = document.getElementById('modalDoB').value;
    const studentClass = document.getElementById('modalClass').value;
    const job = document.getElementById('modalJob').value;

    // Kiểm tra dữ liệu nhập vào
    if (!msv || !name || !dob || !job || !studentClass) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Gửi AJAX request đến add.php (có thể bỏ qua AJAX để test nhanh)
    const tableBody = document.getElementById('student-list');
    let stt = 0;
    const newRow = `
                <tr>
                    <td>${stt+=1}</td>
                    <td>${msv}</td>
                    <td>${name}</td>
                    <td>${dob}</td>
                    <td>${studentClass}</td>
                    <td>${job}</td>
                </tr>
            `;
    tableBody.innerHTML += newRow;

    // Đóng modal sau khi thêm thành công
    closeAddStudentModal();

    // Xóa dữ liệu trong modal
    document.getElementById("modalMSV").value = "";
    document.getElementById('modalName').value = "";
    document.getElementById('modalDoB').value = "";
    document.getElementById('modalClass').value = "";
    document.getElementById('modalJob').value = "";
}