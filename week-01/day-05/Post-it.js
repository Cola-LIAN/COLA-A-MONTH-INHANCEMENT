// -Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor

class PostIt{
    constructor(text){
        this.postItem = {
            text: text,
            backgroundColor: 'transparent',
            textColor: 'black',
        }
    }

    setBackgroundColor(color){
        this.postItem.backgroundColor = color;
    }
    
    setTextColor(color){
        this.postItem.textColor = color;
    }

    editText(inputText){
        this.postItem.text = inputText;
    }
    postIt(){
        console.log(this.postItem);
    }
}

const idea1 = new PostIt('Idea 1');
idea1.setBackgroundColor('orange');
idea1.setTextColor('blue')
idea1.postIt();