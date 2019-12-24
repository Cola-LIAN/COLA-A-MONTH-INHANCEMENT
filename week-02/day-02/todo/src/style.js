
const defaultStyle = {
    background: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#50E3C1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    framework: {
        width: '50%',
        height: '90%',
        backgroundColor: '#F7F7F7',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerStyle: {
        height: '20%',
        fontFamily: 'Lato, sans-serif',
        fontSize: '64px',
        fontWeight: '300',
        color: '#b8b8b8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        inputFrameStyle:{
            borderStyle: 'solid',
            // borderWidth: '2px',
            borderColor: '#b8b8b8',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '50px'
        },
        inputBoxStyle: {
            width: '85%',
            height: '90%',
        },
        inputButtonStyle: {
            width: '15%',
            height: '100%',
            backgroundColor: '#DF69E8',
            fontFamily: 'Lato, sans-serif',
            fontSize: '26px',
            color: '#ffffff',
        }  
    },
    todoListStyle: {
        todoListFrameStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '60%',
        },
        itemStyle: {
            fontFamily: 'Lato, sans-serif',
            fontSize: '26px',
            lineHeight: '2.2',
            color: '#b8b8b8',
            width: '80%',
            height: '15%',
            backgroundColor: '#FFF',
        }
    },
    footerStyle:{
        footerFrameStyle:{
            width: '80%',
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // backgroundColor: 'pink',
        },
        footerTextStyle:{
            fontFamily: 'Lato, sans-serif',
            fontSize: '26px',
            color: '#b8b8b8',
        },
        footerThemeStyle:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    themeButtonStyle:{
        width: '50px',
        height: '20px'
    }

}
 

export default defaultStyle