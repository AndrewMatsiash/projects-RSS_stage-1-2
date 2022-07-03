export interface IEverythingRequestParameters {
    apiKey?: string;
    q?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
    pageSize?: number;
    page?: number;
}

export interface ISourcesRequestParameters {
    apiKey?: string;
    category?: 'business' | 'entertainment' | 'general' | 'healths' | 'cience' | 'sports' | 'technology';
    language?: 'en';
    country?:
        | 'ae'
        | 'ea'
        | 'ar'
        | 'ra'
        | 'at'
        | 'ta'
        | 'au'
        | 'ub'
        | 'be'
        | 'eb'
        | 'bg'
        | 'gb'
        | 'br'
        | 'rc'
        | 'ca'
        | 'ac'
        | 'ch'
        | 'hc'
        | 'cn'
        | 'nc'
        | 'co'
        | 'oc'
        | 'cu'
        | 'uc'
        | 'cz'
        | 'zd'
        | 'de'
        | 'ee'
        | 'eg'
        | 'gf'
        | 'fr'
        | 'rg'
        | 'gb'
        | 'bg'
        | 'gr'
        | 'rh'
        | 'hk'
        | 'kh'
        | 'hu'
        | 'ui'
        | 'id'
        | 'di'
        | 'ie'
        | 'ei'
        | 'il'
        | 'li'
        | 'in'
        | 'ni'
        | 'it'
        | 'tj'
        | 'jp'
        | 'pk'
        | 'kr'
        | 'rl';
}

export enum Status {
    One = 401,
    Two = 404,
}

export type Options = {
    apiKey?: string | undefined;
    sources?: string | undefined;
};

export type Response = IResponceSources | IResponceEverything;
export type Request = IEverythingRequestParameters | ISourcesRequestParameters;
export type endpointType = 'everything' | 'sources' | 'top-headlines';
export type methodType = 'GET' | 'POST';
export type callback = (data?: Response) => void;

export interface IResponceEverything {
    status: string;
    totalResults: number;
    articles: IArticles[];
}

export interface IArticles {
    source: IEverythingSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface IEverythingSource {
    id: string;
    name: string;
}

export interface IResponceSources {
    status: string;
    sources: ISourcesSource[];
}

export interface ISourcesSource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}
