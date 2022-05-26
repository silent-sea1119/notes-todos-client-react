type imageType = {
  src: string;
};

const getImage = ({ src }: imageType) => {
  return require(`assets/${src}`);
};

export default { getImage };
