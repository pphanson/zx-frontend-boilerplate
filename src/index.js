import { Router } from "director/build/director";
import { bind, wire } from "hyperhtml";

function loadView(name) {
  Promise.all([
    import(`./views/${name}/index.html`),
    import(`./views/${name}/index.js`),
    import(`./views/${name}/setting.js`)
  ]).then(([htmlContent, script, setting]) => {
    const htmlTemplate = eval("`" + htmlContent.default + "`");
    bind($("#view").get(0))([htmlContent.default]);
    script.default(setting.id);
  });
}

const routes = {
  "/sample": loadView.bind(null, "sample"),
  "/portal": loadView.bind(null, "portal")
};
const router = Router(routes);
router.init();
