export interface Config {
    'flagrUrl': URL
}

const conf: Config = {
    'flagrUrl': new URL( '' )
};

const get = (): Config => {
    return conf;
};

const getApiUrl = ( path: string ): string => {
    const url = new URL( conf.flagrUrl );

    url.pathname = '/api/v1/' + path;

    return url.toString();
};

const set = () => {};

export default {
    get,
    set,
    getApiUrl
};
