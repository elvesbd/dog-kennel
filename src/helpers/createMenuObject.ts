type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu != '') {
    returObject[activeMenu] = true;
  }

  return returObject;
}