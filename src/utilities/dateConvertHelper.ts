export function toHtmlInputValue(dateStr: string) {
  const date = dateStr.split("/");

  let year = date[2];
  let month = date[1];
  let day = date[0];

  return [year, month, day].join("-");
}

export function fromDateToDDMMYYYY(date: Date) {
  let year = date.getFullYear().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate();

  return [day, month, year].join("/");
}
