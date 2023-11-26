export const getLabel = (parentLabel, label) => {
    if (parentLabel?.trim() === "") return label;
    return parentLabel + "." + label;
  };