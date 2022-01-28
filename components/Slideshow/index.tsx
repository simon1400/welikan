const SlideShow = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="min-height: 300; max-height: 470; animation: push">
      <ul className="uk-slideshow-items">
        <li><img src="https://image.shutterstock.com/z/stock-photo-three-young-people-cycling-down-the-street-male-and-female-friends-on-road-with-their-bikes-1080226652.jpg" alt="" uk-cover="" /></li>
        <li><img src="https://image.shutterstock.com/z/stock-photo-three-young-people-cycling-down-the-street-male-and-female-friends-on-road-with-their-bikes-1080226652.jpg" alt="" uk-cover="" /></li>
      </ul>
      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
  )
}

export default SlideShow