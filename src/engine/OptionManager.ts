export enum BooleanOption {
  SOUND_MUTED = "SOUND_MUTED",
  DEBUG_MODE = "DEBUG_MODE",
}

export enum NumberOption {
  SOUND_VOLUME = "SOUND_VOLUME", // multiplicateur, 1 est le volume max
}

let booleanOptions: Record<BooleanOption, boolean> = {
  [BooleanOption.SOUND_MUTED]: false,
  [BooleanOption.DEBUG_MODE]: false,
};
let numberOptions: Record<NumberOption, number> = {
  [NumberOption.SOUND_VOLUME]: 1,
};

export const getBooleanOption = (option: BooleanOption) => {
  return booleanOptions[option];
};

export const setBooleanOption = (option: BooleanOption, value: boolean) => {
  booleanOptions[option] = value;
  saveOptionsInLocalStorage();
};

export const switchOption = (option: BooleanOption) => {
  booleanOptions[option] = !booleanOptions[option];
  saveOptionsInLocalStorage();
};

export const getNumberOption = (option: NumberOption) => {
  return numberOptions[option];
};

export const setNumberOption = (option: NumberOption, value: number) => {
  numberOptions[option] = value;
  saveOptionsInLocalStorage();
};

export const saveOptionsInLocalStorage = () => {
  localStorage.setItem(
    "options",
    JSON.stringify({
      booleanOptions: booleanOptions,
      numberOptions: numberOptions,
    }),
  );
};

export const loadOptionsFromLocalStorage = () => {
  const raw = localStorage.getItem("options");
  if (raw) {
    const option = JSON.parse(raw);
    booleanOptions = { ...booleanOptions, ...option.booleanOptions };
    numberOptions = { ...numberOptions, ...option.numberOptions };
  }
};
