let chuoi = document.querySelectorAll('.mt-radio');
for (let i = 0;i < chuoi.length; i++) {
    if (chuoi[i].innerText.includes('D.')) {
        chuoi[i].click();
	}
}
document.querySelector('.input-ykien').value = 'Khong';
document.querySelector('.btn_submit_boxes').click();
