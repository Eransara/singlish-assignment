const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  // Test directory
  testDir: "./tests",
  
  // Timeout settings
  timeout: 60000,           // Increased to 60 seconds for slow websites
  expect: {
    timeout: 10000,         // Expect assertions timeout
  },
  
  // Test execution settings
  retries: 0,               // No retries - we want first-run results
  workers: 1,               // Run tests sequentially (important!)
  fullyParallel: false,     // Ensure sequential execution
  forbidOnly: false,        // Allow test.only during development
  
  // Reporter configuration
  reporter: [
    ["list"],               // Clean console output
    ["html"],               // HTML report for screenshots (optional)
    ["json", { 
      outputFile: "test-results.json"  // JSON report for data analysis
    }]
  ],
  
  // Global settings for all tests
  use: {
    // Browser settings
    browserName: "chromium",
    headless: true,         // Run in background (faster)
    
    // Viewport size
    viewport: { width: 1280, height: 720 },
    
    // Timeout settings
    actionTimeout: 10000,   // Actions like click, type
    navigationTimeout: 30000, // Page navigation
    
    // Screenshots and traces (for debugging)
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    
    // Video recording (optional - can be disabled)
    video: "off",
    
    // Bypass HTTPS errors if any
    ignoreHTTPSErrors: true,
    
    // Slower for debugging if needed
    launchOptions: {
      slowMo: 0,            // Set to 100-500 for debugging
    }
  },
  
  // Projects (browsers to test on)
  projects: [
    {
      name: "chromium",
      use: { 
        browserName: "chromium",
        headless: true,
        channel: "chrome"    // Use Chrome instead of Chromium
      },
    },
    // Optional: Uncomment to test on other browsers
    // {
    //   name: "firefox",
    //   use: { browserName: "firefox" },
    // },
    // {
    //   name: "webkit",
    //   use: { browserName: "webkit" },
    // },
  ],
  
  // Output directory for reports
  outputDir: "test-results/",
});