class Alerts {
    use(title = 'Title', content = 'Content', styles= {colorTitle: 'black', colorContent: '#444'}) {
        let alertWin = document.querySelector(".alert");
        let alertTitle = document.querySelector(".alert h1");
        let alertContent = document.querySelector(".alert p");
        let alertTime = document.querySelector(".alert strong");
        alertTitle.innerText = title;
        alertTitle.style.color = styles.colorTitle;
        alertContent.innerText = content;
        alertContent.style.color = styles.colorContent;
        alertTime.innerText = count;
        alertWin.classList.remove("hidden-animation");
        if(timeAnimation != null) {
            count = 4;
            clearInterval(timeAnimation);
            alertTime.innerText = count;
        }
        timeAnimation = setInterval(() => {
            count--;
            alertTime.innerText = count;
            if(count <= 0) {
                clearInterval(timeAnimation);
                count = 4;
            }
        }, 1000);
        if(timeout != null) clearTimeout(timeout);
        timeout = setTimeout(() => {
            alertWin.classList.add("hidden-animation");
        }, 4000);
    
        alertWin.addEventListener("click", function() {
            this.classList.add("hidden-animation");
        })
    }
}

const notification = new Alerts();