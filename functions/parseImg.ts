const parseImageName = (imgUrl: string): string => {
  const parseImgUrl = imgUrl.split('/')
  const parseImgName = parseImgUrl[parseImgUrl.length - 1].split('.')
  return parseImgName[0]
}

export default parseImageName