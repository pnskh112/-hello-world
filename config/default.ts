import { resolve } from 'path';
console.log('default.ts-1');
const SOURCE_PATH = resolve(__dirname, '..', 'src');
console.log('${SOURCE_PATH}');
export default {
  database: {
    url: 'postgres://app:app@localhost/locations',
  },
  orm: {
    entities: ['/home/vagrant/myprojects/nice-locations/src/location/location.entity.ts'],
    synchronize: false,
  },
  public: {
    path: '/home/vagrant/myprojects/nice-locations/public'
  },
  templates:{
    path: '/home/vagrant/myprojects/nice-locations/views'
  },
}
