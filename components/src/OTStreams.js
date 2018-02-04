import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
// import userPlaceHolder from './assets/user_placeholder.png'
export default function OTStreams(props) {
  if (!props.session) {
    console.log("NOTHING TO SHOW")
    return (
      <div className="their-video">
        <div>
          <div>
            <div>
              <img src="https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const child = Children.only(props.children);

  const childrenWithProps = Array.isArray(props.streams) ? props.streams.map(
    stream => (child ? cloneElement(
      child,
      {
        session: props.session,
        stream,
        key: stream.id,
      },
    ) : child),
  ) : null;
  if(props.streams.length === 0){
    console.log("NOTHING TO SHOW")
    return (
      <div className="their-video">
        <div>
          <div>
            <div>
              <img className="placeholder "src="https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="their-video">{childrenWithProps}</div>;
  }
}

OTStreams.propTypes = {
  children: PropTypes.element.isRequired,
  session: PropTypes.shape({
    publish: PropTypes.func,
    subscribe: PropTypes.func,
  }),
  streams: PropTypes.arrayOf(PropTypes.object),
};

OTStreams.defaultProps = {
  session: null,
  streams: [],
};
