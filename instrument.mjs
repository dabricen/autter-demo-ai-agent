import { initAutterServer } from "@autter/runtime-node";

initAutterServer({
  apiKey: process.env.AUTTER_RUNTIME_KEY,
  service: "autter-demo-ai-agent",
  release: process.env.GIT_SHA,
});
