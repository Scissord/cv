import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export function registerToast(app) {
  app.use(Toast, {
    position: POSITION.TOP_RIGHT,
  });
}
