export const getDocumentMask = (document: string) => {
  return `${document?.substring(0, 3)}.${document?.substring(
    4,
    7,
  )}.${document?.substring(6, 9)}-${document?.substring(9, document?.length)}`;
};
