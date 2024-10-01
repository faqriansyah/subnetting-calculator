const specialNumber = [128, 64, 32, 16, 8, 4, 2 ,1];

function binaryPad(bin) {
    const diff = 8 - bin.length;
    console.log(diff);
    const str = "0";
    let i = 0;
    while (i < diff.length) {
        str += "0";
        i++;
    }
    return str + bin;
}
function decimalToBinary(dec) {
    const bin = (dec >>> 0).toString(2);
    if (bin.length < 8) {
        return binaryPad(bin);
    }
    return bin;
}
function binaryToDecimal(bin) {}
function networkAddress(ip) {}
function broadcastAddress(ip) {}
function hostAddress(ip) {}


console.log(decimalToBinary(10));