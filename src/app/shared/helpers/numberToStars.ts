
export const numberToStars = (number:number) =>{
  const mediaStar = './assets/imgs/halfStar.svg'
  const fullStar = './assets/imgs/fullStar.svg'
  const clearStar = './assets/imgs/clearStar.svg'
  const stars: string[] = []

  for (let index = 0; index < Number(number.toString()[0]); index++) stars.push(fullStar)

  if(number.toString()[1]) stars.push(mediaStar);

  while (stars.length < 5) stars.push(clearStar)

  return stars
}
