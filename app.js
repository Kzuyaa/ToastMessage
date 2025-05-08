function submit() {
    const toastsubmit = document.getElementById("toast-success");
    toastsubmit.classList.add("show");
    setTimeout(() => {
       toastsubmit.classList.remove("show");
    }, 3000); // Toast mesajını 3 saniye sonra gizler
}

function error() {
    const toasterror = document.getElementById("toast-error");
    toasterror.classList.add("show");
    setTimeout(() => {
        toasterror.classList.remove("show");
    }, 3000); // Toast mesajını 3 saniye sonra gizler
}

function warning(){
    const toastwarning = document.getElementById("toast-warning");
    toastwarning.classList.add("show");
    setTimeout(() => {
        toastwarning.classList.remove("show");
    }, 3000); // Toast mesajını 3 saniye sonra gizler
}

function info(){
    const toastinfo = document.getElementById("toast-info");
    toastinfo.classList.add("show");
    setTimeout(() => {
        toastinfo.classList.remove("show");
    }, 3000); // Toast mesajını 3 saniye sonra gizler
}


