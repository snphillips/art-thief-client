import React from 'react';

export default function PlaceholderImage(props) {
  return (
    <div style={{display: props.displayPlaceholderImage}}>

      <img id="placeholder-image"

        alt="Exterior of the Cooper Hewitt Museum"
        src="https://i.imgur.com/IwBKBye.png"
      />

    </div>
  );
}


