const parseImgWithType = (imgUrl: string): string => {
  const parseImgName = imgUrl.split('/')
  const name = parseImgName[parseImgName.length - 1]
  
  return name
}

export default parseImgWithType