const pattern = [];
for (i = 0; i < 9999; i++) {
  if (i <= 9) {
    let digit = "000" + i;
    pattern.push(digit)
    document.getElementById("psd").value=digit;
    submit_psd();
    pattern.push(digit);
  } else if (i <= 99 && i > 9) {
    let digit = "00" + i;
    pattern.push(digit);
    document.getElementById("psd").value=digit;
    submit_psd();
  } else if (i <= 999 && i > 99) {
    let digit = "0" + i;
    pattern.push(digit);
    document.getElementById("psd").value=digit;
    submit_psd();
  } else{
    let digit = ""+i+"";
    pattern.push(digit);
    document.getElementById("psd").value=digit;
    submit_psd();
  }
  console.clear();
  
}
console.table(pattern)
