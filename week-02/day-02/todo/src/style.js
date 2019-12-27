const defaultStyle = {
    background: '#50E3C1',
    frame: '#F7F7F7',
    text: '#b8b8b8'
}

const supermanStyle = {
    background: '#FBBB45',
    frame: '#94BEDC',
    text: '#194194'
}

const batmanStyle = {
    background: '#000',
    frame: '#FFE900',
    text: '#7F7E00'
}

const defaultTheme = {
    background: {
        backgroundColor: defaultStyle.background,
    },
    framework: {
        backgroundColor: defaultStyle.frame,
    },
    headerStyle: {
        color: defaultStyle.text,
    },
    inputStyle: {
        inputFrameStyle:{
            borderColor: defaultStyle.text,
        },
        inputButtonStyle: {
            backgroundColor: '#DF69E8',
            color: '#ffffff',
        }  
    },
    todoListStyle: {
        todoListFrameStyle: {
            backgroundColor: defaultStyle.frame
        },
        itemStyle: {
            color: defaultStyle.text,
        },
        iconStyle: {
            color: 'active? red : black',
        }

    },
    footerStyle:{
        footerTextStyle:{
            color: defaultStyle.text,
        },
        footerButtonStyle:{
            backgroundColor: defaultStyle.frame,
            borderColor: defaultStyle.frame,
            color: defaultStyle.text,
        }
    },
}
 

const supermanTheme = {
    background: {
        backgroundColor: supermanStyle.background,
    },
    framework: {
        backgroundColor: supermanStyle.frame,
    },
    headerStyle: {
        color: supermanStyle.text,
    },
    inputStyle: {
        inputFrameStyle:{
            borderColor: supermanStyle.text,
        },
        inputButtonStyle: {
            backgroundColor: '#DE111B',
            color: '#ffffff',
        }  
    },
    todoListStyle: {
        todoListFrameStyle: {
            backgroundColor: supermanStyle.frame
        },
        itemStyle: {
            color: supermanStyle.text,
        }
    },
    footerStyle:{
        footerTextStyle:{
            color: supermanStyle.text,
        },
        footerButtonStyle:{
            backgroundColor: supermanStyle.frame,
            borderColor: supermanStyle.frame,
            color: supermanStyle.text,
        }
    },
}


const batmanTheme = {
    background: {
        backgroundColor: batmanStyle.background,
    },
    framework: {
        backgroundColor: batmanStyle.frame,
    },
    headerStyle: {
        color: batmanStyle.text,
    },
    inputStyle: {
        inputFrameStyle:{
            borderColor: batmanStyle.text,
        },
        inputButtonStyle: {
            backgroundColor: 'lightgrey',
            color: '#000',
        }  
    },
    todoListStyle: {
        todoListFrameStyle: {
            backgroundColor: batmanStyle.frame
        },
        itemStyle: {
            color: batmanStyle.text,
        }
    },
    footerStyle:{
        footerTextStyle:{
            color: batmanStyle.text,
        },
        footerButtonStyle:{
            backgroundColor: batmanStyle.frame,
            borderColor: batmanStyle.frame,
            color: batmanStyle.text,
        }
    },
}


export { defaultTheme, supermanTheme, batmanTheme }