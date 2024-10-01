
function realBinary() {}
/**
 * - Check if the digit is less than 255 if true :continue, if false : return 0 ✅
 * - Convert dec to binary digit ✅
 * - Check if the binary length is less than 8, if true : continue, if false : return the binary ✅
 * - Make variable to calculate the diff between the binary digit length with 8  (n)  ✅
 * - Add n 0 to the digit using loop ✅
 */
function decimalToBinary(dec) {
    if (dec <= 255) {
        let bin = dec.toString(2);
        if (bin.length < 8) {
            const diff = 8 - bin.length;
            for (let i = 0; i < diff; i++) bin = '0' + bin ;
            return bin;
        } else {
            return bin;
        }
    } else {
        return 0;
    }
}
function binaryToDecimal(bin) { 

}
function networkAddress(ip) { }
function broadcastAddress(ip) { }
function hostAddress(ip) { }

