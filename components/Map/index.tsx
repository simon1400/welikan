import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

const Map = () => {

  const [map, setMap] = useState<mapboxgl.Map>();
  const [blocked, setBlocked] = useState<boolean>(true)
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
  
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: "pk.eyJ1IjoiZGltaTA0MTAiLCJhIjoiY2t2Nm8xdTJtNTNtZDJvczc4YjlicTNvdCJ9.i_CAN0L0iJ3igLOqKgmI6g",
      style: "mapbox://styles/dimi0410/ckws5cuhxbmy415nvhfr1m4ry",
      center: [37.58,55.75],
      zoom: 9
    })

    mapboxMap.on('click', (event) => {
      const features = mapboxMap.queryRenderedFeatures(event.point, {
        layers: ['test-web-dataset']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      // if(feature.geometry.coordinates){
      //   const popup = new mapboxgl.Popup({ offset: [0, -15] })
      //                   .setLngLat(feature.geometry.coordinates)
      //                   .setHTML(
      //                     `<h3>${feature.properties.name}</h3><p>${feature.properties.address}</p>`
      //                   )
      //                   .addTo(mapboxMap);
      // }
    });


    setMap(mapboxMap);
    
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <div className="top-map" ref={mapNode}>
      {blocked && <div className="blocked-map" onClick={e => setBlocked(false)}>
        <button><img src="/assets/search.svg" uk-svg="" />увеличить карту</button>
      </div>}
    </div>
  )
}

export default Map