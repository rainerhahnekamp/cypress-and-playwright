import { login } from "./playwright-login";

export default function (on: any) {
  on("task", {
    login,
  });
}
