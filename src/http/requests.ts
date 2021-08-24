export const BASE_URL = "http://localhost:8080";

export const deleteRequest = (url: string) => {
    return fetch(url, {
        method: "DELETE"
    })
};

export const getRequest = (url: string) => {
    return fetch(url)
};

export const postRequest = (url: string, body: object) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    })
};
