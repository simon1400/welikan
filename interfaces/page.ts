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
  admin?: boolean,
  navigation?: NavigationLinks
}

export interface NavigationLinks{
  footerSeoLinks: Link [],
  footerIconLinks: Link [],
  headerLinks: Link [],
  menuLinks: menuLink[]
}

export interface menuLink {
  menuTitle: string;
  links: Link[];
}

export interface Link {
  label: string;
  link: string;
  iconLink?: string;
}