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

const chineseZodiac = (birthyear) => {
  let index = birthyear % 12;
  return `Ỳour Chinese zodiac sign is ${chineseZodiacSigns[index].sign}. A ${chineseZodiacSigns[index].sign}'s fixed element is ${chineseZodiacSigns[index].fixedElement}.`;
};
console.log(chineseZodiac(1990));
console.log(chineseZodiac(1991));
console.log(chineseZodiac(1992));
console.log(chineseZodiac(1993));
console.log(chineseZodiac(0000));
console.log(chineseZodiac(0001));
console.log(0 % 12);
console.log(1 % 12);
console.log(2 % 12);
console.log(3 % 12);
console.log(4 % 12);
