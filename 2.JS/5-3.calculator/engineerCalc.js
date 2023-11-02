import GenericCal from "./genericCalc.js";

export default class EngineerCalc extends GenericCal {
    square(base, power) {
        return (base ** power);
    }
}