let fecha = new Date();
const fechaNac = new Date("1984", "0", "04");
const esMasTarde = fecha > fechaNac;
const mesNac = fechaNac.getMonth(0) + 1;
const anyoNac = fechaNac.getFullYear();
