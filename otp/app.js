function otp()
{
    var x= Math.random()*(9999-1000)+1000
    var Y=Math.floor(x)
    console.log(Y)
    var name= document.getElementById("input1").value
    document.getElementById("output").innerHTML="Dear "+ name+ " your OTP is "+Y

}