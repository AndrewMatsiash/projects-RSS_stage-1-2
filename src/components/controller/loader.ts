import { IEverythingRequestParameters, endpointType, methodType, callback, Status, Request } from '../../types/';


class Loader {
    private baseLink: string;
    private options: IEverythingRequestParameters;
    constructor(baseLink: string, options: IEverythingRequestParameters) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} as Request }: { endpoint: endpointType; options?: Request },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === Status.One || res.status === Status.Two)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Request, endpoint: endpointType): string {
        const urlOptions: Request = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof Request]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: methodType, endpoint: endpointType, callback: callback, options: Request) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
