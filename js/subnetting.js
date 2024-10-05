const specialNumber = [128, 64, 32, 16, 8, 4, 2, 1];

const check_if_can_reduced = (dec, i) => {
    const reduce = dec - i;
    const check = Math.sign(reduce);
    if(check == -1) return false;
    if(check == 0) return true;
    if(check == 1) return true; 
}

const convert_decimal_to_binary = (dec) => {
    let binary = "";
    for (let i = 0; i < specialNumber.length; i++) {
        if(check_if_can_reduced(dec, specialNumber[i])) {
            dec -= specialNumber[i];
            binary += "1";
        }  else {
            binary += "0";
        }
    }
    return binary;
}

const convert_binary_to_decimal = (bin) => {
    let decimal = 0;
    for (let i = 0; i < specialNumber.length; i++) {
        if(bin[i] == "0") decimal += 0;
        if (bin[i] == "1") decimal += specialNumber[i];
    }
    return decimal;
}

const convert = (p, base) => {
    if(base == 8) return convert_decimal_to_binary(p);
    if(base == 2) return convert_binary_to_decimal(p);
}

console.log(convert(255, 2));
// console.log(Math.sign(0));