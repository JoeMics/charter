/* eslint-disable no-undef */

const mark = (googleMap) => {
  googleMap.addListener('click', e => addMarker(e.latLng, googleMap));
};

const addMarker = (position, map) => {
  if (!window.googleMarker) {
    window.googleMarker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      icon: {
<<<<<<< HEAD
        url: $('#icon option:selected').val(),
=======
        url: $(`#icon`).val() === 'default' ? null : $(`#icon`).val(),
>>>>>>> frontend/new-markers
        scaledSize: new google.maps.Size(40, 55)
      }
    });
  }
  window.googleMarker.setIcon({
<<<<<<< HEAD
    url: $('#icon option:selected').val(),
=======
    url: $(`#icon`).val() === 'default' ? null : $(`#icon`).val(),
>>>>>>> frontend/new-markers
    scaledSize: new google.maps.Size(40, 55)
  });
  window.googleMarker.setPosition(position);
  $('#lat').val(Math.round(position.toJSON().lat * 10000) / 10000);
  $('#long').val(Math.round(position.toJSON().lng * 10000) / 10000);
};
