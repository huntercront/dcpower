var btn = document.getElementById("m_menu");
var btnm = document.getElementById("m_memu_text");
	btn.onclick= function() {
		btnm.classList.toggle("main-navigation-container_active");
					btn.classList.toggle("menu-btn_active");
			}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}