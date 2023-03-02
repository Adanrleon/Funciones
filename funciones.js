//Tarea 1
function dayRate(tarifahora) {
    tarifaDia = tarifahora * 8
    return tarifaDia
}
alert ("La tarifa diaria es igual a: " +dayRate(89));

//Tarea 2
function daysInBudget(presupuestofijo,tarifahora) {
    diastrabajo = (Math.floor(presupuestofijo/dayRate(tarifahora)))    
    return diastrabajo
}
alert ("Los dias que trabajara antes que se acabe el presupuesto sera: " +daysInBudget(20000,89));

//Tarea 3
function precioDescuentoMensual(tarifa, dias, descuento) {
  const horasTotales = dias * 8;
  const descuentoTarifa = tarifa * (1 - descuento);
  const precioTotal = Math.round(horasTotales * descuentoTarifa);
  return precioTotal;
};

alert ("El costo de dichos proyectos con descuento es de: "+precioDescuentoMensual(89,230,0.42))