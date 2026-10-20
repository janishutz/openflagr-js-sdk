import config from './config.js';

export const evaluate = async () => {
    const response = await fetch(
        config.getApiUrl( 'evaluation' ),
        {
            'method': 'post',
            'body': JSON.stringify( {} ),
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
            }
        }
    );

    if ( response.ok ) {
        // Parse response
    }
};


export const evaluateBatch = () => {};
