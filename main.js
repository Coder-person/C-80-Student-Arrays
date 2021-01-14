
var name_of_the_student_array = [];

function submit1(){

    var display_student_array = [];

    for(var counter = 1;counter <= 4;counter = counter + 1){

        name_of_the_student = document.getElementById("nameofstudent_"+counter).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);


    var length_1 = name_of_the_student_array.length;
    console.log(length_1);

    for(var index = 0;index < length_1;index = index + 1){

        display_student_array.push("<h4>Name - "+name_of_the_student_array[index]+"</h4>");
    }

    console.log(display_student_array);

    document.getElementById("array_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("array_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("new_update").style.display = "inline-block";
}

function sorting(){

    var display_student_array_sorting = [];
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);


    var length_1 = name_of_the_student_array.length;
    console.log(length_1);

    for(var index = 0;index < length_1;index = index + 1){

        display_student_array_sorting.push("<h4>Name - "+name_of_the_student_array[index]+"</h4>");
    }

    console.log(display_student_array_sorting);

    var remove_commas = display_student_array_sorting.join(" ");
    document.getElementById("array_without_commas").innerHTML = remove_commas;
}

function newupdate(){
    document.getElementById("array_without_commas").innerHTML = "<h1>"+name_of_the_student_array+"</h1>";
}