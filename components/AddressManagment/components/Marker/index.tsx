import React from 'react';

// eslint-disable-next-line no-undef
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  // eslint-disable-next-line no-undef
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker)
      setMarker(new window.google.maps.Marker());

    // remove marker from map on unmount
    return () => {
      if (marker)
        marker.setMap(null);
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker)
      marker.setOptions(options);
  }, [marker, options]);

  return null;
};

export default Marker;
