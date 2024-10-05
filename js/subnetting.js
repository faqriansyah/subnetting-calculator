const specialNumber = [128, 64, 32, 16, 8, 4, 2, 1];


// Filter 
const check_decimal = (p) => {
    if(p > 255) return false;
    if(p < 0) return false;
    return true;
}

const check_binary = (p) => {
    if(p.length < 8 || p.length > 8) return false;
    if(!/^[01]+$/.test(p)) return false;
    return true;
}

const filter = (p, base) => {
    if(base == 2) return check_binary(p);
    if(base == 8) return check_decimal(p);
}

// Conversion
const convert_decimal_to_binary = (dec) => {
    if(!filter(dec, 8)) return null;
    let binary = "";
    for (let i = 0; i < specialNumber.length; i++) {
        binary += dec >= specialNumber[i] ? "1" : "0";
        if(dec > specialNumber[i]) dec -= specialNumber[i];
    }
    return binary;
}


const convert_binary_to_decimal = (bin) => {
    if(!filter(bin, 2)) return null;
    let decimal = 0;
    for (let i = 0; i < specialNumber.length; i++) {
        decimal += bin[i] == "0" ? 0 : specialNumber[i]; 
    }
    return decimal;
}

const convert = (p, base) => {
    if (base == 2) return convert_decimal_to_binary(p);
    if (base == 8) return convert_binary_to_decimal(p);
}