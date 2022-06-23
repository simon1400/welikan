const parseImageType = (imgUrl: string): string => {
  const parseImgUrl = imgUrl.split('/')
  const parseImgName = parseImgUrl[parseImgUrl.length - 1].split('.')
  const imgType = parseImgName[parseImgName.length - 1].split('?')[0]
  return imgType
}

export default parseImageType