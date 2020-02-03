// These come from Netlify https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
const CONTEXT = process.env.CONTEXT; // Name of the context a deploy is built around, it can be production, deploy-preview or branch-deploy.
const URL = process.env.URL; // This URL represents the main address to your site
const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL; // This URL represents the unique URL for an individual deploy

const DEFAULT_DEV_URL = 'http://localhost:8080';


module.exports = {

    PROD_DOMAIN: "docgov.dev",

    ELEVENTY_ENV: process.env.ELEVENTY_ENV,

    /**
     * Build Context 
     * https://www.netlify.com/docs/continuous-deployment/#deploy-contexts
     * Values:  production | deploy-preview | branch-deploy | development
     */
    buildContext: (CONTEXT) ? CONTEXT : 'development',

    /**
     * Base URL (protocol, domain)
     * For when fully qualified urls are needed.  
     * https://www.netlify.com/docs/continuous-deployment/#environment-variables
     * Values:  https://docgov.dev/ | 
     *          https://5d7c35838fe05f0008d062e5--open-sourced.netlify.com/
     *          https://deploy-preview-x--open-sourced.netlify.com/ |
     *          https://branch--open-sourced.netlify.com | 
     *          http://localhost:8080 
     */
    baseUrl: getBaseUrl(),

    /**
     * Base Canonical URL
     * Only for <link rel="canonical">
     * Values:  https://docgov.dev/ | http://localhost:8080
     */
    baseUrlCanonical: (URL) ? URL : DEFAULT_DEV_URL,

    /**
     * Meta robots tag 
     * To prevent search engines indexing deploy preview and branch builds on Netlify
     */
    metaRobots: (CONTEXT == 'production') ? 'INDEX,FOLLOW' : 'NOINDEX,NOFOLLOW',

};


function getBaseUrl() {
    if (CONTEXT == 'production') {
        return URL;
    } else if (DEPLOY_PRIME_URL) {
        return DEPLOY_PRIME_URL;
    } else {
        return DEFAULT_DEV_URL;
    }
}