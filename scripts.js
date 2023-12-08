let sec = document.querySelector('#sec')
let hr = document.querySelector('#hr')
let min = document.querySelector('#min')

let currentDate = new Date();

sec.innerHTML = currentDate.getSeconds()
min.innerHTML = currentDate.getMinutes()
hr.innerHTML = currentDate.getHours()

let h = hr.innerHTML
let m = min.innerHTML
let s = sec.innerHTML

const updateTime = () => {
    s++;

    if (s === 60) {
        s = 0;
        m++;

        if (m === 60) {
            m = 0;
            h++;

            if (h === 24) {
                h = 0;
            }
        }
    }

    // Update the HTML elements
    sec.innerHTML = s < 10 ? '0' + s : s;
    min.innerHTML = m < 10 ? '0' + m : m;
    hr.innerHTML = h < 10 ? '0' + h : h;

    setTimeout(updateTime, 1000);
};

updateTime();

