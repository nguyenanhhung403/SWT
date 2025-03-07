// jest.config.js
export default {
  // Chỉ định file setup cho Jest
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};
