function getMultipliers(num){
  let multipliers = [];

  for(let i = 2; i <= num; i++){
      while(num % i == 0 && num > 1){
          multipliers.push(i);
          num = num / i;
      }
      if(num / i == 1){
          multipliers.push(num);
      }
  }

  return multipliers;
}

module.exports = function getZerosCount(number, base) {
    let multiple = getMultipliers(base);

    let maxMultiplier = multiple[0];
    let power = multiple.filter((num) => (num == maxMultiplier)).length;
    let max = Math.pow(maxMultiplier, power);
    let maxpower = power;

    for (let j = 1; j < multiple.length; j++){
        if(multiple[j] != maxMultiplier){
            power = multiple.filter((num) => (num == multiple[j])).length;
            if (Math.pow( multiple[j], power) > max){
                maxMultiplier = multiple[j];
                max = Math.pow( multiple[j], power);
                maxpower = power;
            }
        }
    }

    let count = 0;
    for(let i = 1; i <= number; i++){
        if (i % maxMultiplier == 0){
            let divN = i;
            while(divN % maxMultiplier == 0){
                divN /= maxMultiplier;
                count++;
            }
        }
    }

    return Math.floor(count / maxpower);
}