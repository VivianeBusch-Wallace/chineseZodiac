// The input is the year as a number or a string.
// For example if you would like to find out your own Chinese zodiac sign,
// then you should put in your own birthyear.
// The Chinese zodiac actually follows the lunar calendar;
// so Chinese New Year often falls between January and February every year,
// but to make calculations easier here it is assumed that the Chinese new year starts on January 1st according to the Gregorian calendar

const chineseZodiac = (year) => {
  const chineseZodiacSigns = [
    { sign: "monkey", fixedElement: "metal" },
    { sign: "rooster", fixedElement: "metal" },
    { sign: "dog", fixedElement: "earth" },
    { sign: "pig", fixedElement: "water" },
    { sign: "rat", fixedElement: "water" },
    { sign: "ox", fixedElement: "earth" },
    { sign: "tiger", fixedElement: "wood" },
    { sign: "rabbit", fixedElement: "wood" },
    { sign: "dragon", fixedElement: "earth" },
    { sign: "snake", fixedElement: "fire" },
    { sign: "horse", fixedElement: "fire" },
    { sign: "goat", fixedElement: "earth" },
  ];
  let index = year % 12;
  return `Ỳour Chinese zodiac sign is ${chineseZodiacSigns[index].sign}. The ${chineseZodiacSigns[index].sign}'s fixed element is ${chineseZodiacSigns[index].fixedElement}.`;
};
console.log(chineseZodiac(1990));
console.log(chineseZodiac(1991));
console.log(chineseZodiac(1992));
console.log(chineseZodiac(1993));
console.log(chineseZodiac(1988));
console.log(chineseZodiac(1989));
console.log(chineseZodiac(2021));
