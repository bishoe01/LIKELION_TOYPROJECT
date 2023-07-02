/*global kakao*/
import React, { useEffect } from 'react'



const Location = ({ lat, long }) => {

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(lat, long),
      level: 1,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(lat, long);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

  }, [])


  return (
    <div id="map" style={{ width: "800px", height: "400px" }}></div>
  )
}

export default Location;