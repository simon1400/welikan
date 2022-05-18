import { FC } from "react"
import { getStrapiMedia } from '../../lib/api';
import Stars from "../Stars"

interface FullHeadItemProps {
  square?: boolean;
  type?: string;
  data?: any; //add type
}

const FullHeadItem: FC<FullHeadItemProps> = ({square = false, type="promotion", data}) => {

  const avatar = data?.image?.data?.attributes;

  return (
    <div className="full-head-item item">
      <div className={`img-wrap ${square ? 'square' : ''}`}>
        <img  src={`${avatar && getStrapiMedia(avatar)}`} alt={data.title} />
        {type === 'doctor' && <a href="" className="button accent">Оставить отзыв</a>}
      </div>

      { type === 'promotion' &&
        <div className="item-content">
        <div className="labels-wrap">
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
        </div>
        <div className="top-item-content">
          <div>
            <time>до 20.07.2021</time>
            <h1>Название этой акци помещается в две строки</h1>
          </div>
          {/* <Stars /> */}
        </div>
        {/* <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ex neque, quis rutrum sapien eleifend ac. Vestibulum hendrerit tellus risus. Proin convallis fermentum consectetur. Sed dictum blandit enim, non tincidunt massa tincidunt quis. Curabitur pulvinar erat in bibendum rhoncus. Curabitur tempus diam a lobortis iaculis. Praesent eget dui eros. Curabitur ac tempus sem.</p>
        </div> */}
        <div>
          <a href="" className="button">записаться</a>
        </div>
        {/* <div className="labels-wrap">
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
          <label htmlFor="" className="uk-label bare">Бесплатный прием</label>
        </div> */}
        </div>
      }

      { type === 'doctor' &&
        <div className="item-content">
          <div className="top-item-content">
            <div>
              <h1>{data?.title}</h1>
            </div>
            {<Stars />}
          </div>
          <div>
            <p dangerouslySetInnerHTML={{__html: data.content}}></p>
          </div>

          {data?.services && <div className="labels-wrap">
            {data?.services.map((service) =>
              <label
                key={service.id}
                htmlFor=""
                className="uk-label bare">{service.title}
              </label>
            )}
          </div>}
        </div>
      }


    </div>
  )
}

export default FullHeadItem