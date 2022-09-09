const spinnerLoding=isLoading=>{
    const spinner=document.getElementById("spinner");
    if (isLoading){
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none')
    }
}
