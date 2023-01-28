import { atom } from 'recoil';
import { v1 } from 'uuid';

export const nameState = atom<number>({
   key: `nameState/${v1()}`,
   default: 1
});

export const mainTagListmain = atom<string>({
   key: 'mainTagList',
   default: ''
});
export const mainTagList = atom<string[]>({
   key: `mainTagList/${v1()}`,
   default: []
});

export const isLogin = atom<boolean>({
   key: `isLogin/${v1()}`,
   default: false
});

export const selectCategory = atom<string>({
   key: 'selectCategory',
   default: ''
});
