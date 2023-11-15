export function toHtmlInputValue(dateStr: string) {
  const date = dateStr.split("/");

  let year = date[2];
  let month = date[1];
  let day = date[0];

  return [year, month, day].join("-");
}
