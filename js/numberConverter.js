const specialNumber = [128, 64, 32, 16, 8, 4, 2, 1];

const convert_decimal_to_binary = (dec) => {
    let binary = "";
    for (let i = 0; i < specialNumber.length; i++) {
        binary += dec >= specialNumber[i] ? "1" : "0";
        if(dec > specialNumber[i]) dec -= specialNumber[i];
    }
    return binary;
}

const convert_binary_to_decimal = (bin) => {
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