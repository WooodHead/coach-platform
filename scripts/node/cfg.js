import { v5 } from 'uuid';

const uuidNamespace = 'c4556bf7-03ff-4a99-8969-2226b06f0d47'
export const uuid5 = (name) => v5(name, uuidNamespace);