
const textarea = document.querySelector('#numpad-textarea')
textarea.value = '0';

const enterNumber = (number) => {
    // if (number === 0 && !textarea.value)    return;
    if (textarea.value === '0' && number === 0)    textarea.value = 0;
    else if (textarea.value === '0' && number != 0) textarea.value = number;
    // else if (textarea.value[textarea.value.length - 1] === '+' || ) сократить на 1
    else (textarea.value = textarea.value + number);
}

//проверка и перезапись последнего математического оператора, будет использоваться в каждом операторе
const checkLastSymbol = () => {
    let str = textarea.value
        // || str[str.length - 1] === '%' || str[str.length - 1] === '/'
    if (str[str.length - 1] === '-' || str[str.length - 1] === '+' || str[str.length - 1] === '^' || str[str.length - 1] === '%' || str[str.length - 1] === '/'|| str[str.length - 1] === '*')
    {
        textarea.value = str.slice(0, -1);
    }
    return
}

////кнопка =, функция вызывается при вводе всех операторов
const Totals = () => {

    checkLastSymbol ();
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '+')    return
    if (textarea.value.includes('+')){
        const numbersArr = textarea.value.split('+')
        textarea.value = parseInt(numbersArr[0]) + parseInt(numbersArr[1])
    }
    if (textarea.value.includes('*')){
        const numbersArr = textarea.value.split('*')
        textarea.value = parseInt(numbersArr[0]) * parseInt(numbersArr[1])
    }
    if (textarea.value.includes('-')){
        const numbersArr = textarea.value.split('-')
        textarea.value = parseInt(numbersArr[0]) - parseInt(numbersArr[1])
    }
    if (textarea.value.includes('/')){
        const numbersArr = textarea.value.split('/')
        textarea.value = parseInt(numbersArr[0]) / parseInt(numbersArr[1])
    }

    if (textarea.value.includes('%')){
        const numbersArr = textarea.value.split('%')
        textarea.value = ((parseInt(numbersArr[0])/100) *parseInt(numbersArr[1]))
    }

    if (textarea.value.includes('^'))
    {
        const numbersArr = textarea.value.split('^')
        let num1 = parseInt(numbersArr[0]);
        let num2 = parseInt(numbersArr[1]);
        for (let i=1; i<num2; i++)
        {
            num1 =  num1*parseInt(numbersArr[0]);
            textarea.value = num1 }
    }

}

//кнопка Стереть
const cancelNumber = () => {
    // if (number === 0 && !textarea.value)    return;
    textarea.value = '0';
}



//кнопка +
const sumNumbers = () => {
    //предотвращение нажатия двух плюсов
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '+')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '+'
}

//кнопка /
const divideNumbers = () => {
    //предотвращение нажатия двух плюсов
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '/')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '/'
}


//кнопка -
const minusNumbers = () => {
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '-')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '-'
}

//кнопка *
const multiplyNumbers = () => {
    if (!textarea.value || textarea.value === '0')    return
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '*')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '*'
}//кнопка %

// const ProcentNum = () => {
//     // if (!textarea.value || textarea.value === '0')    return
//     // if (!textarea.value || textarea.value[textarea.value.length - 1] === '%')    return
//     // checkLastSymbol(textarea)
//     // Totals(textarea)
//     if (!textarea.value || textarea.value === '0')    return
//     if (!textarea.value || textarea.value[textarea.value.length - 1] === '*')    return
//     checkLastSymbol(textarea)
//     Totals(textarea)
//     textarea.value = textarea.value + '*'
// }

function Percentage() {
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '%')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '%'
}
// const  percentNum = () => {
//     if (!textarea.value || textarea.value[textarea.value.length - 1] === '-')    return
//     checkLastSymbol(textarea)
//     Totals(textarea)
//     textarea.value = textarea.value + '%'
// }



//возведение в степень
const expNumbers = () => {
    if (!textarea.value || textarea.value === '0')    return
    if (!textarea.value || textarea.value[textarea.value.length - 1] === '^')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = textarea.value + '^'
}

//извлечение корня
const rootNumbers = () => {
    if (!textarea.value || textarea.value === '0')    return
    // if (!textarea.value || textarea.value[textarea.value.length - 1] === '√')    return
    // checkLastSymbol(textarea)
    Totals(textarea)
    textarea.value = Math.sqrt(textarea.value)
}





// {
//     if (!textarea.value)    return
//     // if (!textarea.value || textarea.value[textarea.value.length - 1] === '+')    return
//     if (textarea.value.includes('+')) {
//         const numbersArr = textarea.value.split('+');
//         textarea.value = parseInt(numbersArr[0]) + parseInt(numbersArr[1])
//
//         //  total = parseInt(numbersArr[0]) + parseInt(numbersArr[1]);
//         // textarea.value = total;
//         textarea.value = textarea.value + '+'
//
//     }
//     // textarea.value = textarea.value + '+'
// }





// const buttons = document.querySelectorAll ('.number')
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => enterNumber(buttons[].innerText))
// }


