function showSuccessToast() {
    Toast({
        title: "Success",
        message: " Bạn đã đăng ký thành công tài khoản tại F8.",
        type: "success",
        duration: 4000
    })
}

function showErrorToast() {
    Toast({
        title: "Error",
        message: " Bạn đã đăng ký không thành công tài khoản tại F8.",
        type: "error",
        duration: 4000
    })
}




function Toast({title = "", message = "", type="", duration=3000}) {
    const main = document.getElementById("toast")
    if(main){
        const toast = document.createElement("div")


        const icons = {
            success: "fa-solid fa-circle-check",
            error: "fa-solid fa-circle-exclamation"
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        const autoRemoveID = setTimeout(function(){
            main.removeChild(toast)
        }, duration + 1000)

        toast.onclick = function(e) {
            if(e.target.closest(".toast__close")){
                main.removeChild(toast)
                clearTimeout(autoRemoveID)
            }
        }

        toast.classList.add("toast", `toast--${type}`)
        toast.style.animation = `slideInLeft ease 0.3s , fadeOut linear 1s ${delay}s forwards`

        toast.innerHTML = ` 
            <div class="toast__icon">
            <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <div class="toast__message">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`

        main.appendChild(toast)
    }
}