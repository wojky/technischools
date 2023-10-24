type SelectOption = {
  value: string;
  innerText: string;
};

export function createSelectFilter(options: SelectOption[]): HTMLSelectElement {
  const selectElement = document.createElement("select");

  options.forEach(({ value, innerText }) => {
    const optionElement = document.createElement("option");

    optionElement.value = value;
    optionElement.innerText = innerText;

    selectElement.append(optionElement);
  });

  return selectElement;
}
