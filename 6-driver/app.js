const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicense && age >= 18 && !isDrunk;

console.log(`Могу ехать? ${canDrive ? 'да' : 'нет'}`);
