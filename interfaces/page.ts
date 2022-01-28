import {ReactChild} from 'react'
export default interface PageProps {
  children: ReactChild[] | ReactChild,
  id?: string,
  className?: string,
  title?: string,
  description?: string,
  image?: string,
  contentType?: string,
  published?: string,
  category?: string,
  updated?: string,
  noCrawl?: string,
  tags?: string,
  admin?: boolean
}