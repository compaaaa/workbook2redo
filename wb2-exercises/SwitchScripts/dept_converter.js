let depCode = 12;
let depName;

switch (depCode) {
    case 1:
        depName = "Marketing";
        break;
    case 5:
        depName = "Human Resources";
        break;
    case 10:
        depName = "Accounting";
        break;
    case 12:
        depName = "Legal";
        break;
    case 18:
        depName = "IT";
        break;
    case 20:
        depName = "Customer Relations";
        break;
}

console.log(
    depName + " department has the department code of " + depCode
)