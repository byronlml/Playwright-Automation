import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [

        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        }
    ],

    testMatch: ["tests/register.spec.ts"],
    use: {
        // connectOptions: {
        //     wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
        //     ${encodeURIComponent(JSON.stringify(capabilities))}`
        // },
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;