const parseImgWithType = (imgUrl: string): string => {
  // console.log("imgUrl", imgUrl)
  // const parseImgUrl = imgUrl.split('"')[1]
  // console.log("parseImgUrl", parseImgUrl);
  const parseImgName = imgUrl.split('/')[imgUrl.length - 1]
  return parseImgName
}

export default parseImgWithType