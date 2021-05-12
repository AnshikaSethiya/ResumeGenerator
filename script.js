

function addNewEqField(){
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder', "Enter here")

    let EqOb= document.getElementById('education');
    let eqAddButtonOb = document.getElementById('eqAddButton')

    EqOb.insertBefore(newNode, eqAddButtonOb);
}

// key skills
function addNewSkillsField(){
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder', "Enter here")
    newNode.classList.add('ksField')

    let ksOb= document.getElementById('skills');
    let ksAddButtonOb = document.getElementById('ksAddButton')

    ksOb.insertBefore(newNode, ksAddButtonOb);
}

// Trainning and projects

function addNewProjectField(){
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder', "Enter here")
    newNode.classList.add('tAndpField')

    let tnpOb= document.getElementById('projects');
    let tnpAddButtonOb = document.getElementById('tAndpAddButton')

    tnpOb.insertBefore(newNode, tnpAddButtonOb);
}

//Achievements

function addNewAchieve(){
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder', "Enter here")
    newNode.classList.add('achieveField')
    

    let achOb= document.getElementById('achieve');
    let achAddButtonOb = document.getElementById('achiveAddButton')

    achOb.insertBefore(newNode, achAddButtonOb);
}


// generate CV

function generateCV(){
    // console.log("genertaing CV")

    let nameField = document.getElementById('nameField').value

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = nameField

    //directly 
    document.getElementById('nameT2').innerHTML = nameField;

    //contact
    document.getElementById('numberT').innerHTML = document.getElementById('ContactField').value;
    
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //email
    document.getElementById("mailT").innerHTML = document.getElementById("emailField").value;

    //linkedin
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //github
    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;

    //carrer objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("carrerField").value;

    // academic records

    let acdaR = document.getElementsByClassName('eqField');

    let str = " ";
    for(let e of acdaR){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('AcademicT').innerHTML = str;

    //key skills
    let skills = document.getElementsByClassName('ksField');

    let str1 = " ";
    for(let e of skills){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('skillsT').innerHTML = str1;

    //Training and projects
    let projects = document.getElementsByClassName('tAndpField');

    let str2 = " ";
    for(let e of projects){
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('tAndpT').innerHTML = str2;

    //Achievements
    let goals = document.getElementsByClassName('achiveField');

    let str3 = " ";
    for(let a of goals){
        str3 += `<li> ${a.value} </li>`;
    }
    document.getElementById('achieveT').innerHTML = str3;

    //code for setting image
    let file = document.getElementById('imageField').files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result)
    //set the image to template
    reader.onloadend = function(){
        document.getElementById('imageT').src = reader.result
    }


    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block';
}


function printCV(){
    window.print()
}