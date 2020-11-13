let output = document.getElementById("output")
let input = document.getElementById('input')
document.getElementById("input").oninput = copySecondArea
function copySecondArea() {
    let text = input.value
    output.innerText = text
}
// input.output = copySecondArea
// function copySecondArea() {
//     output.innerText = input.value
// }


function textThrough(elem) {
    output.classList.remove('underline')
    output.classList.toggle('line-through')
    document.querySelectorAll('.text-decor')[1].classList.remove('active')
    elem.classList.toggle('active')
}

function textUnderline(elem){
    output.classList.remove('line-through')
    output.classList.toggle('underline')
    document.querySelectorAll('.text-decor')[0].classList.remove('active')
    elem.classList.toggle('active')
}


function textItalic(elem){
    output.classList.toggle('italic')
    elem.classList.toggle('active')
}

function bolderText(elem){
    output.classList.toggle('bold')
    elem.classList.toggle('active')
}

function textCenter(elem){
    output.style.textAlign = 'center'
    document.querySelectorAll('.align').forEach((el) =>{
        el.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textRight(elem) {
    output.style.textAlign = 'right'
    document.querySelectorAll('.align').forEach((el) =>{
        el.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textLeft(elem){
    output.style.textAlign = 'left'
    document.querySelectorAll('.align').forEach((el) =>{
        el.classList.remove('active')
    })
    elem.classList.toggle('active')
}


function textRed(elem){
    let colors = ['text-success', 'text-primary']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((btnColor) => {
        if (elem !== btnColor) {
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textGreen(elem){
    let colors = ['text-success', 'text-primary']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((btnColor) => {
        btnColor.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textBlue(elem) {
    let colors = ['text-success', 'text-danger']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((btnColor) => {
        btnColor.classList.remove('active')
    })
    elem.classList.toggle('active')
}



