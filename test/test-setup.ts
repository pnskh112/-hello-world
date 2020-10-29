import addJestHbsExtension from 'jest-hbs-extension';
import { resolve } from 'path';

const  VIES_PATH = resolve(__dirname, '..', 'views')

addJestHbsExtension();
