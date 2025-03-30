import Counter from "./Counter.vue";

export default function registerCounter(app) {
  app.component("Counter", Counter);
};