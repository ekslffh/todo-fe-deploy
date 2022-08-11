let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    backendHost = "https://api.nugul.link";
}
else {
    backendHost = "https://api.nugul.link";
}

export const API_BASE_URL = `${backendHost}`;