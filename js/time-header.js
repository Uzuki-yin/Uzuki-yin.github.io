// themes/reimu/source/js/time-header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerImg = document.getElementById('time-sensitive-header');
    if (!headerImg) return;
    function updateHeader() {
        const hour = new Date().getHours();
        const imgPath = '/images/';
        let imgFile;
        if (hour >= 6 && hour < 12) imgFile = 'morning.jpg';
        else if (hour >= 12 && hour < 18) imgFile = 'afternoon.jpg';
        else if (hour >= 18 && hour < 22) imgFile = 'evening.jpg';
        else imgFile = 'night.jpg';
        headerImg.src = `${imgPath}${imgFile}?t=${Date.now()}`;
    }
    // 首次加载延迟 100ms 确保默认头图已渲染
    setTimeout(() => {
        updateHeader();
        setInterval(updateHeader, 3600000);
    }, 100);
});