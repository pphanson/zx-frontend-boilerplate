import "./index.less";

export default function init(id) {
  $(`#${id}`).on("click", () => {
    alert("fuck");
  });
}
