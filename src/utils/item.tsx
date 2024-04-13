import { HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineSquaresPlus } from 'react-icons/hi2';
import { AiOutlineAppstore, AiOutlineHdd, AiOutlineSetting } from 'react-icons/ai';

interface ItemProps{
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    url?:string,
    children?: ItemProps[],
    type?: 'group',  
}


export const items:ItemProps[] = [
    {
      key: 'home',
      label: 'Baş sahypa',
      icon: <AiOutlineAppstore />,
      children: [
        { key: 'home1', label: 'Giriş bölümi', url: '' },
        { key: 'home2', label: 'Meýilnamalar', url: 'plans' },
        { key: 'home3', label: 'Okuwlarymyz', url: 'educations' },
      ],
    },
    {
      key: 'about-us',
      label: 'Biz barada',
      icon: <AiOutlineHdd />,
      url: 'about-us',
    },
    {
      key: 'teachers',
      label: 'Mugallymlar',
      icon: <HiOutlineUserGroup />,
      children: [
        { key: 'teachers1', label: 'Tejribeli mugallymlar', url: 'teachers' },
        { key: 'teacher2', label: 'Bildirilen pikirler', url: 'reviews' },
      ],
    },
    {
      key: 'gallery',
      label: 'Jadyly sandyk',
      icon: <HiOutlineAcademicCap />,
      children: [
        { key: 'gallery1', label: 'Toplumlar', url: 'types' },
        { key: 'gallery2', label: 'Ýüklenen edebiýatlar', url: 'gallery' },
      ],
    },
    {
      key: 'special',
      label: 'Ýörite okuwlar',
      icon: <HiOutlineSquaresPlus />,
      url:'ab'
    },
    {
      key: 'settings',
      label: 'Sazlamalar',
      icon: <AiOutlineSetting />,
      children: [
        { key: 'settings1', label: 'Şahsy maglumatlar', url: 'settings' },
        { key: 'settings2', label: 'Ulanyjy goş', url: 'user-add' },
      ],
    },
  ];
  