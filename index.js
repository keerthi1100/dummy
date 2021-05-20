

const some =()=>{


    var insidefun = "hello from js file";
    console.log(this);
    return insidefun;


}

const toSaveValFromInput = (stringValue)=>{

    let value = document.getElementById("someText").value;

    console.log(this);
    console.log(value);

}





