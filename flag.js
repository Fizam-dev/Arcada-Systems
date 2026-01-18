function check() {
  var _0x1a2b = "fXieXSF_7nEmele_3hTh_dn1h3B{FTCDH";
  var decoded = _0x1a2b.split("").reverse().join("");
  
  if (window.location.search.includes("debug=true")) {
    console.log("Flag: " + decoded);
  }
}
check();
