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
//Mở submenu của thẻ profile
// document.querySelectorAll('.collapsible-profile').forEach(collapsible => {
//     collapsible.addEventListener('click', function () {
//         const submenu = this.nextElementSibling; // Tìm submenu liền kề
//         const toggleIcon = this.querySelector('.menu-toggle'); // Biểu tượng toggle
//
//         // Hiển thị hoặc ẩn submenu
//         if (submenu.style.display === 'block') {
//             submenu.style.display = 'none';
//             toggleIcon.textContent = '▼';
//         } else {
//             submenu.style.display = 'block';
//             toggleIcon.textContent = '▲';
//         }
//     });
// });