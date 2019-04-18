import React from 'react';
import LoaderSrc from '../../assets/loader2.gif';

const Loader = (props) => {
	return (
		<div>
			<img alt="Loader Icon" src={LoaderSrc} style={{ width: 50 }} />
		</div>
	);
};

export default Loader;
