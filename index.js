/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');

input.value = 20;

btn.addEventListener('click', convert);

function convert() {
  let value = input.value;
  length.textContent = `${value} meters = ${(value * 3.281).toFixed(
    3
  )} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
  volume.textContent = `${value} liters = ${(value * 0.264).toFixed(
    3
  )} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
  mass.textContent = `${value} kilos = ${(value * 2.204).toFixed(
    3
  )} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
}
