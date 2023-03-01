const Inputs = document.getElementsByTagName('input')
const errors = document.getElementsByTagName('i')
const imgs = document.images

function check(){
    if(fristname.value == ''){
        imgs[0].style.display = 'block'
        Inputs[0].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[0].style.display = 'block'
    }else{
        imgs[0].style.display = 'none'
        Inputs[0].style.border = ''
        errors[0].style.display = 'none'
    }
    if(lastname.value == ''){
        imgs[1].style.display = 'block'
        Inputs[1].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[1].style.display = 'block'
    }else{
        imgs[1].style.display = 'none'
        Inputs[1].style.border = ''
        errors[1].style.display = 'none'
    }
    if(email.value == ''){
        imgs[2].style.display = 'block'
        Inputs[2].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[2].style.display = 'block'
    }else{
        imgs[2].style.display = 'none'
        Inputs[2].style.border = ''
        errors[2].style.display = 'none'
    }
    if(password.value == ''){
        imgs[3].style.display = 'block'
        Inputs[3].style.border = 'solid 1px hsl(0, 100%, 74%)'
        errors[3].style.display = 'block'
    }else{
        imgs[3].style.display = 'none'
        Inputs[3].style.border = ''
        errors[3].style.display = 'none'
    }
}
