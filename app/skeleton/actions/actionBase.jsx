export const DEV_API_PATH = `http://local.sjwjames.xyz/api/v1`
export const PRO_API_PATH = `https://www.sjwjames.xyz/api/v1`

export default function getApiPath() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return DEV_API_PATH;
    } else {
        return PRO_API_PATH;
    }
}