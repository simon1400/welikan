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
        <img  src={`${avatar && getStrapiMedia(avatar)}`} alt={data?.title} />
        {type === 'doctor' && <a href="" className="button accent">Оставить отзыв</a>}
      </div>

      { type === 'promotion' &&
        <div className="item-content">

        {data.metkis.data?.length  && <div className="labels-wrap">
            {data.metkis.data.map((metka, index) =>
              <label
                key={index}
                htmlFor=""
                className="uk-label bare">{metka.attributes.title}
              </label>
            )}
          </div>}
        <div className="top-item-content">
          <div>
            <time>{data.createdAt}</time>
            <h1>{data?.title}</h1>
          </div>
          {/* <Stars /> */}
        </div>
        <div>
          <a href="" className="button">записаться</a>
        </div>
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