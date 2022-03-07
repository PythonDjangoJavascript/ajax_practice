// Event listener
document.getElementById("button").addEventListener("click", loadText)

function loadText() {
    // create XHR object
    var xhr = new XMLHttpRequest();
    // console.log(xhr)

    // open funciton takes 3 params (type, url/file, is_asynck)
    xhr.open("GET", "sample.txt", true)

    xhr.onerror = function () {
        console.log("request Error")
    }

    //xhr.onload = function(){
    //    if(this.status === 200){
    //        console.log(this.responseText)
    //    }
    //}

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)
            document.getElementById("text").innerHTML = this.responseText
        } else if (this.status === 400) {
            document.getElementById("text").innerHTML = "Not Found"
        }
    }

    // sends request
    xhr.send()
}